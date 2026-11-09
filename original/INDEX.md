# Asset-Index · PresseHelden

Alle Dateien stammen von https://pressehelden.com/ (Abruf 09.11.2026), jeweils in **Originalgröße** (WordPress-Größensuffixe `-WxH` entfernt). Originale bleiben unverändert hier. Web-optimierte Kopien (WebP q82–90, lange Kante ≤ 1600 px, Logos auf 96 px Höhe) liegen unter `validation/assets/` mit gleichem Ordner- und Dateinamen.

Vorschau aller Icons: `icons/_preview.html`.

## Logo (`logo/`)

| Datei | Inhalt | Einsatz |
|-------|--------|---------|
| `pressehelden-logo-quer.png` | Wortmarke „PresseHelden“ mit Held-Signet, schwarz, 404 × 99 | Header, Footer, auf hellen Flächen |
| `pressehelden-signet-512.png` | Signet (Held mit Zeitung) in weißem Kreis | Favicon, Avatar, Karten-Pin |
| `pressehelden-signet-button.svg` | Signet als Linien-SVG im weißen Kreis, 52 px | Icon rechts im Gradient-CTA |

Es gibt keine Negativ-Fassung. Auf dunklen Fotos wird kein Logo gesetzt (siehe Styleguide).

## Fonts (`fonts/`)

`geist-400.woff2`, `geist-600.woff2`, `geist-700.woff2` (Geist v5, Latin, SIL OFL, von Vercel). Inter läuft auf der Live-Site über Elementor/Google Fonts und wird im System über Google Fonts bzw. `next/font/google` geladen.

## Medienlogos (`medienlogos/`) · 15 Publisher

Alle als freigestellte PNG, Höhe 240 px, farbig wie im Original.

| Datei | Medium |
|-------|--------|
| `welt.png` | WELT (weiße Schrift auf Dunkelblau) |
| `sueddeutsche-zeitung.png` | Süddeutsche Zeitung |
| `forbes.png` | Forbes (weiß auf Schwarz) |
| `business-insider.png` | Business Insider |
| `t3n.png` | t3n digital pioneers |
| `tagesspiegel.png` | Der Tagesspiegel |
| `merkur-de.png` | Merkur.de |
| `berliner-morgenpost.png` | Berliner Morgenpost |
| `hamburger-abendblatt.png` | Hamburger Abendblatt |
| `frankfurter-rundschau.png` | Frankfurter Rundschau |
| `frankfurter-neue-presse.png` | Frankfurter Neue Presse |
| `ruhr-nachrichten.png` | Ruhr Nachrichten |
| `waz.png` | WAZ |
| `hna.png` | HNA (Hessische/Niedersächsische Allgemeine) |
| `saechsische-zeitung.png` | Sächsische Zeitung |

Auf der Live-Site laufen sie als Marquee unter dem Hero (`.ph-lm-pub`, 60 s pro Durchlauf, ziehbar). Handelsblatt und WirtschaftsWoche erscheinen nur in Artikel-Screenshots, nicht als eigenes Logo.

## Kundenlogos (`kundenlogos/`) · 22 Marken

| Datei | Kunde | Branche |
|-------|-------|---------|
| `engel-voelkers.png` | Engel & Völkers | Immobilien |
| `von-poll-immobilien.png` | Von Poll Immobilien | Immobilien |
| `dahler.png` | DAHLER | Immobilien |
| `rockhold-immobilien.png` | RockHold Immobilien | Immobilien |
| `evernest.png` | Evernest | Immobilien |
| `las-anclas-ibiza.png` | Inmobiliaria Las Anclas Ibiza | Immobilien |
| `maximilian-goetze.png` | Maximilian Götze Finanzdienstleistungen | Finanzen |
| `mennekes.png` | MENNEKES | Elektro/Ladetechnik |
| `solargie.png` | Solargie | Solar |
| `nuu-energy.png` | NUU energy | Energie |
| `die-daemmfuechse.png` | Die Dämmfüchse | Handwerk |
| `epowerfun.png` | ePowerFun | E-Mobilität |
| `kalkhoff.png` | Kalkhoff | E-Bikes |
| `vamo.png` | VAMO | – |
| `canon.png` | Canon | Elektronik |
| `hama.png` | Hama | Elektronik |
| `kitchenaid.png` | KitchenAid | Haushalt |
| `epple.png` | EPPLE | Bau/Immobilien |
| `entirely.png` | Entirely | – |
| `kertos.png` | kertos | Software/Datenschutz |
| `mute-labs.png` | mute labs | – |
| `greed.png` | GREED | (Testimonial Robert Aschbacher) |

