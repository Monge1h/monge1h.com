export const en = {
  locale: 'en' as 'en' | 'es',
  siteName: 'Jorge Monge',
  meta: {
    homeTitle: 'Jorge Monge · Senior Software Engineer',
    homeDescription:
      'Jorge Monge is a senior fullstack JavaScript/TypeScript engineer with more than 5 years building and scaling production SaaS platforms, from architecture to code.',
    blogTitle: 'Blog',
    blogDescription:
      'Articles about JavaScript, TypeScript, web development and the things I learn while building products.',
    projectsTitle: 'Projects',
    projectsDescription:
      'Side projects and products I have built: web apps, experiments and the stories behind them.',
    contactTitle: 'Contact',
    contactDescription:
      'Get in touch with Jorge Monge: LinkedIn, GitHub, YouTube, email or schedule a call.',
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
    role: 'Senior Software Engineer',
    description:
      'Senior fullstack JavaScript/TypeScript engineer with more than 5 years building and scaling production SaaS platforms. I take products from idea to production: backend, frontend and everything in between.',
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
        company: 'Ravn',
        type: 'Fullstack · Consultancy',
        period: 'Sept 2024 to Present',
        location: 'Remote',
        description: [
          'Led the performance refactor of a React calendar grid in a high traffic sports fixtures application, redesigning its state management and component architecture and turning a nearly unusable view into a smooth experience, even on low resource devices like Chromebooks.',
          'Optimized complex database queries, improved the performance of multiple views, and delivered features end to end across the stack for client products.',
        ],
        skills: ['Node.js', 'React', 'Redux', 'MongoDB', 'PostgreSQL'],
      },
      {
        title: 'Software Engineer',
        company: 'Holacasa (YC W23)',
        type: 'Fullstack',
        period: 'Feb 2024 to Sept 2024',
        location: 'Remote',
        description: [
          'Replaced the Twilio based OTP flow with a custom in house OTP system in the backend, removing a third party dependency and reducing operational costs.',
          'Helped lead the redesign of the back office dashboard with Next.js and Tailwind CSS, and made the real estate agents app mobile friendly with Capacitor.js, using native plugins on iOS and Android.',
        ],
        skills: ['Node.js', 'NestJS', 'PostgreSQL', 'Next.js', 'AWS'],
      },
      {
        title: 'Software Engineer',
        company: 'Terapify (Healthtech SaaS)',
        type: 'Fullstack',
        period: 'May 2022 to Oct 2023',
        location: 'Remote',
        description: [
          'Played a key role in implementing AI into the patient and therapist matching system, intelligently guiding patients to the right therapeutic model and significantly improving the initial therapy experience.',
          'Designed and built a post session task assignment system with an automated email reminder flow for therapists and patients, born in an internal hackathon, and kept driving product improvements from idea to production on a live healthcare platform.',
        ],
        skills: ['Node.js', 'Express', 'MongoDB', 'React', 'AWS'],
      },
      {
        title: 'Backend Developer',
        company: 'Hospital Nuestra Señora de la Paz',
        type: 'On-site',
        period: 'Aug 2019 to Apr 2023',
        location: 'San Miguel, El Salvador',
        description: [
          'Helped architect and build a custom hospital ERP, playing a key role in migrating from a legacy system to a scalable modern stack, focused primarily on the backend with occasional frontend work.',
          'Collaborated across departments to gather requirements and feedback, ensuring the ERP aligned with the needs of every hospital area.',
        ],
        skills: ['Node.js', 'Express', 'React', 'MySQL', 'Docker', 'Prisma'],
      },
    ],
  },
  about: {
    title: 'More about me',
    items: [
      {
        label: 'Certification',
        value: 'AWS Cloud Practitioner',
        detail: 'AWS Academy',
      },
      {
        label: 'Education',
        value: 'Eng. in Computer Systems and Networks',
        detail: 'Universidad Gerardo Barrios · 2017 to 2023',
      },
      {
        label: 'Community',
        value: 'GDG San Miguel organizer',
        detail: 'Speaker at KCD El Salvador 2023',
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
    blogIntro: 'Things I learn while building for the web: JavaScript, TypeScript and side quests.',
    projectsHeading: 'Projects',
    projectsIntro: 'Products and experiments I have built, and what I learned shipping them.',
  },
  post: {
    backToBlog: 'Back to blog',
    backToProjects: 'Back to projects',
    share: 'Share on X',
    notTranslated:
      'This post has not been translated to English yet, so you are reading the Spanish original.',
    publishedOn: 'Published on',
  },
  contact: {
    heading: "Let's talk",
    intro:
      "Have something in mind? A project, a question or just a hello. I'm just a message away.",
    email: 'Write me an email',
    schedule: 'Schedule a call',
    links: 'You can also find me on',
  },
  footer: {
    heading: 'Have something in mind?',
    text: "Reach out on any of these platforms. I'm just a message away.",
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
