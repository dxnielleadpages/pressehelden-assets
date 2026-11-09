# PresseHelden · Brand Brief für Claude Design

> **Verwendung:** Inhalt ab `<brand_brief>` copy-pasten in Claude Design → **„Any other notes?“**
> Company-Blurb (Feld 1): *PresseHelden (Pressehelden GmbH, Hamburg) schreibt und veröffentlicht redaktionelle Artikel über Unternehmen auf reichweitenstarken Medienportalen wie WELT, Süddeutsche Zeitung, Forbes, t3n, Handelsblatt und Merkur. Ergebnis: Sichtbarkeit bei Google, Präsenz in den Antworten von ChatGPT und Gemini und Vertrauen bei Interessenten, bevor sie Kontakt aufnehmen. Zielgruppe: Unternehmen im DACH-Raum.*

---

<brand_brief>

## Brand in einem Satz

PresseHelden bringt Unternehmen in echte Medien und macht sie so bei Google und in ChatGPT/Gemini sichtbar. Der Look: warmes Hellgrau mit feinem vertikalem Linienraster, weiße Pillen und Cards mit weichem Schatten, Geist-Headlines mit einem fetten Wortblock auf hellem Orange-Band, Apricot-Verläufe an den Section-Kanten, echte Artikel-Screens in Phones und kleine weiße UI-Karten mit Ergebnissen. „Belegt statt behauptet.“

## Brand Rules · NIEMALS (höchste Priorität)

> Universal-Regeln aus `core/AI-SLOP-RULES.md`, Top-7 + markenspezifisch.

1. **`one-sided-accent-border`**: kein farbiger Rand nur links/rechts. Aktiv = voller 2-px-Orange-Rand oder Band.
2. **`corner-glow` / `ambient-lights`**: keine radialen Verläufe, keine Lichtflecken. Wärme nur über lineare Apricot-Verläufe an Section-Kanten.
3. **`purple-gradient-hero`**: keine Verlaufs-Heroes. Hero ist Grau mit Raster, unten Apricot-Waschung.
4. **`two-color-headline`**: Headline-Text immer schwarz. Genau ein Wortblock bekommt das Orange-Band (`rgba(243,173,79,.22)`) und wird fett.
5. **`status-tagline`**: keine „Neu“-, „Top“-, „Beliebt“-Badges.
6. **`pill-with-dot` / `decorative-dot`**: Punkt nur im einen Eyebrow über dem H1 und vor dem Testimonial-Namen.
7. **`ai-default-font`**: Geist für Headlines, Buttons, Nav. Inter nur für Fließtext, Kennzahlen, FAQ (bewusste Wahl der Marke).
8. **`icon-in-filled-circle`**: Linien-Icons frei. Kreise nur für Knöpfe.
9. **`fake-rating-badge`**: Google-Badge „100+ · 5,0“ nur verlinkt auf https://maps.app.goo.gl/6b8c7ZdtuLL553sh7, mit Datenstand.
10. **`fake-device-ui`**: Phones mit echter iOS-Statusleiste und Home-Indikator.
11. **`band-overload`**: nie mehr als ein Band-Block pro Headline, im Fließtext höchstens ein Band pro Section (nur Fazit-Satz).
12. **`orange-text`**: Orange `#F3AD4F` nie als Textfarbe. Orange-Text nur `#9A5100`.
13. **`dark-section`**: keine dunklen Sections. Dunkel nur als Foto mit Scrim, darauf Glas-Cards.
14. **`invented-media` / `invented-results`**: keine Fantasie-Medien, keine erfundenen Zahlen.
15. **`deco-motion`**: keine Deko-Animation. Jede Bewegung endet in einem Ergebnis.

## Was PresseHelden visuell ist

- **Seite als Zeitung:** `#EEEEEE` mit weißen 1,5-px-Linien alle 10vw (fix), darauf abgerundete Section-Schalen (Radius 32, 8–14 px Abstand zum Rand).
- **Das Band:** der Textmarker der Marke. Fetter Nutzen-Teil auf hellem Orange, Rest regular.
- **Pillen:** Navigation, Button, FAQ-Plus, Vorteil-Pills. Alles Weiße schwebt mit `0 17px 60px rgba(0,0,0,.04)`.
- **Beweis-Visuals:** Phones mit echten Artikeln (WELT, SZ, Forbes, t3n, Handelsblatt, Merkur), darauf kleine weiße Ergebnis-Karten („Google Platz 1 in 6 Wochen“, „200 Klicks/Monat“).
- **Glas auf Foto:** Team-Fotos mit dunklem Verlauf, darauf Glas-Cards (weiß 16 %, 2-px-Kante, Blur 24).
- **Apricot-Waschung:** Sections laufen an einer Kante in `#FFCD8A` aus, der Footer in Orange.

## Farben (strikt)

