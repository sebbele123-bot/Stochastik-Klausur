# Sebastian hat den Fehler in Pre-Klausur Aufgabe 2(b) selbst gefunden

Sebastian meldete unaufgefordert: *„Bei Aufgabe 2 liegt ein Fehler in der Klausur vor."* Er hat
recht — und hat ihn **eigenständig** entdeckt.

**Der Fehler:** Die Angabe setzt $B\sim\mathrm{Bernoulli}(2/3)$ mit „$Y=U$ falls $B=1$", gibt dem
Gleichverteilungs-Zweig also Gewicht $2/3$. Die Dichte trägt auf $[0,1]$ aber nur $1/3$. Die
Gewichte sind vertauscht; entscheidend ist $P(Y\le 1)=2/3 \neq 1/3 = P(X\le 1)$. Reparatur:
entweder $B\sim\mathrm{Bernoulli}(1/3)$ oder Zweige tauschen. Die Dichte selbst ist korrekt
(integriert zu 1).

**Mein Fehlverhalten (korrigiert):** Ich hatte die Unstimmigkeit beim Erstellen von Lektion 2
zwar bemerkt und im Konsistenz-Check-Kasten angedeutet — aber nur **im Konjunktiv** („steht in
einer Aufgabenfassung ein Schalter, der …"), statt klar zu sagen, dass **genau das** in seiner
Pre-Klausur steht. In der Musterlösung hatte ich die Gewichte zudem **stillschweigend**
korrigiert. Lektion 2 ist jetzt überarbeitet: Fehler explizit benannt, Gegenbeispiel mit
$P(Y\le1)$, beide Reparaturen, plus Formulierungsvorschlag für die Klausur.

**Implikationen:**
- **Nie wieder Unstimmigkeiten in Aufgabenstellungen weichspülen** — direkt benennen, auch wenn
  die Aufgabe aus seinem Kurs stammt. Gilt für alle weiteren Lektionen (L5/L6) und die
  Pre-Klausur-Durchsicht.
- Starke Evidenz für echtes Verständnis: Er prüft Konsistenz aktiv, statt Aussagen zu übernehmen
  (zweiter solcher Fund nach dem Quiz-Bug mit `3/4`). Niveau höher ansetzen als „Grundlagen
  wackelig" ursprünglich vermuten ließ.
- Für die Klausur eingeübt: Widerspruch benennen, Lesart festlegen, sauber weiterrechnen.