Live: zwei gegenläufige Reihen (`.ph-lm-cm1` links, `.ph-lm-cm2` rechts), Ränder weich ausgeblendet.

## Phones (`phones/`) · Hero-Regal

Fertige Phone-Mockups mit echter iOS-Statusleiste und Medienartikel, freigestellt.

| Datei | Medium | Artikel |
|-------|--------|---------|
| `phone-1-welt.png` | WELT | Green Drinks: Grünes Pulver im Test |
| `phone-2-sueddeutsche.png` | SZ | Beste Haartransplantation Türkei 2026 |
| `phone-3-forbes.png` | Forbes | Der Mensch hinter der Marke DAHLER Bremen |
| `phone-4-t3n.png` | t3n | Bester Kaffeevollautomat 2026 |
| `phone-5-handelsblatt.png` | Handelsblatt | Immobilie verkaufen in Karlsruhe |
| `phone-6-merkur.png` | Merkur.de | Wärmepumpe München 2026 (Querformat-Crop mit Rand) |

## Artikel-Screenshots (`artikel/`) · 1401 × 968

Echte Kundenartikel, wie sie in den laufenden Artikelspalten („Was steckt hinter PresseHelden?“, Kernleistung 03) erscheinen.

| Datei | Medium · Thema |
|-------|----------------|
| `artikel-welt-green-drinks.png` | WELT · Green Drinks im Test |
| `artikel-sueddeutsche-haartransplantation.png` | SZ · Haartransplantation Türkei |
| `artikel-forbes-dahler-bremen-interview.png` | Forbes · Philipp Hirsch, DAHLER Bremen |
| `artikel-wirtschaftswoche-dahler-bremen.png` | WirtschaftsWoche · Immobilienbewertung Bremen |
| `artikel-handelsblatt-rockhold-karlsruhe.png` | Handelsblatt · Immobilie verkaufen Karlsruhe |
| `artikel-t3n-kaffeevollautomat.png` | t3n · Kaffeevollautomat KitchenAid |
| `artikel-merkur-waermepumpe-muenchen.png` | Merkur.de · Wärmepumpe München |
| `artikel-frankfurter-rundschau-solargie.png` | FR · Solarteur Frankfurt (Solargie) |
| `artikel-hamburger-abendblatt-dr-kolle.png` | Hamburger Abendblatt · Orthopäde Dr. Kolle |
| `artikel-berliner-morgenpost-virtuelles-buero.png` | Berliner Morgenpost · Virtuelles Büro |
| `artikel-tagesspiegel-virtuelles-buero-ausschnitt.png` | Tagesspiegel · Ausschnitt (Prozess-Karte) |
| `artikel-dyson-test-ausschnitt.png` | Dyson-Test · Ausschnitt (Prozess-Karte) |

## Visuals (`visuals/`)

| Datei | Inhalt | Live-Einsatz |
|-------|--------|--------------|
| `monitor-mockup-artikel.png` (+ `-original`) | Studio-Display mit Artikel „KI verändert den Mittelstand“, Autoren-Karte | „Das macht PresseHelden anders“ |
| `zeitungen-tablet-phone-komposition.png` | Zeitungen, Tablet, Phone, dunkler Grund | Glas-Card „Medien und Publisher“ |
| `hand-phone-hamburger-abendblatt.png` | Hand hält Phone mit Abendblatt-Artikel, Badge „KI-BEARBEITET“ | „Warum kostet Sie das Kunden?“ |
| `laptop-google-suche.png` | Laptop mit Google-Suche, Badge „KI-BEARBEITET“ | Wechselbild „Sie googeln.“ |
| `laptop-chatgpt-suche.png` | Laptop mit ChatGPT-Eingabe, Badge „KI-BEARBEITET“ | Wechselbild „Sie fragen ChatGPT“ |
| `hamburg-karte-pin.png` / `-hoch.png` / `-breit-original.png` | Graue Hamburg-Karte mit Signet-Pin | Standort-Section |

