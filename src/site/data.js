import { PLAY } from './config'

export const FACTS = [
  { to: 2, suffix: '', label: 'Apps live on Google Play' },
  { to: 1500, suffix: '+', label: 'Installs across both apps' },
  { to: 2, suffix: '', label: 'Founding clients, both in education' },
  { to: 3, suffix: '', label: 'Founders who build and support it' },
]

export const HERO_SLIDES = [
  {
    kicker: 'Software company · Rawalpindi, Pakistan',
    title: 'Software that works in real classrooms and real businesses.',
    text: 'We build learning platforms, mobile apps, web portals and AI tools. Our apps are live on Google Play for Dar-e-Arqam.',
    cta: { label: 'Learn more', to: '/about' },
    poster: '/images/hero-team.jpg',
    video: '/videos/hero-team.mp4',
  },
  {
    kicker: 'Education platforms',
    title: 'One platform. Your institution, your name.',
    text: 'Set up a branded learning site for a school, college or academy from a single admin panel, with a matching app for students.',
    cta: { label: 'See the products', to: '/products' },
    poster: '/images/hero-lms.jpg',
    video: '/videos/hero-lms.mp4',
  },
  {
    kicker: 'Coming soon',
    title: 'WhatsApp Sales Desk. Never lose a lead in a chat.',
    text: 'A shared team inbox with follow-up reminders and AI-drafted replies that your team approves.',
    cta: { label: 'Explore the Sales Desk', to: '/products/whatsapp-sales-desk' },
    poster: '/images/hero-sales-desk.jpg',
    video: '/videos/hero-sales-desk.mp4',
  },
]

export const TECH = ['Flutter', 'React', 'Python', 'Django', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Firebase', 'Next.js', 'Nginx', 'AI models']

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
      'Flutter mobile apps for Android and iOS, built and published by Tech Triggers in Rawalpindi. See our live apps on Google Play.',
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
      'Business websites, dashboards and web portals built with React, Python and Node by Tech Triggers, a software company in Rawalpindi, Pakistan.',
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
      'Practical AI features for apps and businesses: assistants, content generation and automation, built by Tech Triggers in Pakistan.',
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
      'User-focused interface design for mobile apps and websites, from wireframes to clickable prototypes, by Tech Triggers.',
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
      'VPS deployment, Docker, databases, backups and maintenance for web and mobile apps, handled by Tech Triggers in Rawalpindi.',
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
      'DAC AI is the official Dar-e-Arqam Group of Colleges learning app: online classes, quizzes, progress reports and AI study tools. Built by Tech Triggers.',
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
      'Ilmi Duniya is the school learning app of Dar-e-Arqam Schools: subject-wise lessons, quizzes, past papers and an AI chatbot. Built by Tech Triggers.',
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
      'A multi-institution learning platform: create a branded LMS for a school, college or academy from one admin panel. Built by Tech Triggers.',
  },
  {
    slug: 'whatsapp-sales-desk',
    name: 'WhatsApp Sales Desk',
    kind: 'Web app for sales teams',
    for: 'Sales teams whose deals start on WhatsApp, built first for real estate teams',
    tagline: 'Turn your WhatsApp number into an accountable sales desk.',
    image: '/images/salesdesk/dashboard.jpg',
    status: 'Coming soon',
    soon: true,
    summary:
      'A shared team inbox on the official WhatsApp Business platform. Every chat has an owner and a response time, leads that are going cold are flagged before they are lost, and an AI copilot drafts replies from your own listings and answers while your team decides what to send. It is running in private testing today.',
    screens: [
      { src: '/images/salesdesk/dashboard.jpg', alt: 'Sales Desk dashboard showing leads at risk, overdue follow-ups, viewings today, median first reply and pipeline value', caption: 'Dashboard: what needs attention today.' },
      { src: '/images/salesdesk/inbox.jpg', alt: 'Sales Desk shared inbox with conversation filters, assignment, follow-up and viewing buttons and a suggested reply', caption: 'Inbox: shared chats with owners and the 24-hour reply window.' },
      { src: '/images/salesdesk/channels.jpg', alt: 'Sales Desk channels page with WhatsApp Business connected and Instagram, Facebook Messenger, email and TikTok planned', caption: 'Channels: WhatsApp Business is ready; more channels are planned.' },
    ],
    features: [
      ['Shared inbox', 'One WhatsApp Business number, many agents. Filter by Needs reply, Mine, Unassigned or Snoozed, and see the 24-hour reply window on every chat.'],
      ['Lead Recovery', 'Flags leads at risk and raises recovery alerts, so a cold lead never goes unnoticed.'],
      ['Follow-ups and viewings', 'Schedule a follow-up or a property viewing straight from the conversation, with reminders for the owner.'],
      ['Contacts and listings', 'Keep contacts, requirements and your property listings together, and attach a listing photo to a reply.'],
      ['AI suggested replies', 'Drafts a reply from your own listings and knowledge base. It tells you when a human should answer, and your team sends every message.'],
      ['Message templates', 'Use approved WhatsApp templates once the 24-hour reply window has closed.'],
      ['Performance dashboard', 'Median first reply, new leads, viewings held, win rate, pipeline value and the month’s spend.'],
      ['Team and owners', 'Assign chats, see who owns what and how the team is doing.'],
      ['More channels planned', 'WhatsApp Business is ready. Instagram, Facebook Messenger, email and TikTok are on the roadmap.'],
    ],
    cta: { label: 'Join the waitlist', to: '/contact' },
    note:
      'WhatsApp is a trademark of Meta. Tech Triggers is not affiliated with or endorsed by Meta. The Sales Desk is in private testing and has not been released publicly. It launches after our Meta business verification is complete. Screens are from our test version, with names and numbers blurred.',
    seoTitle: 'WhatsApp Sales Desk: Shared Inbox for Sales Teams',
    seoDescription:
      'WhatsApp Sales Desk by Tech Triggers, coming soon: a shared team inbox, lead recovery, follow-ups, viewings and AI-drafted replies for sales teams.',
  },
]

