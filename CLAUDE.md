# CLAUDE.md — Orientierung für Agents

**Was das hier ist:** Ein Lern-Workspace für **Sebastians Stochastik-I+II-Klausur**
(Lehramt, Uni Freiburg, Dozent Thorsten Schmidt). Aufgebaut mit der `teach`-Skill
(siehe `.claude/skills/teach/SKILL.md`) in drei Tagen vor der Klausur am **06.08.2026**.

**Sprache: Deutsch.** Alle Lektionen, Referenzen und Notizen sind auf Deutsch,
Fachbegriffe wie im Kursskript.

---

## Zuerst lesen

| Datei | Inhalt |
|---|---|
| `MISSION.md` | Warum gelernt wird — Ziel, Erfolgskriterien, Grenzen |
| `NOTES.md` | Arbeitsweise, Skript-Referenzen, **Fahrplan für eine mögliche Nachklausur** |
| `learning-records/` | Was Sebastian nachweislich kann (chronologisch, 0001–0006) |
| `GLOSSARY.md` | Kanonische Begriffe — in Lektionen konsequent verwenden |
| `RESOURCES.md` | Geprüfte Quellen (Skript + Blitzstein, Seeing Theory, MIT OCW) |

**Wichtig zu den Learning Records:** 0001–0005 beruhen auf **Selbstauskunft**
(Quiz-Ergebnisse laufen im Browser und kommen nicht beim Agent an). Nur **0006**
enthält von mir selbst nachgerechnete Ergebnisse. Beim Einschätzen des Niveaus
diesen Unterschied mitdenken.

---

## Struktur

```
lessons/      Lektionen als HTML (0001–0005)
reference/    Nachschlagewerke: Formelsammlung, Verteilungen, zwei Quizze
assets/       Geteiltes Stylesheet + Quiz-Widget (von den Repo-Versionen genutzt)
learning-records/
*.pdf         Kursmaterial: Skripte, Übungsblätter, Tutorien, Pre-Klausur mit Lösungen
```

### Zwei Lektions-Varianten — nicht verwirren lassen

- **`NNNN-name.html`** — nutzt `assets/style.css` + MathJax über CDN. Schön, aber
  braucht Internet und die Assets daneben.
- **`NNNN-name.standalone.html`** — komplett eigenständig, Mathematik als reines HTML.
  **Das ist die Variante, die Sebastian tatsächlich gelesen hat** (er arbeitete am Handy,
  wo die Repo-Variante nicht darstellbar war).

L1–L3 existieren in beiden Varianten, L4 und L5 nur als standalone.
**Neue Lektionen: standalone bauen**, das hat sich als das Robustere erwiesen.

---

## Was abgedeckt ist

Die sechs Aufgabentypen der Pre-Klausur (`pre_klausur.pdf`):

| Lektion | Thema |
|---|---|
| 0001 | Bedingen: totale Wahrscheinlichkeit & Turmregel |
| 0002 | Erwartungswert aus der Dichte, Verteilungsgleichheit via Mischung |
| 0003 | Konvergenz in Verteilung → Poisson-Approximation |
| 0004 | Exponentialfamilien erkennen, natürlicher Parameter |
| 0005 | Schätzen und Testen: MLE (beide Wege), Gauß-Test, Konfidenzintervall |

**Was fehlt** — aus den Tutorien T1–T6 und den Übungsblättern extrahiert:
siehe Abschnitt „Falls Nachklausur" in `NOTES.md`. Kurzfassung: Suffizienz begründen,
Gütefunktion, Erwartungstreue, Faltung, Jensen, GGZ/ZGWS — und als größtes Risiko
**Regression / kleinste Quadrate**, das im Skript ausführlich vorkommt, aber in
keiner Lektion.

---

## Arbeitsweise, die sich bewährt hat

- **Prüfungsorientiert:** Jede Lektion an einen konkreten Klausur-Aufgabentyp koppeln,
  mit durchgerechnetem Beispiel aus der Pre-Klausur.
- **Kleine Schritte, keine übersprungenen Zwischenschritte.** Sebastian merkt zuverlässig,
  wenn ein Schritt unbegründet erscheint, und fragt nach (siehe LR 0004).
- **Widersprüche in Aufgabenstellungen offen benennen**, nie stillschweigend glattrechnen
  (siehe LR 0005 — das ging einmal schief).
- **Echte Korrektur schlägt Selbsttest:** Wenn er eine Rechnung schickt (Text oder Foto),
  kann sie wirklich geprüft werden. Das ist wertvoller als jedes eingebaute Quiz.
- Formeln in standalone-Lektionen: `.eq`-Blöcke brechen nicht um, sondern scrollen seitlich.
  Brüche immer als **ein** `.frac` mit Zähler und Nenner — zwei aneinandergehängte
  `.frac`-Elemente haben schon einmal `Σ/xᵢ` statt `(Σxᵢ)/θ` erzeugt.

---

## Stand bei Übergabe

Klausur am **06.08.2026** geschrieben. **Ergebnis unbekannt**, aber die Aufgaben sind
teilweise rekonstruiert: siehe **`exercises/klausur-2026-08-06.md`**.

Zwei Befunde daraus, die die Vorbereitungsannahmen korrigieren:
- Die Klausur hatte **8 Aufgaben in 150 Minuten** (4× Stoch. I, 4× Stoch. II) — die
  Pre-Klausur mit ihren 6 Aufgaben unterschätzt den Umfang.
- Es gab eine **reine Theoriefrage** („Statistik, Suffizienz, MLS möglichst genau erklären"),
  also einen Aufgabentyp ohne Rechnung. Keine der fünf Lektionen hat darauf vorbereitet.
  Für eine Nachklausur: Definitionen aus dem Skript auswendig formulieren üben.

Vor der Klausur nachweislich gekonnt (selbst nachgerechnet, siehe LR 0006 und
`exercises/uebungsaufgaben.md`): alle sechs Aufgabentypen mit frischen Zahlen.

**Erster Schritt in einer Folgesitzung:** nach dem Ergebnis fragen — und nach Klausuraufgabe 4
(Stochastik I), die als einzige noch nicht erfasst ist.

**Falls es um eine Nachklausur geht, unbedingt zuerst
`learning-records/0008-rahmenbedingungen-nachklausur.md` lesen.** Kurzfassung: Termin erst im
**Februar** (~6 Monate, also kein Crunch-Modus mehr), **Stochastik I wird von einem anderen
Professor gestellt** (dem WS-Dozenten) — dessen Material ist für Teil I wichtiger als alles in
diesem Repo. Teil II bleibt bei T. Schmidt, ist im Stil aber ebenfalls nur begrenzt
vorhersehbar.