## Fotos (`fotos/`)

| Datei | Motiv | Hinweis |
|-------|-------|---------|
| `team-laptop-gruen-verlauf.png` | 3 Teammitglieder am Laptop, unten grüner Verlauf | Ziel-Tabs-Section; echtes Team |
| `team-gespraech-laptop.png` | Gespräch am Tisch, Laptop „Cherrydeck“ | „Ihr Aufwand: Minimal“ |
| `team-vier-personen-laptop.png` | 4 Personen am Laptop | „International“ |
| `team-hochformat-erweitert.png`, `team-hochformat-schmal-1/2.png` | KI-erweiterte Hochformate desselben Teamfotos | Mobile-Hintergründe |
| `mann-tablet-postits.png` | Mann mit Tablet vor Post-its | „Sichtbarkeit entsteht nicht zufällig“ |
| `buero-unscharf-hintergrund.png` | Büro, stark unscharf | Potenzialanalyse-CTA |
| `stock-meeting-buero-kein-vertrauen.jpg` | **Stockfoto** (Shutterstock): Meeting im hellen Büro | „Kein Vertrauen“; siehe `slop-detected.md` |
| `stock-frau-laptop-fragen-sie-den-experten.jpg` | **Stockfoto** (Shutterstock): Frau am Laptop | „Fragen Sie den Experten!“ |

## Testimonials (`testimonials/`)

Texte, Namen, Rollen und Google-Daten: **`testimonials/testimonials.md`**.

| Datei | Person |
|-------|--------|
| `kunde-1-marcel-arnold-rockhold.png` | Marcel Arnold, GF Rockhold Immobilien (mit Kollegin) |
| `kunde-2-phillipp-hirsch-dahler-bremen.png` | Phillipp Hirsch, GF DAHLER Bremen |
| `kunde-3-otto-van-de-loo-halo-productions.png` | Otto van de Loo, GF Halo Productions |
| `kunde-4-robert-aschbacher-greed-logo.png` | Robert Aschbacher, Greed (nur Logo) |
| `sterne-5.png` | 5 orange Sterne (162 px breit im Einsatz) |
| `anfuehrungszeichen.svg` | Großes graues Anführungszeichen (Zitat-Card unten rechts) |

## Icons (`icons/`)

**Linien-Icons (`icons/linien/`)**, Eigenbau der Site: schwarze Kontur (2,5 px bei 64 px), eine Orange-Akzentfläche oder -Linie. Keine Kreis-Hinterlegung.

| Datei | Bedeutung |
|-------|-----------|
| `muenzen-abwaerts.svg` | Marketingbudget ohne Wirkung |
| `lupe-balken.svg` | Konkurrenz rankt vor Ihnen |
| `browser-lupe.svg` | Kaum Infos über Ihr Unternehmen |
| `podest-stern.svg` | Andere gelten als Experten |
| `hand-person-pfeil.svg` | weniger qualifizierte Leads |
| `schild-haendedruck.svg` | weniger Vertrauen |
| `browser-cursor.svg` | Abhängigkeit von Werbung |
| `rechner-kurve.svg` | steigende Akquisekosten |
| `held-rakete.svg` | Erfolg/Aufstieg (Person auf Podest mit Funken) |
| `praesentation-lupe.svg`, `dokument-stift.svg`, `monitor-artikel.svg`, `haendedruck-zahnraeder.svg` | 4 Schritte |
| `gluehbirne.svg` | Exklusive Keywords |
| `aktualisieren-pfeile.svg` | Artikel-Aktualisierung |
| `haken-verlauf.svg` | Vorteil-Pills (grüner Verlaufskreis mit Haken) |
| `schritt-01…04.svg` | Großziffern mit Schwarz-Verlauf (Zeilen-Cards) |
| `nummer-01…03.svg` | Großziffern hellgrau (Kernleistungen, Wasserzeichen) |
| `faq-plus.svg` / `faq-minus.svg` | Orange Pill mit Plus/Minus (FAQ) |

