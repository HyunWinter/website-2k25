# Assets

## 3D Models (`public/3d/models/`)

All models are `.glb`, content-hashed in filename (e.g. `office-077b4007.glb`). URLs are defined in `src/lib/3d-config/asset-manifest.ts`.

| File | Contents |
|---|---|
| `office-*.glb` | Main interior — desk, walls, monitors, furniture |
| `officeItems-*.glb` | Separate layer of items placed in office (allows independent update) |
| `officeWireframe-*.glb` | Wireframe overlay for specific scenes |
| `outdoor-*.glb` | Exterior environment — street, buildings, sky |
| `outdoorCars-*.glb` | Cars in the outdoor scene (separate for animation) |
| `routingElements-*.glb` | Invisible clickable planes, one per tab per scene |
| `godrays-*.glb` | Light shaft meshes (additive blend in global shader) |
| `character-model-*.glb` | Rigged character, used with InstancedSkinnedMesh |
| `pet-model-*.glb` | Rigged cat/dog character |
| `basketball-*.glb` | Basketball mesh |
| `basketballNet-*.glb` | Net mesh with physics |
| `contactPhone-*.glb` | Phone model in contact room |
| `christmas-tree-*.glb` | Seasonal — Christmas tree |

## Textures (`public/3d/textures/`)

Primarily lightmaps and AO maps baked per-scene section in Blender. Each `bakes[]` entry in the asset manifest references:
- `lightmap` — combined diffuse + light (.jpg/.webp)
- `ambientOcclusion` — AO map (.jpg/.webp)
- `meshes[]` — exact mesh names in the GLB that receive this bake

Matcap textures are also stored here, applied to specific meshes by name.

## Asset manifest (`src/lib/3d-config/asset-manifest.ts`)

Single source of truth for all runtime asset URLs. Exports `ASSETS_BASE` — a partial `AssetsResult` containing all URLs. Split into sections matching `AssetsResult` fields: models, bakes, matcaps, glass materials, double-side elements, video meshes, SFX, arcade assets, characters, pets.

## Inspectables (`src/lib/3d-config/inspectables-meta.ts`)

Each inspectable (clickable 3D object that zooms in and shows info) has two parts:

**In `inspectables-meta.ts` (code):**
```ts
{
  id: string          // unique key — must match Sanity inspectableId
  mesh: string        // exact mesh name in the GLB
  xOffset, yOffset    // camera offset when zoomed in
  xRotationOffset     // rotation offset
  sizeTarget          // zoom scale
  scenes: string[]    // which scene names it appears in
  fx: string          // URL to FX GLB (particles/effect shown on inspect)
}
```

**In Sanity (content):** title, specs array, description (PortableText)

The two halves are joined at runtime by `id` in `fetchAssetsLocal()`.

## Asset pipeline

```bash
pnpm assets:hash public/3d/models/mymodel.glb
# → renames to mymodel-<sha8>.glb, prints new URL

pnpm assets:verify
# → walks manifest, confirms every URL has a file on disk
```

All `/3d/*` paths are served with `Cache-Control: immutable, max-age=31536000`. Content-hashing is **required** — files at stable URLs will be served from CDN cache for up to a year.

## Audio (`public/3d/audio/`)

Ambient music (aqua, rain, tiger, vhs), SFX for basketball (swoosh, net, thump, buzzer), blog door (open/close, lamp pull/release), arcade buttons/sticks. URLs in `ASSETS_BASE.sfx`.

## Asset loading flow

1. `fetchAssets()` (server, cached with React `cache`) calls `fetchAssetsLocal()` (or Sanity if `ASSETS_SOURCE=sanity`)
2. Result passed to `<AssetsProvider assets={assets}>` in site layout
3. All 3D components call `useAssets()` to read URLs
4. `src/components/map/use-loader.ts` loads the GLBs via `useGLTF` / `useKtx2Gltf`
