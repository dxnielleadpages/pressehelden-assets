# PresseHelden · Master Styleguide

> **Verbindliche Design-Sprache für alle Outputs von PresseHelden (Pressehelden GmbH, Hamburg).**
> Version: 1.0 · Status: **freigegeben** 09.11.2026
> Quelle: Live-Site pressehelden.com (Elementor-Build mit Agentur-Motion `lp10843`), abgeleitet und gegen `core/AI-SLOP-RULES.md` bereinigt.

---

## 0 · TL;DR für neue Agenten

**Lesereihenfolge:**

1. Dieses Dokument vollständig lesen
2. [`core/AI-SLOP-RULES.md`](../../../core/AI-SLOP-RULES.md) für die universellen Anti-Slop-Regeln
3. Proofs im Browser öffnen: `validation/index.html` (Vorschau per `python3 -m http.server 8741` im Ordner `brands/pressehelden/`, dann `http://localhost:8741/validation/`)
4. Assets nachschlagen in `intake/assets/INDEX.md`, Kundenstimmen und Zahlen in `intake/assets/testimonials/testimonials.md`
5. Erst dann planen oder bauen

**Brand in einem Satz:** PresseHelden bringt Unternehmen in echte Medien (WELT, SZ, Forbes, t3n, Handelsblatt, Merkur) und macht sie so bei Google und in ChatGPT/Gemini sichtbar. Visuell: warmes Hellgrau mit feinem Linienraster, weiße Pillen und Cards, Geist-Headlines mit einem fetten Wortblock auf einem hellen Orange-Band, Apricot-Verläufe an den Section-Kanten und echte Artikel-Screens in bewegten Phone- und UI-Visuals.

**Leitbild:** „Belegt statt behauptet.“ Jede Section zeigt einen Beweis: einen echten Artikel, eine Ergebnis-Karte, ein Medienlogo, eine echte Kundenstimme. Die Bewegung erzählt immer einen Vorher-Nachher-Moment (Konkurrent oben → Sie oben, Linie steigt, Prompt nennt Sie).

### Brand Rules · verbindlich

**NIEMALS (Universal, siehe AI-SLOP-RULES):**

1. `one-sided-accent-border`: aktiver Zustand ist ein voller Rand (SERP-Ergebnis, Testimonial-Bild) oder ein Tint, nie ein Rand nur links
2. `corner-glow` / `ambient-lights`: kein `radial-gradient`, keine Lichtflecken. Wärme kommt nur aus den linearen Apricot-Waschungen. Die Live-Site hat einen radialen Schein in der aktiven Schritt-Card, wir nicht
3. `purple-gradient-hero`: Verläufe nur aus der abschließenden Liste in Kapitel 2
4. `two-color-headline`: genau **ein** Band-Block pro Headline (Orange-Band, Textfarbe bleibt Schwarz). Der Text selbst wird nie farbig
5. `status-tagline`: keine Badges wie „Neu“, „Top“, „Beliebt“
6. `pill-with-dot` / `decorative-dot`: Punkt nur im Eyebrow (einmal pro Seite, Hero) und vor dem Testimonial-Namen. Pills, Tabs, Listen ohne Punkt
7. `ai-default-font`: Geist trägt die Marke (Headlines, Buttons, Nav, Großziffern). Inter ist bewusst der Erklär-Font der Live-Site und nur für Fließtext, Kennzahlen, FAQ
8. `icon-in-filled-circle`: Linien-Icons stehen frei. Kreise nur funktional: Split-Hub, Pfeil-Knöpfe, „!“-Knopf, Plus-Pill, Signet im Button
9. `caption-on-photo`: keine Erklär-Badges über Gesichtern. Glas-Cards sitzen im unteren Drittel des Fotos, Ergebnis-Karten überlappen Phones, nicht Personen
10. `trust-bullet-triplet`: keine „kostenlos · unverbindlich · in 24 h“-Zeilen. „Kostenfreie“ steht einmal im Button-Text
11. `fake-rating-badge`: Google-Badge nur verlinkt aufs Profil, mit Datenstand im `title`
12. `fake-device-ui`: befüllbare Phones mit iOS-Statusleiste (9:41, Dynamic Island, Netz, WLAN, Akku) und Home-Indikator. Echte Screenshots behalten ihre echte Statusleiste
13. `docked-layering`: ein Basis-Element pro Visual (Phone oder Foto), jede Karte überlappt genau eine Kante davon

**NIEMALS (Brand-spezifisch):**

1. `band-overload`: mehr als ein Band-Block pro Headline oder mehr als ein Band im Fließtext einer Section (erlaubt: ein Fazit-Satz). Das H1 darf mehrere Zeilen Band haben, solange es ein zusammenhängender Satzteil ist
2. `orange-text`: `#F3AD4F` oder `#EB8700` als Textfarbe (1,93 / 2,63:1). Orange als Text nur `--orange-ink #9A5100`
3. `loss-band-drift`: das Rot-Band öfter als einmal pro Seite, in einer Headline oder neben einem Orange-Band in derselben Zeile
4. `dark-section`: dunkle oder schwarze Sections. Dunkel gibt es nur als Foto mit Scrim. Die Marke ist hell
5. `glass-on-grey`: Glas-Effekt (`backdrop-filter`) auf Grau oder Weiß. Glas nur auf Fotos
6. `invented-media`: erfundene Medien, Fantasie-Zeitungslogos, Lorem-Artikel, Platzhalter-Screenshots. Nur echte Artikel aus `intake/assets/artikel/` und `phones/`
7. `invented-results`: Zahlen ohne Quelle. Ergebnis-Claims nur aus `testimonials.md` und immer mit Medium/Kunde
8. `deco-motion`: Bewegung ohne Aussage (schwebende Blobs, Partikel, rotierende Deko). Jede Animation zeigt Ergebnis, Vergleich oder Eingabe
9. `hard-section-edge`: Sections als randlose Vollbreite-Bänder. Jede Section ist eine Schale mit 32 px Radius und Abstand zum Viewport
10. `cta-drift`: andere CTA-Texte als „Kostenfreie Potenzialanalyse“ (Primär). Sekundär nur „Erfahrungen ansehen“ oder „Alle Fragen“ als Textlink
11. `du-form`: Du-Ansprache. Durchgehend Sie, außer in wörtlichen Kundenzitaten
12. `channel-split`: Google ohne KI nennen oder ChatGPT ohne Gemini. Die Kanäle heißen „Google“, „ChatGPT und Gemini“, „Medien“
13. `bounce-easing`: Overshoot, Spring, Bounce, `ease-in-out-back`. Nur die benannten Bézier-Kurven
14. `stock-faces`: neue Personenfotos außerhalb des Team-/Kundenmaterials