**Hero-Elemente (`icons/hero-elemente/`)**: Bausteine der Phone-Regal-Karten (Award, Lorbeer, Rang-Badge, Pins, Megafon, Mikrofon, Zeitung, Schild, Stern, People, Lead-Zeile, Gemini, ChatGPT, Forbes/t3n-UI-Schnipsel, Karte).

**Marken-Icons**: `google-g.svg`, `chatgpt.svg`, `chatgpt-kreis.svg`, `gemini-kreis.svg`, `punkt-orange.svg` (Eyebrow-/Listen-Punkt mit Halo), `slider-weiter.svg`, `slider-zurueck.svg`.

## Lottie (`lottie/`) · 9 Animationen, 25 fps, SVG-Renderer

Schlüsselbilder je Datei (Start/Mitte/Ende) in `lottie/frames/`, technische Daten in `lottie/lottie-meta.json`.

| Datei | Format | Dauer | Inhalt | Section · Auslöser |
|-------|--------|-------|--------|---------------------|
| `L1-desktop-V02.json` | 610 × 500 | 4,0 s | Google-SERP: „Ihr Unternehmen“ steigt über „Ihr Konkurrent“, Pokal wird orange | Kennzahlen/SERP · beim Erreichen des Viewports, 1× |
| `L2-desktop-V01.json` | 1140 × 40 | 3,0 s | Fortschrittslinie mit 4 Punkten | Ziel-Tabs · scrollgebunden |
| `L3-desktop-V01.json` | 709 × 435 | 6,0 s | Chart: Konkurrenz-Kurve (blau) zieht davon, „Ihr Unternehmen“ (rot) flach | „Warum kostet“ · Viewport, 1× |
| `L4-desktop-V01.json` | 87 × 90 | 4,5 s | Tacho, Nadel schlägt nach rechts aus | „Aufwand: Minimal“-Foto · Viewport, 1× |
| `L8-desktop-V04.json` | 430 × 180 | 11 s | Google-Suchfeld, Tipp-Effekt „Bester Solarteur Frankfurt“ | „Fragen Sie den Experten“ · Viewport, Loop |
| `L9-desktop-V03.json` | 431 × 180 | 11 s | ChatGPT-Eingabe, Tipp-Effekt „Nenne mir den besten Immobilienmakler …“ | „Fragen Sie den Experten“ · Viewport, Loop |
| `L10-desktop-V05.json` | 431 × 250 | 6,0 s | „Ihr Fahrplan“: Checkliste + Verzweigung, „+28 % Conversion“ | 4 Schritte, Karte 01 · per Skript |
| `L11-desktop-V04.json` | 433 × 252 | 6,0 s | „Sichtbarkeit wächst“: +156 % Erwähnungen, +87 % Traffic, Kurve | 4 Schritte, Karte 04 · per Skript |
| `mobile-lottie-cropped.json` | 1359 × 800 | 6,0 s | Phone mit Artikel + 4 Dashboard-Karten (Score 82/100, Ranking, Berater, KI-Sichtbarkeit) | Potenzialanalyse-CTA · Viewport, 1× |

## Deko (`deko/`)

Weiche Verlaufs-PNGs (weiß/orange), die Elementor als Kanten-Fades nutzt. Im System durch CSS-Verläufe ersetzt; nur zur Referenz.

## Quellcode (`_quellcode/`)

`hero-phone-regal-slider.js` (Slots, Timings, Easings, Autoplay 4 s) und `hero-phone-regal-karten.js` (Karten-Bausteine, Frame-Raster 40 ms). Nur Referenz für das Motion-System, nicht zum direkten Einbau.

## Nutzungsrechte

Medienlogos, Kundenlogos, Artikel-Screenshots und Lotties: Einsatz nur für PresseHelden-eigene Seiten. Lotties stammen von einer externen Agentur (Kennung `lp10843`). Offene Punkte in `analysis/gaps.md`.
