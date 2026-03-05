export const cmsData = {
  site: {
    brandName: "SILVER BULLET®",
  },

  //  Home
  home: {
  hero: {
    title: { zh: "SILVER BULLET", en: "SILVER BULLET" },
    headline: {
      zh: "为世界减少不适\n以精准、快速、温和的方式，\n帮助身体回归平衡与舒适。",
      en: "In the fields of health & beauty, \nwe solve difficult problems\nin a simple way.",
    },
    subhead: {
      zh: "一个源于科学与人文的健康品牌\n专注于多用途、可持续的舒缓解决方案",
      en: "A science-driven health brand\ndedicated to versatile and gentle soothing solutions\nthat help the body return to balance.",
    },

    // ✅ 改按钮：只保留一个 View all
    ctaTitle: { zh: "Explore", en: "Explore" },
    viewAll: { zh: "查看全部", en: "View all" },
    viewAllPath: "/products",

    // ✅ 右侧轮播：图片 + 名称 + 跳转路径
    // 先放占位图，等你有真实图再换成 /assets/xxx.png
    carousel: [
      {
        key: "soothing-gel",
        name: { zh: "Soothing Gel", en: "Soothing Gel" },
        img: "/img/placeholder-soothing-gel.jpg",
        to: "/eu/products/soothing-gel",
      },
      {
        key: "coming-1",
        name: { zh: "More coming", en: "More coming" },
        img: "/img/placeholder-2.jpg",
        to: "/products",
      },
    ],
  },
},

  // About / Story
  about: {
    title: { zh: "关于 Silver Bullet®", en: "About Silver Bullet®" },
    body: {
      zh:
        "在西方文化中，“Silver Bullet”常被用来形容一种\n简单、直接、却极其有效的解决方案。\n\n而我们相信，它不只是一个隐喻。\n\nSilver Bullet® 诞生于对人体不适的长期观察与研究。\n我们致力于探索那些无需侵入、不过度干预，\n却能帮助身体恢复自我调节能力的方式。\n\n我们的目标并不是掩盖问题，\n而是帮助身体回到它本该处于的状态。",
      en:
        "In Western culture, the term “Silver Bullet” refers to\na solution that is simple, direct, and remarkably effective.\n\nWe believe it is more than a metaphor.\n\nSilver Bullet® was born from long-term observation and research into physical discomfort.\nWe focus on solutions that are non-invasive, restrained, and respectful to the body,\nsupporting its natural ability to restore balance.\n\nOur goal is not to override the body,\nbut to help it return to where it naturally belongs.",
    },
  },

  // Science / Philosophy
  science: {
    title: { zh: "科学与理念", en: "Science / Philosophy" },
    headline: { zh: "科学，是为了更温和的方式", en: "Science with restraint" },
    body: {
      zh:
        "Silver Bullet® 的所有产品理念，\n都建立在一个基本原则之上：\n\n真正有效的舒缓，不应以身体负担为代价。\n\n我们关注：\n\n温和但高效的作用路径\n来源清晰、结构稳定的天然活性成分\n与皮肤与身体高度兼容的使用体验\n\n科学在这里，不是为了制造刺激，\n而是为了减少不必要的消耗。",
      en:
        "All Silver Bullet® products are built on one core belief:\n\nTrue soothing should never come at the cost of the body.\n\nWe focus on:\n\nGentle yet effective mechanisms\nClearly sourced and stable natural actives\nHigh compatibility with skin and body\n\nScience, for us, is not about intensity,\nbut about reducing unnecessary strain.",
    },
    bullets: {
      zh: ["温和但高效的作用路径", "来源清晰、结构稳定的天然活性成分", "与皮肤与身体高度兼容的使用体验"],
      en: ["Gentle yet effective mechanisms", "Clearly sourced and stable natural actives", "High compatibility with skin and body"],
    },
  },

  // EU / Overview
eu: {
  overview: {
    title: { zh: "欧洲 · 化妆品系列", en: "Europe · Cosmetic Line" },
    body: {
      zh:
        "在欧洲，Silver Bullet® 以化妆品产品形式存在，\n专注于为身体与肌肤提供快速、精准的舒缓体验。\n\n所有产品：\n依照欧盟化妆品法规生产\n适用于全身与面部\n适合包括敏感肌在内的多种肤质\n\n欧洲业务由 FLKT 负责。",
      en:
        "In Europe, Silver Bullet® is offered as a cosmetic line,\nfocused on delivering fast and precise soothing experiences\nfor both body and skin.\n\nAll products:\nComply with EU cosmetic regulations\nAre suitable for face and body\nAre appropriate for all skin types, including sensitive skin\n\nEuropean operations are managed by FLKT.",
    },
    bullets: {
      zh: [
        "依照欧盟化妆品法规生产",
        "适用于全身与面部",
        "适合包括敏感肌在内的多种肤质",
        "欧洲业务由 FLKT 负责",
      ],
      en: [
        "Comply with EU cosmetic regulations",
        "Suitable for face and body",
        "For all skin types, including sensitive skin",
        "European operations are managed by FLKT",
      ],
    },
  },

  // ✅ 三个产品
  products: [
    {
      slug: "soothing-gel",
      images: ["/img/soothinggel.png"],
      line: "soothing",
      disclaimerNote: {
        zh: "⚠️ 这是网站版，不是包装说明书",
        en: "⚠️ This is website copy, not packaging instructions.",
      },
      name: { zh: "Silver Bullet® Soothing Gel", en: "Silver Bullet® Soothing Gel" },
      short: {
        zh: "一款为身体与肌肤设计的多用途舒缓凝胶。",
        en: "A versatile soothing gel designed for both body and face.",
      },
      description: {
        zh:
          "当肌肤感到紧绷、燥热或压力时，\nSoothing Gel 能迅速带来清爽、放松的感受，\n并支持肌肤的自然修护节律。\n\n虽然作用于肌肤表层，\n其舒缓体验却往往延伸至更深层的感受，\n带来整体的轻松与平衡。",
        en:
          "When skin experiences stress, tightness, or heat,\nSoothing Gel delivers a fast, refreshing calming sensation\nwhile supporting the skin’s natural renewal rhythm.\n\nThough applied topically,\nits soothing effect often resonates more deeply,\ncreating an overall sense of ease and balance.",
      },
      sections: [
        {
          key: "recommended",
          title: { zh: "适用场景", en: "Recommended for" },
          bullets: {
            zh: ["肌肤感到紧绷、燥热或不适时", "身体活动后需要放松的部位"],
            en: [
              "Areas of skin feeling stressed, tight, or warm",
              "Parts of the body that benefit from post-activity relaxation",
            ],
          },
        },
        {
          key: "features",
          title: { zh: "特点", en: "Key features" },
          bullets: {
            zh: ["质地清爽，不油腻", "适合成人与儿童使用", "适合所有肤质，包括敏感肌"],
            en: [
              "Lightweight, non-greasy texture",
              "Suitable for both adults and children",
              "Suitable for all skin types, including sensitive skin",
            ],
          },
        },
      ],
    },

    {
      slug: "post-procedure-gel",
      images: ["/img/postproceduresgel.png"],
      line: "post-procedures",
      disclaimerNote: {
        zh: "⚠️ 这是网站版，不是包装说明书",
        en: "⚠️ This is website copy, not packaging instructions.",
      },
      name: { zh: "Silver Bullet® Post-procedure Gel", en: "Silver Bullet® Post-procedure Gel" },
      short: {
        zh: "针对术后/项目后阶段的温和舒缓凝胶（站点预览文案）。",
        en: "A gentle gel for post-procedure soothing (site preview copy).",
      },
      description: {
        zh:
          "用于项目后阶段的舒缓与稳定体验，\n帮助肌肤回到更舒适的状态。\n\n（此页为站点预览文案，可后续按法规与品类进一步调整。）",
        en:
          "Designed for a calming and stabilizing experience after procedures,\nhelping skin return to a more comfortable state.\n\n(This is preview website copy and can be refined later by category and regulations.)",
      },
      sections: [
        {
          key: "recommended",
          title: { zh: "适用场景", en: "Recommended for" },
          bullets: {
            zh: ["项目后肌肤需要舒缓与安定时", "需要更温和触感的阶段性护理"],
            en: [
              "When skin needs soothing after procedures",
              "When a gentler touch is preferred during recovery phases",
            ],
          },
        },
        {
          key: "features",
          title: { zh: "特点", en: "Key features" },
          bullets: {
            zh: ["温和不刺激的使用体验", "适合敏感期肌肤（按实际配方为准）", "质地清爽易推开"],
            en: [
              "Gentle, non-harsh feel",
              "Suitable for sensitive phases (depending on final formula)",
              "Lightweight and easy to apply",
            ],
          },
        },
      ],
    },

    {
      slug: "anti-aging-gel",
      images: ["/img/antiaginggel.png"],
    line: "anti-aging",
      disclaimerNote: {
        zh: "⚠️ 这是网站版，不是包装说明书",
        en: "⚠️ This is website copy, not packaging instructions.",
      },
      name: { zh: "Silver Bullet® Anti-aging Gel", en: "Silver Bullet® Anti-aging Gel" },
      short: {
        zh: "针对日常肌肤状态管理的凝胶型护理（站点预览文案）。",
        en: "A gel-format daily skin support option (site preview copy).",
      },
      description: {
        zh:
          "用于日常的肌肤状态维护与舒适感管理，\n强调温和、稳定、可持续的使用体验。\n\n（此页为站点预览文案，可后续按法规与品类进一步调整。）",
        en:
          "Designed for daily skin comfort and condition support,\nfocusing on a gentle, stable, and sustainable experience.\n\n(This is preview website copy and can be refined later by category and regulations.)",
      },
      sections: [
        {
          key: "recommended",
          title: { zh: "适用场景", en: "Recommended for" },
          bullets: {
            zh: ["日常护理需要更轻薄的选择", "希望提升整体舒适感与稳定度"],
            en: [
              "Daily routine when a lighter option is preferred",
              "When aiming for overall comfort and stability",
            ],
          },
        },
        {
          key: "features",
          title: { zh: "特点", en: "Key features" },
          bullets: {
            zh: ["轻薄凝胶质地", "强调长期稳定使用体验", "适合多种肤质（按实际配方为准）"],
            en: [
              "Light gel texture",
              "Built for stable long-term use",
              "For multiple skin types (depending on final formula)",
            ],
          },
        },
      ],
    },
  ],
},
 // CN
  cn: {
  title: { en: "China", zh: "中国" },
  intro: {
    en:
      "China pages cover market-specific portfolio planning. Claims and disclosures will follow local regulatory requirements by category.",
    zh:
      "中国页面用于展示本地化产品规划与品牌信息。不同品类（化妆品/医疗器械等）的表述与披露将遵循当地法规要求。",
  },
  plan: {
    en: [
      "Phase 1: Imported EU cosmetics (market intro)",
      "Phase 1: Two Class II medical devices (local production)",
      "Phase 2: China cosmetics line (general + special cosmetics)",
    ],
    zh: [
      "一期：引进欧洲化妆品（进口）",
      "一期：两款中国二类医疗器械（本地生产）",
      "二期：中国化妆品系列（普通+特殊）",
    ],
  },
},

  // Floating Knight
  floatingKnight: {
    title: { zh: "Floating Knight：关于自我意识的隐喻", en: "Floating Knight: a metaphor of self-awareness" },
    body: {
      zh:"Floating Knight 的概念，源自伊本·西那提出的\n著名思想实验——“漂浮的人”。\n\n在这个实验中，\n一个人被剥夺了所有外界感官，\n却仍然能通过自我意识确认自身的存在。\n\nFloating Knight 正是这一理念的延伸：\n即便在失去一切外在参照的情况下，\n人仍能凭借内在的认知，确认“我是谁”。\n\nSilver Bullet® 正是在这样的哲学基础上诞生——\n关注身体的内在感受，\n而非过度依赖外部刺激。",
      en:"The concept of Floating Knight originates from\nthe famous thought experiment “The Floating Man” by Ibn Sina.\n\nIn this experiment, a man is deprived of all external senses,\nyet remains aware of his own existence through self-consciousness alone.\n\nThe Floating Knight extends this idea:\neven when external references are removed,\nidentity and awareness persist from within.\n\nSilver Bullet® is built on this philosophy—\nfocusing on internal perception and balance,\nrather than excessive external stimulation.",
    },
  },

  // Contact / Legal（简化）
  contact: {
    title: { zh: "联系我们", en: "Contact" },
    text:{zh:
        "如需了解更多产品或合作信息，\n欢迎与我们联系。",
      en:
        "For product or partnership inquiries,\nplease feel free to contact us.",},
    body: {
      zh:
        "Silver Bullet®\n品牌持有方：Floating Knight Biotech",
      en:
        "Silver Bullet®\nBranded by Floating Knight Biotech",
    },
  },

  // 合规（保留你之前的 market 分块结构）
  legal: {
    title: { zh: "合规与声明", en: "Legal & Disclaimers" },
    global: {
      zh: ["本网站用于品牌与产品信息展示；不同市场的可售情况与表述可能不同，请以产品标签与当地法规要求为准。"],
      en: ["This site is for brand and product information. Availability and claims may differ by market. Always follow label instructions."],
    },
    eu: {
      zh: ["EU/UK 页面描述的是化妆品信息，表述仅限于护肤舒适体验与化妆品功效语境，不包含或暗示医疗功效宣称。"],
      en: ["EU/UK pages describe cosmetic products. Claims are limited to cosmetic/comfort language; no medical claims are intended or implied."],
    },
    cn: {
      zh: ["中国页面信息将遵循当地法规要求；最终标签、宣称与披露以产品注册/备案及监管要求为准。"],
      en: ["China pages follow local regulatory requirements. Final labeling/claims will align with approved filings and local rules."],
    },
  },
};
