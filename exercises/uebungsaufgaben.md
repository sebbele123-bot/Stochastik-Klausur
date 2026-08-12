# Übungsaufgaben im Klausurstil (mit Lösungen)

Zwei Sätze à sechs Aufgaben, gestellt am 05./06.08.2026 als Abschlusstraining. Bewusst
**andere Zahlen als in den Lektionen**, damit nichts auswendig abrufbar ist. Reihenfolge
gemischt (Interleaving), Aufbau wie in `pre_klausur.pdf`.

**Satz A hat Sebastian vollständig und korrekt gelöst** (von mir nachgerechnet, siehe
Learning Record 0006). Satz B wurde am Klausurmorgen gestellt; Ergebnisse liegen nicht vor.

---

## Satz A — 05.08.2026

### A1 · Bedingen (Stoch. I)
Sei $B\sim\mathrm{Bernoulli}(1/4)$. Bedingt auf $B$: $X\sim\mathrm{Exp}(4)$ falls $B=1$,
$X\sim\mathrm{Exp}(2)$ falls $B=0$. Berechnen Sie $E[X]$.

<details><summary>Lösung</summary>

$E[X\mid B{=}1]=\tfrac14$, $E[X\mid B{=}0]=\tfrac12$. Turmregel:
$$E[X]=\tfrac14\cdot\tfrac14+\tfrac34\cdot\tfrac12=\tfrac1{16}+\tfrac6{16}=\boxed{\tfrac7{16}}=0{,}4375$$
*Plausibilität:* liegt zwischen $\tfrac14$ und $\tfrac12$, näher an $\tfrac12$ — passt, da
$B=0$ dreimal wahrscheinlicher ist.
</details>

### A2 · Dichte (Stoch. I)
$f(x)=\tfrac12$ für $0\le x\le1$, &nbsp;$f(x)=\tfrac12 e^{-(x-1)}$ für $x>1$, sonst $0$.
Berechnen Sie $E[X]$.

<details><summary>Lösung</summary>

*Dichte-Probe:* $\tfrac12+\tfrac12\cdot1=1$ ✓

**Über die Mischung** (schneller): Gewicht $\tfrac12$ auf $\mathrm{Unif}(0,1)$ mit $E=\tfrac12$,
Gewicht $\tfrac12$ auf $1+\mathrm{Exp}(1)$ mit $E=2$:
$$E[X]=\tfrac12\cdot\tfrac12+\tfrac12\cdot2=\tfrac14+1=\boxed{\tfrac54}=1{,}25$$

**Über Integrale:** $\int_0^1 x\cdot\tfrac12 dx=\tfrac14$ und
$\int_1^\infty x\cdot\tfrac12 e^{-(x-1)}dx=\tfrac12\int_0^\infty(1+t)e^{-t}dt=\tfrac12\cdot2=1$.
</details>

### A3 · Konvergenz (Stoch. I)
$S_n\sim\mathrm{Binomial}(n,3/n)$. Gegen welche Verteilung konvergiert $S_n$, und wie groß
ist $P(S_n=0)$ im Grenzwert?

<details><summary>Lösung</summary>

$\lambda=n\cdot\tfrac3n=3$, also $S_n\stackrel{d}{\to}\mathrm{Poisson}(3)$ mit Zähldichte
$e^{-3}3^k/k!$. Für $k=0$: $\boxed{e^{-3}}\approx0{,}0498$.
</details>

### A4 · Exponentialfamilie (Stoch. II)
Schreiben Sie $f(x;\lambda)=\lambda e^{-\lambda x}$ ($x\ge0$) als Exponentialfamilie.

<details><summary>Lösung</summary>

$\ln f=\ln\lambda-\lambda x$, also
$$c(\lambda)=-\lambda,\quad T(x)=x,\quad d(\lambda)=\ln\lambda,\quad S(x)=0.$$
*Probe:* $\exp(-\lambda x+\ln\lambda)=\lambda e^{-\lambda x}$ ✓ ·
Kontrolle: $c(\lambda)T(x)=-\lambda x$ muss den Originalterm reproduzieren.
</details>

