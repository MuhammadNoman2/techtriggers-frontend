import { PLAY } from './config'

export const FACTS = [
  { value: '2', label: 'Apps live on Google Play' },
  { value: '1,500+', label: 'Installs across both apps' },
  { value: '2', label: 'Founding clients, both in education' },
  { value: '3', label: 'Founders who build and support it' },
]

export const SERVICES = [
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    short: 'Android and iOS apps from one Flutter codebase, from first screen to Play Store release.',
    image: '/images/svc-mobile.jpg',
    icon: 'Smartphone',
    intro:
      'We build mobile apps with Flutter, so one team and one codebase serve both Android and iOS. DAC AI and Ilmi Duniya, both live on Google Play, are built this way.',
    points: [
      'Flutter apps for Android and iOS',
      'Login, roles and push notifications',
      'Video, PDFs, quizzes and file uploads',
      'Connected to your backend, or we build the backend',
      'Play Store listing, release and updates',
      'Bug fixes and new features after launch',
    ],
    proof: 'Seen in: DAC AI, Ilmi Duniya',
    seoTitle: 'Mobile App Development in Rawalpindi',
    seoDescription:
      'Flutter mobile apps for Android and iOS, built and published by TechTrigger in Rawalpindi. See our live apps on Google Play.',
  },
  {
    slug: 'web-development',
    title: 'Web Applications & Websites',
    short: 'Fast, search-friendly websites and the dashboards and admin panels behind your business.',
    image: '/images/svc-web.jpg',
    icon: 'Globe',
    intro:
      'From a business website that Google can read to a full admin dashboard with logins and reports. We build the front end in React and the back end in Python or Node.',
    points: [
      'Business and company websites',
      'Admin dashboards and role-based portals',
      'Responsive on phones, tablets and desktops',
      'On-page SEO built in, not added later',
      'Secure login and data handling',
      'Hosting, deployment and handover',
    ],
    proof: 'Seen in: DAC AI web portal, the LMS platform',
    seoTitle: 'Web Application & Website Development',
    seoDescription:
      'Business websites, dashboards and web portals built with React, Python and Node by TechTrigger, a software company in Rawalpindi, Pakistan.',
  },
  {
    slug: 'ai-solutions',
    title: 'AI Solutions',
    short: 'Useful AI inside your product: assistants, content tools and automation that save real time.',
    image: '/images/svc-ai.jpg',
    icon: 'Brain',
    intro:
      'We add AI where it helps people finish a task faster. In DAC AI, teachers and students generate notes, quizzes, slides, papers and podcasts from a topic, and ask questions by voice.',
    points: [
      'Chat and voice assistants inside your app',
      'Generate notes, quizzes, slides and documents',
      'AI that follows your syllabus or your price list',
      'Human review stays in the loop',
      'Cost and usage limits you control',
      'Hosted AI models, or models we run ourselves',
    ],
    proof: 'Seen in: DAC AI',
    seoTitle: 'AI Solutions for Apps and Businesses',
    seoDescription:
      'Practical AI features for apps and businesses: assistants, content generation and automation, built by TechTrigger in Pakistan.',
  },
  {
    slug: 'education-lms',
    title: 'Education & LMS Platforms',
    short: 'A complete learning platform for a school or college, set up under your own name and address.',
    image: '/images/svc-lms.jpg',
    icon: 'GraduationCap',
    intro:
      'Our LMS is built for Pakistani schools and colleges. A new institution is created from one super-admin panel, with its own web address, logo and colours, and its own admins, teachers, students and parents.',
    points: [
      'Your own branded web address and colours',
      'Roles for admin, teacher, student and parent',
      'Classes, subjects, chapters, topics and videos',
      'Quizzes, past papers and progress reports',
      'Announcements and attendance',
      'Matching Android app for students and teachers',
    ],
    proof: 'Seen in: Dar-e-Arqam Group of Colleges, Dar-e-Arqam Schools',
    seoTitle: 'LMS & Education Software for Schools',
    seoDescription:
      'A branded learning management system for schools and colleges in Pakistan, with web portal and mobile app. Built with and used by Dar-e-Arqam.',
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    short: 'Clear screens and simple flows, designed for the people who will actually use them.',
    image: '/images/svc-design.jpg',
    icon: 'PenTool',
    intro:
      'Good design means a student or a shop owner can do what they came to do without asking anyone. We sketch the flow, test it with you, then design every screen.',
    points: [
      'User flows and wireframes',
      'Mobile and web interface design',
      'Clickable prototypes before development',
      'Colour, type and logo guidance',
      'Design that follows your brand',
      'Hand-off ready for development',
    ],
    proof: 'Seen in: every app and portal we ship',
    seoTitle: 'UI/UX Design for Apps and Websites',
    seoDescription:
      'User-focused interface design for mobile apps and websites, from wireframes to clickable prototypes, by TechTrigger.',
  },
  {
    slug: 'cloud-hosting-devops',
    title: 'Cloud, Hosting & DevOps',
    short: 'We deploy and look after what we build: servers, databases, backups and updates.',
    image: '/images/svc-cloud.jpg',
    icon: 'Server',
    intro:
      'We run our own platforms on VPS servers with Docker, PostgreSQL and Redis. The same setup is available to you: deployed properly, backed up and monitored.',
    points: [
      'VPS and shared hosting setup',
      'Docker-based deployments',
      'PostgreSQL, Redis and file storage',
      'HTTPS, domains and subdomains',
      'Scheduled backups',
      'Monitoring and routine maintenance',
    ],
    proof: 'Seen in: the LMS platform and its mobile apps',
    seoTitle: 'Cloud Hosting, Deployment & DevOps',
    seoDescription:
      'VPS deployment, Docker, databases, backups and maintenance for web and mobile apps, handled by TechTrigger in Rawalpindi.',
  },
]

