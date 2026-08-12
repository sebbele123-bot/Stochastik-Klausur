# Notes

Working notes on how Sebastian wants to be taught, and practical reminders.

## Preferences
- **Sprache:** Deutsch. Fachbegriffe wie im Skript (Thorsten Schmidt, Stochastik 2).
- **Prüfungsorientiert:** Jede Lektion an einen Klausur-Aufgabentyp koppeln.
- Kurze Lektionen mit *einem* greifbaren Win (kleines Arbeitsgedächtnis, Crunch-Modus).

## Working context (Stand: 2026-08-05, Mittwoch)
- **Klausur: Donnerstag, 06.08.2026 — MORGEN.** Kombiniert **Stochastik I + II**.
  (Frühere Notiz "~3½ Tage" war falsch: Datum aus Datei-Zeitstempeln statt echtem Datum abgeleitet.)
- Ausgangsniveau: Grundlagen wackelig.
- **Zeitbudget: 6+ Std/Tag** — großzügig. Alle 6 Lektionen gründlich + Pre-Klausur schaffbar;
  Notfall-Priorität voraussichtlich nicht nötig. Lernstil: erst Lektion durcharbeiten, dann
  mit Fragen zurückkommen (L1 so gestartet).
- `pre_klausur.pdf` ist die beste Referenz für den Aufgaben-Stil (I: Bedingen/Mischen,
  stetige Dichten, Konvergenz→Poisson; II: Exponentialfamilie+MLS, Gauß-Test+KI).

## Arbeitsmodus (vereinbart 02.08.)
- **Volle HTML-Lektionen mit Selbsttest**, wie L1/L2. Sebastians ausdrückliche Wahl.
- **Wichtiger Vorbehalt:** Quiz-Ergebnisse kommen NICHT bei mir an — das Quiz läuft im
  Browser. Alle Learning Records zu Sebastians Können beruhen auf **Selbstauskunft**,
  nicht auf beobachteter Leistung. Bei ZPD-Entscheidungen mitdenken.
- Angebot steht: Sobald er eine Rechnung (Text oder **Foto vom Blatt**) schickt, kann ich
  echt korrigieren. Nicht drängen — einmal angeboten, er entscheidet.

## Falls Nachklausur: hier weitermachen

> **⚠️ ZUERST `learning-records/0008-rahmenbedingungen-nachklausur.md` lesen.** Die Nachklausur
> wäre erst **im Februar** (nur ein Termin pro Semester), und **Stochastik I stellt ein anderer
> Professor** — der WS-Dozent. Damit gilt: kein Crunch mehr, dafür Breite; und die Planung für
> Teil I muss auf dessen Material umgestellt werden, sobald es verfügbar ist.
>
> **Dann `exercises/klausur-2026-08-06.md` lesen** — die tatsächlich gestellten Aufgaben.
> Zwei Korrekturen an den bisherigen Annahmen: die Klausur hatte **8 Aufgaben in 150 Minuten**
> (nicht 6), und es gab eine **reine Theoriefrage** (Begriffe definieren), die in der
> Pre-Klausur nicht vorkam und die keine Lektion abgedeckt hat.


Der Kern (6 Aufgabentypen der Pre-Klausur) ist abgedeckt und von Sebastian nachweislich
gekonnt — siehe Learning Record 0006. **Nicht neu aufbauen.** Stattdessen die Lücken
schließen, die ich aus den Tutorien/Übungsblättern extrahiert habe und die in den
bisherigen Lektionen *fehlen*:

**Stochastik II — belegt durch die Tutorien:**
- **Suffizienz begründen** über den Faktorisierungssatz (Satz 29) — T3 verlangt das explizit.
  L4 erwähnt Suffizienz nur, erklärt die Begründung aber nicht.
- **Gütefunktion** und Niveau-α-Test allgemein (Def. 85, Bsp. 86) — T6 Aufgabe 1.
  (p-Wert ist in L5+6 schon drin.)
- **Konfidenzintervall für nicht-normale Modelle** (z. B. Exp) — T6 Aufgabe 2b.
- **Erwartungstreue / Eigenschaften von Schätzern** — T2.
- Exponentialfamilie in der Schreibweise `f = S(x)·exp(...)` (T3 zieht S als Vorfaktor).

**Stochastik I:**
- **BESTÄTIGT (Klausuraufgabe 1, nicht gelöst): Borel-Cantelli**, Skript Stochastik I
  **Lemma 3.7** samt Beweis. Kam in keinem Übungsblatt vor.