**IMMER:**

1. Seitenfarbe `#EEEEEE` mit Linienraster. Sections als Schalen (Radius 32, Abstand 8–14 px zum Viewport), Apricot-Waschung an der Kante zur nächsten Section
2. Headlines in Geist. Der Nutzen-Teil fett auf dem Orange-Band, der Rest regular. H2 mit `-0.03em`
3. Unter dem Hero: Medienlogo-Marquee. Kein Hero ohne Medien-Beweis
4. Jede Seite hat mindestens ein Artikel-Visual (Phone-Regal, Artikel-Phone oder Artikel-Spalten) und eine Ergebnis-Karte
5. Primärziel pro Seite: „Kostenfreie Potenzialanalyse“. Button mit Signet-Kreis rechts
6. Wechsel-Komponenten zeigen genau einen aktiven Zustand, pausieren bei Hover, außerhalb des Viewports und bei verstecktem Tab
7. Alles funktioniert ohne Hover und mit `prefers-reduced-motion` (Loops stehen, Lotties zeigen den Endzustand, Wechsel zeigen alles)
8. Sie-Form, kurze Sätze, problemgeführt

---

## 1 · Brand-Pillars

| Pillar | Bedeutung | Woran man es sieht |
|--------|-----------|--------------------|
| **Belegt** | Medien, Kunden, Zahlen sind echt und nachprüfbar | Medienlogo-Marquee, Artikel-Screens, Testimonials mit Name und Foto, verlinktes Google-Badge |
| **Sichtbar** | Google, ChatGPT und Gemini, Medien als drei Kanäle | SERP-Karte, Prompt-Karte, Kanal-Trio, Leistungs-Cards mit Marken-Icons |
| **Mühelos** | Minimaler Aufwand für den Kunden, klarer Prozess | 4 Schritte mit einem aktiven Schritt, „Ihr Aufwand: Minimal“, Tacho, ruhige Flächen |

Drei Leitsätze:

1. **Erst der Beweis, dann die Behauptung.** Visual vor Fließtext, Logo vor Leistung.
2. **Ein Band pro Headline.** Das Band ist der Textmarker der Marke. Es markiert den Nutzen.
3. **Bewegung zeigt Ergebnis.** Jede Animation hat einen Anfang (Problem) und ein Ende (Ergebnis).

---

## 2 · Design Tokens

Quelle: `approved/tokens.json` · Implementierung: `validation/ph.css`

### Farben

```css
/* Flächen */
--page:        #EEEEEE;  /* Seitenfarbe */
--paper:       #FFFFFF;  /* Cards, Nav, FAQ, UI-Karten */
--ink:         #000000;  /* Text, Phone-Rahmen */

/* Text */
--text:        #000000;  /* 18.1:1 auf page */
--text-2:      #333333;  /* 10.9:1 auf page */
--muted:       #6B6B6B;  /* 4.59:1 auf page · 5.33:1 auf paper */
--dim:         rgba(0,0,0,.3);  /* nur inaktive Wechsel-Zustände */
--orange-ink:  #9A5100;  /* Orange als Text · 5.91:1 auf paper */

/* Marke */
--orange:       #F3AD4F;  /* Button, Kappen, Pins, aktiver Rahmen, Footer */
--orange-light: #FFC16D;  /* Verlaufsanfang */
--orange-deep:  #EB8700;  /* Verlaufsende */
--apricot:      #FFCD8A;  /* Waschung */
--band:         rgba(243,173,79,.22);  /* Highlight-Band */
--halo:         rgba(243,173,79,.28);  /* Ring um Aktives */

/* Signal (nur Daten) */
--loss-band:    rgba(234,67,53,.22);  /* einmal pro Seite */
--data-you:     #EA4335;  /* Chart: Ihr Unternehmen */
--data-rival:   #608AF8;  /* Chart: Konkurrenz */

/* Linien & Glas */
--grid-line:    rgba(255,255,255,.4);
--hairline:     rgba(0,0,0,.08);
--ui-line:      rgba(207,207,207,.63);
--ui-bar:       rgba(217,217,217,.6);
--glass-fill:   rgba(255,255,255,.16);
--glass-edge:   rgba(255,255,255,.3);
```

**Farb-Hierarchie:** Grau vor Weiß vor Apricot-Waschung vor Orange. Orange ist Handlung und Markierung: der Button, das Band, die aktive Kappe, der Pin, der aktive Rahmen. Pro Viewport höchstens drei Orange-Rollen gleichzeitig. Rot und Blau sind reine Datenfarben in Charts und Google-Logos.

**Kontraste (WCAG):**

| Kombination | Kontrast | Einsatz |
|-------------|----------|---------|
| Schwarz auf Grau `#EEEEEE` | 18.1:1 | Headlines, Text |
| Schwarz auf Band (`#EFE0CB` effektiv) | 16.2:1 | Band-Wortblock |
| Schwarz auf Apricot `#FFCD8A` | 14.4:1 | Text in Waschungen |
| Schwarz auf Orange `#F3AD4F` | 10.9:1 | `.ph-btn--ink`, Kappen-Ziffern |
| `#333333` auf Grau | 10.9:1 | Fließtext sekundär |
| `#6B6B6B` auf Grau / Weiß | 4.59 / 5.33:1 | Meta, Rollen, Achsen |
| `#9A5100` auf Weiß / Grau | 5.91 / 5.1:1 | Orange als Text |
| Weiß auf Orange `#F3AD4F` | **1.93:1** | Original-Button. Verfehlt WCAG, siehe Review-Frage in `analysis/gaps.md` |
| `#F3AD4F` auf Weiß | 1.93:1 | **nie als Text** |
| `#EB8700` auf Weiß | 2.63:1 | **nie als Text** |
| Weiß auf Foto + Scrim | ≥ 4.5:1 (Scrim Pflicht) | Foto-Sections |

