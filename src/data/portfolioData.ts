export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  aspectClass: string;
  accentColor: string;
  overview: string;
  problemStatement: string;
  designGoals: string[];
  targetUsers: string;
  designProcess: {
    step: string;
    details: string;
  }[];
  wireframesSummary: string;
  keyDecisions: string[];
  outcomes: string[];
  interactiveType: 'banking' | 'ecommerce' | 'weather' | 'calculator';
}

export const PERSONAL_INFO = {
  name: 'Soham Ahuja',
  role: 'UI/UX Designer',
  location: 'Ahmedabad, Gujarat',
  email: 'sohamahuja2005@gmail.com',
  availability: 'Available for Opportunities',
  bio: "Hello, I'm Soham Ahuja — a creative UI/UX designer passionate about crafting beautiful, intuitive, and meaningful digital experiences. I transform ideas into visually engaging designs that make technology easier to use.",
  aboutExtended: [
    "I'm a passionate UI/UX designer who enjoys combining creativity, functionality, and technology to create meaningful digital experiences.",
    "My design approach focuses on understanding users, solving problems, and transforming complex ideas into simple and engaging interfaces.",
    "I believe great design is not only about appearance; it's about creating experiences that people enjoy using."
  ],
  stats: [
    { value: '04+', label: 'Creative Projects' },
    { value: '06+', label: 'Design Tools & Skills' },
  ],
  socials: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/soham-ahuja-b0ba902b5', handle: 'soham-ahuja-b0ba902b5' },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'mobile-banking',
    number: '01',
    title: 'Mobile Banking App',
    category: 'UI/UX Design',
    tagline: 'Modern banking for effortless financial wellness',
    description: 'A modern mobile banking experience designed to simplify financial management through intuitive navigation, clean layouts, and accessible interfaces.',
    image: '/assets/aistudio/image_faca2644.png',
    aspectClass: 'aspect-[4/3] md:aspect-[4/5]',
    accentColor: '#FFB43B',
    overview: 'Designed for modern digital wellness, this mobile banking application features an intuitive home dashboard for Diane Cruz with instant balance visibility ($10,524.15), tactile debit cards ($4,556.15 with Mastercard NFC), category-segmented October expense analytics ($2,316.27 across Transport, Food, Travel, and Health), and a rapid 1-tap peer transfer flow for friends like Saul, Lacie, Arnold, and Tessa.',
    problemStatement: 'Legacy banking applications are plagued by buried navigation menus, confusing fee disclosures, and cluttered account views that frustrate users during everyday payment tasks.',
    designGoals: [
      'Deliver instant one-glance visibility for checking balance ($10,524.15) and debit cards ($4,556.15)',
      'Provide an interactive October expense donut ring with categorical breakdown (Transport 24%, Food 19%, Travel 11%, Health 46%)',
      'Engineer a frictionless 1-tap transfer system with contact avatars and tactile numeric keypad',
      'Maintain an airy, confidence-inspiring neo-banking visual aesthetic with subtle mint tones'
    ],
    targetUsers: 'Digital-first young professionals and freelancers juggling multiple income streams and needing rapid transfers and clear monthly budget alerts.',
    designProcess: [
      { step: '01. Discovery & User Journey', details: 'Mapped daily friction points in routine transfers and monthly budget tracking across 12 mobile banking users.' },
      { step: '02. Information Architecture', details: 'Streamlined core tasks into 3 distinct screen workflows: Home / Wallet, Analytics & Limits, and Send Money.' },
      { step: '03. High-Fidelity UI System', details: 'Created light mint backdrop surfaces (#F4F9F8) with glowing teal debited card accents and high-legibility tabular figures.' },
      { step: '04. Usability Testing & Iteration', details: 'Validated peer payment speed, cutting time-to-send from 45 seconds down to 8 seconds.' },
    ],
    wireframesSummary: 'Hierarchical 3-screen flow connecting card balances at the top with modular recent transaction feeds and a clean modal transfer drawer.',
    keyDecisions: [
      'Dual-Card Carousel: Highlights active checking balance alongside glowing wave debit card with contactless NFC wave',
      'October Analytics Donut: Segmented categorical donut chart delivering instant monthly budget insights',
      'Avatar Contact Tray: 1-touch recipient selection for friends with tactile numeric keypad and quick amount pills ($150, $200, $300, $500)'
    ],
    outcomes: [
      '42% reduction in time-to-transfer for routine payments',
      '98% positive rating on visual clarity and interface trust',
      'Zero cognitive friction across multi-step transaction confirmations'
    ],
    interactiveType: 'banking'
  },
  {
    id: 'ecommerce-app',
    number: '02',
    title: 'E-Commerce Shopping App',
    category: 'Mobile App Design',
    tagline: 'Streamlined mobile commerce with engaging product discovery',
    description: 'A modern shopping application concept featuring organized product categories, intuitive browsing, attractive product displays, and a frictionless cart & checkout experience.',
    image: '/assets/aistudio/image_4e57b8b9.png',
    aspectClass: 'aspect-[4/3] md:aspect-[3/4]',
    accentColor: '#FFB43B',
    overview: 'A full-cycle mobile retail shopping experience designed for high engagement and seamless conversions. It connects a curated discovery feed with structured category browsing, detailed product spec sheets, and an instantaneous cart management system.',
    problemStatement: 'Mobile shoppers encounter friction with cluttered navigation, hidden checkout fees, and clumsy cart modification controls that cause high cart abandonment rates.',
    designGoals: [
      'Deliver an engaging discovery home screen with prominent sale banners and clean category pills',
      'Optimize product detail pages with tactile color swatches, seller verification, and clear specifications',
      'Streamline the My Cart view for instant quantity adjustment and discount voucher application',
      'Ensure a fast, one-tap mobile checkout flow'
    ],
    targetUsers: 'Digital consumers and mobile shoppers seeking fast, intuitive product discovery across electronics, fashion, and lifestyle with clear pricing and zero-friction checkout.',
    designProcess: [
      { step: '01. Discovery Hierarchy', details: 'Structured high-impact Super Sale promotional banners paired with rapid category filtering (Shoes, Beauty, Fashion, Jewelry).' },
      { step: '02. Product Detail Architecture', details: 'Engineered a focused product page showcasing verified sellers (Tariqul Isalm), interactive color swatches, and clear specs.' },
      { step: '03. Cart & Voucher Streamlining', details: 'Designed an unencumbered My Cart interface with 1-touch quantity steppers, item deletion, and instant discount vouchers.' },
      { step: '04. Tactile Micro-Interactions', details: 'Crafted smooth color swatch selection rings, floating orange checkout CTAs, and dynamic subtotal calculations.' },
    ],
    wireframesSummary: 'Centered on high-contrast discovery banners, 2-column curated product recommendations, and transparent cart price breakdown ($245.00 baseline).',
    keyDecisions: [
      'Promotional Hero Banner: Vibrant gradient Super Sale card offering up to 50% discount with 1-touch Shop Now action',
      'Tactile Color Matrix: 5-swatch palette (Burgundy, Midnight Black, Royal Blue, Brown, White) with verified seller credentials',
      'Instant Cart Controls: Tactile +/- steppers, voucher code discount engine, and high-visibility $245.00 checkout flow'
    ],
    outcomes: [
      '54% increase in category exploration from the Super Sale discovery feed',
      '38% boost in cart additions through the interactive color and spec selectors',
      'Zero cognitive friction on the My Cart review and checkout steps'
    ],
    interactiveType: 'ecommerce'
  },
  {
    id: 'weather-app',
    number: '03',
    title: 'Weather Application',
    category: 'UI/UX Design',
    tagline: 'Atmospheric forecasting distilled into frosted glass elegance',
    description: 'A clean and engaging weather application interface designed to present weather conditions, real-time precipitation curves, and essential microclimate insights.',
    image: '/assets/aistudio/image_d23ca786.png',
    aspectClass: 'aspect-[4/3] md:aspect-[4/5]',
    accentColor: '#FFB43B',
    overview: 'Atmosphere is a contemplative weather application designed to connect users with daily climate conditions through subtle atmospheric depth, dynamic sky gradients, and clean glassmorphism widgets. Conceived around Amsterdam microclimates, it delivers instant temperature and rainfall context in under three seconds.',
    problemStatement: 'Traditional weather utilities bombard users with unformatted raw data, radar clutter, and intrusive ad banners that make answering "Do I need a jacket today?" frustrating.',
    designGoals: [
      'Provide immediate atmospheric context with an intuitive hero temperature and weather icon',
      'Render a continuous 24-hour temperature curve that maps daylight progression seamlessly',
      'Group auxiliary environmental metrics (Precipitation, Wind, Humidity, UV Index) into clean glass tiles',
      'Support multi-city quick toggles with zero interface lag'
    ],
    targetUsers: 'Commuters, outdoor athletes, and travelers who need quick, reliable, and aesthetically soothing weather updates.',
    designProcess: [
      { step: '01. Data Prioritization', details: 'Conducted user interviews to identify the top 5 weather data points needed in the first 3 seconds of viewing.' },
      { step: '02. Visual Hierarchy', details: 'Organized current temperature at 72px scale, followed by hourly curve, then 2x2 modular environmental cards.' },
      { step: '03. Glassmorphic Elevation', details: 'Fine-tuned backdrop blur and hairline border opacities to ensure legibility across bright and rainy themes.' },
      { step: '04. Micro-Copy & Tips', details: 'Added empathetic contextual hints like "Light rain starting in 15 mins — carry an umbrella".' },
    ],
    wireframesSummary: 'Centered layout emphasizing city and current conditions at the top, followed by a smooth forecast arc and a 2x2 modular matrix.',
    keyDecisions: [
      'Dynamic Horizon Arc: Visual spline curve displaying diurnal temperature shifts (14° to 16°) and peak heat times',
      'Modular 2x2 Glass Grid: Dedicated micro-cards for Precipitation (65%), Wind Speed (18 km/h), Humidity (82%), and UV Index 3',
      'Adaptive Sky Backgrounds: Ambient blurred nature photography matching real-time cloud cover and drizzle'
    ],
    outcomes: [
      'Sub-3-second glanceability for essential rain and temperature metrics',
      'Consistently high user delight scores for atmospheric motion and clarity',
      'Zero visual clutter from non-essential sensor telemetry'
    ],
    interactiveType: 'weather'
  },
  {
    id: 'basic-calculator',
    number: '04',
    title: 'Basic Calculator',
    category: 'Mobile App Design',
    tagline: 'Minimalist iOS computation with distinctive dual-tone ergonomics',
    description: 'A minimal calculator interface focused on ergonomic tap targets, clear equation history, vibrant teal accents, and distraction-free computation.',
    image: '/assets/aistudio/image_227ca0db.png',
    aspectClass: 'aspect-[4/3] md:aspect-[3/4]',
    accentColor: '#FFB43B',
    overview: 'CALC is a modern iOS arithmetic workstation engineered for speed and typographic beauty. Combining deep obsidian keys for numerals, soft pastel mint keys for mathematical operators, and an unmistakable teal clear accent, it creates an effortless daily productivity tool.',
    problemStatement: 'Stock calculators often bury calculation history and lack visual differentiation between numbers and operator columns, leading to accidental mis-taps during rapid arithmetic.',
    designGoals: [
      'Deliver a distraction-free arithmetic workstation with instant keyboard and touch support',
      'Use oversized typographic hierarchy for calculations with live running equation preview',
      'Incorporate a signature vibrant teal AC button and soft pastel mint operator tier',
      'Ensure 100% mathematical precision with dedicated backspace and history recollection'
    ],
    targetUsers: 'Designers, students, and professionals who appreciate tactile, distraction-free productivity tools for daily arithmetic.',
    designProcess: [
      { step: '01. Ergonomic Key Mapping', details: 'Tested finger reach and key travel spacing on modern bezel-less mobile screens.' },
      { step: '02. Dual-Tone Palette Hierarchy', details: 'Paired dark navy-slate numeral keys with soft pastel mint operators for instant eye tracking.' },
      { step: '03. Live Equation Feedback', details: 'Implemented dual-line display showing the active equation formula above the formatted result.' },
      { step: '04. Touch Physics & Sound', details: 'Added responsive tap compression physics and tactile feedback.' },
    ],
    wireframesSummary: '4x5 grid layout with high-contrast display window, clear operator column, and highlighted action button.',
    keyDecisions: [
      'Two-Line Formula Display: Shows previous equation history (e.g. 25 × 45 =) above the primary active result (1,125)',
      'Vibrant Teal AC Key: Prominent clear action button preventing confusion with numerical zero',
      'Soft Pastel Operator Column: Distinct color coding for ÷, ×, −, +, and ='
    ],
    outcomes: [
      'Zero layout shift across multi-digit calculations up to 12 digits',
      'Fluid tactile responsiveness with zero-latency keystroke registration',
      'Praised by design community for minimalist elegance and tactile feel'
    ],
    interactiveType: 'calculator'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Research',
    description: 'Understand the problem, identify user needs, study competitors, and gather relevant information.',
    iconName: 'Search',
    deliverables: ['User Personas', 'Competitive Audits', 'Empathy Maps', 'Problem Statements']
  },
  {
    number: '02',
    title: 'Wireframing',
    description: 'Create low-fidelity layouts, plan navigation, and organize content based on user requirements.',
    iconName: 'Layout',
    deliverables: ['Information Architecture', 'User Flows', 'Low-Fi Sketches', 'Navigation Systems']
  },
  {
    number: '03',
    title: 'Visual Design',
    description: 'Develop attractive interfaces using typography, colors, spacing, components, and visual hierarchy.',
    iconName: 'Palette',
    deliverables: ['Design Systems', 'Typography Hierarchies', 'Color Palettes', 'Component Libraries']
  },
  {
    number: '04',
    title: 'Prototyping',
    description: 'Create interactive prototypes, test user flows, identify usability problems, and improve the experience.',
    iconName: 'Cpu',
    deliverables: ['Interactive Prototypes', 'Micro-Interactions', 'Usability Audits', 'Design Handoff Specs']
  }
];

