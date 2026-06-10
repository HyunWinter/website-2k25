# Scenes & Routing

## How it works

URL changes drive 3D camera movement. `NavigationHandler` watches `usePathname()` and maps the current path to a scene name. When the scene name changes, `useNavigationStore.currentScene` updates, and `CustomCamera` lerps to the new `cameraConfig`.

**The scene list comes from Sanity** (`scenesConfig` document). Without Sanity, scenes default to empty arrays and the camera stays at its initial position.

## Path → scene mapping

| URL | Scene name |
|---|---|
| `/` | `home` |
| `/services` | `services` |
| `/showcase` | `showcase` |
| `/blog` | `blog` |
| `/people` | `people` |
| `/lab` | `lab` |
| `/basketball` | `basketball` |
| `/post/*` | `blog` (camera stays in blog room) |
| `/careers/*` | `people` (camera stays in people room) |
| `/contact` | `home` (contact overlay renders on top) |
| anything else | `404` (TV screen shows 404 scene via CCTV FBO) |

## Scene config (per scene, from Sanity)

```ts
{
  name: string                    // matches URL segment
  cameraConfig: {
    position: [x, y, z]          // world position
    target: [x, y, z]            // look-at target
    fov: number
    targetScrollY: number         // how far scroll affects camera Y
    offsetMultiplier: number
  }
  tabs: {
    tabName: string               // display name
    tabRoute: string              // e.g. "/showcase"
    tabHoverName: string          // mesh name to highlight on hover
    tabClickableName: string      // mesh name in routingElements.glb that triggers nav
    plusShapeScale: number        // size of the + marker rendered on the clickable
  }[]
  postprocessing: {
    contrast, brightness, exposure, gamma,
    vignetteRadius, vignetteSpread,
    bloomStrength, bloomRadius, bloomThreshold
  }
}
```

## Routing elements (in-scene clickable portals)

`routingElements.glb` contains invisible flat mesh planes, one per tab per scene. In `Map`, they are loaded and matched to the current scene's `tabs` by `tabClickableName`. Each matched mesh gets a `RoutingElement` component:

- Raycasts on hover → shows a `+` shape indicator and text label
- On click → calls `router.push(tabRoute)` → triggers scene transition

## Navigation store (`useNavigationStore`)

Key state:

| Field | Purpose |
|---|---|
| `currentScene` | Active `IScene` object — camera and tabs |
| `previousScene` | Last scene — used for transition direction |
| `mainCamera` | The live `PerspectiveCamera` ref |
| `isCameraTransitioning` | True while lerping between scenes |
| `isCanvasTabMode` | True when user Tab-navigated into the canvas |
| `currentTabIndex` | Which tab is highlighted in canvas tab mode |

## Keyboard navigation

- **Tab** into the canvas → enters `isCanvasTabMode`, cycles through `currentScene.tabs`
- **Escape** from a non-home scene → navigates back to `/`
- **WASD** (dev fly mode only) → free camera movement

## Contact overlay

`/contact` does **not** move the camera — it keeps the home scene and renders the `Contact` component (from `src/components/contact/contact.tsx`) as a full-screen overlay on top of the canvas. On mobile (< 1024px), "Contact Us" navigates to `/contact` as a normal page instead.