### Verläufe (abschließende Liste)

| Token | Wert | Einsatz |
|-------|------|---------|
| `--grad-cta` | `linear-gradient(188deg, #FFC16D 11.8%, #EB8700 78.5%)` | Kappen, Signet-Kreise, Punkte in Ergebnis-Karten. Button bleibt flach |
| `--wash-up` | `linear-gradient(180deg, transparent 34%, rgba(255,205,138,.3) 66%, rgba(255,205,138,.78) 91%, #FFCD8A)` | Section läuft unten in Apricot aus (Hero, Schritte, Zeilen-Cards) |
| `--wash-down` | `linear-gradient(0deg, transparent 45%, rgba(255,205,138,.3) 61%, rgba(255,205,138,.91) 90%, rgba(255,205,138,.95))` | Section beginnt oben in Apricot (Kennzahlen direkt nach dem Hero) |
| `--wash-band` | `linear-gradient(180deg, transparent 14%, rgba(255,205,138,.85) 47% 70%, transparent 92%)` | Band hinter einer Card-Reihe (Leistungen, Hamburg) |
| `--grad-card-warm` | `linear-gradient(180deg, rgba(255,255,255,.38), rgba(255,205,138,.51))` | Folgen-Cards, Zitat-Band |
| `--grad-footer` | `linear-gradient(0deg, #F3AD4F -29%, rgba(243,173,79,.2))` | Footer |
| `--grad-stat` | `linear-gradient(180deg, #8E8D8D, #000 91.55%)` | Kennzahlen als Text-Clip |
| `--grad-bignum` | `linear-gradient(180deg, rgba(0,0,0,.12), transparent 85%)` | Blasse Großziffern in Leistungs-Cards (Text-Clip) |
| `--grad-cap` | `linear-gradient(180deg, rgba(243,173,79,.32), transparent 42%)` | Oberkante der aktiven Schritt-Card |
| `--grad-neutral` | `linear-gradient(-90deg, #FFF, #EEE)` | Inaktive Kappen |
| `--glass-sheen` | `linear-gradient(135deg, rgba(255,255,255,.9), rgba(255,255,255,.15) 22%, transparent 45% 70%, rgba(255,255,255,.35))` | Glanz auf aktivem Glas-Tab |
| `--scrim` | `linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.2) 45%, rgba(0,0,0,.55))` | Unter weißem Text auf Fotos |

Keine radialen Verläufe. `backdrop-filter` nur in `.ph-glass` und `.ph-glass-frame` auf Fotos.

### Hintergrund-Raster

```css
.ph-page::before {
  content: ""; position: fixed; inset: 0; z-index: 0; pointer-events: none;
  background: repeating-linear-gradient(90deg, var(--grid-line) 0 1.5px, transparent 1.5px 10vw);
}
```

Das Raster liegt über dem Seitengrund und unter den Schalen. Es ist die einzige Textur der Marke (Zeitungsspalten).

### Typografie

```css
--font-display: "Geist", "Inter", system-ui, sans-serif;  /* 400 · 600 · 700 */
--font-text:    "Inter", "Geist", system-ui, sans-serif;  /* 400 · 600 · 700 */
```

| Element | Font | Größe (Desktop → Mobile) | Weight | Line-Height | Letter-Spacing |
|---------|------|--------------------------|--------|-------------|----------------|
| Display (H1) | Geist | 54 → 32 px | 700 (Band) + 400 | 1.34 | -0.01em |
| H2 | Geist | 42 → 28 px | 400 + 700 (Band) | 1.24 | -0.03em |
| H3 | Geist | 34 → 24 px | 600 | 1.15 | -0.02em |
| H4 / Card-Titel | Geist | 22 px | 600 | 1.3 | 0 |
| Lead | Inter | 21 → 18 px | 400 / 700 | 1.48 | 0 |
| Kennzahl | Inter | 70 → 52 px | 700, Text-Clip `--grad-stat` | 1 | -0.03em |
| Großziffer | Geist | 140 px | 700, Text-Clip `--grad-bignum` | 0.8 | -0.04em |
| Body | Inter | 18 → 16 px | 400 | 1.56 | 0 |
| Small | Inter | 16 px | 400 | 1.65 | 0 |
| Micro | Inter | 14 px | 400 / 600 | 1.5 | 0 |
| Eyebrow | Inter | 14 px | 700, Versalien | 1.4 | 0.12em |
| Testimonial-Name | Inter | 16 px | 700, Versalien | 1.4 | 0.12em |
| Button | Geist | 18 → 16 px | 700 | 1 | 0 |

**Das Band:** `<mark>` in Headlines. `background: var(--band); box-decoration-break: clone; padding: .02em .14em; color: inherit;` Das Band umschließt jede Zeile einzeln (wie ein Textmarker). Im H1 ist der Band-Teil 700, der Rest 400. In H2 ist der Satz 400 und nur der Band-Teil 700. Das Band darf am Anfang, in der Mitte oder am Ende stehen (Live: „**In 4 Schritten** zu mehr Markenpräsenz“, „Warum **kostet Sie** das Kunden?“, „Das macht PresseHelden **anders:**“). Auf Foto-Sections (`.ph-shell--photo`) entfällt die Fläche, nur 700 bleibt. Ausnahme Fließtext: höchstens ein Band pro Section, nur auf dem Fazit-Satz (Live: „Mit PresseHelden helfen wir Unternehmen dabei, **diese Lücke zu schließen.**“), Klasse `.ph-body mark`.

Keine Kursive. Keine Versalien in Headlines. Satzschreibung.

### Spacing & Layout