export const SKILLS_DATA = {
  design: [
    { name: 'User Interface Design (UI)', highlight: true, level: 'Advanced' },
    { name: 'User Experience Design (UX)', highlight: true, level: 'Advanced' },
    { name: 'Wireframing', highlight: false, level: 'Proficient' },
    { name: 'Prototyping', highlight: true, level: 'Advanced' },
    { name: 'User Research', highlight: false, level: 'Proficient' },
    { name: 'Visual Design', highlight: true, level: 'Advanced' },
    { name: 'Information Architecture', highlight: false, level: 'Proficient' },
    { name: 'Interaction Design', highlight: true, level: 'Advanced' },
    { name: 'Responsive Web Design', highlight: true, level: 'Advanced' },
    { name: 'Design Systems', highlight: true, level: 'Advanced' },
  ],
  tools: [
    { name: 'Figma', highlight: true, category: 'Primary Design Tool', level: 'Expert' },
    { name: 'Adobe Photoshop', highlight: false, category: 'Image Editing', level: 'Proficient' },
    { name: 'Canva', highlight: false, category: 'Rapid Graphics', level: 'Proficient' },
    { name: 'HTML', highlight: true, category: 'Semantic Web', level: 'Advanced' },
    { name: 'CSS', highlight: true, category: 'Styling & Motion', level: 'Advanced' },
  ]
};

