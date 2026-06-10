// Local 3D config for the scene (camera, tabs, postprocessing, inspectables,
// physics). Edit these values directly — no CMS required.

interface Spec { specId?: string; title?: string; value?: string }
interface InspectableContent {
  inspectableId?: string
  title?: string
  specs?: Spec[]
  description?: unknown
}
interface CameraConfig {
  posX?: number; posY?: number; posZ?: number
  tarX?: number; tarY?: number; tarZ?: number
  fov?: number; targetScrollY?: number; offsetMultiplier?: number
}
interface Postprocessing {
  contrast?: number; brightness?: number; exposure?: number; gamma?: number
  vignetteRadius?: number; vignetteSpread?: number
  bloomStrength?: number; bloomRadius?: number; bloomThreshold?: number
}
interface SceneTab {
  tabName?: string; tabRoute?: string; tabHoverName?: string
  tabClickableName?: string; plusShapeScale?: number
}
interface SceneConfig {
  sceneName?: string
  cameraConfig?: CameraConfig
  postprocessing?: Postprocessing
  tabs?: SceneTab[]
}
interface PhysicsConfig { physicsParams?: { title?: string; value?: number }[] }

export interface ThreeDConfig {
  inspectables: InspectableContent[] | null
  scenes: SceneConfig[] | null
  physics: PhysicsConfig | null
}