- **Skala (4er-Basis):** 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 112
- **Section-Innenabstand:** `clamp(64px, 6vw + 26px, 112px)` vertikal
- **Schale:** Abstand zum Viewport und zwischen Schalen `clamp(8px, 1vw, 14px)`
- **Container:** 1140 px Inhalt, 1296 px breit (Nav, Regal), Gutter `clamp(20px, 3vw, 48px)`
- **Card-Gap:** 16 px (dicht, Zeilen-Cards) · 24 px (Card-Raster)
- **Eyebrow → Headline:** 16 px · **Headline → Lead:** 24 px · **Lead → Button:** 32 px

### Radien

| Token | Wert | Einsatz |
|-------|------|---------|
| `--r-xs` | 6 px | Balken, Chips in UI-Karten |
| `--r-sm` | 12 px | UI-Karten im Visual, Suchfeld |
| `--r-md` | 18 px | Bilder in Cards, Badge-Innenfläche |
| `--r-card-s` | 20 px | FAQ-Zeilen, Folgen-Cards |
| `--r-card` | 24 px | Cards, Split-Card, Zeilen-Cards, Testimonial |
| `--r-glass` / `--r-shell` | 32 px | Glas-Cards, Section-Schalen, Footer (mobil 24 px) |
| `--r-pill` | 999 px | Nav, Button, Plus-Pill, Vorteil-Pills |

### Borders & Shadows

- Weiße Flächen haben **keinen Rand**, nur `--sh-soft: 0 17px 60px rgba(0,0,0,.04)`.
- UI-Karten im Visual: `1px solid var(--ui-line)` + `--sh-ui`.
- Phones, Monitor, Hero-Karten: `--sh-lift: 11px 35px 60px rgba(0,0,0,.10)`.
- Weiß auf Foto: `--sh-deep: 0 17px 60px rgba(0,0,0,.20)`.
- Aktiv: voller Rand `2px solid var(--orange)` (SERP-Ergebnis, Testimonial-Bild) oder `--halo` (Kappen, Punkte).
- Focus: `outline: 2px solid #000; outline-offset: 2px; box-shadow: 0 0 0 5px rgba(243,173,79,.55)`.

---

## 3 · Seitenrhythmus

Die Seite ist ein Stapel abgerundeter Schalen auf Grau mit Raster. Drei Schalen-Typen wechseln:

| Typ | Klasse | Fläche | Beispiel |
|-----|--------|--------|----------|
| Hell | `.ph-shell` | transparent auf Grau (Raster sichtbar) | Kennzahlen, Zeilen-Cards, FAQ |
| Gewaschen | `.ph-shell--wash-up` / `--wash-down` / `--wash-band` | Apricot-Verlauf an einer Kante | Hero (unten), Schritte (unten), Leistungen (Band) |
| Foto | `.ph-shell--photo` | Foto mit Scrim, Glas darauf | Problem, Kanal-Trio, Ziele, Potenzialanalyse |

Regeln: höchstens zwei Foto-Schalen direkt hintereinander, nie zwei Waschungen derselben Richtung aneinander. Die Waschung einer Schale zeigt immer zur nächsten Section („die Wärme läuft weiter“). Auf eine Foto-Schale folgt oft eine weiße Fuß-Fläche in derselben Schale (`.ph-shell__foot`, Radius nur unten).

---

## 4 · Layout & Grid

- **Max-width:** 1140 px Inhalt · 1296 px breit · Schale volle Breite minus Inset
- **Spalten:** 12er-Raster, Gap 24 px. Typische Splits: 5/7 (Text/Visual im Hero), 6/6, 4/4/4, 3/3/3/3
- **Hero:** Text links (Spalte 1–5), Phone-Regal rechts (6–12), Badge und Button in einer Zeile, Marquee volle Breite am Schalen-Fuß
- **Mobile (< 768 px):** einspaltig, Text zentriert (Hero, Kennzahlen, H2-Blöcke), Cards volle Breite, Visuals unter dem Text
- **Desktop-Verhalten ab 1025 px:** Schritte wachsen, Regal-Klickzonen aktiv, Glas-Cards in einer Reihe

---

## 5 · Komponenten-API

Alle Klassen in `validation/ph.css`, Verhalten in `validation/ph-motion.js`. Beispiele in `validation/components.html`.

### Navigation (`.ph-nav`)

Weiße Pille (`--r-pill`, `--sh-soft`), 1296 px breit, 72–89 px hoch, 24 px unter der Oberkante, sticky. Logo links (Wortmarke), rechts Burger (auch Desktop, wie Live) und optional der Primär-Button ab 1025 px. Menü öffnet als weiße Card unter der Pille (Radius 24). **Selected:** Text 700 + Band hinter dem Wort, kein Rand.

### Button (`.ph-btn`)

| Variante | Fläche | Text | Radius | Zustände |
|----------|--------|------|--------|----------|
| `.ph-btn` (Primär, Original) | `#F3AD4F` flach | Weiß, Geist 700 18 px | Pille | Hover `scale(1.04)` + Signet dreht −8°, 240 ms `enter` · Focus Ring · Active `scale(.98)` |
| `.ph-btn--ink` (barrierearm) | `#F3AD4F` | Schwarz | Pille | wie oben |
| `.ph-btn--paper` (auf Orange/Foto) | Weiß | Schwarz | Pille | wie oben |
| `.ph-link` (Sekundär) | – | Schwarz, Unterstreichung 1 px `--orange` | – | Hover: Unterstreichung 2 px |

Aufbau: Text links (Padding 0 10 0 28 px), rechts `.ph-btn__mark`: weißer Kreis 40 px (Hero) / 48 px (Section) mit Signet. Höhe 58 px (Hero) / 66 px (Section). Ein Text pro Button, eine Zeile.

### Eyebrow (`.ph-eyebrow`)

Inter 700, 14 px, Versalien, 0.12em, `--text`. Davor ein 8-px-Punkt `--orange` mit 3-px-`--halo`. 16 px Abstand zur Headline. Nur einmal pro Seite (Hero).

### Google-Badge (`.ph-gbadge`)