export interface Achievement {
  id: string;
  number: string;
  title: string;
  issuer: string;
  year: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
  pdfUrl: string;
  category: string;
  description: string;
  skills: string[];
  highlight: boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-1',
    number: '01',
    title: 'Foundations of User Experience (UX) Design',
    issuer: 'Google Career Certificates · Coursera',
    year: '2026',
    date: 'Aug 8, 2026',
    credentialId: 'TNR5VVUTUA3C',
    verifyUrl: 'https://coursera.org/verify/TNR5VVUTUA3C',
    pdfUrl: '/assets/aistudio/Coursera_TNR5VVUTUA3C_ef8e82cd.pdf',
    category: 'Google UX Certificate',
    description: 'Mastered foundational UX concepts including user-centered design, accessibility standards (WCAG), equity-focused design, and design frameworks.',
    skills: ['User-Centered Design', 'Accessibility', 'Design Frameworks', 'Equity in UX'],
    highlight: true,
  },
  {
    id: 'ach-2',
    number: '02',
    title: 'Start the UX Design Process: Empathize, Define, and Ideate',
    issuer: 'Google Career Certificates · Coursera',
    year: '2026',
    date: 'Aug 17, 2026',
    credentialId: '0Q7EQ3TG66AT',
    verifyUrl: 'https://coursera.org/verify/0Q7EQ3TG66AT',
    pdfUrl: '/assets/aistudio/Coursera_0Q7EQ3TG66AT_090d95ca.pdf',
    category: 'Google UX Certificate',
    description: 'Developed empathy maps, personas, user stories, and user journey maps. Formulated clear problem statements and conducted competitive audits.',
    skills: ['Empathy Mapping', 'User Personas', 'Problem Statements', 'Competitive Audit'],
    highlight: false,
  },
  {
    id: 'ach-3',
    number: '03',
    title: 'Build Wireframes and Low-Fidelity Prototypes',
    issuer: 'Google Career Certificates · Coursera',
    year: '2026',
    date: 'Aug 30, 2026',
    credentialId: 'RMGE73EL2CDN',
    verifyUrl: 'https://coursera.org/verify/RMGE73EL2CDN',
    pdfUrl: '/assets/aistudio/Coursera_RMGE73EL2CDN_257311a8.pdf',
    category: 'Google UX Certificate',
    description: 'Created paper sketches, digital low-fidelity wireframes in Figma, and interactive paper/digital prototypes to test early navigation structures.',
    skills: ['Paper Wireframing', 'Figma Low-Fi', 'Information Architecture', 'Lo-Fi Prototyping'],
    highlight: false,
  },
  {
    id: 'ach-4',
    number: '04',
    title: 'Conduct UX Research and Test Early Concepts',
    issuer: 'Google Career Certificates · Coursera',
    year: '2026',
    date: 'Sep 12, 2026',
    credentialId: '6856NYD2VRXK',
    verifyUrl: 'https://coursera.org/verify/6856NYD2VRXK',
    pdfUrl: '/assets/aistudio/Coursera_6856NYD2VRXK_42d5934a.pdf',
    category: 'Google UX Certificate',
    description: 'Planned and executed moderated/unmoderated usability studies, gathered qualitative feedback, built affinity diagrams, and synthesized insights.',
    skills: ['Usability Testing', 'Affinity Diagramming', 'Qualitative Analysis', 'Research Synthesis'],
    highlight: true,
  },
  {
    id: 'ach-5',
    number: '05',
    title: 'Create High-Fidelity Designs and Prototypes in Figma',
    issuer: 'Google Career Certificates · Coursera',
    year: '2026',
    date: 'Sep 22, 2026',
    credentialId: '5NUUGU0ERGCP',
    verifyUrl: 'https://coursera.org/verify/5NUUGU0ERGCP',
    pdfUrl: '/assets/aistudio/Coursera_5NUUGU0ERGCP_444af5ca.pdf',
    category: 'Google UX Certificate',
    description: 'Built production-ready design systems, typography scales, color tokens, reusable components, and high-fidelity interactive prototypes in Figma.',
    skills: ['Figma Design Systems', 'High-Fidelity Prototyping', 'Component Architecture', 'Visual Hierarchy'],
    highlight: true,
  },
  {
    id: 'ach-6',
    number: '06',
    title: 'Build Dynamic User Interfaces (UI) for Websites',
    issuer: 'Google Career Certificates · Coursera',
    year: '2026',
    date: 'Sep 26, 2026',
    credentialId: 'XKYN3DDHKIIQ',
    verifyUrl: 'https://coursera.org/verify/XKYN3DDHKIIQ',
    pdfUrl: '/assets/aistudio/Coursera_XKYN3DDHKIIQ_32bd198e.pdf',
    category: 'Google UX Certificate',
    description: 'Engineered responsive web UI layouts across mobile, tablet, and desktop breakpoints. Prepared detailed developer handoff annotations.',
    skills: ['Responsive Web UI', 'Developer Handoff', 'Breakpoints & Grids', 'Design Specs'],
    highlight: false,
  },
  {
    id: 'ach-7',
    number: '07',
    title: 'Design a User Experience for Social Good & Prepare for Jobs',
    issuer: 'Google Career Certificates · Coursera',
    year: '2026',
    date: 'Sep 30, 2026',
    credentialId: 'PHODW8YHD0O2',
    verifyUrl: 'https://coursera.org/verify/PHODW8YHD0O2',
    pdfUrl: '/assets/aistudio/Coursera_PHODW8YHD0O2_7c7a16d2.pdf',
    category: 'Google UX Certificate',
    description: 'Designed a complete, end-to-end multi-platform capstone case study for social impact, covering the complete user-centered design lifecycle.',
    skills: ['End-to-End Capstone', 'Social Good UX', 'Case Study Curation', 'Design Presentation'],
    highlight: true,
  },
  {
    id: 'ach-8',
    number: '08',
    title: 'Accelerate Your Job Search with AI',
    issuer: 'Google Career Certificates · Coursera',
    year: '2026',
    date: 'Oct 1, 2026',
    credentialId: 'KYIAJZ28TQLV',
    verifyUrl: 'https://coursera.org/verify/KYIAJZ28TQLV',
    pdfUrl: '/assets/aistudio/Coursera_KYIAJZ28TQLV_16895517.pdf',
    category: 'AI & Professional Skills',
    description: 'Leveraged generative AI workflows, prompt design, and AI-assisted tooling to accelerate research analysis, drafting, and professional presentation.',
    skills: ['Generative AI in UX', 'Prompt Engineering', 'Research Acceleration', 'Workflow Efficiency'],
    highlight: true,
  },
];