export const LOCAL_3D_CONFIG: ThreeDConfig = {
  scenes: [
    {
      sceneName: "404",
      cameraConfig: {
        posX: 8.76, posY: 1.13, posZ: -13,
        tarX: 8.95, tarY: 1.12, tarZ: -13.83,
        fov: 20, targetScrollY: -1.5, offsetMultiplier: 0
      },
      postprocessing: {
        contrast: 1, brightness: 0.31, exposure: 0.54, gamma: 0.73,
        vignetteRadius: 0.8, vignetteSpread: 0.75,
        bloomStrength: 0, bloomRadius: 5, bloomThreshold: 10
      },
      tabs: []
    },
    {
      sceneName: "basketball",
      cameraConfig: {
        posX: 5.2, posY: 1.65, posZ: -7.7,
        tarX: 5.2, tarY: 2.2, tarZ: -12,
        fov: 50, targetScrollY: 0, offsetMultiplier: 0
      },
      postprocessing: {
        contrast: 1, brightness: 0.31, exposure: 0.54, gamma: 0.73,
        vignetteRadius: 0.8, vignetteSpread: 0.75,
        bloomStrength: 0.15, bloomRadius: 5, bloomThreshold: 10
      },
      tabs: [
        { tabName: "basketball_home_left", tabRoute: "home", tabHoverName: "Go Back Home", tabClickableName: "Basketball_Home_Left_Hover", plusShapeScale: 1 },
        { tabName: "basketball_home_right", tabRoute: "home", tabHoverName: "Go Back Home", tabClickableName: "Basketball_Home_Right_Hover", plusShapeScale: 1 }
      ]
    },
    {
      sceneName: "blog",
      cameraConfig: {
        posX: 12.3, posY: 4.27, posZ: -16.49,
        tarX: 11.43, tarY: 4.35, tarZ: -16.93,
        fov: 45.74, targetScrollY: 3.9, offsetMultiplier: 0.25
      },
      postprocessing: {
        contrast: 1, brightness: 0.31, exposure: 0.54, gamma: 0.73,
        vignetteRadius: 0.8, vignetteSpread: 0.75,
        bloomStrength: 0.15, bloomRadius: 5, bloomThreshold: 10
      },
      tabs: [
        { tabName: "showcase_hover", tabRoute: "showcase", tabHoverName: "Go to Showcase", tabClickableName: "BlogShowcase_Hover", plusShapeScale: 1 },
        { tabName: "home_hover", tabRoute: "/", tabHoverName: "Go Back Home", tabClickableName: "BlogHome_Hover", plusShapeScale: 1 },
        { tabName: "people_hover", tabRoute: "people", tabHoverName: "Go to People", tabClickableName: "BlogPeople_Hover", plusShapeScale: 1 }
      ]
    },
    {
      sceneName: "doom",
      cameraConfig: {
        posX: 8.154, posY: 1.236, posZ: -13,
        tarX: 8.154, tarY: 1.236, tarZ: -13.9,
        fov: 45, targetScrollY: 1.236, offsetMultiplier: 0
      },
      postprocessing: {
        contrast: 1, brightness: 0.32, exposure: 0.54, gamma: 0.73,
        vignetteRadius: 0.7, vignetteSpread: 0.75,
        bloomStrength: 0, bloomRadius: 5, bloomThreshold: 10
      },
      tabs: []
    },
    {
      sceneName: "home",
      cameraConfig: {
        posX: 6.26, posY: 1.16, posZ: -7.57,
        tarX: 5.93, tarY: 1.29, tarZ: -8.51,
        fov: 64.65, targetScrollY: -0.1, offsetMultiplier: 0.25
      },
      postprocessing: {
        contrast: 1, brightness: 0.31, exposure: 0.54, gamma: 0.73,
        vignetteRadius: 0.8, vignetteSpread: 0.75,
        bloomStrength: 0.15, bloomRadius: 5, bloomThreshold: 10
      },
      tabs: [
        { tabName: "services_1", tabRoute: "services", tabHoverName: "Go to Services", tabClickableName: "Services1_Hover", plusShapeScale: 1 },
        { tabName: "showcase", tabRoute: "showcase", tabHoverName: "Go to Showcase", tabClickableName: "Showcase_Hover", plusShapeScale: 1 },
        { tabName: "lab", tabRoute: "lab", tabHoverName: "Go to Lab", tabClickableName: "Laboratory_Hover", plusShapeScale: 1 },
        { tabName: "people", tabRoute: "people", tabHoverName: "Go to People", tabClickableName: "People_Hover", plusShapeScale: 1 },
        { tabName: "basketball", tabRoute: "basketball", tabHoverName: "Play Basketball", tabClickableName: "Game_Hover", plusShapeScale: 1 },
        { tabName: "blog", tabRoute: "blog", tabHoverName: "Go to Blog", tabClickableName: "Blog_Hover", plusShapeScale: 1 },
        { tabName: "services_2", tabRoute: "services", tabHoverName: "Go to Services", tabClickableName: "Services2_Hover", plusShapeScale: 1 }
      ]
    },
    {
      sceneName: "lab",
      cameraConfig: {
        posX: 2.96, posY: 1.05, posZ: -12.89,
        tarX: 2.96, tarY: 1.25, tarZ: -13.87,
        fov: 35.11, targetScrollY: 0, offsetMultiplier: 0
      },
      postprocessing: {
        contrast: 1, brightness: 0.31, exposure: 0.54, gamma: 0.73,
        vignetteRadius: 0.8, vignetteSpread: 0.75,
        bloomStrength: 0, bloomRadius: 5, bloomThreshold: 10
      },
      tabs: [
        { tabName: "laboratory_home_hover_a", tabRoute: "/", tabHoverName: "Go Back Home", tabClickableName: "LaboratoryHome_HoverA", plusShapeScale: 0.1 },
        { tabName: "laboratory_home_hover_b", tabRoute: "/", tabHoverName: "Go Back Home", tabClickableName: "LaboratoryHome_HoverB", plusShapeScale: 0.1 }
      ]
    },
    {
      sceneName: "people",
      cameraConfig: {
        posX: 2.41, posY: 5.29, posZ: -28.77,
        tarX: 3.46, tarY: 5.23, tarZ: -27.66,
        fov: 60.84, targetScrollY: 4.23, offsetMultiplier: 0.25
      },
      postprocessing: {
        contrast: 1, brightness: 0.31, exposure: 0.54, gamma: 0.73,
        vignetteRadius: 0.8, vignetteSpread: 0.75,
        bloomStrength: 0.15, bloomRadius: 5, bloomThreshold: 10
      },
      tabs: [
        { tabName: "PeopleBlog_Hover", tabRoute: "blog", tabHoverName: "Go to Blog", tabClickableName: "PeopleBlog_Hover", plusShapeScale: 1 },
        { tabName: "PeopleHome_Hover", tabRoute: "/", tabHoverName: "Go Back Home", tabClickableName: "PeopleHome_Hover", plusShapeScale: 1 }
      ]
    },
    {
      sceneName: "services",
      cameraConfig: {
        posX: 6, posY: 1.53, posZ: -10.21,
        tarX: 4.3, tarY: 1.53, tarZ: -7.88,
        fov: 55, targetScrollY: 0.8, offsetMultiplier: 0.5
      },
      postprocessing: {
        contrast: 1, brightness: 0.31, exposure: 0.54, gamma: 0.73,
        vignetteRadius: 0.8, vignetteSpread: 0.75,
        bloomStrength: 0.15, bloomRadius: 5, bloomThreshold: 10
      },
      tabs: [
        { tabName: "services_home", tabRoute: "/", tabHoverName: "Go Back Home", tabClickableName: "ServicesHome_Hover", plusShapeScale: 1 }
      ]
    },
    {
      sceneName: "showcase",
      cameraConfig: {
        posX: 7.03, posY: 4.89, posZ: -12.66,
        tarX: 4.03, tarY: 4.89, tarZ: -12.66,
        fov: 29.39, targetScrollY: 2.89, offsetMultiplier: 0.5
      },
      postprocessing: {
        contrast: 1, brightness: 0.31, exposure: 0.54, gamma: 0.73,
        vignetteRadius: 0.8, vignetteSpread: 0.75,
        bloomStrength: 0.15, bloomRadius: 5, bloomThreshold: 10
      },
      tabs: [
        { tabName: "ShowcaseHome_Hover", tabRoute: "/", tabHoverName: "Go Back Home", tabClickableName: "ShowcaseHome_Hover", plusShapeScale: 1 },
        { tabName: "ShowcasePeople_Hover", tabRoute: "/people", tabHoverName: "Go to People", tabClickableName: "ShowcasePeople_Hover", plusShapeScale: 1 }
      ]
    }
  ],

  physics: {
    physicsParams: [
      { title: "forward strength", value: 0.035 },
      { title: "upward strength", value: 0.085 }
    ]
  },

  inspectables: [
    {
      inspectableId: "sotd-01",
      title: "Nextjs. Conf - Site of the Day",
      specs: [
        { specId: "QC4xF9TZMWy4K0KmRCEnb", title: "Awarded For", value: "Site of the Day" },
        { specId: "jucuElGAuTIlRE7JPnMGh", title: "SOTD Score", value: "7.4" },
        { specId: "ytNvAbBZKJjIhq6QxQwWA", title: "Dev Award Score", value: "7.52" },
        { specId: "bj7ITOv5eBzmM3hVhzEvI", title: "Date", value: "Sep 16, 2024" },
        { specId: "wrWVhCdNYIayVgqX6Ay17", title: "Collaborators", value: "EvilRabbit, GennyDee, 0ca0a" }
      ],
      description: [{ _key: "BNIUMelL4U4h", _type: "block", style: "normal", markDefs: [], children: [{ _key: "MnDejHc7QttL", _type: "span", marks: [], text: "Next.js Conf: 'Award Site of the Day'—because we don't just build, we break the mold. Ready to see what happens when code meets creativity? It's bold, it's fresh, and it's here to set the bar. Let's go" }] }]
    },
    {
      inspectableId: "vc-ship",
      title: " Next JS Conf",
      specs: [
        { specId: "pP41z4pRhh9tQDRmqIpCd", title: "Purpose", value: "IRL Events" },
        { specId: "HtmZPlwTYioDLRQVJB6nQ", title: "Project", value: "Next.js Conf '24" },
        { specId: "L5ZpYfN49csZJ1MYWeYY1", title: "Recognition", value: "Awwward - Site of the Day" }
      ],
      description: [{ _key: "qYoz336-YYvd", _type: "block", style: "normal", markDefs: [], children: [{ _key: "BgsPmdbYJsHJ", _type: "span", marks: [], text: "Next.js Conf needed a stage for innovation, so we built one that matched the hype. And of course, we tossed in a game—because why not?" }] }]
    },
    {
      inspectableId: "dl-frame",
      title: "Daylight Computer",
      specs: [
        { specId: "a196e92e1c0597a009f53", title: "Type", value: "Storefront" },
        { specId: "4c7ef12fb09e43238fabf", title: "Project", value: "Daylight Computer Company" },
        { specId: "enzsQWdtsGv8F6fbcDxvS", title: "Recognition", value: "Site of the Day - Awwwards" },
        { specId: "muZUaDVae61zVuCagyPsR", title: "Year", value: "2024" }
      ],
      description: [{ _key: "1LEdudZnrGWH", _type: "block", style: "normal", markDefs: [], children: [{ _key: "zBT-omxeNhIs", _type: "span", marks: [], text: "What if sunlight could seep through your screen? Inspired by cozy shaders, here comes the sun—bringing warmth and clarity to your space. Simple, natural, and just the right touch of light. No filters, just pure daylight." }] }]
    },
    {
      inspectableId: "kiss-bag",
      title: "KidSuper World",
      specs: [
        { specId: "4652ce818adce37eef17e", title: "Type", value: "Storefront" },
        { specId: "92abadc82a312a2770d60", title: "Project", value: "KidSuper World" },
        { specId: "6UWzaSOaoBj5BNlT8GNMB", title: "Recognition", value: "Webby People's Voice Winner in Websites and Mobile Sites - Best Use of Animation or Motion Graphics" },
        { specId: "mcf69PNch9khuBCwLcFyM", title: "Year", value: "2024" }
      ],
      description: [{ _key: "hKAKeZQhCopm", _type: "block", style: "normal", markDefs: [], children: [{ _key: "uB39nTp-E3qF", _type: "span", marks: [], text: "An atelier igniting art, KidSuper World took shape—where an immersive 3d experience meets Brooklyn's raw creativity, blending sketches and pixels into a storefront that speaks for itself." }] }]
    },
    {
      inspectableId: "geist",
      title: "Geist Sans & Mono",
      specs: [
        { specId: "a2a4c43834475d66573d2", title: "Type", value: "Font Design" },
        { specId: "Ha0rlUHqRa6B107IMH1Wa", title: "Sans Usage", value: "5.46M" },
        { specId: "4204588c4add19569cad5", title: "Sans Glyphs", value: "825 " },
        { specId: "LcvXGCqNjK4h1Hh5VXPfv", title: "Mono Usage", value: "3.56M" },
        { specId: "0ZahvvDA3NnQEZE3dfNTH", title: "Mono Glyphs", value: "456" },
        { specId: "RL3VFs59zcB6zYKGeA9H6", title: "Languages Available", value: "491" },
        { specId: "qU8E6CJufvVWkQl2yNYMe", title: "Year", value: "2024" }
      ],
      description: [{ _key: "_d6VVUP6wxlD", _type: "block", style: "normal", markDefs: [], children: [{ _key: "Yvw9YXCBNCzk", _type: "span", marks: [], text: "Crafted in partnership with Vercel, we designed a typeface that speaks the language of developers. It's all about precision, disruption, and giving the community a tool to create without limits. A typography made to adapt, disrupt, and empower." }] }]
    },
    {
      inspectableId: "sm-06-06",
      title: "Rubik's Cube",
      specs: [
        { specId: "tVrMODLyVXXE9G6AjqvsZ", title: "Type", value: "Puzzle" },
        { specId: "YttlmnANPdsrRIWtN1FDG", title: "Units Sold", value: "450M" },
        { specId: "a51ea264fd2f8061d4378", title: "Creator", value: "Erno Rubik" },
        { specId: "WJkvgBkkRkDSPmG0RPv9U", title: "Number of Combinations", value: "43.252.003.274.489.856.000" },
        { specId: "796d7bab09117ef8398e7", title: "World Record by", value: "Yiheng Wang" },
        { specId: "Lw1SdAYtbHh8XMjFGpoM1", title: "World Record Time", value: "3.08s" }
      ],
      description: [{ _key: "qi8YJfmAGhHJ", _type: "block", style: "normal", markDefs: [], children: [{ _key: "XDiAvlLMCOW0", _type: "span", marks: [], text: "Thanks, Erno, for creating a puzzle that makes us question our life choices. Solving it in 3 seconds? Sure, we'll keep pretending." }] }]
    },
    {
      inspectableId: "termo",
      title: "Thermos",
      specs: [
        { specId: "epcvhttz3t6CRIQ05Pbmx", title: "Type", value: "Tool" },
        { specId: "A4IXp7LOWFZqNZlz86w1P", title: "Invented by", value: "Sir James Dewar" },
        { specId: "K87kv1j8kE3RAlKC1Fwuc", title: "Stickers", value: "Many" },
        { specId: "R9QL7yoMWPDGPzmUrn6Vl", title: "Served Mates", value: "351M and counting" },
        { specId: "xNVhusb8dJM3NjYzzBIBU", title: "Material", value: "Steel" }
      ],
      description: [{ _key: "SIJST_mPKsMs", _type: "block", style: "normal", markDefs: [], children: [{ _key: "FvABqWTKf5Ss", _type: "span", marks: [], text: "A vacuum flask, also known as a Dewar flask, Dewar bottle, or thermos flask, is an insulating storage container that allows the amount of time during which its contents remain hotter or colder than their surroundings to be greatly increased." }] }]
    },
    {
      inspectableId: "sm-07-02",
      title: "Rocket Espresso",
      specs: [
        { specId: "5659990191284c6903dc4", title: "Type", value: "Espresso Machine" },
        { specId: "kgewWHkrPU8L6N3aJ08xN", title: "Boiler Capacity", value: "1,80L" },
        { specId: "15917385aab38fb65ad42", title: "PID Pressure Control", value: "no" },
        { specId: "fULyrvYoHnTq55XXvycwJ", title: "Year", value: "2023" },
        { specId: "b6Y4FXMNgsnOTJCtdTUdz", title: "Material", value: "Steel" },
        { specId: "9hhb83piDTHLHbxy8B7vK", title: "Barista Mode", value: "On" }
      ],
      description: [{ _key: "tHve98Te0Zxf", _type: "block", style: "normal", markDefs: [], children: [{ _key: "ysxKDH1bUiig", _type: "span", marks: [], text: "Of course, we've got baristas in-house. Sure, we can't make latte art, but at least we've got the caffeine to make cool shit that performs." }] }]
    },
    {
      inspectableId: "mate",
      title: "Mate",
      specs: [
        { specId: "YgfGJT5Edb8Vy303Ptcsi", title: "Type", value: "Infusion" },
        { specId: "UZZgbroNwRwAv7YZ2IVLB", title: "Scientific Name", value: "Ilex Paraguariensis" }
      ],
      description: [{ _key: "wZoO_x5O2vXy", _type: "block", style: "normal", markDefs: [], children: [
        { _key: "1fdPq235oXE8", _type: "span", marks: [], text: "Yerba mate, traditionally served in a " },
        { _key: "yCGQvuiZFUvz", _type: "span", marks: ["strong"], text: "mate gourd" },
        { _key: "5I5mzRWVJrvr", _type: "span", marks: [], text: " with a bombilla, is prepared by steeping a small mound of dried yerba mate in hot water at approximately " },
        { _key: "2UTjruYkkHDS", _type: "span", marks: ["strong"], text: "80°C" },
        { _key: "yfLl3EuqZC9v", _type: "span", marks: [], text: ". This " },
        { _key: "TC1D_29sU6Tw", _type: "span", marks: ["strong"], text: "bitter, rich infusion" },
        { _key: "9EbY3MY6L-3A", _type: "span", marks: [], text: " is deeply rooted in tradition, offering an energizing and authentic experience with every sip." }
      ] }]
    },
    {
      inspectableId: "coffee",
      title: "Coffee Bag",
      specs: [
        { specId: "EyF3nTxxGnuX2NDAtez15", title: "Type", value: "Arabica" },
        { specId: "f1vB30a6PqYs6YOJCavb5", title: "Weight", value: "250g" },
        { specId: "T6qsaHsWl1g3aB76PiFGK", title: "Origin", value: "Colombia" },
        { specId: "KsXG3bPrHItYvY0CZbEYF", title: "Altitude", value: "1750m" },
        { specId: "Kta0Z3T1YnR3n9FbyWyxs", title: "Taste", value: "Bitter Chocolate, Red Fruits & Cacao Liquor\n" }
      ],
      description: [{ _key: "35ov8EjAIOWE", _type: "block", style: "normal", markDefs: [], children: [{ _key: "nCBTTu6Uma-W", _type: "span", marks: [], text: "Grab a coffee and dive into our posts – because let's be real, you've got time to spare. Plus, it's way better than scrolling aimlessly." }] }]
    },
    {
      inspectableId: "webby-kidsuper",
      title: "KidSuper Webby Award",
      specs: [
        { specId: "4ZSllGHrrliQ5CGzlQq1X", title: "Awarded by", value: "Webby Awards" },
        { specId: "4zjf2MmqAP5uRF1hga4je", title: "Awarded for", value: "Excellence on the Internet including Websites, Interactive Advertising, Online Film & Video and Mobile content." },
        { specId: "QjCFjp8MeAg5l9d5eebpv", title: "Category", value: "Visual Design" },
        { specId: "8a0ba835eff60b2d07285", title: "Manufacturer", value: "Webby Media Group" },
        { specId: "5a419a0ba4bf0016f6227", title: "Material", value: "Stainless steel" },
        { specId: "doLVAfTvdwl2qglXsx0bS", title: "Date", value: "2024" }
      ],
      description: [{ _key: "x_vSE9nSZv3c", _type: "block", style: "normal", markDefs: [], children: [{ _key: "t1Nrtav5egPB", _type: "span", marks: [], text: "Once, we built a website so cool for KidSuper that the Webby community couldn't resist. Brushes, painting, 3D magic, and a whole lot of craft—the internet had no idea what hit it, and we hit it twice. No pressure." }] }]
    },
    {
      inspectableId: "nextjs",
      title: "Conf Badge",
      specs: [
        { specId: "UQ1OlJw34PJDzelsQAnOb", title: "Type", value: "Conference" },
        { specId: "b71dwQVcfGJA6F9o6VJvf", title: "Project", value: "Nextjs Conf 24" },
        { specId: "i0TLbTEqJ1dxJ0AXkIq5I", title: "Recognition", value: "Awwwards Site of the Day" },
        { specId: "ErdLKj8Ui4rbJMByxtRiN", title: "Year", value: "2024" }
      ],
      description: [{ _key: "2rJAiwtku6rs", _type: "block", style: "normal", markDefs: [], children: [{ _key: "6C4_C71LP2_E", _type: "span", marks: [], text: "Make it work, Make it right, Make it fast." }] }]
    },
    {
      inspectableId: "sotd-02",
      title: "Daylight - Site of the Day ",
      specs: [
        { specId: "gGCywR3LMxitQQ0iScGGZ", title: "Awarded For", value: "Site of the Day" },
        { specId: "72ZqM1m2lmqtrMe6tbiju", title: "SOTD Score", value: "7.39" },
        { specId: "nY5J01A8Oz7MgJCb4aBXo", title: "Dev Award Score", value: "7.29" },
        { specId: "55557db39cdba65362cae", title: "Date", value: "Jun 18, 2024" }
      ],
      description: [{ _key: "4yAIvZvWdC9F", _type: "block", style: "normal", markDefs: [], children: [{ _key: "oqcyhYWsNJIL", _type: "span", marks: [], text: "Web builders submit their websites to Awwwards' platform for a chance to be recognized as the Site of the Day." }] }]
    },
    {
      inspectableId: "webby-mrbeast",
      title: "MrBeast Webby Award",
      specs: [
        { specId: "6b847d643ddac0899962b", title: "Awarded by", value: "International Academy of Digital Arts and Sciences" },
        { specId: "GZGdewKPeCZngzMbjhl9o", title: "Awarded for", value: "Excellence on the Internet including Websites, Interactive Advertising, Online Film & Video and Mobile content." },
        { specId: "Rhzev9jY2ALi0o1GNBgRx", title: "Category", value: "Visual Design" },
        { specId: "uMNtWDPUjpPTfqyhkr3qN", title: "Manufacturer", value: "Webby Media Group" },
        { specId: "fb53b08f35fc68109c330", title: "Material", value: "Stainless steel" },
        { specId: "7K6tfBJh4y8RhGHeE7LDQ", title: "Date", value: "2023" }
      ],
      description: [
        { _key: "MrY6IsiF-p1y", _type: "block", style: "normal", markDefs: [], children: [
          { _key: "z4J2hkHHj3bj", _type: "span", marks: [], text: "- Can you deliver MrBeast style?" },
          { _key: "v_Sc4feYPEUa", _type: "span", marks: [], text: "\n" },
          { _key: "hGmBmSe-tuoL", _type: "span", marks: [], text: "- We built the beast—no big deal. " }
        ] },
        { _key: "SwsZj8Nid6em", _type: "block", style: "normal", markDefs: [], children: [
          { _key: "xQP0HpnQuZsv", _type: "span", marks: [], text: "MrBeast's fans got what they wanted, and we got the trophy. Millions of clicks, zero downtime. Just the way we like it." }
        ] }
      ]
    },
    {
      inspectableId: "patas",
      title: "Patas",
      specs: [
        { specId: "0dcd301440badc29c30a9", title: "Project", value: "Basement Chronicles" },
        { specId: "f745152fba5b8618ab140", title: "Purpose", value: "Save the World" },
        { specId: "rECfa9ZEHFVxkg3PA0VyT", title: "Best Friend", value: "Theo" },
        { specId: "euRNXfN5F6iNlbRm8GOCt", title: "Operative System", value: "Unknown" },
        { specId: "mCWi4Uw6JbI2kckRQIs2r", title: "Case", value: "Macintosh" },
        { specId: "es2vPAeY4cMmf4WwbkbHp", title: "RAM", value: "128kb" },
        { specId: "OUXIbv9kDLkgNuAcMxjMB", title: "Recognition", value: "Awwward - Site of the Day" }
      ],
      description: [{ _key: "MrY6IsiF-p1y", _type: "block", style: "normal", markDefs: [], children: [{ _key: "NUjl9Ht8fAKQ", _type: "span", marks: [], text: "Meet Patas, your digital mate. Half glitch, half genius, and 100% troublemaker. Born in Basement Chronicles, she is here to outsmart malware and explore the web's hidden corners. Curiosity's never a bug, it's a feature." }] }]
    },
    {
      inspectableId: "edglrd",
      title: "EDGLRD SK8",
      specs: [
        { specId: "ZPLmqh1qcEYZY8JfbqFHk", title: "Type", value: "Branding & Website" },
        { specId: "TbSMwF6H8txRpGFRJwFM7", title: "Project", value: "Edglrd" },
        { specId: "17Sve7NLAJXgBjQ6uptez", title: "Director", value: "Harmony Korine" },
        { specId: "0fHr0Iq1ZowIQY47FENPE", title: "Year", value: "2023" }
      ],
      description: [{ _key: "Schjx05kXwDf", _type: "block", style: "normal", markDefs: [], children: [
        { _key: "Yc9YiV3Eog4R", _type: "span", marks: [], text: "We partnered with " },
        { _key: "gqHsZ0fg0HUP", _type: "span", marks: ["strong"], text: "EDGLRD" },
        { _key: "oHiHIjqYm43f", _type: "span", marks: [], text: ", the new IP-based studio led by " },
        { _key: "iPJGxdbwjqXY", _type: "span", marks: ["strong"], text: "Harmony Korine" },
        { _key: "MpPzJqRKaFAB", _type: "span", marks: [], text: ", to craft a brand identity that embodies its raw vision. By creating digital chaos, EDGLRD is redefining the game—one manic creation at a time." }
      ] }]
    },
    {
      inspectableId: "pink-floyd",
      title: "The Dark Side of the Moon",
      specs: [
        { specId: "d8fcc3f4c81244e3fc534", title: "Released", value: "1 March 1973" },
        { specId: "3NIKgrGRet2pBt2YCpEbt", title: "Recorded", value: "31 May 1972 – 9 February 1973" },
        { specId: "bt0TnTBhmmcl1vBao2UlG", title: "Length", value: "42:50" },
        { specId: "xC7s6kVfeEeWNdAVQcFCN", title: "Genre", value: "Progressive Rock" },
        { specId: "IN957hejsYDEWQe7ywOUb", title: "Times Played", value: "30 million+ on streaming platforms—and counting" },
        { specId: "B8b6QYLDMNaxSgsVaYgLo", title: "Awards", value: "Grammy Hall of Fame, among countless others." },
        { specId: "njJpRKdDGSxjzNKf5Lkpz", title: "Producer", value: "Pink Floyd" }
      ],
      description: [{ _key: "mO-2sjLKbm0B", _type: "block", style: "normal", markDefs: [], children: [{ _key: "5C7yWfuOyyyT", _type: "span", marks: [], text: "Facundo's over there, chilling on the dark side of the moon, soaking in Gilmour's solos, while Jose is vibing to Bad Bunny, bringing the heat with every beat. We're just riding the wave of difference, but somehow, it all works. Oh, and Facundo got a photo with Pink Floyd's drummer, Nick Mason—no big deal, just casually hanging with legends." }] }]
    },
    {
      inspectableId: "swaggersouls",
      title: "SwaggerSouls Plushie",
      specs: [
        { specId: "uRzTI3PFkrIfe5ELL3lCp", title: "Type", value: "Storefront" },
        { specId: "fDTAxwwgNGESFxXMG3sDk", title: "YouTube Subscribers", value: "4.88M" },
        { specId: "zPhdIHuTH1zIelHDcLXkk", title: "Project", value: " Website design" },
        { specId: "BpSXUCtcFdcqTDlCQiJB8", title: "Plushie Voice Lines", value: "15" },
        { specId: "9TnHUVosh6n9yAHnbGY6H", title: "Year", value: "2021" }
      ],
      description: [{ _key: "TruArtColv8m", _type: "block", style: "normal", markDefs: [], children: [{ _key: "KOhXWSvGEm6W", _type: "span", marks: [], text: "We unleashed the Beast. No rules, no slowing down, just the kind of retro-vibes we love. Cool merch, mini-games, and worldwide subscribers." }] }]
    },
    {
      inspectableId: "mr-beast",
      title: "Shop MrBeast",
      specs: [
        { specId: "5T8vMmuFht1JxurgxDrud", title: "Type", value: "Storefront" },
        { specId: "U0H7HiashMSrpCcGYNT1K", title: "YouTube Subscribers", value: "373M and Counting..." },
        { specId: "VFtOVAKffgADeAecTeYHi", title: "Project", value: "Shop MrBeast" },
        { specId: "TXMqqcHmt5ev5Fg1UCyfv", title: "Recognition", value: "Webby People's Voice Winner in Websites and Mobile Sites - Shopping & Retail / Awwwards – Site of the Day" },
        { specId: "qixkziQn9lOFh47fCBbSt", title: "Year", value: "2022" }
      ],
      description: [{ _key: "x_vSE9nSZv3c", _type: "block", style: "normal", markDefs: [], children: [{ _key: "5C7yWfuOyyyT", _type: "span", marks: [], text: "We unleashed the Beast. No rules, no slowing down, just the kind of retro-vibes we love. Cool merch, mini-games, and worldwide subscribers." }] }]
    },
    {
      inspectableId: "vercel-ship-2324",
      title: "Vercel Ship Conf",
      specs: [
        { specId: "bede9a30f59dcc19d06dc", title: "Type", value: "IRL Event" },
        { specId: "4aca261e148efdaad921d", title: "Project", value: "Vercel Ship '24" },
        { specId: "qmxz30Chgphh3ruTzk3VO", title: "Global Attendees", value: "+70K" },
        { specId: "c9dSzExeHi4UrhP5OTbGL", title: "IRL Attendees", value: "1000" },
        { specId: "biqMleLuijLtlciaGYbU2", title: "Year", value: "2024" },
        { specId: "KwoGH1yNpa6XacnoKfWkm", title: "Location", value: "NYC" }
      ],
      description: [{ _key: "tr5QLcgDrc8S", _type: "block", style: "normal", markDefs: [], children: [
        { _key: "wEZJLhK5h09k", _type: "span", marks: [], text: "We worked with Vercel for Ship, a gathering of the brightest minds shaping the future of AI and developer experience, to create a brand identity that speaks directly to real builders. This isn't just another tech event—it's where innovation goes from cool to next" },
        { _key: "1twVfAJF_6Uu", _type: "span", marks: ["em"], text: " " },
        { _key: "Sr5Yy35bwXh-", _type: "span", marks: [], text: "level." }
      ] }]
    }
  ]
}