export const PRODUCTS = [
  {
    slug: 'dac-ai',
    name: 'DAC AI',
    kind: 'Mobile app, Android',
    for: 'Students and teachers of Dar-e-Arqam Group of Colleges',
    tagline: 'The college learning app with AI study tools built in.',
    image: '/images/product-dac-ai.jpg',
    icon: '/images/apps/dac-icon.jpg',
    gallery: [1, 2, 3, 4].map((n) => `/images/apps/dac-${n}.jpg`),
    play: PLAY.dacAi,
    downloads: '500+ downloads on Google Play',
    status: 'Live',
    summary:
      'DAC AI is the official learning app of Dar-e-Arqam Group of Colleges. Students attend online classes, take quizzes, track their progress and use AI tools to prepare. Teachers prepare topics and follow class performance.',
    features: [
      ['Video lectures and online classes', 'Learn from the college’s own lectures, any time.'],
      ['Quizzes and challenges', 'Topic quizzes that count towards progress.'],
      ['Progress reports', 'Per-student and class marks, attendance and missed work, with PDF export for teachers.'],
      ['Announcements', 'College news and notices in one place.'],
      ['AI podcast maker', 'Turn a lesson into audio to listen to.'],
      ['AI paper generator', 'Create structured practice papers for a topic.'],
      ['AI slides maker', 'Generate study slides from a topic.'],
      ['Voice assistant', 'Ask a question out loud and get help.'],
    ],
    seoTitle: 'DAC AI: College Learning App with AI Tools',
    seoDescription:
      'DAC AI is the official Dar-e-Arqam Group of Colleges learning app: online classes, quizzes, progress reports and AI study tools. Built by TechTrigger.',
  },
  {
    slug: 'ilmi-duniya',
    name: 'Ilmi Duniya',
    kind: 'Mobile app, Android',
    for: 'Students of Dar-e-Arqam Schools',
    tagline: 'A school learning app that organises every subject by chapter.',
    image: '/images/product-ilmi-duniya.jpg',
    icon: '/images/apps/ilmi-icon.jpg',
    gallery: [1, 2, 3, 4].map((n) => `/images/apps/ilmi-${n}.jpg`),
    play: PLAY.ilmiDuniya,
    downloads: '1K+ downloads on Google Play',
    status: 'Live',
    summary:
      'Ilmi Duniya gives school students their syllabus, quizzes and past papers in one app, with a chatbot for quick help and class announcements from teachers.',
    features: [
      ['Subject learning', 'Mathematics, Physics, Chemistry, Biology, Computer Science, English, Urdu and Islamiyat, organised chapter by chapter.'],
      ['Quizzes and past papers', 'Practice by subject, chapter or topic.'],
      ['Progress tracking', 'Personal reports so students see where they stand.'],
      ['AI chatbot', 'Instant help with a question.'],
      ['Revision and challenge mode', 'Test preparation with a competitive twist.'],
      ['Teacher tools', 'Class management, student progress and announcements.'],
    ],
    seoTitle: 'Ilmi Duniya: School Learning App',
    seoDescription:
      'Ilmi Duniya is the school learning app of Dar-e-Arqam Schools: subject-wise lessons, quizzes, past papers and an AI chatbot. Built by TechTrigger.',
  },
  {
    slug: 'dac-ai-web',
    name: 'DAC AI Web Portal',
    kind: 'Web portal',
    for: 'Administrators, teachers, students and parents',
    tagline: 'The same learning data as the app, on a bigger screen.',
    image: '/images/dashboard.jpg',
    status: 'Live',
    summary:
      'The web portal mirrors the mobile app and adds the admin tools an institution needs: managing users, campuses, content and results. Each person signs in and sees only what their role allows.',
    features: [
      ['Separate logins by role', 'Admin, teacher, student and parent each get their own view.'],
      ['Admin dashboard', 'Live statistics, users, campuses and activity.'],
      ['Content management', 'Grades, subjects, chapters, topics, quizzes and videos.'],
      ['Results and reports', 'Marks, attendance and progress in one place.'],
      ['Same data as the app', 'What a teacher does on the web shows up on the student’s phone.'],
    ],
    seoTitle: 'DAC AI Web Portal for Institutions',
    seoDescription:
      'A role-based web portal for schools and colleges: admin dashboard, content management, results and reports, in sync with the mobile app.',
  },
  {
    slug: 'lms-platform',
    name: 'LMS Platform',
    kind: 'Multi-institution platform',
    for: 'Schools, colleges and academies',
    tagline: 'Set up a new institution in the super-admin panel and hand over the login.',
    image: '/images/team-workshop.jpg',
    status: 'Available to new institutions',
    summary:
      'The platform behind our Dar-e-Arqam deployments. One super-admin panel creates a separate, branded learning site for each institution, each with its own address, plan, users and data kept apart from every other institution.',
    features: [
      ['One panel, many institutions', 'Create and manage every institution from a single super-admin login.'],
      ['Own address and branding', 'A subdomain, logo and colour theme for each institution.'],
      ['Data kept separate', 'Each institution has its own users and records, kept apart from every other institution.'],
      ['Subscriptions built in', 'Plans, expiry dates and automatic locking when a subscription ends.'],
      ['Roles for everyone', 'Admin, teacher, student and parent accounts.'],
      ['Web and Android', 'The portal and the mobile app work from the same system.'],
    ],
    seoTitle: 'LMS Platform for Schools and Colleges',
    seoDescription:
      'A multi-institution learning platform: create a branded LMS for a school, college or academy from one admin panel. Built by TechTrigger.',
  },
]

