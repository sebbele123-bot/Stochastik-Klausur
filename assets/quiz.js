/* ============================================================
   quiz.js — wiederverwendbares Quiz-Widget für alle Lektionen.
   Kein externes Framework. Sofortiges, automatisches Feedback
   (Retrieval-Practice). Drei Fragetypen:

     { type:'mc',      q, options:[...], correct: <index>, explain }
     { type:'numeric', q, answer:<zahl>, tol:<zahl>, unit, explain }
     { type:'recall',  q, answer, explain }   // Selbsttest / Umdrehen

   Einbinden:
     <div id="quiz1"></div>
     <script src="../assets/quiz.js"></script>
     <script>Quiz.render('quiz1', [ ...fragen ]);</script>
   ============================================================ */
(function (global) {
  "use strict";

  var CSS = `
  .quiz{margin:1.6rem 0;border:1px solid var(--rule);border-radius:8px;overflow:hidden;background:var(--box-bg)}
  .quiz-head{padding:.6rem 1rem;border-bottom:1px solid var(--rule);font-variant:small-caps;letter-spacing:.06em;font-size:.82rem;color:var(--muted);display:flex;justify-content:space-between;align-items:center}
  .quiz-score{font-variant:normal;letter-spacing:0}
  .q{padding:1rem;border-bottom:1px solid var(--rule)}
  .q:last-child{border-bottom:0}
  .q-prompt{margin:0 0 .7rem;font-weight:600}
  .q-num{color:var(--muted);font-weight:400;margin-right:.35rem}
  .opt{display:block;width:100%;text-align:left;margin:.32rem 0;padding:.5rem .7rem;border:1px solid var(--rule);border-radius:5px;background:var(--bg);color:var(--ink);font:inherit;cursor:pointer;transition:background .12s}
  .opt:hover:not(:disabled){border-color:var(--accent-2)}
  .opt:disabled{cursor:default;opacity:.95}
  .opt.correct{background:#dff0df;border-color:#5fa05f;color:#14401a}
  .opt.wrong{background:#f6dede;border-color:#c06a6a;color:#5a1616}
  @media(prefers-color-scheme:dark){.opt.correct{background:#1f3a24;color:#bfe6bf}.opt.wrong{background:#3a1f1f;color:#e6bcbc}}
  .num-row{display:flex;gap:.5rem;flex-wrap:wrap;align-items:center}
  .num-row input{font:inherit;padding:.45rem .6rem;border:1px solid var(--rule);border-radius:5px;background:var(--bg);color:var(--ink);width:9rem}
  .btn{font:inherit;padding:.45rem .9rem;border:1px solid var(--accent-2);border-radius:5px;background:var(--bg);color:var(--accent-2);cursor:pointer}
  .btn:hover{background:var(--accent-2);color:var(--bg)}
  .fb{margin-top:.7rem;padding:.55rem .8rem;border-radius:5px;font-size:.92rem;display:none}
  .fb.show{display:block}
  .fb.ok{background:var(--box-idea);border:1px solid #9cc79c}
  .fb.no{background:var(--box-warn);border:1px solid #e0b78a}
  .reveal{margin-top:.6rem;padding:.6rem .8rem;background:var(--bg);border:1px dashed var(--rule);border-radius:5px;display:none}
  .reveal.show{display:block}
  .selfrate{margin-top:.5rem;display:none;gap:.4rem;flex-wrap:wrap}
  .selfrate.show{display:flex}
  `;

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  // Akzeptiert Dezimalzahlen (0.75 / 0,75) UND Brüche (3/4, -1/2).
  function parseNum(raw) {
    raw = (raw || "").replace(",", ".").trim();
    if (raw === "") return NaN;
    var m = raw.match(/^(-?\d*\.?\d+)\s*\/\s*(-?\d*\.?\d+)$/);
    if (m) {
      var d = parseFloat(m[2]);
      return d !== 0 ? parseFloat(m[1]) / d : NaN;
    }
    return parseFloat(raw);
  }

  function injectCSS() {
    if (document.getElementById("quiz-css")) return;
    var s = el("style"); s.id = "quiz-css"; s.textContent = CSS;
    document.head.appendChild(s);
  }

  function render(mountId, questions, opts) {
    injectCSS();
    opts = opts || {};
    var mount = document.getElementById(mountId);
    if (!mount) return;
    var state = { done: 0, correct: 0, total: 0 };
    questions.forEach(function (q) { if (q.type !== "recall") state.total++; });

    var wrap = el("div", "quiz");
    var head = el("div", "quiz-head");
    head.appendChild(el("span", null, opts.title || "Selbsttest"));
    var score = el("span", "quiz-score", scoreText(state));
    head.appendChild(score);
    wrap.appendChild(head);

    questions.forEach(function (q, i) {
      wrap.appendChild(buildQuestion(q, i, state, score));
    });
    mount.appendChild(wrap);
  }

  function scoreText(s) {
    if (!s.total) return "";
    return s.correct + " / " + s.total + " richtig";
  }

  function buildQuestion(q, i, state, scoreEl) {
    var box = el("div", "q");
    box.appendChild(el("p", "q-prompt",
      '<span class="q-num">' + (i + 1) + ".</span>" + q.q));

    if (q.type === "mc")      buildMC(box, q, state, scoreEl);
    else if (q.type === "numeric") buildNumeric(box, q, state, scoreEl);
    else                      buildRecall(box, q);
    return box;
  }

  function feedbackEl(explain, ok) {
    return el("div", "fb " + (ok ? "ok" : "no"),
      (ok ? "✓ Richtig. " : "✗ Nicht ganz. ") + (explain || ""));
  }

  function buildMC(box, q, state, scoreEl) {
    var fb = feedbackEl(q.explain, true);
    var answered = false;
    var btns = [];
    q.options.forEach(function (opt, j) {
      var b = el("button", "opt", opt);
      b.addEventListener("click", function () {
        if (answered) return;
        answered = true;
        var ok = j === q.correct;
        btns.forEach(function (bb, k) {
          bb.disabled = true;
          if (k === q.correct) bb.classList.add("correct");
          else if (k === j) bb.classList.add("wrong");
        });
        fb.className = "fb show " + (ok ? "ok" : "no");
        fb.innerHTML = (ok ? "✓ Richtig. " : "✗ Nicht ganz. ") + (q.explain || "");
        state.done++; if (ok) state.correct++;
        scoreEl.textContent = scoreText(state);
      });
      btns.push(b); box.appendChild(b);
    });
    box.appendChild(fb);
  }

  function buildNumeric(box, q, state, scoreEl) {
    var row = el("div", "num-row");
    var input = el("input");
    input.type = "text";
    input.placeholder = q.placeholder || "z. B. 0,75 oder 3/4";
    var btn = el("button", "btn", "Prüfen");
    row.appendChild(input);
    if (q.unit) row.appendChild(el("span", null, q.unit));
    row.appendChild(btn);
    box.appendChild(row);
    var fb = el("div", "fb");
    box.appendChild(fb);
    var answered = false;
    function check() {
      if (answered) return;
      var val = parseNum(input.value);
      if (isNaN(val)) { input.focus(); return; }
      answered = true; input.disabled = true; btn.disabled = true;
      var tol = q.tol != null ? q.tol : 1e-9;
      var ok = Math.abs(val - q.answer) <= tol;
      fb.className = "fb show " + (ok ? "ok" : "no");
      fb.innerHTML = (ok ? "✓ Richtig. " : "✗ Nicht ganz — richtig ist <b>" +
        q.answer + "</b>. ") + (q.explain || "");
      state.done++; if (ok) state.correct++;
      scoreEl.textContent = scoreText(state);
    }
    btn.addEventListener("click", check);
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") check(); });
  }

  function buildRecall(box, q) {
    var btn = el("button", "btn", "Antwort zeigen");
    var rev = el("div", "reveal", q.answer + (q.explain ? "<br><span class='cite'>" + q.explain + "</span>" : ""));
    btn.addEventListener("click", function () {
      rev.classList.add("show");
      btn.style.display = "none";
    });
    box.appendChild(btn);
    box.appendChild(rev);
  }

  global.Quiz = { render: render };
})(window);
