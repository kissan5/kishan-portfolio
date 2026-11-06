# Kishan - Portfolio

A responsive React portfolio for a designer and frontend developer, built with Vite. The visual direction pairs an editorial paper-toned canvas with vivid blue, orange, and lime accents. Project previews are composed in CSS, so the portfolio does not rely on missing screenshots or external image assets.

## Getting started

```bash
npm install
npm run dev
```

Create a production build with `npm run build`, or preview one with `npm run preview`.

## Structure

- `src/App.jsx` assembles the portfolio sections.
- `src/styles/globals.css` contains shared design tokens, typography, and responsive utilities.
- `src/components/` contains the responsive navigation, skills ticker, and footer.
- `src/pages/` contains the hero, selected work, about, skills, and contact sections.
- `src/hooks/useReveal.js` provides scroll-triggered reveal effects.

Each component and page has a matching CSS file. Shared colors, fonts, spacing, and responsive utilities live in `src/styles/globals.css`; the individual files contain styles for their own section.

The layout adapts for mobile and desktop, includes a collapsible mobile navigation, and respects reduced-motion preferences.