### A5 · Maximum-Likelihood (Stoch. II)
$X_1,\dots,X_{10}$ i.i.d. $\mathrm{Poisson}(\theta)$, beobachtet $\sum x_i=35$. Bestimmen
Sie $\hat\theta$.

<details><summary>Lösung</summary>

$\hat\theta=\bar x=35/10=\boxed{3{,}5}$.
Klassisch: $l'(\theta)=-n+\tfrac{\sum x_i}{\theta}=0\Rightarrow\theta=\tfrac{\sum x_i}{n}$.
Per Satz 60: $n\theta=\sum x_i$ — derselbe Weg in einer Zeile.
</details>

### A6 · Test & Konfidenzintervall (Stoch. II)
$X_1,\dots,X_{16}$ i.i.d. $\mathcal N(\mu,4)$, beobachtet $\bar x=1{,}2$.
**(a)** Test $H_0:\mu=0$ gegen $H_1:\mu>0$, $\alpha=0{,}05$. **(b)** 95%-KI für $\mu$.

<details><summary>Lösung</summary>

$\sigma=2$, $\sqrt n=4$, also $\sigma/\sqrt n=0{,}5$.

**(a)** $Z=\tfrac{1{,}2-0}{0{,}5}=2{,}4>1{,}645$ ⇒ **$H_0$ verwerfen.**
**(b)** $1{,}2\pm1{,}96\cdot0{,}5=1{,}2\pm0{,}98=\boxed{[0{,}22;\,2{,}18]}$

*Konsistenz:* Die $0$ liegt außerhalb — passt zum Verwerfen. ✓
Hier ist $E[\bar X]=\mu$ (keine Rücktransformation nötig).
</details>

---

## Satz B — 06.08.2026 (Klausurmorgen)

### B1 · Bedingen
$B\sim\mathrm{Bernoulli}(1/3)$; $X\sim\mathrm{Exp}(1)$ falls $B=1$, $X\sim\mathrm{Exp}(3)$
falls $B=0$. **(a)** $P(X\le1)$ **(b)** $E[X]$

<details><summary>Lösung</summary>

**(a)** $\tfrac13(1-e^{-1})+\tfrac23(1-e^{-3})\approx\tfrac13(0{,}632)+\tfrac23(0{,}950)\approx0{,}844$
**(b)** $E[X]=\tfrac13\cdot1+\tfrac23\cdot\tfrac13=\tfrac13+\tfrac29=\boxed{\tfrac59}\approx0{,}556$
</details>

### B2 · Dichte
$f(x)=c$ für $0\le x\le2$, &nbsp;$f(x)=\tfrac23 e^{-(x-2)}$ für $x>2$, sonst $0$.
**(a)** Bestimmen Sie $c$. **(b)** Berechnen Sie $E[X]$.

<details><summary>Lösung</summary>

**(a)** Schwanzmasse $=\tfrac23$, also $2c=\tfrac13\Rightarrow\boxed{c=\tfrac16}$
**(b)** Gewicht $\tfrac13$ auf $\mathrm{Unif}(0,2)$ mit $E=1$; Gewicht $\tfrac23$ auf
$2+\mathrm{Exp}(1)$ mit $E=3$:
$$E[X]=\tfrac13\cdot1+\tfrac23\cdot3=\tfrac13+2=\boxed{\tfrac73}\approx2{,}333$$
</details>

### B3 · Konvergenz
$X_1,\dots,X_n$ unabhängig mit $P(X_i=1)=2/n$; $S_n=\sum X_i$.
**(a)** Verteilung von $S_n$? **(b)** Grenzwert von $P(S_n=1)$?

<details><summary>Lösung</summary>

**(a)** $S_n\sim\mathrm{Binomial}(n,2/n)$
**(b)** $\lambda=2$, also $P(S_n=1)\to e^{-2}\cdot\tfrac{2^1}{1!}=2e^{-2}\approx\boxed{0{,}271}$
</details>

