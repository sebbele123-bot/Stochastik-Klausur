# Lektion 1 gemeistert: Bedingen / totale Erwartung

Sebastian hat Lektion 1 durchgearbeitet und **alle Selbsttest-Fragen richtig** gelöst.
Darüber hinaus hat er selbst **mehrere reale Beispiele** erfunden und übersetzt, was dort
jeweils $E[X]$ bzw. $P(X\mid B=1)$ bedeutet (~2 h Eigenarbeit). Das ist Elaboration/Transfer,
nicht nur Wiedererkennen — starke Evidenz für echtes Verständnis.

**Miterledigt — Missverständnis geklärt:** Frage "Muss $B$ eine Teilmenge von $X$ sein?"
→ Nein. $X$ und $B$ sind Zufallsvariablen auf demselben $\Omega$; Teilmengen sind die
Ereignisse $\{B=b\}\subseteq\Omega$, die $\Omega$ partitionieren. Sebastians eigene Beispiele
zeigen, dass die Bedeutung (B als "Schalter" für die Verteilung von X) sitzt.

**Implikationen:**
- Floor angehoben: bedingtes Rechnen + Turmregel ist solide → weiter mit **L2**
  (Erwartungswert aus der Dichte). Turmregel bei L5 (MLS) und Mischungen nur noch kurz auffrischen.
- Lernstil bestätigt: profitiert stark von *eigenen* Beispielen/Übersetzung in Bedeutung —
  in künftige Lektionen bewusst einen "übersetze das in ein reales Szenario"-Prompt einbauen.

**Bug gefunden & behoben:** Numerisches Quiz wertete `3/4` als falsch (nur Dezimal geparst).
`parseNum` akzeptiert jetzt auch Brüche. Gutes Zeichen: er prüft Ergebnisse kritisch.
