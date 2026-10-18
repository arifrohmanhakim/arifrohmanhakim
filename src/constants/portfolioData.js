export const PROFILE_DATA = {
  name: 'Arif Rohman Hakim',
  handle: 'arifrohmanhakim',
  role: 'Full Stack & Mobile Engineer',
  tagline: 'Building enterprise-grade offline-first mobile systems and high-performance modern web platforms.',
  location: 'Yogyakarta, Indonesia',
  timezone: 'WIB (UTC+7)',
  email: 'arifrohmanhakim@live.com',
  phone: '082233555753',
  whatsappUrl: 'https://wa.me/6282233555753',
  resumeUrl: 'https://drive.google.com/file/d/1MRor6B_IA7Z5MiTHYDCfdzkPkErTxaCV/view?usp=sharing',
  avatarUrl: 'https://avatars.githubusercontent.com/u/86143789?v=4',
  githubUrl: 'https://github.com/arifrohmanhakim',
  linkedinUrl: 'https://www.linkedin.com/in/arif-rohman-hakim/',
  upworkUrl: 'https://www.upwork.com/freelancers/~012a82c5794a5bc843',
  websiteUrl: 'https://payamanos.vercel.app',
  availableForHire: true,
  summaryCode: {
    specialties: ['React Native', 'React.js', 'Offline SQLite', 'TypeScript'],
    focus: 'Enterprise Scalability & Offline-First Systems',
    interests: ['GIS & Spatial Mapping', 'Retro Computing Emulation', 'Audio Synthesis']
  }
};

