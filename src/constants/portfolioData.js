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
    tagline: 'Ekosistem Manajemen Perkebunan Presisi: Web Kanban Terintegrasi & Mobile App Offline-First.',
    description: 'Sistem aplikasi lapangan (Farm Management System) untuk operasional agroindustri perkebunan terbesar di Indonesia (Great Giant Foods). Mendukung kolaborasi tim via Web Kanban catatan lokasi, pemetaan plot GIS, pelaporan mandor offline-first, pelacakan GPS akurat, dan sinkronisasi data ribuan hektar perkebunan secara andal.',
    image: '/images/projects/ggf/ggf-web-kanban.png',
    mobileImage: '/images/projects/ggf/ggf-mobile.png',
    screenshots: [
      {
        url: '/images/projects/ggf/ggf-web-kanban.png',
        title: 'Web Kanban Catatan Lokasi & Monitoring Kolaboratif'
      },
      {
        url: '/images/projects/ggf/ggf-mobile.png',
        title: 'Mobile App Mandor Lapangan (Offline SQLite, Weather & GIS)'
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
    image: '/images/projects/rascal-republic-projects.jpg',
    screenshots: [
      {
        url: '/images/projects/rascal-republic-projects.jpg',
        title: 'Rascal Republic Projects Portfolio'
      }
    ],
    mockupType: 'macbook-bleed',
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
    id: 'samara-lombok',
    title: 'Samara Lombok',
    client: 'Samara Group (Destination by Hyatt)',
    eyebrow: 'LUXURY HOSPITALITY & REAL ESTATE',
    badge: 'Masterplanned Resort Portal',
    tagline: 'Portal Investasi Villa Mewah & Masterplanned Resort Seluas 150 Hektar di Lombok.',
    description: 'Platform digital eksklusif untuk Samara Lombok, destinasi hospitality dan investasi real estate terpadu seluas 150 hektar di Lombok Selatan. Mengintegrasikan showcase portofolio villa mewah (Samara Bay, Samara Beach, & Samara Hills), Destination by Hyatt pertama di Asia Tenggara, visual storytelling sinematik lanskap alam, serta enquiry funnel interaktif bagi investor internasional.',
    image: '/images/projects/samara/samara-aerial.jpg',
    mockupType: 'ipad-keyboard',
    screenshots: [
      {
        url: '/images/projects/samara/samara-aerial.jpg',
        title: 'Masterplan Aerial View'
      },
      {
        url: '/images/projects/samara/samara-villa.jpg',
        title: 'Koleksi Villa & Arsitektur'
      },
      {
        url: '/images/projects/samara/samara-resort.webp',
        title: 'Resort Lifestyle & Wellness'
      },
      {
        url: '/images/projects/samara/samara-map.jpg',
        title: 'Peta Lokasi & Aksesibilitas'
      }
    ],
    category: 'web',
    categoryLabel: 'Luxury Real Estate & Resort',
    techStack: ['WordPress Enterprise', 'Custom Theme Architecture', 'High-Res Media Streaming', 'Interactive Investor Funnel', 'Global CDN & Performance'],
    liveUrl: 'https://samaralombok.com/',
    demoUrl: null,
    githubUrl: null,
    isFeatured: true,
    specs: [
      { label: 'Role & Scope', value: 'High-Fidelity Web Engineering, Performance & Interactive Funnel' },
      { label: 'Kemitraan Global', value: 'Destination by Hyatt Pertama di Asia Tenggara & Rascal Voyages' },
      { label: 'Skala Kawasan', value: '150 Hektar Masterplan, 3 Hotel Butik, 500 Villa, & 12 F&B Outlets' },
      { label: 'Target Investor', value: 'High-Net-Worth International Buyers & Global Lifestyle Seekers' }
    ]
  },
  {
    id: 'polygon-bikes',
    title: 'Polygon Bikes',
    client: 'Polygon Bikes (PT Insera Sena)',
    eyebrow: 'GLOBAL MULTILINGUAL E-COMMERCE',
    badge: '10-Language Global Store',
    tagline: 'Mendorong Brand Sepeda Indonesia ke Panggung Global dengan E-Commerce Multibahasa.',
    description: 'Pengembangan dan pemeliharaan platform e-commerce global untuk Polygon Bikes (PT Insera Sena) yang mendistribusikan produknya ke 500+ outlet di 33 negara. Menghadirkan dukungan 10 bahasa (Asia-Pasifik, Eropa, hingga Amerika Serikat), fitur Custom Bike interaktif yang memungkinkan pelanggan merakit sepeda impian secara digital, Global Dealer Locator berbasis peta, serta optimasi performa server untuk lonjakan traffic internasional.',
    image: '/images/projects/polygon/polygon-banner.png',
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
        title: 'Katalog Sepeda Gunung'
      },
      {
        url: '/images/projects/polygon/polygon-collosus.jpg',
        title: 'Detail Seri Collosus DH'
      },
      {
        url: '/images/projects/polygon/polygon-dealer-map.jpg',
        title: 'Global Dealer Locator'
      }
    ],
    category: 'web',
    categoryLabel: 'Global Multilingual E-Commerce',
    techStack: ['WordPress Enterprise', 'WooCommerce Architecture', 'Multilingual Engine (10 Languages)', 'Custom Bike Configurator', 'Global Dealer Locator (33 Countries)', 'High-Traffic Server Optimization'],
    liveUrl: 'https://www.polygonbikes.com/',
    demoUrl: null,
    githubUrl: null,
    isFeatured: true,
    specs: [
      { label: 'Role & Scope', value: 'Global E-Commerce Architecture & Full Lifecycle Web Maintenance' },
      { label: 'Cakupan Global', value: 'Dukungan 10 Bahasa Meliputi Kawasan Asia-Pasifik, Eropa, & Amerika Serikat' },
      { label: 'Fitur Unggulan', value: 'Custom Bike Configurator Digital & Global Dealer Locator (500+ Outlet di 33 Negara)' },
      { label: 'Skalabilitas & SEO', value: 'WooCommerce Enterprise Skalabilitas Tinggi & Optimasi SEO Mesin Pencari Organik' }
    ]
  },
  {
    id: 'astra-motor',
    title: 'Astra Motor',
    client: 'Astra Motor (PT Astra International Tbk)',
    eyebrow: 'SHOWROOM & RETAIL ECOSYSTEM',
    badge: 'Dual Web Ecosystem',
    tagline: 'Pintu Digital Menjelajahi Showroom Motor Honda Tanpa Batas.',
    description: 'Pengembangan arsitektur web ganda (Main Dealer & Retail) untuk Astra Motor (PT Astra International Tbk – Honda Sales Operation). Menghadirkan showroom digital interaktif dengan katalog elektronik motor Honda lengkap dengan spesifikasi dan harga, pencari jaringan dealer terdekat berbasis peta interaktif, sistem keanggotaan (membership), serta kalkulator simulasi kredit transparan untuk calon konsumen di seluruh Indonesia.',
    image: '/images/projects/astra/astra-desktop-1.png',
    mockupType: 'dual',
    screenshots: [
      {
        url: '/images/projects/astra/astra-desktop-1.png',
        title: 'Showroom Digital & Home'
      },
      {
        url: '/images/projects/astra/astra-dealer-map.png',
        title: 'Peta Lokasi Dealer'
      },
      {
        url: '/images/projects/astra/astra-desktop-2.png',
        title: 'Katalog & Spesifikasi Motor'
      },
      {
        url: '/images/projects/astra/astra-desktop-3.png',
        title: 'Simulasi Kredit & Retail'
      },
      {
        url: '/images/projects/astra/astra-home.png',
        title: 'Laptop Showcase'
      }
    ],
    category: 'web',
    categoryLabel: 'Automotive Enterprise Portal',
    techStack: ['WordPress Enterprise', 'Custom PHP/MySQL', 'Interactive GIS Dealer Locator', 'Credit Financing Engine', 'SEO & Performance Architecture'],
    liveUrl: 'https://www.astramotor.co.id/',
    demoUrl: null,
    githubUrl: null,
    isFeatured: true,
    specs: [
      { label: 'Role & Scope', value: 'Full Web Design & Custom Enterprise Development (Main Dealer & Retail)' },
      { label: 'Dual System', value: 'Website Terpisah untuk Main Dealer Astra Motor dan Retail Astra Motor' },
      { label: 'Katalog & Dealer Map', value: 'E-Catalogue Spesifikasi/Harga Motor Honda & Interactive Dealer Locator' },
      { label: 'Fitur Khusus Retail', value: 'Sistem Keanggotaan Konsumen & Simulasi Angsuran/Kredit Transparan' },
      { label: 'Performa & SEO', value: 'Arsitektur Ramah Mesin Pencari (SEO-Friendly) & Kecepatan Akses Tinggi' }
    ]
  },
  {
    id: 'payaman-os',
    title: 'Payaman OS',
    client: 'Personal Project & Open Source Lab',
    eyebrow: 'RETRO COMPUTING EMULATION',
    badge: 'Classic Mac OS in Browser',
    tagline: 'Retro Monochrome Web-based Desktop OS terinspirasi Classic Macintosh System 6/7.',
    description: 'Sistem operasi desktop berbasis web yang merekayasa ulang pengalaman komputasi klasik Macintosh (System 6 & 7) secara otentik langsung di peramban. Dilengkapi pemutar musik iTunes retro dengan Web Audio API synth, monitor sistem real-time, widget analog clock, sticky notes yang dapat diatur ukurannya, game klasik Minesweeper & Snake 8-bit, serta window management berbasis kanvas 1-bit pixel art.',
    image: '/images/projects/payaman-os.png',
    mockupType: 'macbook',
    screenshots: [
      {
        url: '/images/projects/payaman-os.png',
        title: 'Desktop & Retro iTunes'
      }
    ],
    category: 'web',
    categoryLabel: 'Retro Web OS Emulation',
    techStack: ['JavaScript (ES6+)', 'Web Audio API Synth', 'Window Manager Architecture', '1-Bit Pixel Graphics Canvas', 'Virtual File System & State'],
    liveUrl: 'https://payamanos.vercel.app',
    demoUrl: 'https://payamanos.vercel.app',
    githubUrl: 'https://github.com/arifrohmanhakim/Payaman-OS',
    isFeatured: true,
    specs: [
      { label: 'Role & Scope', value: 'Creator & Lead System Architect' },
      { label: 'Audio Engine', value: 'Native Web Audio API Synthesizer & iTunes Retro Audio Player' },
      { label: 'Window Manager', value: 'Custom Multi-Window Drag, Resize, & Z-Index Virtual Desktop Manager' },
      { label: 'Aplikasi Bawaan', value: 'System Monitor, Stickies, Analog Clock, Minesweeper, & Snake 8-Bit' }
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
