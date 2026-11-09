# pressehelden-assets

Öffentliche Assets des PresseHelden Design Systems v1.0 (freigegeben 09.11.2026) für v0- und Next.js-Builds.

- **Basis-URL:** https://dxnielleadpages.github.io/pressehelden-assets/
- **Fallback:** https://raw.githubusercontent.com/dxnielleadpages/pressehelden-assets/main/ + Pfad
- **Maschinenlesbar:** https://dxnielleadpages.github.io/pressehelden-assets/manifest.json (jede Datei mit URL, Bytes, Breite, Höhe, Beschreibung)
- **Live-Referenz:** https://dxnielleadpages.github.io/pressehelden-assets/in-action.html (freigegebene Landing Page) · https://dxnielleadpages.github.io/pressehelden-assets/components.html · https://dxnielleadpages.github.io/pressehelden-assets/visuals.html

## Inhalt

| Pfad | Inhalt |
|------|--------|
| `ph.css` | verbindliche CSS-Quelle (Tokens, `@font-face`, alle `ph-*`- und `v-*`-Komponenten) |
| `ph-motion.js` | Verhalten über `data-*`-Attribute (Reveal, Zähler, Marquee, Regal, Schritte, Lotties) |
| `in-action.html`, `components.html`, `visuals.html`, `index.html` | Proof-Seiten, laufen hier direkt |
| `assets/` | webfertige Dateien (WebP, SVG, WOFF2, Lottie-JSON), Unterordner siehe unten |
| `docs/` | `v0.md`, `STYLEGUIDE.md`, `BRAND-BRIEF.md`, `tokens.json`, `cheatsheet.html` |
| `original/` | Originale in voller Auflösung (PNG/JPG), Lottie-Schlüsselframes, Deko-Verläufe, `INDEX.md`. Quellmaterial, nicht für Builds |

`assets/`: `logo/` · `fonts/` (Geist + Inter, SIL OFL 1.1) · `medienlogos/` (15 Publisher) · `kundenlogos/` (22 Kunden) · `phones/` (6 Phone-Mockups mit echtem Artikel) · `artikel/` (12 Artikel-Screens + `crops/`) · `testimonials/` (4 Kundenbilder, `testimonials.md` mit wortgetreuen Zitaten) · `fotos/` · `visuals/` · `icons/` (`linien/`, `hero-elemente/`, Marken-Icons) · `lottie/` (9 Lotties mit eingebetteten Bildern, `posters/`, `js/`) · `lib/` (lottie-web).

Lottie-JSONs werden per `fetch` geladen. GitHub Pages liefert sie mit `Access-Control-Allow-Origin: *`, sie funktionieren also von jeder Domain.

## Rechte

Logo, Fotos, Phones, Artikel-Screens und Kundenstimmen gehören der PresseHelden GmbH bzw. den genannten Kunden und Medien. Die Lotties stammen von einer externen Agentur (Kennung `lp10843`). Alles nur für Seiten von PresseHelden verwenden. Schriften: SIL OFL 1.1 (`assets/fonts/LICENSE.txt`), lottie-web: MIT (`assets/lib/LOTTIE-WEB-LICENSE.md`).

Erzeugt aus `styleguide-framework/brands/pressehelden/` mit `scripts/build-asset-repo.py`. Nicht direkt hier ändern.
