# Stochastik I + II Glossar

Kanonische Sprache für diese Klausurvorbereitung. Alle Lektionen halten sich an diese
Begriffe (wie im Kursskript). Ein Begriff kommt erst hinein, wenn er verstanden **und**
korrekt angewendet wurde.

## Terms

**Bedingte Wahrscheinlichkeit** $P(A \mid B)$:
Die Wahrscheinlichkeit von $A$, wenn bekannt ist, dass $B$ eingetreten ist —
$P(A \mid B) = P(A \cap B)/P(B)$ für $P(B) > 0$.

**Satz von der totalen Wahrscheinlichkeit**:
Zerlegt eine Wahrscheinlichkeit über eine vollständige Fallunterscheidung $B_1,\dots,B_n$:
$P(A) = \sum_i P(A \mid B_i)\,P(B_i)$.
_Avoid_: Totale-Wahrscheinlichkeit-Regel, Gesetz der totalen W'keit (als Alias ok).

**Bedingte Erwartung** $E[X \mid B]$:
Der Erwartungswert von $X$ unter der Information $B$ — selbst eine Zufallsgröße,
solange $B$ zufällig ist.

**Satz von der totalen Erwartung (Turmregel)**:
$E[X] = E\big[E[X \mid B]\big]$. Erst innen bedingt rechnen, dann außen über $B$ mitteln.
_Avoid_: Iterierte Erwartung (als Alias ok), "Tower property".
