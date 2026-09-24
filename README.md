# Neha Biswas — The World

An explorable 3D portfolio for Neha Biswas, an AI Engineer specializing in production RAG systems, LLM
applications, and agentic AI workflows. Instead of a scrolling page, the site is a small stylized district
built from six locations — buildings the visitor clicks to travel toward, each revealing a different part
of the story. The journey ends at a theatre, which plays a short title-card "film" and closes on the
credits: contact.

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- React Three Fiber / Three.js (the 3D world, cinematic camera rig, bounded OrbitControls)
- Framer Motion (title reveals, panel transitions, the theatre sequence)

## The world

| Location | Represents |
| --- | --- |
| **The House** | About |
| **The Studio** | Projects — ASTRA, CheckMyNotes, AI Academic Advisor |
| **The University** | Education & experience |
| **The Lab** | Skills, grouped by category |
| **The Archive** | Open-source contributions |
| **The Theatre** | The finale — a title-card sequence closing on contact info |

The district sits on undulating, hand-tuned terrain (a noise-displaced heightfield, flattened locally
under each building and along the path) with a pond, gardens, benches, and varied trees, lit by a warm
golden-hour directional light. On load, the camera dollies forward from a low, human-scale establishing
shot. Clicking a building travels the camera toward it and opens a content panel; a small "Index" control
in the corner (and a "back to the world" button) always gets you home. Between locations, dragging orbits
the camera within bounded limits, close to the ground — it never turns into a top-down strategy camera.

## Mobile

Below 768px (or without WebGL), the 3D world is replaced by `MobileJourney`: the same six locations and
the same theatre finale, presented as a guided vertical flow instead of a 3D scene the device can't drive
well.

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

- The 3D world is code-split and only downloaded on desktop with WebGL support; everyone else gets the
  mobile journey instead.
- Camera travel snaps instantly instead of animating when `prefers-reduced-motion` is set.
- All location content is real HTML (readable, selectable, screen-reader friendly) layered over the 3D
  canvas — nothing important lives only inside the WebGL scene.
