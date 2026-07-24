export const en = {
  locale: 'en' as 'en' | 'es',
  siteName: 'Jorge Monge',
  meta: {
    homeTitle: 'Jorge Monge · Software Engineer',
    homeDescription:
      'Jorge Monge is a software engineer from El Salvador who takes products from idea to production — backend, frontend and everything in between.',
    blogTitle: 'Blog',
    blogDescription:
      'Articles about JavaScript, TypeScript, web development and the things I learn while building products.',
    projectsTitle: 'Projects',
    projectsDescription:
      'Side projects and products I have built: web apps, experiments and the stories behind them.',
    contactTitle: 'Contact',
    contactDescription:
      'Get in touch with Jorge Monge — LinkedIn, GitHub, YouTube, email or schedule a call.',
  },
  nav: {
    about: 'About',
    blog: 'Blog',
    projects: 'Projects',
    contact: 'Contact',
    switchLabel: 'Cambiar a español',
    switchShort: 'ES',
  },
  hero: {
    greeting: "Hi, I'm Jorge Monge",
    role: 'Software Engineer',
    description:
      'I build things for the internet — and I take them all the way from idea to production. Backend, frontend and everything in between.',
    ctaProjects: 'See my work',
    ctaBlog: 'Read the blog',
    location: 'El Salvador · Remote',
  },
  experience: {
    title: 'Experience',
    present: 'Present',
    jobs: [
      {
        title: 'Software Engineer',
        company: 'Holacasa.mx (YC W23)',
        type: 'Full-time',
        period: 'Mar 2024 — Present',
        location: 'Remote',
        description: [
          'Part of the Holacasa.mx team, a Y Combinator W23 startup working to change how people buy real estate in Mexico.',
        ],
        skills: ['Node.js', 'NestJS', 'PostgreSQL', 'Next.js'],
      },
      {
        title: 'Software Engineer',
        company: 'Terapify (YC W21)',
        type: 'Full-time',
        period: 'May 2022 — Oct 2023',
        location: 'Remote',
        description: [
          'Worked on the Terapify product team, mostly on the backend but contributing across the stack — from initial concept to production.',
          'During an internal hackathon I turned an idea into a working task-tracking system for psychologists and their patients, building both the frontend and the backend.',
        ],
        skills: ['Node.js', 'Express', 'MongoDB', 'Next.js', 'AWS', 'Docker'],
      },
      {
        title: 'Back-end Developer',
        company: 'Hospital Nuestra Señora de La Paz',
        type: 'On-site',
        period: 'Aug 2019 — May 2022',
        location: 'San Miguel, El Salvador',
        description: [
          'Built a custom ERP system for the hospital as part of the IT team, gathering requirements from every department and turning them into working software.',
          'Collaborated closely with non-technical staff across the hospital to make sure the system actually fit how each area worked.',
        ],
        skills: ['Node.js', 'Express', 'React', 'MySQL', 'Docker', 'Prisma'],
      },
    ],
  },
  featured: {
    title: 'Featured project',
    cta: 'Read the case study',
  },
  projectsSection: {
    title: 'Projects',
    viewAll: 'View all projects',
  },
  blogSection: {
    title: 'Latest posts',
    viewAll: 'View all posts',
  },
  listing: {
    blogHeading: 'Blog',
    blogIntro:
      'Things I learn while building for the web — JavaScript, TypeScript and side quests.',
    projectsHeading: 'Projects',
    projectsIntro:
      'Products and experiments I have built, and what I learned shipping them.',
  },
  post: {
    backToBlog: 'Back to blog',
    backToProjects: 'Back to projects',
    share: 'Share on X',
    notTranslated:
      'This post has not been translated to English yet — showing the Spanish original.',
    publishedOn: 'Published on',
  },
  contact: {
    heading: "Let's talk",
    intro:
      "Have something in mind — a project, a question or just want to say hi? I'm just a message away.",
    email: 'Write me an email',
    schedule: 'Schedule a call',
    links: 'You can also find me on',
  },
  footer: {
    heading: 'Have something in mind?',
    text: "Reach out on any of these platforms — I'm just a message away.",
    visitorLabel: 'You are visitor number:',
    builtWith: 'Built with Next.js · Deployed on AWS',
    rights: 'Jorge Monge',
  },
  toast: {
    visitor: "👋 Hello there! You're visitor number #{count} to my portfolio. Thanks for dropping by!",
  },
  notFound: {
    title: '404',
    text: "I don't know what you're looking for, but drink some water!",
    back: 'Return home',
  },
}

export type Dictionary = typeof en