`<a>` aufs Google-Profil. Außen `.ph-glass-frame`-Rahmen (auf Grau ausnahmsweise ohne Blur: `rgba(255,255,255,.5)`, 2 px Weiß, Radius 28, Padding 10), innen weiße Fläche Radius 18: G-Logo 40 px, „100+“ Geist 700 24 px, darunter „5,0“ + 5 Sterne `--orange` + „Sterne“. `title="Google-Bewertungen, Stand 09.11.2026"`.

### Medienlogo-Marquee (`.ph-marquee`)

Eine Spur mit doppelt gesetzten Logos (`aria-hidden` auf der Kopie), Höhe 26 px (max. 170 px breit, `object-fit: contain`), Abstand 64 px, Logos in Originalfarbe wie auf der Live-Seite, am Rand ausgeblendet per `mask-image`. 30 px/s nach links. `--clients`: zwei Reihen gegenläufig, Logos in Originalfarbe, Höhe 40 px. Ziehbar mit Maus/Finger.

### Kennzahlen (`.ph-stats`, `.ph-stat`)

4 Spalten, Zahl `--grad-stat` als Text-Clip (Inter 700 70 px, −0.03em), Label Inter 18 darunter (max. 22 ch). Zahlen zählen beim Eintritt hoch (1600 ms, `enter`). Mobil gestapelt, zentriert.

### Split-Card (`.ph-split`)

Zwei weiße Cards (Radius 24), dazwischen 14 px Spalt, in dem die Waschung durchscheint. Mittig `.ph-split__hub`: weißer Kreis 64 px mit 8-px-Ring `rgba(0,0,0,.06)`, darin ChatGPT- oder Google-Signet. Links das Problem (Kunde sucht), rechts die Konsequenz (Konkurrenz taucht auf). Mobil vertikal, Hub im Spalt.

### Testimonial (`.ph-testi`)

Links Bild-Schiene (3 sichtbare Bilder, Radius 18, aktiv `2px solid --orange`), rechts weiße Card (Radius 24, Padding 46/80): 5 Sterne `--orange`, Zitat Inter 18/28, Name Versalien mit Punkt, Rolle `--muted`, großes Anführungszeichen `#E6E6E6` unten rechts. Pfeil-Knöpfe außen (weiße Kreise 48 px). Autoplay 5 s, Panel-Wechsel 400 ms mit 46 px Versatz. Texte wortgetreu aus `testimonials.md`.

### Glas-Card auf Foto (`.ph-glass`)

Nur in `.ph-shell--photo`. `--glass-fill`, `2px solid --glass-edge`, `backdrop-filter: blur(24px) saturate(1.8)`, Radius 32, Padding 24. Linien-Icon oben (weiß invertiert oder Original mit Orange-Akzent), Text weiß Inter 600 18. Sequenz: nacheinander aktiv (weiße Fläche, schwarzer Text) im 2-s-Takt, danach alle aktiv.

### Rotierende Aussagen (`.ph-rotator`)

Bild links (Radius 24), rechts 3 H3-Zeilen (Inter 600 34/40). Aktiv `--text`, inaktiv `--dim`. Bildwechsel per Überblendung 400 ms, Takt 2500 ms (erster 1500 ms). Hover auf eine Zeile aktiviert sie. Reduced Motion: alle Zeilen schwarz, erstes Bild.

### Verlust-Satz (`.ph-loss`)

Zentrierter Satz Geist 400 31 px, Schluss 700 auf `--loss-band`. Einmal pro Seite, direkt vor den Folgen.

### Folgen-Cards (`.ph-consequence`)

2×2, Radius 20, `--grad-card-warm`, Padding 20, Linien-Icon 44 px oben, Text Inter 700 18. Kein Rand, kein Schatten.

### Zeilen-Cards (`.ph-rows`, `.ph-row`)

Weiße Zeilen (Radius 24, `--sh-soft`), Ziffer 01–04 Geist 700 28 links, Text Inter 18 rechts. 16 px Abstand. Daneben ein Foto als Basis-Element.

### Zitat-Band (`.ph-quote`)

Volle Containerbreite, `--grad-card-warm`, Radius 24, zentrierter Satz Inter 700 21.

### Kanal-Trio (`.ph-channels`)

Auf Foto-Schale. 3 Glas-Rahmen (`.ph-glass-frame`), darin je eine weiße UI-Fläche: `.v-search` (Google), `.v-prompt` (ChatGPT), Medien-Komposition (Bild). Unter jedem ein Label mit orange Punkt + Text weiß („Google Recherchen“, „KI-Systeme wie ChatGPT oder Gemini“, „vertrauenswürdige Medien“).

### Ziel-Tabs (`.ph-goals`)

Auf Foto-Schale. 4 Glas-Tabs nebeneinander (Radius 21), aktiv mit `--glass-sheen` und weißem Text 700, darunter eine Linie mit 4 Punkten, die sich beim Scrollen füllt (Original: Lottie L2, an Scroll gebunden). Mobil: horizontaler Scroll mit Snap.

### Leistungs-Card (`.ph-service`)

Weiß, Radius 24, Padding 32. Oben links Großziffer (`--grad-bignum`), oben rechts Marken-Icon (Google-G, ChatGPT) in weißem Quadrat Radius 18 mit `--sh-soft`, H3, Text, Trennlinie `--hairline`, „Ihr Vorteil:“ 700 + Satz. Dritte Card (Medien) über volle Breite mit Artikel-Collage rechts.

### Vorteil-Pills um Visual (`.ph-benefits`)

Monitor-/Phone-Visual zentral, 6 weiße Pills (Radius 999, `--sh-soft`, Padding 14/22) links und rechts, Linien-Icon frei vor fettem Text (Inter 700 16). Mobil: Visual oben, Pills als Liste.

### 4 Schritte (`.ph-steps`, `.ph-step`)

4 Cards (Radius 24, weiß). Ziffern-Kappe oben mittig (Pille 64×40 über der Kante): aktiv `--grad-cta` + `--halo` + Ziffer Weiß, inaktiv `--grad-neutral` + Ziffer `--muted`. Aktive Card: `flex-grow` 1 vs. 0.85, Oberkante `--grad-cap`, zeigt UI-Visual (Lottie L10/L11 oder `.v-rank`/`.v-clicks`). Takt: Haltezeit 1500 ms nach Visual-Ende, sonst 4000 ms. Hover übernimmt. Mobil (< 1025 px): alle offen, alle Kappen orange.

