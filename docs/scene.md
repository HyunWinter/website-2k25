# 3D Scene Architecture

## Entry point

`src/components/layout/content-wrapper.tsx` — client component that wraps the whole site. Renders the scene canvas in a fixed full-screen div, and page `{children}` only for blacklisted paths (contact, showcase slug, post slug, careers slug).

```
ContentWrapper
  └── <Scene />                        (dynamic import, no SSR)
        └── <Canvas>                   (R3F, frameloop="demand")
              └── <AnimationController>
                    └── <Renderer>     (custom render loop)
                          ├── mainScene (portal)
                          │     ├── <Map />            — all 3D geometry
                          │     ├── <CameraController />
                          │     ├── <Inspectables />
                          │     ├── <Sparkles />
                          │     ├── <CharactersSpawn />
                          │     ├── <Pets />
                          │     ├── <DoomJs />
                          │     └── <HoopMinigame />   (basketball only)
                          └── postProcessingScene (portal)
                                └── <PostProcessing />
```

## Render pipeline (`src/components/postprocessing/renderer.tsx`)

No Three.js built-in effects composer. Custom two-pass pipeline:

1. **Main pass** — render `mainScene` to a `WebGLRenderTarget` (`HalfFloatType`, with `DepthTexture`)
2. **CCTV pass** — optional, renders the main scene from a fixed security camera into a double-FBO texture, used for the 404 TV screen
3. **Post pass** — renders a full-screen quad in `postProcessingScene` with the main texture + depth as uniforms. All effects (bloom, vignette, contrast/brightness/exposure/gamma) are done here in a single custom shader

`Canvas` is set to `frameloop="demand"` — frames only render when something calls `invalidate()`. `AnimationController` drives this.

## Global shader (`src/shaders/material-global-shader/`)

Every mesh in the scene (office, outdoor, items, routing elements) has its default `MeshStandardMaterial` replaced by a single custom `ShaderMaterial` in `Map`'s traversal loop. The material has compile-time flags injected via `#define`:

| Flag | Effect |
|---|---|
| `GLASS` | Refraction + transparency |
| `GODRAY` | Additive blending for light shaft meshes |
| `FOG` | Depth-based fog (outdoor only disabled) |
| `MATCAP` | Matcap texture overlay |
| `VIDEO` | VideoTexture as emissive map |
| `CLOUDS` | Special cloud alpha handling |
| `DAYLIGHT` | Daylight Computer screen shader |

Flags are set per-mesh name during the one-time traversal in `Map.useEffect`. Traversal only runs once (`alreadyTraversed.current`).

## Baked lighting (`src/components/map/bakes.tsx`)

Lighting is fully pre-baked in Blender. No real-time lights exist. `BakesLoader` reads `assets.bakes[]` — each entry has:
- `title` — mesh name prefix to match in the scene
- `lightmap` — URL to the baked lightmap texture
- `ambientOcclusion` — URL to the AO texture
- `meshes[]` — explicit list of mesh names receiving this bake

Textures are applied as `lightMap` and `aoMap` on the global shader material. `NearestFilter` is used throughout to preserve the pixel art / hand-baked look.

## Camera system (`src/components/camera/`)

Two modes, toggled by a Leva debug control:

**Fly mode (default in dev):** `WasdControls` — free WASD + mouse look for exploring the scene.

**Production mode:** `CustomCamera` — the actual site camera. Uses `cameraConfig` from the current scene (position, target, fov, scroll offset). On scene change, it lerps to the new position. Scroll position within a scene adjusts the camera on the Y axis via `targetScrollY` and `offsetMultiplier`.

`useNavigationStore.mainCamera` holds the active `PerspectiveCamera` instance — the renderer reads it directly for the main pass.

## Other systems in the scene

| Component | What it does |
|---|---|
| `Inspectables` | Raycasted clickable objects — zoom in on click, show metadata panel |
| `RoutingElement` | Invisible mesh planes from `routingElements.glb` — raycasted, navigate to a route on click |
| `ArcadeScreen` | Renders a playable arcade game (custom shader + js-dos emulator) into a texture applied to an in-scene monitor |
| `BlogDoor` | Animated door with physics — swings open when you enter the blog scene |
| `Lamp` | Physics-enabled lamp with rapier, in blog room |
| `Weather` | Animated rain / environment on services scene |
| `Sparkles` | GPU particle system for ambient sparkle effect |
| `CharactersSpawn` | `InstancedSkinnedMesh` — many animated characters sharing one draw call |
| `Pets` | Same instancing approach for the cat/dog characters |
| `DoomJs` | Runs actual DOOM inside an iframe rendered into a WebGL texture |
| `Godrays` | Additive-blended mesh godrays (not a post-process) |
