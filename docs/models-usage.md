# Model Usage Map

Exactly which GLB is used where, how it's loaded, and which mesh names matter. Mesh names are the contract between Blender and code — if you swap models, these are what you must match (or rename in code).

## Loading

- **Main scene models** (`office`, `officeItems`, `outdoor`, `godrays`, `outdoorCars`, `basketballNet`, `routingElements`) are loaded together in `src/components/map/use-loader.ts` via `useKTX2GLTF()` and rendered by `<Map>`.
- **Mesh extraction** happens once in `src/components/map/extract-meshes.ts` — it pulls specific named meshes out of the loaded GLBs and stores them in the `useMesh` zustand store for other components to grab.
- **Standalone models** (`character`, `pet`, `contactPhone`, `basketball`, `christmas-tree`) are loaded by their own components.

---

## office.glb (101 meshes) — the core interior

Loaded in `use-loader.ts`, rendered as `<primitive object={office} />`. Almost every interactive system reads named meshes from here (via `extract-meshes.ts`):

| Mesh name(s) | Used for | Component |
|---|---|---|
| `SM_Rain` | Rain effect | Weather |
| `02_BT_1`..`02_BT_14` | Arcade buttons (animated press) | ArcadeBoard |
| `02_JYTK_L`, `02_JYTK_R` | Arcade joysticks | ArcadeBoard |
| `SM_00_012` | Locked door (blog) | LockedDoor |
| `SM_00_010` | Swinging door (blog) | BlogDoor |
| `SM_LightMeshBlog` | Pull-string lamp | Lamp |
| `SM_06_01`..`SM_06_07` | Lamp light targets | Lamp |
| `SM_KitCat` | Cat clock (services) | Clock |
| `SM_00a_01` | Plant pot (services) | services state |
| `SM_BasketballHoop` | Basketball hoop | basketball |
| `SM_BasketballGlass` | Hoop backboard glass | basketball |
| `SM_TvScreen_4` | 404 CCTV TV screen (special shader) | Map/Renderer |
| `SM_TvScreen_1`, `DL_Screen`, `SM_OBJ001`, etc. | Video-texture screens | Map (videos) |
| `SM_ArcadeLab_Screen` | Arcade game render target | ArcadeScreen |

**Note:** every mesh in office.glb gets its material swapped to the global custom shader during `Map`'s one-time traversal, and raycasting is disabled on all of them except the arcade screen.

---

## officeItems.glb (37 meshes) — props & inspectables

Loaded in `use-loader.ts`, rendered as `<primitive object={officeItems} />`. This is where **inspectables** live (clickable zoom-in objects). `extract-meshes.ts` looks up each inspectable's `mesh` name (from `inspectables-meta.ts`) inside this GLB.

| Mesh name | Used for |
|---|---|
| `SM_Lobo` | Sea lion — hidden by default (weather toggle) |
| inspectable meshes (e.g. `SM_MrBeast`, `SM_Geist`, `SM_PinkFloyd`, awards/products) | Click → camera zooms in, shows Sanity copy |

Inspectable mesh list is defined in `src/lib/3d-config/inspectables-meta.ts`.

---

## outdoor.glb (12 meshes) — exterior environment

Loaded in `use-loader.ts`, rendered as `<primitive object={outdoor} />`. Street, buildings, sky backdrop visible through windows. Traversed with `FOG: false`. No extracted meshes — purely visual backdrop.

## outdoorCars.glb (36 meshes) — animated cars

Loaded in `use-loader.ts`. `extract-meshes.ts` collects all child meshes into `useMesh.cars[]`. `OutdoorCars` component animates them driving past. Traversed with `FOG: false`.

## godrays.glb (some meshes) — light shafts

Loaded in `use-loader.ts`. `extract-meshes.ts` collects all meshes into `useMesh.godrays[]`. `Godrays` component renders them as `<primitive>` with `depthWrite=false`, additive-style, animating `uGodrayOpacity` uniform on scene change. Traversed with `GODRAY: true` flag (special shader path).

## routingElements.glb (17 meshes) — navigation portals

Loaded in `use-loader.ts`. **Invisible planes** — one per tab per scene. In `Map`, each mesh is matched to the current scene's `tabs[]` by `tabClickableName` (e.g. `Services1_Hover`, `Showcase_Hover`, `Blog_Hover`). Matched meshes become `<RoutingElement>` — raycast on hover (shows `+` marker + label), click navigates to `tabRoute`. **These mesh names must match the `tabClickableName` values in the scene config.**

---

## Standalone models

### basketball.glb (separate)
Used only in the basketball minigame (`/basketball`). Loaded in `components/basketball/`. Physics ball via `@react-three/rapier`.

### basketballNet.glb (20kb)
Loaded in `use-loader.ts`. `extract-meshes.ts` grabs `children[0]` as the net mesh → `useMesh.basketball.net`.

### character-model.glb (15 meshes) — animated people
Loaded by `components/characters/`. Uses **InstancedSkinnedMesh** — many characters share one draw call. Key data:
- **Skinned mesh parts** (`SKINNED_MESH_KEYS` in `characters-config.ts`): `arms`, `body`, `head`, `Comic`, `Cup`, `Phone`, plus per-character hair/glasses (`jj-hair`, `val-glass`, etc.)
- **Animations** (`CharacterAnimationName`): `Home.01/02`, `Blog.01/02`, `People.01.a/b`, `People.02.a/b`, `Services.01/02` — character poses per scene
- Textures (body/faces/arms/comic) applied separately from the manifest

### pet-model.glb (2 meshes)
Loaded by `components/pets/`. Cat/dog with separate pure/boston textures.

### contactPhone.glb (separate)
Loaded by `components/contact/contact-canvas.tsx` in a **Web Worker** (`@react-three/offscreen`) — the contact overlay renders the phone in its own canvas. URL passed to worker as `modelUrl`.

### christmas-tree.glb (seasonal)
Loaded by `components/christmas-tree/`. Only rendered for the Christmas special event. Plays a song.

### officeWireframe.glb (68kb)
Loaded only by `components/loading/loading-canvas.tsx` — shown as a wireframe preview during the loading screen, before the full scene is ready.

---

## If you swap in your own model

You must reconcile mesh names. Two options:

1. **Name your meshes to match** the code's expected names (table above + `inspectables-meta.ts` + scene config `tabClickableName`).
2. **Rename in code** — update every string reference in `extract-meshes.ts`, `map/index.tsx`, `inspectables-meta.ts`, `asset-manifest.ts` (`glassMaterials`, `doubleSideElements`, `videos`, `matcaps`), and the Sanity scene config to match your model's names.

The bare minimum to get *something* rendering: a model in `office` slot + matching `routingElements` planes + camera config. Everything else (arcade, basketball, characters, blog door, lamp) can be removed from `Map` until you wire up matching meshes.