| Token | Wert | Verwendung |
|-------|------|------------|
| `surface/page` | `#EEEEEE` | Seitenfarbe mit Raster |
| `surface/paper` | `#FFFFFF` | Cards, Nav, FAQ, UI-Karten |
| `text/primary` | `#000000` | Headlines, Text |
| `text/secondary` | `#333333` | Fließtext sekundär |
| `text/muted` | `#6B6B6B` | Meta, Rollen |
| `accent/orange` | `#F3AD4F` | Button, Kappen, Pins, aktiver Rand, Footer |
| `accent/band` | `rgba(243,173,79,.22)` | Highlight-Band |
| `accent/apricot` | `#FFCD8A` | Section-Waschung |
| `gradient/cta` | `linear-gradient(188deg,#FFC16D 11.8%,#EB8700 78.5%)` | Kappen, Signet-Kreise |
| `text/accent` | `#9A5100` | Orange als Text |

**Farb-Hierarchie:** Grau vor Weiß vor Apricot vor Orange. Orange = Handlung oder Markierung, max. 3 Rollen pro Viewport. Rot `#EA4335` und Blau `#608AF8` nur als Chart-Datenfarben.

**Verboten:** Lila, Türkis, Neon, Schwarz als Fläche, zusätzliche Akzentfarben, radiale Verläufe.

## Typografie

- **Fonts:** Geist (400/600/700) für Headlines, Buttons, Nav. Inter (400/600/700) für Fließtext.
- **H1:** Geist 54/72 (mobil 32), Band-Teil 700, Rest 400.
- **H2:** Geist 42/52 (mobil 28), −0.03em, 400 mit 700-Band-Teil.
- **H3:** Geist 600 34/40.
- **Body:** Inter 18/28 (mobil 16/26).
- **Kennzahl:** Inter 700 70 px, Grau-Schwarz-Verlauf als Text-Clip.
- **Eyebrow:** Inter 700 14 px, Versalien, 0.12em, orange Punkt davor. Einmal pro Seite.

## Spacing & Radien

- **Skala:** 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 112
- **Card-Radius:** 24 (Cards), 20 (FAQ), 32 (Glas, Schalen), Pille (Nav, Button)
- **Card-Border:** keiner; nur Schatten. UI-Karten im Visual: 1 px `rgba(207,207,207,.63)`
- **Section:** 112 px vertikal Desktop, 64 px mobil, Container 1140 px

## Kern-Komponenten

Pill-Navigation · Eyebrow mit Punkt · Band-Headline · Orange Pill-Button mit Signet-Kreis · Google-Badge (verlinkt) · Hero-Phone-Regal mit Ergebnis-Karten · Medienlogo-Marquee · Kennzahlen-Zeile · Split-Card mit Mittel-Icon · Google-SERP-Karte · Testimonial-Slider (Bild-Schiene + Zitat-Card) · Glas-Cards auf Foto · Rotierende Aussagen · Folgen-Cards · Nummerierte Zeilen-Cards · Kanal-Trio (Google, ChatGPT, Medien) · Leistungs-Cards mit Großziffer · Vorteil-Pills um Monitor · 4 Schritte mit Kappen · Potenzialanalyse-CTA · Artikel-Spalten · Hamburg-Karte · FAQ-Akkordeon mit Plus-Pill · Orange-Footer.

## Motion

25-fps-Raster (40 ms). Einblendung 640 ms, 32 px Weg, `cubic-bezier(.17,0,0,1)`. Karten poppen von 0.4 auf 1 (600 ms, `cubic-bezier(.333,0,.2,1)`). Marquees 30 px/s. Ein aktives Element pro Wechsel-Komponente, Pause bei Hover. Kein Bounce. Alles mit `prefers-reduced-motion`-Fallback.

## Output-Formate

| Format | Maße |
|--------|------|
| Web-Section | 1440 × variabel (Desktop), 390 × variabel (Mobile) |
| Landing Page | Hero ≥ 760 px hoch inkl. Marquee, 10–14 Sections |

## Voice & Copy

Sie-Form, B2B, sachlich-direkt, problemgeführt. Gegensatz-Paare („Kein Vertrauen. Keine Anfragen.“), Fragen („Warum kostet Sie das Kunden?“). Kernbegriffe: Sichtbarkeit, Vertrauen, Google, ChatGPT und Gemini, Medien, Expertenstatus, Anfragen. CTA immer „Kostenfreie Potenzialanalyse“.

## Anti-Patterns (NIEMALS)

- Universal: siehe `core/AI-SLOP-RULES.md`
- `band-overload`, `orange-text`, `loss-band-drift`, `dark-section`, `glass-on-grey`, `invented-media`, `invented-results`, `deco-motion`, `hard-section-edge`, `cta-drift`, `du-form`, `channel-split`, `bounce-easing`, `stock-faces`

## Referenz-HTMLs / Proofs

- Übersicht & Tokens: `validation/index.html`
- Komponenten: `validation/components.html`
- Beispielseite: `validation/in-action.html`

</brand_brief>
