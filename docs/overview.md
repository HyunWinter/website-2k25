# Overview

Basementstudio website (2025) — Next.js 15 app with a full-screen interactive 3D scene built on React Three Fiber. All page routes share the same fixed 3D canvas; navigating between routes moves the camera to a different "room" in the scene rather than loading a new page.

## Stack

| Layer | Library |
|---|---|
| Framework | Next.js 15 (App Router, webpack mode) |
| 3D | React Three Fiber 9 + Three.js 0.180 |
| 3D helpers | @react-three/drei |
| Physics | @react-three/rapier |
| State | Zustand |
| Animation | Framer Motion 12 (alpha) |
| CMS | Sanity (project `9syto90m`, dataset `production`) |
| Shader format | GLSL via `raw-loader` + `glslify-loader` |

## Env vars required

```
NEXT_PUBLIC_SANITY_PROJECT_ID=9syto90m   # their actual project ID (public reads work without a token)
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_READ_TOKEN=                        # blank is fine; only needed for draft mode
NEXT_PUBLIC_SUPABASE_URL=https://placeholder.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder
NEXT_PUBLIC_POSTHOG_ENABLED=false
NEXT_PUBLIC_POSTHOG_KEY=placeholder
```

## Running locally

```bash
pnpm install
pnpm dev          # starts on :3000
```

## Docs index

- [`scene.md`](./scene.md) — 3D scene architecture, rendering pipeline, shader system
- [`scenes-and-routing.md`](./scenes-and-routing.md) — how URL routes map to 3D camera positions
- [`assets.md`](./assets.md) — GLB models, baked textures, asset manifest
- [`pages.md`](./pages.md) — app routes that still exist and what they do