### Potenzialanalyse-CTA (`.ph-audit`)

Foto-Schale (Büro unscharf). Links H2 + Text (weiß), Mitte Phone mit Analyse-Screen und 3–4 schwebenden UI-Karten (Original: `mobile-lottie-cropped.json`), rechts Text + Button.

### Artikel-Spalten (`.ph-columns`)

Text links, rechts zwei Spalten echter Artikel-Screens (Radius 12, `--sh-ui`), Spalte 1 läuft nach oben, Spalte 2 nach unten, 30 s je Spur, `mask-image` 8 % oben/unten.

### Standort (`.ph-map`)

Karte Hamburg (`hamburg-karte-breit-original.png`), Radius 24, darauf Signet-Pin (`--orange` Tropfen mit Signet). H2 mit Band „PresseHelden aus Hamburg“.

### FAQ (`.ph-faq`)

`<details>`-Zeilen, weiß, Radius 20, Padding 22/28, 12 px Abstand. Frage Inter 600 18. Rechts `.ph-faq__plus`: orange Pille 40×26 mit weißem „+“, offen „−“. Antwort Inter 16/27 `--text-2`, max. 70 ch. Öffnen: Höhe + Deckkraft 400 ms `enter`.

### Footer (`.ph-footer`)

Schale mit `--grad-footer`, Radius 32 oben (unten 0 am Seitenende). Logo, Nav Geist 400 18, Kontakt (Bachstraße 123, 22083 Hamburg · info@pressehelden.com), Rechtliches Inter 14. Kein Newsletter, keine Social-Icon-Reihe ohne echte Profile.

---

## 6 · Conversion-Bausteine

| Baustein | Wo | Regel |
|----------|----|-------|
| Primär-CTA „Kostenfreie Potenzialanalyse“ | Hero, nach Kundenlogos, nach Vorteilen, Potenzialanalyse-Section, Team | Max. 1 pro Viewport, immer mit Signet-Kreis |
| Google-Badge | Hero neben dem Button | Immer verlinkt, mit Datenstand |
| Medienlogo-Marquee | direkt unter dem Hero | Pflicht |
| Kundenlogo-Marquee | nach den Kennzahlen oder im Team-Block | Nur Logos echter Kunden aus `kundenlogos/` |
| Testimonials | nach dem ersten Beweis-Block | Wortgetreu, Name + Rolle + Bild |
| FAQ | vor dem Footer | Mind. 6 Fragen, eine davon zu Kosten, eine zu Dauer |

---

## 7 · Iconografie & Bildwelt

### Icons: PresseHelden Line

Eigene Linien-Icons aus `intake/assets/icons/linien/` (schwarz, 2,5 px, mit einer orangen Akzentfläche). 44–56 px. Frei auf der Fläche, nie im gefüllten Kreis. Marken-Icons (Google-G, ChatGPT, Gemini) nur als Kanal-Kennzeichen. Keine Lucide-, Heroicons- oder Emoji-Icons.

### Fotografie

Eigene Team- und Bürofotos (`fotos/`), warm, natürliches Licht, echte Arbeitssituationen am Laptop. Auf Foto-Schalen immer mit `--scrim`. Kundenfotos nur im Testimonial-Kontext. Keine fremden Stockfotos ergänzen.

### Artikel & Phones

Echte Artikel-Screens (`artikel/`, `phones/`). Phones mit echter Statusleiste. Medien-Header bleibt sichtbar (das Medium ist der Beweis).

### Logo

Wortmarke „PresseHelden“ mit Signet (Held mit Zeitung), schwarz auf Weiß/Grau. Auf Foto oder Orange: Wortmarke auf weißer Pille (wie Nav). Signet allein: Button-Kreis, Pin, Favicon. Mindesthöhe Wortmarke 28 px.

---

## 8 · Visual-System

Die Visuals sind das Herz der Marke. Sie liegen in zwei Formen vor (Entscheidung „hybrid“):

1. **Original-Lotties** (`validation/assets/lottie/`), abgespielt mit `lottie-web` (SVG-Renderer). Pixelgenau wie die Live-Site.
2. **Befüllbare HTML/CSS-Bausteine** (`.v-*`), die eigene Inhalte (Kunde, Medium, Keyword, Zahlen) aufnehmen und dieselbe Bewegungssprache sprechen.

### Lottie-Zuordnung

| Datei | Inhalt | Section | Auslöser | Loop | Ersatz-Baustein |
|-------|--------|---------|----------|------|-----------------|
| `L1-desktop-V02.json` | SERP: „Ihr Unternehmen“ überholt „Ihr Konkurrent“ | Split/SERP | Viewport | nein | `.v-serp` |
| `L2-desktop-V01.json` | Linie mit 4 Punkten füllt sich | Ziel-Tabs | Scroll (0–60 %) | scrub | CSS-Linie in `.ph-goals` |
| `L3-desktop-V01.json` | Lücken-Chart Konkurrenz vs. Sie, „Die Lücke wird größer“ | Folgen | Viewport | nein | `.v-gap` (SVG) |
| `L4-desktop-V01.json` | Tacho schlägt aus (grün) | Aufwand minimal | Viewport | nein | – (nur Lottie) |
| `L8-desktop-V04.json` | Google-Suche, Keyword wird getippt | Kanal-Trio | Viewport | ja | `.v-search` |
| `L9-desktop-V03.json` | ChatGPT-Prompt wird getippt | Kanal-Trio | Viewport | ja | `.v-prompt` |
| `L10-desktop-V05.json` | „Ihr Fahrplan“ mit Conversion-Zähler | Schritt 01 | Schritt aktiv | nein (bis Frame 102) | – |
| `L11-desktop-V04.json` | „Sichtbarkeit wächst“ +156 % / +87 % | Schritt 04 | Schritt aktiv | nein (bis Frame 131) | `.v-clicks` |
| `mobile-lottie-cropped.json` | Phone mit Analyse + schwebenden Karten | Potenzialanalyse | Viewport | nein | `.v-article-phone` + `.v-card` |