### B4 · Exponentialfamilie
Geometrische Verteilung $f(x;p)=(1-p)^{x-1}p$, $x=1,2,\dots$
**(a)** $c,T,d,S$ bestimmen **(b)** natürlicher Parameter $\eta$

<details><summary>Lösung</summary>

$\ln f=(x-1)\ln(1-p)+\ln p = x\ln(1-p)+\ln\tfrac{p}{1-p}$, also
$$c(p)=\ln(1-p),\quad T(x)=x,\quad d(p)=\ln\tfrac{p}{1-p},\quad S(x)=0.$$
**(b)** $\eta=c(p)=\ln(1-p)$.
*Probe:* $\exp(x\ln(1-p)+\ln\tfrac p{1-p})=(1-p)^x\tfrac p{1-p}=(1-p)^{x-1}p$ ✓
</details>

### B5 · Maximum-Likelihood
$X_1,\dots,X_{20}$ i.i.d. $\mathrm{Exp}(\lambda)$, $\sum x_i=50$.
**(a)** MLS herleiten **(b)** Wert **(c)** erwartete Lebensdauer im Modell

<details><summary>Lösung</summary>

**(a)** $L(\lambda)=\lambda^n e^{-\lambda\sum x_i}$, $l=n\ln\lambda-\lambda\sum x_i$,
$l'=\tfrac n\lambda-\sum x_i=0\Rightarrow\hat\lambda=\tfrac{n}{\sum x_i}=\tfrac1{\bar x}$;
$l''=-n/\lambda^2<0$ ✓
**(b)** $\hat\lambda=20/50=\boxed{0{,}4}$
**(c)** $E[X]=1/\hat\lambda=\boxed{2{,}5}$
</details>

### B6 · Test & Konfidenzintervall
$X_1,\dots,X_9$ i.i.d. $\mathcal N(3\mu,36)$, beobachtet $\bar x=4{,}5$.
**(a)** Test $H_0:\mu=1$ gegen $H_1:\mu\neq1$, $\alpha=0{,}05$. **(b)** 95%-KI für $\mu$.

<details><summary>Lösung</summary>

$\sigma=6$, $\sqrt n=3$, also $\sigma/\sqrt n=2$. Unter $H_0$ ist $E[\bar X]=3\mu=3$.

**(a)** $Z=\tfrac{4{,}5-3}{2}=0{,}75$; zweiseitig gegen $1{,}96$:
$|0{,}75|<1{,}96$ ⇒ **$H_0$ nicht verwerfen.**
**(b)** KI für $3\mu$: $4{,}5\pm1{,}96\cdot2=[0{,}58;\,8{,}42]$.
Durch 3 teilen ⇒ KI für $\mu$: $\boxed{[0{,}19;\,2{,}81]}$

*Konsistenz:* $1$ liegt im Intervall — passt zum Nicht-Verwerfen ✓
**Zwei Stolpersteine:** zweiseitig ⇒ $1{,}96$ (nicht $1{,}645$), und die Rücktransformation
$3\mu\to\mu$.
</details>

---

## Aufgaben-Baukasten für neue Sätze

Damit künftige Übungssätze denselben Zuschnitt haben:

1. **Bedingen** — Bernoulli-Mischung zweier Exponentialverteilungen, $E[X]$ und/oder $P(X\le x)$
2. **Dichte** — konstant auf $[0,a]$ plus Exponentialschwanz ab $a$; $c$ bestimmen und $E[X]$
3. **Konvergenz** — $\mathrm{Binomial}(n,\lambda/n)$, Grenzverteilung und ein $P(S_n=k)$
4. **Exponentialfamilie** — eine Verteilung in die Standardform bringen (Poisson, Exp, Geometrisch, …)
5. **MLE** — i.i.d. Stichprobe mit gegebener Summe, Schätzer herleiten und einsetzen
6. **Test & KI** — $\mathcal N(a\mu,\sigma^2)$ mit $a\neq1$, ein- oder zweiseitig, plus Konsistenzfrage

Immer mit *Hinweis*-Zeile für $z$-Quantile und $e^{-k}$-Werte, wie in der Pre-Klausur.
