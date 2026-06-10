# App Pages

## Layout hierarchy

```
src/app/layout.tsx                  — root: fonts, global CSS
└── src/app/(site)/layout.tsx       — site shell: assets, navbar, scene, contact
    └── src/app/(site)/(pages)/layout.tsx  — passthrough (no-op after cleanup)
```

## Site layout (`src/app/(site)/layout.tsx`)

Renders for every route. Contains:
- `<AssetsProvider>` — fetches all 3D assets server-side, provides via context
- `<Navbar>` — top navigation bar
- `<NavigationHandler>` — maps URL to 3D scene, handles keyboard nav
- `<ContentWrapper>` — renders the canvas + page children
- `<AppHooks>` — initialises audio, scroll, and other side-effects
- `<Contact>` — contact overlay (needed even when not visible — wires up the store)
- `<Transitions>` — page transition animations
- `<HtmlTunnelOut>` — portal target for HTML elements rendered from inside the canvas

## Active routes

### 3D scene routes (canvas always visible)

| Route | File | Notes |
|---|---|---|
| `/` | `(pages)/(home)/page.tsx` | Returns `null` — canvas is the entire page |
| `/services` | `(pages)/services/page.tsx` | Returns `null` — camera moves to services room |
| `/showcase` | `(pages)/showcase/page.tsx` | Returns `null` — camera moves to showcase room |
| `/blog` | `(pages)/blog/[[...slug]]/page.tsx` | Returns `null` — camera moves to blog room |
| `/people` | `(pages)/people/page.tsx` | Returns `null` — camera moves to people room |

### Special 3D routes (canvas, full-screen)

| Route | File | Notes |
|---|---|---|
| `/basketball` | `(site)/basketball/` | Basketball minigame; uses `@react-three/rapier` physics |
| `/lab` | `(site)/lab/` | Redirects mobile to external lab URL; desktop shows lab 3D scene |
| `/doom` | `(site)/doom/page.tsx` | Returns `null`; DOOM runs inside a canvas shader in the 3D scene |

### Non-canvas routes (canvas hidden)

| Route | File | Notes |
|---|---|---|
| `/contact` | `(site)/contact/` | Contact form page. On desktop, contact overlay shows over canvas instead |
| `/*` (catch-all) | `(site)/[...notFound]/page.tsx` | 404 — camera moves to 404 scene, TV shows the CCTV render |

### API routes

| Route | Purpose |
|---|---|
| `/api/scores` | Basketball leaderboard GET/POST — uses Supabase |

## Navbar (`src/components/layout/navbar.tsx`)

Server component. Fetches from Sanity with `.catch()` fallbacks so it never crashes without credentials:
- `fetchProjectsCount()` → showcase count badge
- `fetchPostsCount()` → blog count badge
- `fetchCompanyInfo()` → social links, newsletter content

Passes data to `<NavbarContent>` (client component). Links: Home, Services, Showcase, People, Blog, Lab + "Contact Us" button.

## Canvas visibility (`src/components/layout/content-wrapper.tsx`)

The canvas is hidden (`pointer-events-none invisible opacity-0`) on blacklisted paths:
```
/showcase/[slug]
/post/[slug]
/contact
/careers/[slug]
```
On all other paths, the canvas is fixed full-screen. Page `{children}` only render for blacklisted paths.

## Loading sequence

`AppLoadingHandler` / `useAppLoadingStore` controls the loading gate:
- `isCanvasInPage` — set true when canvas mounts
- `canRunMainApp` — set true after assets + shaders are ready; unblocks the render loop
- `canvasErrorBoundaryTriggered` — if the canvas throws, hides it and falls back gracefully
