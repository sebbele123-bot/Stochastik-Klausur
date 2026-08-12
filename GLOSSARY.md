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

**Dichte** $f$:
Die Funktion, über die sich Wahrscheinlichkeiten einer stetigen Zufallsvariablen als Fläche
ergeben: $P(a\le X\le b)=\int_a^b f$. Gesamtfläche stets $1$.
_Avoid_: Verteilungsfunktion (das ist $F$), Wahrscheinlichkeit an der Stelle $x$.

**Mischung**:
Eine Verteilung der Form $f = w_1 f_1 + w_2 f_2$ mit $w_1+w_2=1$ — ein Zufallsschalter
entscheidet, aus welcher Teilverteilung gezogen wird. Die Gewichte sind die Massen der Stücke.
_Avoid_: Kombination, Überlagerung.

**Gleich verteilt** ($X \stackrel{d}{=} Y$):
Zwei Zufallsvariablen mit überall übereinstimmender Verteilungsfunktion (äquivalent: Dichte).
Gleicher Erwartungswert genügt dafür nicht.

**Konvergenz in Verteilung** ($\stackrel{d}{\to}$, im Skript $\stackrel{L}{\to}$):
Die Verteilungsfunktionen konvergieren an allen Stetigkeitsstellen der Grenzverteilung
(Definition 13). Eine Aussage über Verteilungen, nicht über Werte der Zufallsvariablen.

## Statistik (Stochastik II)

**Exponentialfamilie**:
Eine Verteilungsfamilie, deren Dichte sich als
$p(x,\theta)=\exp\big(c(\theta)T(x)+d(\theta)+S(x)\big)$ schreiben lässt, wobei der Träger
nicht von $\theta$ abhängt (Definition 34).

**Natürlicher Parameter** $\eta$:
Die Umparametrisierung $\eta := c(\theta)$, nach der der Faktor vor $T(x)$ der Parameter
selbst ist. Danach darf kein $\theta$ mehr in der Darstellung stehen.

**Maximum-Likelihood-Schätzer (MLS)** $\hat\theta$:
Der Parameterwert, der die Likelihood der beobachteten Daten maximiert. Zwei Wege:
log-Likelihood ableiten und null setzen, oder bei Exponentialfamilien $E_\theta[T(X)]=T(x)$
lösen (Satz 60).
_Avoid_: MLE, Maximum-Likelihood-Schätzwert (im Skript synonym, hier: MLS).

**Teststatistik** $Z$ (Gauß-Test):
$Z = (\bar X - \mu_0)/(\sigma/\sqrt n)$ — unter $H_0$ standardnormalverteilt. Verglichen
wird gegen $z_{1-\alpha}$ (einseitig) bzw. $z_{1-\alpha/2}$ (zweiseitig).

**Konfidenzintervall**:
Zufallsintervall $\bar X \pm z_{1-\alpha/2}\,\sigma/\sqrt n$, das den wahren Parameter mit
Wahrscheinlichkeit $1-\alpha$ überdeckt. Ist $E[\bar X]=a\mu$ mit $a\neq1$, muss am Ende
zurücktransformiert werden.
_Avoid_: Vertrauensbereich (als Alias ok), Fehlerintervall.