export const PROJECTS_DATA = [
  {
    id: 'ggf-fms',
    title: 'Field Management System',
    client: 'Great Giant Foods (GGF)',
    eyebrow: 'ENTERPRISE MOBILE PLATFORM',
    badge: 'Production Enterprise',
    year: '2022 — 2024',
    role: 'Lead Mobile Engineer',
    primaryStack: ['React Native', 'Offline SQLite', 'GIS / Maps'],
    tagline: 'Precision agriculture mobile platform with offline-first sync.',
    description: 'Field Management System (FMS) is a mission-critical digital platform built to optimize on-field fertilizer planning and operational activities with high precision based on R&D digital recommendations, satellite GIS, and weather simulation.',
    scopeNote: 'Client project (Enterprise). Led mobile client architecture, local SQLite schema, and background sync engine.',
    image: '/images/projects/ggf/ggf-land.webp',
    mobileImage: '/images/projects/ggf/ggf-mobile.png',
    mobileImageSecond: '/images/projects/ggf/ggf-mobile2.png',
    screenshots: [
      {
        url: '/images/projects/ggf/ggf-web-kanban.png',
        title: 'Collaborative Location & Field Monitoring Kanban'
      },
      {
        url: '/images/projects/ggf/ggf-mobile.png',
        title: 'Field Supervisor Mobile App (Offline SQLite, Weather & GIS)'
      }
    ],
    mockupType: 'mobile',
    category: 'mobile',
    categoryLabel: 'Enterprise Mobile App',
    techStack: ['React Native', 'Offline SQLite', 'GIS / Maps', 'Background GPS', 'RESTful API'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ggfsystem.fmsmobile&hl=id',
    demoUrl: null,
    githubUrl: null,
    isFeatured: true,
    caseStudy: {
      problem: 'Plantation field supervisors operate across thousands of hectares with unstable or zero cellular reception. Traditional online reporting resulted in severe delays, lost field notes, and inability to access drone/NDVI fertilizer recommendations on-site.',
      solution: 'Architected an offline-first mobile client with React Native and custom SQLite schemas. Implemented background delta synchronization with automatic conflict resolution, spatial vector map tile caching, and robust background GPS logging.',
      impact: 'Eliminated manual paper inspection, achieving 0% field data loss across 1,000+ hectares with real-time agronomic decision-making upon sync.'
    },
    specs: [
      { label: 'Role & Scope', value: 'Mobile Client Architecture & Core React Native Engineering' },
      { label: 'Deployment', value: 'Google Play Store (Enterprise Production Scale)' },
      { label: 'Data Architecture', value: 'Offline-First SQLite Cache & Background Delta Sync' },
      { label: 'Field Impact', value: 'Digitized field mandor inspections across thousands of plantation hectares' }
    ]
  },
  {
    id: 'centris-ai',
    title: 'Centris.ai',
    client: 'Centris AI Platform',
    eyebrow: 'AI AGENT & OMNICHANNEL CRM',
    badge: 'AI Cloud Platform',
    year: '2024',
    role: 'Frontend & Mobile Integrator',
    primaryStack: ['React.js', 'WebSocket', 'Google OAuth'],
    tagline: 'Next-generation AI customer relationship platform & sales automation.',
    description: 'Modern CRM ecosystem uniting artificial intelligence sales agents, omnichannel messaging streams, Google OAuth authentication flow, visual high-velocity lead pipelines, and automated customer routing.',
    scopeNote: 'Core contributor for web client dashboard, real-time WebSocket state management, and mobile client synchronization.',
    image: '/images/projects/centris/centris-hero.png',
    screenshots: [
      {
        url: '/images/projects/centris/centris-hero.png',
        title: 'Centris AI Platform Hero Dashboard'
      },
      {
        url: '/images/projects/centris/centris-1.jpg',
        title: 'Omnichannel CRM & Pipeline Showcase'
      }
    ],
    mockupType: 'dual',
    category: 'ai',
    categoryLabel: 'AI & CRM Platform',
    techStack: ['React.js', 'React Native', 'AI Agent Pipeline', 'Google OAuth', 'WebSocket', 'Tailwind CSS'],
    liveUrl: 'https://centris.ai/',
    demoUrl: 'https://centris.ai/',
    githubUrl: null,
    isFeatured: true,
    caseStudy: {
      problem: 'Handling multiple conversational customer leads concurrently across messaging channels required instant updates without page refreshing and secure multi-tier authentication.',
      solution: 'Engineered responsive React interface backed by full-duplex WebSocket connections for live pipeline updates and unified Google OAuth 2.0 client authentication.',
      impact: 'Enabled sub-second lead routing and real-time CRM updates for active commercial sales teams.'
    },
    specs: [
      { label: 'Role & Scope', value: 'Frontend Web & Mobile Client Integration Engineer' },
      { label: 'Authentication', value: 'Secure Google Sign-In & OAuth 2.0 Client Architecture' },
      { label: 'Pipeline Engine', value: 'Real-time WebSocket Pipeline & Automated AI Routing' },
      { label: 'Platforms', value: 'Web Cloud Dashboard & Mobile Client Sync' }
    ]
  },
  {
    id: 'astra-motor',
    title: 'Astra Motor',
    client: 'Astra Motor (PT Astra International Tbk)',
    eyebrow: 'SHOWROOM & RETAIL ECOSYSTEM',
    badge: 'Dual Web Ecosystem',
    year: '2021',
    role: 'Web Engineer',
    primaryStack: ['WordPress Enterprise', 'PHP/MySQL', 'Interactive GIS'],
    tagline: 'Dual digital portal connecting Honda motor showrooms across Indonesia.',
    description: 'Digital showroom platform featuring an e-catalogue of Honda motorcycles with comprehensive technical specs, interactive location-based dealer finder, customer membership portal, and transparent installment credit financing calculators.',
    scopeNote: 'Agency engagement. Engineered dual portal architecture (Main Dealer and Retail), interactive GIS locator, and custom PHP credit calculation engine.',
    image: '/images/projects/astra/astra-desktop-1.png',
    mockupType: 'dual',
    screenshots: [
      {
        url: '/images/projects/astra/astra-desktop-1.png',
        title: 'Digital Showroom & Home'
      },
      {
        url: '/images/projects/astra/astra-dealer-map.png',
        title: 'Interactive Dealer Map'
      },
      {
        url: '/images/projects/astra/astra-desktop-2.png',
        title: 'Honda Motorcycle Catalogue & Specs'
      },
      {
        url: '/images/projects/astra/astra-desktop-3.png',
        title: 'Credit Simulator & Retail Portal'
      }
    ],
    category: 'web',
    categoryLabel: 'Automotive Enterprise Portal',
    techStack: ['WordPress Enterprise', 'Custom PHP/MySQL', 'Interactive GIS Dealer Locator', 'Credit Financing Engine', 'SEO & Performance Architecture'],
    liveUrl: 'https://www.astramotor.co.id/',
    demoUrl: null,
    githubUrl: null,
    isFeatured: true,
    caseStudy: {
      problem: 'Prospective motorcycle buyers needed an easy way to locate nearest certified dealers, compare model specs, and calculate accurate installment options without manual dealership visits.',
      solution: 'Developed dual custom web architectures separating corporate Main Dealer requirements from customer Retail operations, incorporating a high-precision GIS dealer locator and dynamic credit calculation modules.',
      impact: 'Streamlined dealership discovery nationwide and elevated customer online financing simulations across all major Indonesian regions.'
    },
    specs: [
      { label: 'Role & Scope', value: 'Web Engineering (Main Dealer & Retail Portals)' },
      { label: 'Dual System', value: 'Separate portals for Main Dealer Corporate and Retail Operations' },
      { label: 'Catalogue & Locator', value: 'Interactive Motorcycle Specs & Real-time Dealer Map' },
      { label: 'Financing Engine', value: 'Transparent Credit Installment & Membership System' }
    ]
  },
  {
    id: 'polygon-bikes',
    title: 'Polygon Bikes',
    client: 'Polygon Bikes (PT Insera Sena)',
    eyebrow: 'GLOBAL MULTILINGUAL E-COMMERCE',
    badge: '10-Language Global Store',
    year: '2021',
    role: 'Web Engineer',
    primaryStack: ['WordPress Enterprise', 'WooCommerce', 'Multilingual (10 Langs)'],
    tagline: 'Global bicycle e-commerce platform across 500+ outlets worldwide.',
    description: 'International digital commerce platform for Polygon Bikes, supporting 10 languages spanning Asia-Pacific, Europe, and North America. Features custom digital bike configuration, global dealer locator mapping, and high-concurrency server tuning.',
    scopeNote: 'Full lifecycle web engineering, multilingual translation architecture, and server performance optimization during global traffic launches.',
    image: '/images/projects/polygon/polygon-banner1.jpg',
    mockupType: 'macbook-bleed',
    screenshots: [
      {
        url: '/images/projects/polygon/polygon-banner.png',
        title: 'Global Showcase Banner'
      },
      {
        url: '/images/projects/polygon/polygon-home.jpg',
        title: 'E-Commerce Homepage'
      },
      {
        url: '/images/projects/polygon/polygon-katalog.jpg',
        title: 'Mountain Bike Catalogue'
      },
      {
        url: '/images/projects/polygon/polygon-dealer-map.jpg',
        title: 'Global Dealer Locator'
      }
    ],
    category: 'web',
    categoryLabel: 'Global Multilingual E-Commerce',
    techStack: ['WordPress Enterprise', 'WooCommerce Architecture', 'Multilingual Engine (10 Languages)', 'Custom Bike Configurator', 'Global Dealer Locator', 'High-Traffic Optimization'],
    liveUrl: 'https://www.polygonbikes.com/',
    demoUrl: null,
    githubUrl: null,
    isFeatured: true,
    caseStudy: {
      problem: 'Distributing bikes to over 500 outlets in 33 countries created severe localization, catalogue synchronization, and traffic spikes during international model reveals.',
      solution: 'Configured robust multi-region WooCommerce infrastructure with automated translation sync, global dealer map integration, and aggressive asset caching.',
      impact: 'Seamless international browsing for riders across 10 languages with zero downtime during peak seasonal releases.'
    },
    specs: [
      { label: 'Role & Scope', value: 'Web Engineering & Multi-Region Web Maintenance' },
      { label: 'Global Footprint', value: '10 Languages serving Asia-Pacific, Europe, and North America' },
      { label: 'Key Features', value: 'Digital Custom Bike Configurator & 500+ Dealer Locator' },
      { label: 'Scalability', value: 'High-concurrency WooCommerce tuning with global CDN' }
    ]
  },
  {
    id: 'samara-lombok',
    title: 'Samara Lombok',
    client: 'Samara Group (Destination by Hyatt)',
    eyebrow: 'LUXURY HOSPITALITY & REAL ESTATE',
    badge: '150-Ha Masterplan Portal',
    year: '2023',
    role: 'Web Engineer',
    primaryStack: ['Custom Architecture', 'High-Res Media', 'Investor Funnel'],
    tagline: 'Exclusive digital showcase for South Lombok luxury masterplanned resort.',
    description: 'Digital platform for Samara Lombok, a 150-hectare integrated hospitality and luxury villa investment destination featuring Southeast Asia first Destination by Hyatt, cinematic storytelling, and private investor inquiry funnels.',
    scopeNote: 'Engineered high-fidelity responsive frontend, media streaming delivery, and interactive private investor lead capture funnel.',
    image: '/images/projects/samara/samara-aerial.jpg',
    mockupType: 'ipad-keyboard',
    screenshots: [
      {
        url: '/images/projects/samara/samara-aerial.jpg',
        title: 'Masterplan Aerial Overview'
      },
      {
        url: '/images/projects/samara/samara-villa.jpg',
        title: 'Luxury Villa Architecture Collection'
      },
      {
        url: '/images/projects/samara/samara-resort.webp',
        title: 'Resort Lifestyle & Wellness'
      }
    ],
    category: 'web',
    categoryLabel: 'Luxury Real Estate & Resort',
    techStack: ['WordPress Enterprise', 'Custom Theme Architecture', 'High-Res Media Streaming', 'Interactive Investor Funnel', 'Global CDN & Performance'],
    liveUrl: 'https://samaralombok.com/',
    demoUrl: null,
    githubUrl: null,
    isFeatured: true,
    caseStudy: {
      problem: 'High-net-worth international investors needed an ultra-luxurious, immersive web presentation with fast global loading speeds regardless of high-resolution aerial and villa video assets.',
      solution: 'Developed custom responsive theme optimized for smooth media streaming, lazy-loaded visual storytelling, and high-conversion private enquiry workflows.',
      impact: 'Connected international buyers to Lombok premier masterplanned resort, supporting multi-million dollar real estate inquiries.'
    },
    specs: [
      { label: 'Role & Scope', value: 'Web Engineering, Media Streaming & Investor Funnel' },
      { label: 'Global Partnership', value: 'First Destination by Hyatt in Southeast Asia & Rascal Voyages' },
      { label: 'Scale', value: '150 Hectare Masterplan, Boutique Hotels, & Luxury Villa Enclaves' }
    ]
  },
  {
    id: 'rascal-republic',
    title: 'Rascal Republic',
    client: 'Rascal Republic Group',
    eyebrow: 'LUXURY HOSPITALITY & EXPEDITIONS',
    badge: 'Luxury Web Experience',
    year: '2023',
    role: 'Web Engineer',
    primaryStack: ['Modern Web Architecture', 'Interactive Media', 'UI/UX Design'],
    tagline: 'Luxury private yacht charter & bespoke resort investment platform.',
    description: 'Digital platform for Rascal Republic world-class hospitality portfolio and Rascal Voyages, presenting bespoke phinisi yacht expeditions across Komodo and Raja Ampat with a private global investor portal.',
    scopeNote: 'Crafted fluid visual storytelling layout, interactive charter itineraries, and cross-device performance optimization.',
    image: '/images/projects/rascal-republic-projects.jpg',
    mockupType: 'macbook-bleed',
    screenshots: [
      {
        url: '/images/projects/rascal-republic-projects.jpg',
        title: 'Rascal Republic Projects Portfolio'
      }
    ],
    category: 'web',
    categoryLabel: 'Luxury Web Platform',
    techStack: ['Modern Web Architecture', 'Responsive UI/UX', 'Interactive Media', 'Performance Optimization'],
    liveUrl: 'https://rascalrepublic.com/',
    demoUrl: 'https://rascalrepublic.com/',
    githubUrl: null,
    isFeatured: true,
    caseStudy: {
      problem: 'Conveying the exclusivity of bespoke private yacht voyages required a refined aesthetic with zero visual clutter and intuitive route exploration.',
      solution: 'Built clean, media-rich interactive modules that illustrate cruising itineraries and vessel amenities smoothly on mobile and desktop devices.',
      impact: 'Elevated brand prestige and streamlined charter inquiries from international luxury travelers.'
    },
    specs: [
      { label: 'Role & Scope', value: 'Web Engineering & High-Fidelity UI Implementation' },
      { label: 'Audience', value: 'High-Net-Worth International Travelers & Luxury Expeditions' },
      { label: 'Experience', value: 'Ultra-Smooth Visual Storytelling & Itinerary Exploration' }
    ]
  },
  {
    id: 'payaman-os',
    title: 'Payaman OS',
    client: 'Open Source Lab & Side Project',
    eyebrow: 'RETRO COMPUTING EMULATION',
    badge: 'Classic Mac OS in Browser',
    year: '2024',
    role: 'Creator & Lead Architect',
    primaryStack: ['JavaScript (ES6+)', 'Web Audio API', 'Canvas 1-Bit'],
    tagline: 'Authentic 1-bit monochrome desktop OS inspired by Classic Macintosh System 6/7.',
    description: 'Browser-based operating system faithfully recreating the classic Macintosh desktop experience. Features a native Web Audio API synthesizer, custom draggable window manager, system resource monitor, sticky notes, and playable 8-bit games.',
    scopeNote: 'Independent experimental project showcasing deep browser API mastery, state architecture, and audio synthesis.',
    image: '/images/projects/payaman-os.png',
    mockupType: 'macbook',
    screenshots: [
      {
        url: '/images/projects/payaman-os.png',
        title: 'Desktop & Retro iTunes'
      }
    ],
    category: 'labs',
    categoryLabel: 'Retro Web OS Emulation',
    techStack: ['JavaScript (ES6+)', 'Web Audio API Synth', 'Window Manager Architecture', '1-Bit Pixel Graphics Canvas', 'Virtual File System & State'],
    liveUrl: 'https://payamanos.vercel.app',
    demoUrl: 'https://payamanos.vercel.app',
    githubUrl: 'https://github.com/arifrohmanhakim/Payaman-OS',
    isFeatured: false,
    specs: [
      { label: 'Role & Scope', value: 'Creator & Lead System Architect' },
      { label: 'Audio Engine', value: 'Native Web Audio API Synthesizer & Retro Player' },
      { label: 'Window Manager', value: 'Custom Multi-Window Drag, Resize, & Z-Index Virtual Desktop Manager' }
    ]
  }
];

export const EXPERIENCE_DATA = [
  {
    period: '2023 — Present',
    role: 'Frontend & Mobile Developer',
    company: 'Mandatech',
    location: 'Yogyakarta, Indonesia',
    highlights: [
      'Developed responsive web frontends using ReactJS and modern state architecture.',
      'Designed end-to-end UI/UX workflows for web and mobile platforms.',
      'Engineered cross-platform Android mobile applications using React Native.'
    ],
    tags: ['React.js', 'React Native', 'Android', 'UI/UX Design', 'TypeScript']
  },
  {
    period: '2019 — 2023',
    role: 'Frontend Developer',
    company: 'Sinarmulia',
    location: 'Indonesia',
    highlights: [
      'Built modern web frontends with ReactJS and robust reusable component libraries.',
      'Designed intuitive UI/UX for end-to-end enterprise application flows.',
      'Developed and maintained native-feeling Android applications with React Native.'
    ],
    tags: ['React.js', 'React Native', 'Component Libraries', 'UI/UX Design', 'Android']
  },
  {
    period: '2017 — 2019',
    role: 'WordPress Developer',
    company: 'Tonjoo',
    location: 'Yogyakarta, Indonesia',
    highlights: [
      'Converted high-fidelity HTML/CSS designs into bespoke, scalable WordPress themes.',
      'Developed custom WordPress plugins and optimized high-traffic client platforms (including Astra Motor and Polygon Bikes).'
    ],
    tags: ['WordPress', 'Custom Plugins', 'PHP', 'CSS/SCSS', 'MySQL']
  },
  {
    period: '2014 — 2017',
    role: 'Fullstack Developer',
    company: 'SmartIndo',
    location: 'Indonesia',
    highlights: [
      'Defined application concepts and designed comprehensive UI/UX solutions.',
      'Built backend REST APIs and integrated relational database architectures.',
      'Developed responsive web and Android frontends, deploying applications to production servers.'
    ],
    tags: ['Fullstack', 'PHP', 'REST APIs', 'Android', 'Deployment']
  }
];

export const CORE_TECH_STACK = [
  { name: 'React Native', category: 'Mobile Architecture', level: 'Expert' },
  { name: 'Offline SQLite', category: 'Data & Sync Engine', level: 'Specialist' },
  { name: 'React.js / Next.js', category: 'Modern Web Apps', level: 'Expert' },
  { name: 'TypeScript', category: 'Typed Systems', level: 'Proficient' },
  { name: 'GIS / Spatial Maps', category: 'Mapping & GeoJSON', level: 'Specialist' },
  { name: 'REST & WebSockets', category: 'Network Pipelines', level: 'Proficient' }
];

export const SERVICES_DATA = [
  {
    iconName: 'Smartphone',
    title: 'Offline-First Mobile Systems',
    desc: 'Engineering robust React Native applications designed for zero-connectivity field conditions: localized SQLite caching, delta synchronization, and sub-60 FPS performance.'
  },
  {
    iconName: 'Layout',
    title: 'Modern Web Architecture',
    desc: 'Crafting responsive, accessible web platforms using React and modern CSS systems that combine visual elegance with lightning-fast load times and clean modular code.'
  },
  {
    iconName: 'Server',
    title: 'Full Stack & Real-Time Sync',
    desc: 'Connecting intuitive client frontends with reliable backend foundations, real-time WebSocket pipelines, and secure OAuth 2.0 authentication flows.'
  },
  {
    iconName: 'Sparkles',
    title: 'Creative Systems & Audio Web',
    desc: 'Exploring creative engineering frontiers: browser-based retro OS emulations, custom canvas window managers, and native Web Audio API synthesis.'
  }
];

export const CATEGORY_FILTERS = [
  { key: 'all', label: 'All Projects', count: 7 },
  { key: 'mobile', label: 'Mobile Apps', count: 1 },
  { key: 'web', label: 'Enterprise Web', count: 4 },
  { key: 'ai', label: 'AI & SaaS', count: 1 },
  { key: 'labs', label: 'Labs & Open Source', count: 1 }
];

export const PROJECT_CATEGORY_TABS = CATEGORY_FILTERS;

