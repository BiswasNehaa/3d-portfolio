# Neha Biswas — Chart of an AI Engineer

A cinematic, interactive portfolio for Neha Biswas, an AI Engineer specializing in production RAG systems,
LLM applications, and agentic AI workflows. The site is built around a cartographic metaphor: an armillary
sphere hero, a compass-rose navigation hub, and six "bearings" — distinct chapters for the engineer, the
workshop (projects), the instruments (skills), the archive (open source), the log (experience & education),
and the signal (contact).

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- React Three Fiber / Three.js (hero armillary sphere)
- Framer Motion (kinetic typography, magnetic buttons, scene transitions)

## Structure

- **Intro** — kinetic headline reveal over a rotating 3D armillary sphere
- **The Chart (hub)** — a compass-rose navigation model on desktop, a stacked list on mobile
- **The Engineer** — about
- **The Workshop** — three project "charts" (ASTRA, CheckMyNotes, AI Academic Advisor), each with its
  own visual treatment: a route/pipeline diagram, an annotated notebook layout, or a course map
- **The Instruments** — skills, grouped by category
- **The Archive** — open-source contributions
- **The Log** — experience & education
- **The Signal** — contact

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Accessibility & performance notes

- The 3D scene only mounts when WebGL is available, with a gradient CSS fallback otherwise.
- Camera motion and kinetic type respect `prefers-reduced-motion`.
- Every scene has a persistent home control, a current-location label, and an accessible text-based menu.