- **BESTÄTIGT (Klausuraufgabe 2): Turmregel _beweisen_**, nicht nur anwenden.
- Faltung / Dichte von X+Y (Übungsblatt 3), Summe von Exp → Gamma (Blatt 5).
- Jensen-Ungleichung und Konvexität (Satz 10/11), Tschebyscheff.
- Gesetz der großen Zahl (Satz 12) und zentraler Grenzwertsatz (Satz 15).

> **Methodischer Fehler, den man nicht wiederholen sollte:** Die Lückenanalyse stützte sich
> auf Tutorien, Übungsblätter und das Skript Stochastik II. Das **Skript Stochastik I wurde
> nie systematisch nach Themen durchgesehen**. Genau daher kam Borel-Cantelli als Überraschung.
> Für eine Nachklausur: **beide Skripte einmal Kapitel für Kapitel durchgehen** und die Sätze
> auflisten, die einen Beweis wert sind.

**BESTÄTIGT — kam in der Klausur dran (Aufgabe 7) und wurde nicht gelöst:**
**Regression / kleinste Quadrate** (Def. 70, Bsp. 68/69/74/75, Satz 107). Im Skript
ausführlich, in der Pre-Klausur nicht enthalten, in keiner Lektion behandelt. Für eine
Nachklausur **Priorität 1**. Übungsmaterial mit Lösungen: `T5_S2.pdf` A3 (einfache Regression
mit Zahlen) und A4 (quadratisches Modell, Normalengleichungen, Matrixform) plus
`T5_S2_Loesung_A3_A4_final.pdf`. Ebenso χ²-/t-Verteilung (Def. 98/101) und Konfidenzintervalle für σ² (Bsp. 103/104).

**Entwarnung:** „Machine Learning" und „Nichtparametrische Statistik" werden nur in der
Skript-Einleitung angekündigt, aber nicht ausgeführt — kein Prüfungsstoff.

**Wichtigster erster Schritt nach der Klausur:** Aufgaben aus dem Gedächtnis notieren, solange
sie frisch sind. Das ist die beste Grundlage für eine Nachklausur-Vorbereitung — besser als
jede Vermutung darüber, was drankommen könnte.

## Material im Repo
- `2025_lectures_stochastik_I.pdf` — Skript Stochastik I (78 S.)
- `Skript_stochastic_II_ss_2026.pdf` — Skript Stochastik II, T. Schmidt (57 S.)
- `pre_klausur.pdf` — Muster-Klausur mit Lösungen (I+II)
- `T1..T6_S2.pdf` + Lösungen — Tutoriumsblätter Stochastik II
- `ExerciseS1..S10_WS2025*.pdf` — Übungsblätter Stochastik I

## Wichtige Skript-Referenzen (Stochastik II)
- Exponentialfamilie: **Def. 34**, natürliche Form **Def. 47**, **Satz 44/45**
- Suffizienz / Faktorisierung: **Def. 27**, **Satz 29**
- MLS: **Def. 52**, log-Likelihood-Gleichung (53), **Satz 60** (MLS für exp. Familien)
- Konfidenzintervall (Normal, σ bekannt): **Def. 79**, **Beispiel 81**
- Tests / Gütefunktion / Level-α: **Def. 82–86**
- Einseitiger Gauß-Test: **Beispiel 92**; p-Wert **Beispiel 95**; zweiseitig **Beispiel 96**
- χ²-Verteilung: **Def. 98/101**; KI für σ²: **Beispiel 103/104**

## 3½-Tage-Plan bis zur Klausur (Do, 06.08.)
Ziel: die 6 Aufgabentypen der Pre-Klausur sicher können. Reihenfolge = Pre-Klausur.
Stochastik II ist ~die Hälfte → L4–L6 unbedingt solide.

- **So (heute):** L1 Bedingen ✅ durcharbeiten · L2 Erwartungswert aus Dichte + Verteilungsgleichheit (S-Aufg. 2).
- **Mo:** L3 Konvergenz in Verteilung → Poisson-Approx. (S-Aufg. 3) · L4 Exponentialfamilie + natürl. Parameter (E-Aufg. 1a,b).
- **Di:** L5 MLS via Satz 60 (E-Aufg. 1c) · L6 Gauß-Test einseitig + Konfidenzintervall + Verbindung (E-Aufg. 2).
- **Mi:** ganze Pre-Klausur unter Zeit rechnen; Lücken gezielt nachüben (Interleaving-Mix aus allen Lektionen).
- **Do früh:** nur Retrieval — Verteilungs-Referenz, Formeln, Quizzes. Nichts Neues mehr anfangen.

Puffer: Wenn Zeit knapp wird, Priorität = L1, L6, L5, L4 (die punktreichsten, gut lernbaren Typen);
L2/L3 zur Not nur über die Quizzes/Referenz mitnehmen.
