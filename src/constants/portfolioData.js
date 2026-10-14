export const PROFILE_DATA = {
  name: 'Arif Rohman Hakim',
  handle: 'arifrohmanhakim',
  role: 'Full Stack & Mobile Engineer',
  tagline: 'Membangun aplikasi web interaktif, sistem mobile inovatif, dan open source tools berkualitas tinggi.',
  location: 'Yogyakarta, Indonesia',
  avatarUrl: 'https://avatars.githubusercontent.com/u/86143789?v=4',
  githubUrl: 'https://github.com/arifrohmanhakim',
  linkedinUrl: 'https://www.linkedin.com/in/arif-rohman-hakim/',
  upworkUrl: 'https://www.upwork.com/freelancers/~012a82c5794a5bc843',
  websiteUrl: 'https://payamanos.vercel.app',
  availableForHire: true,
  summaryCode: {
    specialties: ['React', 'React Native', 'TypeScript', 'Next.js'],
    focus: 'High Performance & Clean UI/UX',
    interests: ['Retro OS Emulation', 'GIS & Maps', 'Visual Query Builders']
  }
};

export const PROJECTS_DATA = [
  {
    id: 'ggf-fms',
    title: 'GGF FMS Mobile',
    client: 'Great Giant Foods (GGF)',
    eyebrow: 'ENTERPRISE MOBILE SYSTEM',
    badge: 'Enterprise Production',
    tagline: 'Arsitektur Mobile Agrikultur Skala Industri untuk Great Giant Foods.',
    description: 'Sistem aplikasi lapangan (Farm Management System) untuk operasional agroindustri perkebunan terbesar di Indonesia. Mendukung pemetaan plot GIS, pelaporan mandor offline-first, pelacakan GPS akurat, dan sinkronisasi data ribuan hektar perkebunan secara andal.',
    image: '/images/projects/ggf-fms.jpg',
    category: 'mobile',
    categoryLabel: 'Enterprise Mobile App',
    techStack: ['React Native', 'Offline SQLite', 'GIS / Maps', 'Background GPS', 'RESTful API'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ggfsystem.fmsmobile&hl=id',
    demoUrl: null,
    githubUrl: null,
    isFeatured: true,
    specs: [
      { label: 'Role & Scope', value: 'Mobile Architecture & React Native Core Engineering' },
      { label: 'Distribution', value: 'Google Play Store (Production Enterprise)' },
      { label: 'Data Architecture', value: 'Offline-First SQLite Cache & Smart Background Sync' },
      { label: 'Field Impact', value: 'Mendigitalkan inspeksi mandor & monitoring ribuan hektar perkebunan' }
    ]
  },
  {
    id: 'centris-ai',
    title: 'Centris.ai',
    client: 'Centris AI Platform',
    eyebrow: 'AI AGENT & OMNICHANNEL CRM',
    badge: 'AI Cloud Platform',
    tagline: 'Platform CRM Berbasis AI & Otomasi Penjualan Generasi Baru.',
    description: 'Ekosistem CRM modern yang menggabungkan asisten kecerdasan buatan, integrasi multi-kanal, Google OAuth auth flow, pipeline leads visual berkecepatan tinggi, dan automasi komunikasi pelanggan cerdas.',
    image: '/images/projects/centris-ai.jpg',
    category: 'web',
    categoryLabel: 'AI & CRM Platform',
    techStack: ['React.js', 'React Native', 'AI Agent Pipeline', 'Google OAuth', 'WebSocket', 'Tailwind CSS'],
    liveUrl: 'https://centris.ai/',
    demoUrl: 'https://centris.ai/',
    githubUrl: null,
    isFeatured: true,
    specs: [
      { label: 'Role & Scope', value: 'Frontend & Mobile Integration Engineer' },
      { label: 'Authentication', value: 'Secure Google Sign-In & OAuth 2.0 Client Architecture' },
      { label: 'Pipeline Engine', value: 'Real-time WebSocket Pipeline & Automated AI Routing' },
      { label: 'Platforms', value: 'Web Cloud Dashboard & Mobile Client Sync' }
    ]
  },
  {
    id: 'rascal-republic',
    title: 'Rascal Republic',
    client: 'Rascal Republic Group',
    eyebrow: 'LUXURY HOSPITALITY & EXPEDITIONS',
    badge: 'Luxury Web Experience',
    tagline: 'Luxury Private Yacht Charter & Bespoke Resort Investment Platform.',
    description: 'Platform digital mewah untuk portofolio investasi pariwisata kelas dunia Rascal Republic & Rascal Voyages. Menghadirkan visual storytelling memukau, pemesanan ekspedisi yacht phinisi pribadi ke Raja Ampat & Komodo, dan portal investor global.',
    image: '/images/projects/rascal-republic.jpg',
    category: 'web',
    categoryLabel: 'Luxury Web Platform',
    techStack: ['Modern Web Architecture', 'Responsive UI/UX', 'Interactive Media', 'Performance Optimization'],
    liveUrl: 'https://rascalrepublic.com/',
    demoUrl: 'https://rascalrepublic.com/',
    githubUrl: null,
    isFeatured: true,
    specs: [
      { label: 'Role & Scope', value: 'Frontend Web Engineering & High-Fidelity UI' },
      { label: 'Target Audience', value: 'High-Net-Worth International Travelers & Private Investors' },
      { label: 'Core Experience', value: 'Ultra-Smooth Visual Storytelling & Private Charter Booking' },
      { label: 'Global Reach', value: 'Southeast Asia, Singapore, UK, & Australia Operations' }
    ]
  },
  {
    id: 'polygon-bikes',
    title: 'Polygon Bikes',
    client: 'Polygon Bikes Global',
    eyebrow: 'GLOBAL BRAND & E-COMMERCE',
    badge: 'Interactive Brand Portal',
    tagline: 'E-Commerce & Interactive Bike Geometry Selector untuk Brand Global.',
    description: 'Platform digital global brand sepeda Polygon. Menampilkan katalog model balap dan MTB presisi, kalkulator geometri ukuran rangka sepeda interaktif, dealer locator berbasis peta, dan performa web berkecepatan tinggi.',
    image: '/images/projects/polygon-bikes.jpg',
    category: 'web',
    categoryLabel: 'Interactive Brand Portal',
    techStack: ['React.js', 'Interactive Geometry Canvas', 'GIS Dealer Locator', 'Modern CSS Architecture'],
    liveUrl: null,
    demoUrl: null,
    githubUrl: null,
    isFeatured: true,
    specs: [
      { label: 'Role & Scope', value: 'Frontend UI/UX & Interactive Engine Development' },
      { label: 'Engineering Feature', value: 'Interactive Frame Geometry & Rider Sizing Calculator' },
      { label: 'Mapping & Retail', value: 'Dynamic Store Locator & Dealer Discovery' },
      { label: 'Optimization', value: 'Zero-Lag SVG Geometry Rendering & Asset Compression' }
    ]
  },
  {
    id: 'astra-motor',
    title: 'Astra Motor',
    client: 'Astra Motor (Honda Sales Operation)',
    eyebrow: 'AUTOMOTIVE DEALERSHIP ECOSYSTEM',
    badge: 'Automotive SaaS',
    tagline: 'Sistem Manajemen Dealer, Booking Servis & Digital Katalog Astra Motor Honda.',
    description: 'Sistem manajemen terintegrasi untuk dealer kendaraan Astra Motor Honda dan servis resmi AHASS. Mencakup pemantauan inventori unit realtime, simulasi kredit & pembiayaan, sistem reservasi antrean servis terjadwal, dan integrasi operasional customer service.',
    image: '/images/projects/astra-motor.jpg',
    category: 'web',
    categoryLabel: 'Automotive SaaS & Portal',
    techStack: ['React.js', 'Next.js', 'REST API', 'Real-time Scheduler', 'Tailwind CSS'],
    liveUrl: null,
    demoUrl: null,
    githubUrl: null,
    isFeatured: true,
    specs: [
      { label: 'Role & Scope', value: 'Full Stack Web & System Architecture' },
      { label: 'Core Capabilities', value: 'Unit Inventory, Digital Service Queue, Financing Calculator' },
      { label: 'Dealer Network', value: 'Integrasi Booking AHASS & Dealer Management System' },
      { label: 'Security & Access', value: 'Role-Based Authentication & Encrypted Customer Vault' }
    ]
  },
  {
    id: 'payaman-os',
    title: 'Payaman OS',
    client: 'Open Source Lab',
    eyebrow: 'RETRO SYSTEM EMULATION',
    badge: 'Featured Open Source',
    tagline: 'Retro, Monochrome Web-based Desktop OS terinspirasi Classic Mac OS.',
    description: 'Retro, monochrome web-based desktop operating system terinspirasi Classic Mac OS (System 6/7) dengan sintesis audio Web Audio API, pixel art 1-bit, dan arsitektur modular.',
    image: null,
    category: 'web',
    categoryLabel: 'Web Desktop OS',
    techStack: ['JavaScript', 'HTML5/Canvas', 'CSS Pixel Art', 'Web Audio Synth'],
    githubUrl: 'https://github.com/arifrohmanhakim/Payaman-OS',
    demoUrl: 'https://payamanos.vercel.app',
    isFeatured: false,
    specs: [
      { label: 'Role & Scope', value: 'Creator & Lead Architect' },
      { label: 'Audio Engine', value: 'Native Web Audio API Synthesizer' },
      { label: 'Rendering', value: '1-Bit Pixel Graphics Canvas & Window Manager' }
    ]
  }
];


export const SKILL_CATEGORIES = [
  {
    title: 'Frontend Development',
    items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 / Modern CSS', 'Zustand / Redux']
  },
  {
    title: 'Mobile Development',
    items: ['React Native', 'React Native for Web', 'Cross-Platform UI', 'Mobile Performance']
  },
  {
    title: 'Backend & Tools',
    items: ['Node.js', 'REST APIs', 'Vite', 'Git & GitHub Workflow', 'GeoJSON / GIS Mapping', 'AI Studio Integrations']
  },
  {
    title: 'Engineering Principles',
    items: ['Clean Architecture', 'Modular Separation of Concerns', 'Performance Optimization', 'Responsive & Accessible Web']
  }
];

export const CATEGORY_FILTERS = [
  { key: 'all', label: 'Semua Proyek' },
  { key: 'web', label: 'Web Applications' },
  { key: 'mobile', label: 'Mobile (React Native)' },
  { key: 'library', label: 'Libraries & Tools' },
  { key: 'backend', label: 'Backend' }
];
