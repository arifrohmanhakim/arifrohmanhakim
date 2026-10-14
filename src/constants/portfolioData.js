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
    id: 'payaman-os',
    title: 'Payaman OS',
    category: 'web',
    categoryLabel: 'Web Desktop OS',
    description: 'Retro, monochrome web-based desktop operating system terinspirasi Classic Mac OS (System 6/7) dengan sintesis audio Web Audio API, pixel art 1-bit, dan arsitektur modular.',
    techStack: ['JavaScript', 'HTML5/Canvas', 'CSS Pixel Art', 'Web Audio Synth'],
    githubUrl: 'https://github.com/arifrohmanhakim/Payaman-OS',
    demoUrl: 'https://payamanos.vercel.app',
    isFeatured: true
  },
  {
    id: 'animalpedia',
    title: 'Animalpedia Kids',
    category: 'web',
    categoryLabel: 'EdTech Web App',
    description: 'Aplikasi edukasi interaktif anak-anak untuk mengenal fauna dunia. Dibangun dengan konsep visual crayon warna-warni, responsif, dan kaya animasi mikro.',
    techStack: ['React', 'TypeScript', 'Vite', 'Zustand', 'Tailwind CSS'],
    githubUrl: 'https://github.com/arifrohmanhakim/animalpedia',
    demoUrl: null,
    isFeatured: true
  },
  {
    id: 'doit',
    title: 'Doit Digital Wallet',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    description: 'Aplikasi dompet digital (Digital Wallet) modern dengan navigasi intuitif, riwayat transaksi instan, dan performa tinggi pada platform Android & iOS.',
    techStack: ['React Native', 'TypeScript', 'Mobile UI', 'REST API'],
    githubUrl: 'https://github.com/arifrohmanhakim/doit',
    demoUrl: null,
    isFeatured: true
  },
  {
    id: 'rn-web-maps',
    title: 'react-native-web-maps',
    category: 'library',
    categoryLabel: 'Open Source Library',
    description: 'Implementasi React Native for Web untuk react-native-maps menggunakan Google Maps JavaScript SDK, menjembatani navigasi peta multiplatform.',
    techStack: ['React Native for Web', 'JavaScript', 'Google Maps API'],
    githubUrl: 'https://github.com/arifrohmanhakim/rn-web-maps',
    demoUrl: null,
    isFeatured: false
  },
  {
    id: 'sinau',
    title: 'Sinau AI Ebook',
    category: 'web',
    categoryLabel: 'AI & E-Learning',
    description: 'Platform pembaca dan pembelajaran buku interaktif yang terintegrasi dengan Google AI Studio untuk pemahaman konten mendalam.',
    techStack: ['TypeScript', 'Google AI Studio', 'React', 'Vite'],
    githubUrl: 'https://github.com/arifrohmanhakim/sinau',
    demoUrl: null,
    isFeatured: false
  },
  {
    id: 'react-easy-query-builder',
    title: 'React Easy Query Builder',
    category: 'library',
    categoryLabel: 'Frontend Tool',
    description: 'Komponen visual query builder untuk React yang memungkinkan pengguna menyusun aturan filter kompleks dengan logika bersarang secara mudah.',
    techStack: ['React', 'TypeScript', 'UI Component'],
    githubUrl: 'https://github.com/arifrohmanhakim/react-easy-query-builder',
    demoUrl: null,
    isFeatured: false
  },
  {
    id: 'ruangsemu',
    title: 'Ruangsemu Platform',
    category: 'web',
    categoryLabel: 'Web Platform',
    description: 'Aplikasi web modular berbasis Next.js App Router dengan rendering performan dan arsitektur skalabel.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/arifrohmanhakim/ruangsemu',
    demoUrl: null,
    isFeatured: false
  },
  {
    id: 'api-central',
    title: 'API Central Gateway',
    category: 'backend',
    categoryLabel: 'Backend Service',
    description: 'Layanan manajemen dan orkestrasi REST API untuk mengintegrasikan kebutuhan backend multi-layanan.',
    techStack: ['Node.js', 'Express', 'RESTful API', 'Microservices'],
    githubUrl: 'https://github.com/arifrohmanhakim/api-central',
    demoUrl: null,
    isFeatured: false
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
