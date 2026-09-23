# Neha Biswas — AI Engineer Portfolio

"The Intelligence Lab" — a 3D, interactive portfolio for Neha Biswas, an AI Engineer specializing in
production RAG systems, LLM applications, and agentic AI workflows.

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- React Three Fiber / Three.js (hero neural-core scene, about knowledge-orbit scene)
- Framer Motion

## Sections

Hero · About · Skills (interactive knowledge graph) · Projects (ASTRA, CheckMyNotes, AI Academic Advisor) ·
Open Source · Experience & Education · Contact

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

- 3D scenes only mount when WebGL is available, with a gradient CSS fallback otherwise.
- Hero camera motion respects `prefers-reduced-motion`.
- Skills knowledge graph has a fully readable, keyboard-accessible list alternative alongside the interactive view.