### Befüllbare Bausteine

| Baustein | Klasse | Inhalt (data-Attribute / Slots) | Bewegung |
|----------|--------|----------------------------------|----------|
| Phone mit Medienartikel | `.v-article-phone` | Medium-Logo, Rubrik, Headline, Autor/Datum, Bild, Teaser | Statusleiste fix, Artikel scrollt langsam (12 s) nach oben, Pause oben/unten |
| Ranking-Chart-Karte | `.v-rank` | Titel („Google-Ranking“), Keyword, Start-/Endplatz, Zeitraum | Linie zeichnet sich (1200 ms `draw`), Punkte poppen (`pop`, Stagger 280 ms), Platz-Badge zählt runter auf 1 |
| Klick-/Traffic-Karte | `.v-clicks` | Kennzahl („198 Klicks“), Zusatz („> 1.000 € Trafficvalue“), Zeitraum | Zahl zählt hoch (1600 ms), Kurve zeichnet sich, Fläche blendet ein |
| Google-SERP-Karte | `.v-serp` | Suchbegriff, eigener Name + Domain, Konkurrenz + Domain | Start: Konkurrenz oben. Nach 1200 ms tauschen die Ergebnisse (FLIP, 800 ms `shelf`), Ihr Ergebnis bekommt orangen Rand + Pokal |
| KI-Prompt-Karte | `.v-prompt` | Prompt-Text, Antwort-Zeile mit Ihrem Namen | Tipp-Effekt 80 ms/Zeichen, Cursor blinkt, Senden-Knopf pulsiert einmal, Antwort blendet ein |
| Google-Suchfeld | `.v-search` | Suchbegriff | „Search“-Wortmarke, Tipp-Effekt, Lupe |
| UI-Karte (Basis) | `.v-card` | beliebig | Pop 0.4 → 1 (600 ms `pop`), Schwebe 4 px |

### Kompositionsregeln

1. **Ein Basis-Element** (Phone, Foto oder Monitor). Jede Karte überlappt genau eine Kante davon, nie bündig daneben.
2. **Höchstens zwei Karten pro Phone** (wie Live: eine oben rechts, eine unten links), leicht gedreht (−2° bis +2°) und mit `--sh-lift`.
3. **Karten sind weiß**, Radius 12, Rand `--ui-line`. Orange nur in Kappen, Punkten, Kurven-Fläche.
4. **Zahlen auf Karten** stammen aus `testimonials.md` (Ergebnis-Claims) oder sind als „Beispiel“ gekennzeichnet.
5. **Gleiche Perspektive:** Karten auf einem Phone-Screen folgen dessen Neigung. Bei befüllbaren Phones gerade (0°) bleiben.

---

## 9 · Motion

Volle Referenz: `approved/skill/references/motion.md` · Inventar der Live-Site: `analysis/motion-inventory.md`.

### Grundsätze

1. **40-ms-Raster.** Dauern sind Vielfache von 40 ms (25 fps wie alle Lotties).
2. **Ergebnis statt Deko.** Jede Bewegung endet in einem Zustand, der eine Aussage trägt.
3. **Ein aktives Element.** Wechsel-Komponenten haben genau einen aktiven Zustand.
4. **Pausieren.** Hover (echte Mausbewegung), außerhalb des Viewports, versteckter Tab.
5. **Kein Bounce.** Nur die benannten Kurven.

### Tokens

| Token | Wert | Einsatz |
|-------|------|---------|
| `--d-instant` | 120 ms | Farbe, kleine Zustände |
| `--d-fast` | 240 ms | Hover |
| `--d-base` | 400 ms | Fades, Panel, Card-Grow, FAQ |
| `--d-pop` | 600 ms | Karten-Pop |
| `--d-reveal` | 640 ms | Einblendung beim Scrollen |
| `--d-shelf` | 800 ms | Regal, SERP-Tausch |
| `--d-draw` | 1200 ms | Linien zeichnen |
| `--d-count` | 1600 ms | Zähler |
| `--e-enter` | `cubic-bezier(.17,0,0,1)` | Standard rein |
| `--e-exit` | `cubic-bezier(.33,0,.67,1)` | raus, Schwebe |
| `--e-shelf` | `cubic-bezier(.85,0,.21,1)` | große Verschiebung |
| `--e-pop` | `cubic-bezier(.333,0,.2,1)` | Karten-Pop |
| `--e-fade` | `cubic-bezier(.333,0,.667,1)` | Deckkraft |
| `--e-draw` | `cubic-bezier(.17,.17,.67,1)` | Linien |
| `--e-grow` | `cubic-bezier(.17,.13,0,1)` | Balken, Flächen |

### Einblendung beim Scrollen (`[data-reveal]`)

- `data-reveal="up"` (Standard): `opacity 0 → 1`, `translateY(32px) → 0`, 640 ms `--e-enter`.
- `data-reveal="left"` / `"right"`: wie Live `fadeInLeft/Right`, aber 32 px statt 100 %.
- `data-reveal="pop"`: `scale(.4) → 1` + Fade (Karten im Visual).
- Stagger: Kinder von `[data-reveal-stagger]` bekommen 0/120/240/360 ms. Spalten-Paare: 0/300 ms.
- Einmalig, Auslöser 20 % im Viewport.

### Loops

| Loop | Geschwindigkeit | Richtung |
|------|-----------------|----------|
| Medienlogo-Marquee | 30 px/s | links |
| Kundenlogos | 30 px/s | Reihe 1 links, Reihe 2 rechts |
| Artikel-Spalten | 30 s je Spur | 1 hoch, 2 runter |
| Hero-Regal | Autoplay 4000 ms | vor |
| Testimonials | Autoplay 5000 ms | vor |
| Aussagen-Rotator | 2500 ms (erster 1500 ms) | vor |
| Schritte | Haltezeit 1500 ms nach Visual, sonst 4000 ms | vor |

### Reduced Motion