export const COMING_SOON = {
  name: 'Social Inbox',
  tagline: 'One shared inbox for your team’s customer messages.',
  text: 'We are building a shared team inbox that brings WhatsApp and social messages into one place, with assignment, follow-up reminders and AI-drafted replies that your team approves. It is in development and not yet released. It needs Meta business verification, which we complete after company registration.',
  points: ['Shared inbox with an owner for every chat', 'Follow-up reminders for cold leads', 'AI drafts, your team decides'],
}

export const INDUSTRIES = [
  {
    title: 'Schools & Colleges',
    badge: 'Our live work',
    image: '/images/ind-education.jpg',
    text: 'Learning apps, web portals and a full LMS for institutions. Dar-e-Arqam Group of Colleges and Dar-e-Arqam Schools are our first and best clients.',
    link: '/products',
    linkLabel: 'See the products',
  },
  {
    title: 'Academies & Coaching',
    badge: 'Open for projects',
    image: '/images/ind-college.jpg',
    text: 'The same platform can run an academy, tuition centre or training institute under its own name.',
    link: '/products/lms-platform',
    linkLabel: 'About the LMS',
  },
  {
    title: 'Small & Medium Business',
    badge: 'Open for projects',
    image: '/images/ind-business.jpg',
    text: 'A website that brings in enquiries, a dashboard to manage orders or customers, a mobile app for your team.',
    link: '/services/web-development',
    linkLabel: 'Web development',
  },
  {
    title: 'Retail & E-commerce',
    badge: 'Open for projects',
    image: '/images/ind-retail.jpg',
    text: 'Online stores and product catalogues, ready for search engines and mobile shoppers.',
    link: '/contact',
    linkLabel: 'Talk to us',
  },
]