export const INDUSTRIES = [
  {
    slug: 'schools-and-colleges',
    title: 'Schools & Colleges',
    badge: 'Our live work',
    live: true,
    image: '/images/ind-education.jpg',
    text: 'Learning apps, web portals and a full LMS for institutions. Dar-e-Arqam Group of Colleges and Dar-e-Arqam Schools are our first and best clients.',
    headline: 'Learning software built with working institutions.',
    intro:
      'Dar-e-Arqam Group of Colleges and Dar-e-Arqam Schools are our first and best clients. What we built for them is what we can build for you: apps students open, portals teachers use and a platform administrators control.',
    points: [
      'Roles for administrators, teachers, students and parents',
      'Quizzes, past papers, progress and attendance reports',
      'Announcements and online classes',
      'Content organised by class, subject and chapter',
    ],
    solutions: [
      ['DAC AI', '/products/dac-ai', 'College learning app with online classes, quizzes, reports and AI study tools.'],
      ['Ilmi Duniya', '/products/ilmi-duniya', 'School app with subject-wise lessons, quizzes and past papers.'],
      ['DAC AI Web Portal', '/products/dac-ai-web', 'Admin, teacher, student and parent logins on the web.'],
      ['LMS Platform', '/products/lms-platform', 'Your own branded learning site, set up from one admin panel.'],
    ],
    proof: 'Live with Dar-e-Arqam Group of Colleges and Dar-e-Arqam Schools.',
    seoTitle: 'Software for Schools & Colleges',
    seoDescription:
      'Learning apps, web portals and an LMS for schools and colleges in Pakistan, built with and used by Dar-e-Arqam Group of Colleges and Dar-e-Arqam Schools.',
  },
  {
    slug: 'academies-and-coaching',
    title: 'Academies & Coaching',
    badge: 'Open for projects',
    image: '/images/ind-college.jpg',
    text: 'The same platform can run an academy, tuition centre or training institute under its own name.',
    headline: 'Run your academy on a platform with your name on it.',
    intro:
      'An academy or tuition centre needs the same basics as a school: classes, content, quizzes and progress. The LMS platform can be set up under your name, address and colours without building anything from scratch.',
    points: [
      'Your own web address, logo and colours',
      'Courses, chapters, videos and quizzes',
      'Student progress and reports for teachers',
      'Plans with expiry dates built in',
    ],
    solutions: [
      ['LMS Platform', '/products/lms-platform', 'A separate, branded learning site for each institution.'],
      ['Education & LMS service', '/services/education-lms', 'Setup, branding and training from our team.'],
      ['Mobile app development', '/services/mobile-app-development', 'An Android app for your students.'],
    ],
    proof: 'We have not yet set up an academy outside Dar-e-Arqam, and we will say so when you ask.',
    seoTitle: 'LMS for Academies & Coaching Centres',
    seoDescription:
      'Run an academy, tuition centre or training institute on a branded learning platform with its own address, logo, users and quizzes. Built by Tech Triggers.',
  },
  {
    slug: 'small-and-medium-business',
    title: 'Small & Medium Business',
    badge: 'Open for projects',
    image: '/images/ind-business.jpg',
    text: 'A website that brings in enquiries, a dashboard to manage orders or customers, a mobile app for your team.',
    headline: 'A website that brings enquiries and tools that save your team time.',
    intro:
      'Most small businesses need three things: to be found, to answer customers quickly, and to keep track of what happens next. We build the website, the internal tools and the apps that cover those.',
    points: [
      'A fast website that search engines can read',
      'Dashboards for orders, customers or staff',
      'A mobile app for your team in the field',
      'Hosting, backups and updates handled for you',
    ],
    solutions: [
      ['Web applications & websites', '/services/web-development', 'Company websites, portals and admin panels.'],
      ['Mobile app development', '/services/mobile-app-development', 'Android and iOS apps from one codebase.'],
      ['WhatsApp Sales Desk', '/products/whatsapp-sales-desk', 'Coming soon: a shared inbox for customer chats.'],
      ['AI solutions', '/services/ai-solutions', 'Assistants and automation that save real time.'],
    ],
    proof: 'We are new to this sector. We would rather scope a small first project well than promise a lot.',
    seoTitle: 'Software for Small & Medium Business',
    seoDescription:
      'Websites, dashboards, mobile apps and AI tools for small and medium businesses in Pakistan, built by Tech Triggers in Rawalpindi.',
  },
  {
    slug: 'retail-and-ecommerce',
    title: 'Retail & E-commerce',
    badge: 'Open for projects',
    image: '/images/ind-retail.jpg',
    text: 'Online stores and product catalogues, ready for search engines and mobile shoppers.',
    headline: 'Online stores and catalogues that work well on a phone.',
    intro:
      'Shoppers browse on their phones and ask questions on WhatsApp. We build stores and catalogues that load fast, show up in search, and make it easy for a customer to reach you.',
    points: [
      'Online stores and product catalogues',
      'Mobile-first design',
      'Search-friendly pages for every product',
      'Customer chat handled by a shared team inbox (coming soon)',
    ],
    solutions: [
      ['Web applications & websites', '/services/web-development', 'Stores, catalogues and admin panels.'],
      ['Mobile app development', '/services/mobile-app-development', 'A shopping app for your customers.'],
      ['WhatsApp Sales Desk', '/products/whatsapp-sales-desk', 'Coming soon: answer customers as a team.'],
      ['Cloud, hosting & DevOps', '/services/cloud-hosting-devops', 'Hosting that stays up and gets backed up.'],
    ],
    proof: 'We have not yet launched a store for a client. We build to your needs and tell you honestly what is new to us.',
    seoTitle: 'Software for Retail & E-commerce',
    seoDescription:
      'Online stores, catalogues and mobile apps for retail businesses in Pakistan, built by Tech Triggers with search and mobile shoppers in mind.',
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

export const CASE_STUDY = {
  slug: 'dar-e-arqam',
  title: 'One learning system for Dar-e-Arqam Group of Colleges and Dar-e-Arqam Schools',
  intro:
    'How we built two Android apps, a web portal and a multi-institution platform for our first and best clients, and how we keep improving them.',
  glance: [
    ['Clients', 'Dar-e-Arqam Group of Colleges and Dar-e-Arqam Schools'],
    ['What we delivered', 'Two Android apps, a web portal and a multi-institution LMS platform'],
    ['Live on Google Play', 'DAC AI (500+ downloads) and Ilmi Duniya (1K+ downloads)'],
    ['Our role', 'Design, development, hosting and continuing updates'],
    ['Technology', 'Flutter, React, Django, PostgreSQL, Redis, Docker, our own AI model service'],
  ],
  goal: [
    'A group of colleges and schools wants every student to have lessons, quizzes and progress in one place, every teacher to prepare and track work without extra paperwork, and every administrator to see what is happening across campuses.',
    'We built that as one system with different front doors: a college app, a school app, and a web portal for administrators, teachers, students and parents. Everyone works from the same data, so what a teacher does on the web shows up on a student’s phone.',
  ],
  built: [
    ['DAC AI', '/products/dac-ai', 'The college app: online classes, quizzes and challenges, progress reports, announcements, and AI tools for podcasts, practice papers, slides and voice help.'],
    ['Ilmi Duniya', '/products/ilmi-duniya', 'The school app: lessons by subject and chapter, quizzes, past papers, a chatbot, revision and challenge mode, with teacher tools.'],
    ['DAC AI Web Portal', '/products/dac-ai-web', 'Separate logins for administrators, teachers, students and parents, with content management, results and reports.'],
    ['LMS Platform', '/products/lms-platform', 'The system underneath: each institution has its own address, branding, users and data, created from one super-admin panel.'],
  ],
  roles: [
    ['Students', ['Video lectures and online classes', 'Topic quizzes that count towards progress', 'Announcements, past papers and revision', 'AI podcast, practice papers, slides and voice help in DAC AI']],
    ['Teachers', ['Prepare any topic with notes, quizzes and slides, or upload their own files', 'Class and per-student marks, attendance and missed work', 'Export reports as PDF', 'Post announcements to a class']],
    ['Administrators', ['Manage users, campuses and content', 'Grades, subjects, chapters, topics, quizzes and videos', 'Dashboards, results and activity in one place']],
    ['Parents', ['Sign in on the web portal to follow a child’s progress', 'See attendance and results', 'One account for children across campuses']],
  ],
  syllabus:
    'The college content is organised by examination board and grade, so a student sees the material for their own board. AI tools use that same context, which keeps generated notes and papers relevant to the syllabus.',
  recent: [
    'Teachers can prepare any topic with notes, quizzes and slides in DAC AI, or upload their own files',
    'A Reports tab shows class and per-student marks, attendance and missed work, with PDF export',
    'Topic quizzes can be attempted and count towards progress',
    'Videos come from the college’s own channel first and play in the app',
    'Faster images and documents, and expired sessions now sign back in',
  ],
  behind: [
    'Apps are written in Flutter, the web portal in React, and the back end in Django with PostgreSQL and Redis.',
    'The AI tools run on our own model service, so we control cost, limits and what data leaves the system.',
    'Everything is deployed with Docker on servers we manage, with backups and updates handled by our team.',
  ],
  seoTitle: 'Case Study: Dar-e-Arqam Learning Platform',
  seoDescription:
    'How Tech Triggers built DAC AI, Ilmi Duniya, a web portal and an LMS platform for Dar-e-Arqam Group of Colleges and Dar-e-Arqam Schools.',
}