`@media (prefers-reduced-motion: reduce)`: alle Loops stehen, Reveals ohne Weg und ohne Dauer, Zähler zeigen den Endwert, Lotties springen auf den letzten Frame, Wechsel-Komponenten zeigen alle Inhalte (Rotator: alle Zeilen schwarz, Schritte: alle offen, Glas-Cards: alle aktiv), Tipp-Effekte zeigen den vollen Text.

---

## 10 · Voice & Copy

- **Sie-Form**, B2B, sachlich-direkt. Kurze Sätze, gern als Gegensatz-Paar.
- **Problem zuerst:** „Kein Vertrauen. Keine Anfragen.“ · „Warum kostet Sie das Kunden?“ · „Sichtbarkeit entsteht nicht zufällig.“
- **Kernbegriffe:** Sichtbarkeit, Vertrauen, Google, ChatGPT und Gemini, Medien/Medienportale, Expertenstatus, Anfragen, Potenzialanalyse.
- **Headline-Muster:** Nutzen fett auf Band + Erklärung regular. „**Mehr Sichtbarkeit und Vertrauen für Ihre Marke:** Wir bringen Ihr Unternehmen in die Presse.“
- **CTA:** „Kostenfreie Potenzialanalyse“ (immer gleich).
- **Zahlen:** mit Plus oder Prozent, ohne „über“: „500+ Veröffentlichungen“, „95 % unserer Kunden“.
- **Keine Superlative ohne Beleg** („Marktführer“, „Nr. 1“). Medien namentlich nennen.

---

## 11 · Anti-Patterns

### Universal (aus AI-SLOP-RULES)

Siehe [`core/AI-SLOP-RULES.md`](../../../core/AI-SLOP-RULES.md), alle 28 Muster.

### Brand-spezifisch

| Slug | Muster | Korrektur-Prompt |
|------|--------|------------------|
| `band-overload` | Mehrere Band-Blöcke in einer Headline, mehr als ein Band im Fließtext einer Section | „One `<mark>` band per headline, only on the benefit phrase“ |
| `orange-text` | `#F3AD4F`/`#EB8700` als Textfarbe | „Use `--orange-ink #9A5100` for orange text or keep text black“ |
| `loss-band-drift` | Rot-Band mehrfach oder in Headlines | „Red band only once per page, in `.ph-loss`“ |
| `dark-section` | Schwarze/dunkle Section-Flächen | „Use a photo shell with scrim instead of a dark surface“ |
| `glass-on-grey` | Glas-Effekt ohne Foto dahinter | „Glass only on `.ph-shell--photo`; on grey use white paper cards“ |
| `invented-media` | Fantasie-Medien, Lorem-Artikel | „Use real article screens from `assets/artikel/`“ |
| `invented-results` | Zahlen ohne Quelle | „Use only claims from `testimonials.md` with medium/customer“ |
| `deco-motion` | Blobs, Partikel, Dauer-Rotation | „Every animation must end in a result state“ |
| `hard-section-edge` | Randlose Vollbreite-Bänder | „Wrap section in `.ph-shell` (radius 32, inset)“ |
| `cta-drift` | Andere Primär-CTAs | „Primary CTA text is ‚Kostenfreie Potenzialanalyse‘“ |
| `du-form` | Du-Ansprache | „Use Sie throughout“ |
| `channel-split` | Google ohne KI, ChatGPT ohne Gemini | „Name channels as Google · ChatGPT und Gemini · Medien“ |
| `bounce-easing` | Spring/Overshoot | „Use named easings from tokens.motion.easing“ |
| `stock-faces` | Fremde Personenfotos | „Use team/customer photos from `assets/fotos/`, `testimonials/`“ |

---

## 12 · Proofs

| Proof | Pfad | Prüft |
|-------|------|-------|
| Übersicht | `validation/index.html` | Einstieg, Tokens, Farben, Typo |
| Komponenten | `validation/components.html` | Alle Komponenten + Visuals + Lotties, Desktop und Mobil |
| In Action | `validation/in-action.html` | Neue Beispiel-Landingpage im System |
| CSS-Quelle | `validation/ph.css` | Verbindliche Implementierung |
| Motion | `validation/ph-motion.js` | Reveal, Marquee, Rotator, Schritte, Testimonials, Visuals, Lottie-Loader |
| Status | `validation/VALIDATION-STATE.md` | Prüfstand, offene Punkte |

**Live-Referenz:** https://pressehelden.com/ · Section-Screenshots: `intake/screenshots/`

---

## 13 · Quick-Decision-Cheat-Sheet

| Frage | Antwort |
|-------|---------|
| Akzent in der Headline? | Ein `<mark>`-Band auf dem Nutzen, Text bleibt schwarz |
| Orange als Text? | Nur `#9A5100` |
| Dunkle Section? | Nein. Foto-Schale mit Scrim |
| Glas? | Nur auf Fotos |
| Icon im Kreis? | Nein, außer funktionale Knöpfe |
| Selected State? | Voller Orange-Rand oder Band, nie Rand links |
| Gradient erlaubt? | Nur die 12 aus Kapitel 2, nie radial |
| Font? | Geist für Headlines/Buttons/Nav, Inter für Fließtext |
| Button-Text? | „Kostenfreie Potenzialanalyse“ + Signet-Kreis |
| Neue Animation? | Muss in einem Ergebnis enden, 40-ms-Raster, benannte Kurve, Reduced-Motion-Fallback |
| Lottie oder Nachbau? | Original-Lottie, wenn der Inhalt passt. Nachbau `.v-*`, wenn eigene Inhalte (Kunde, Keyword, Zahl) gebraucht werden |
| Bewertung zeigen? | Nur Google, verlinkt, mit Datenstand |

---

## 14 · Changelog

| Version | Datum | Änderung |
|---------|-------|----------|
| 0.1 | 09.11.2026 | Initial aus Live-Site abgeleitet: Tokens, 30 Komponenten, Visual-System hybrid (9 Lotties + 7 befüllbare Bausteine), Motion-System, Proofs |
| 1.0 | 09.11.2026 | Freigegeben. Assets öffentlich unter `https://dxnielleadpages.github.io/pressehelden-assets/` (Repo `dxnielleadpages/pressehelden-assets`), v0-Anhang in `approved/v0-anhang/` |