export const PROCESS = [
  ['Listen', 'We start with a call or a visit. What do you do, who uses it, what hurts today?'],
  ['Plan', 'A short written plan: what we will build, in what order, and what it costs.'],
  ['Build', 'You see working screens early and often, not just at the end.'],
  ['Launch & support', 'We deploy, train your people and stay on for fixes and new features.'],
]

export const WHY = [
  ['Real products in real use', 'Two apps on Google Play, built with and for working institutions.'],
  ['The founders do the work', 'You talk to the people who design, code and deploy your project.'],
  ['We run what we build', 'Hosting, backups and updates are part of the job, not an afterthought.'],
  ['Local and reachable', 'Based in Rawalpindi. Call, WhatsApp or visit. English and Urdu.'],
]

export const FOUNDERS = [
  {
    name: 'Talha Waseem',
    role: 'CEO',
    photo: '/team/talha-waseem.jpg',
    bio: 'Leads the company’s direction, client relationships and day-to-day operations.',
    focus: ['Leadership', 'Client relationships', 'Operations'],
    education: 'Master’s in Computer Science',
  },
  {
    name: 'Muhammad Noman',
    role: 'CTO & General Manager',
    photo: '/team/muhammad-noman.jpg',
    bio: 'Leads engineering and technical operations: architecture and delivery across web, mobile and AI, plus the servers that run them.',
    focus: ['Software architecture', 'Web & mobile', 'AI & machine learning', 'DevOps & cloud'],
    education: 'Bachelor’s in Computer Science',
  },
  {
    name: 'Ali Daud',
    role: 'Co-Founder',
    photo: '/team/ali-daud.jpg',
    bio: 'Works on AI, machine learning and computer vision, and on shaping products from idea to release.',
    focus: ['Artificial intelligence', 'Machine learning', 'Computer vision', 'Product development'],
    education: 'Bachelor’s in Computer Science',
  },
]

export const VALUES = [
  ['Build for the person using it', 'A student on a phone, a teacher between classes, an admin with forty tabs open. We design for them.'],
  ['Say only what is true', 'We tell clients what is ready, what is not and what it will cost. No inflated numbers.'],
  ['Own the whole stack', 'We design, build, host and support, so nothing falls between vendors.'],
  ['Stay after launch', 'Fixes, updates and support are part of how we work, not an extra.'],
]

export const JOB = {
  title: 'Marketing & Social Media Specialist',
  location: 'Rawalpindi, Pakistan',
  type: 'Full-time',
  intro:
    'We are a small software company with real products and almost no marketing so far. You would be the first person to change that.',
  does: [
    'Plan and publish posts on LinkedIn, Instagram and Facebook every week',
    'Turn our product updates, screenshots and client stories into clear, human posts',
    'Use AI tools and Canva to draft and design, then edit so it sounds like us',
    'Reply to comments and messages quickly and politely',
    'Run small paid-ad tests and report what works',
    'Help keep our website content and search presence up to date',
    'Report results every week: posts, visits, enquiries',
  ],
  needs: [
    'Proven experience managing social media pages, with examples we can look at',
    'Strong written English; Urdu is a plus',
    'Comfortable with Canva or similar design tools',
    'Basic understanding of paid ads on Meta and LinkedIn',
    'Reliable, organised and happy to work with a small team',
  ],
  nice: [
    'Interest in education or technology',
    'Experience with scheduling tools or simple automation',
    'Short-video editing skills',
  ],
}
