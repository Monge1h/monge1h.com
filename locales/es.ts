import type { Dictionary } from './en'

export const es: Dictionary = {
  locale: 'es',
  siteName: 'Jorge Monge',
  meta: {
    homeTitle: 'Jorge Monge · Ingeniero de Software',
    homeDescription:
      'Jorge Monge es un ingeniero de software salvadoreño que lleva productos de la idea a producción: backend, frontend y todo lo que hay en medio.',
    blogTitle: 'Blog',
    blogDescription:
      'Artículos sobre JavaScript, TypeScript, desarrollo web y lo que voy aprendiendo mientras construyo productos.',
    projectsTitle: 'Proyectos',
    projectsDescription:
      'Proyectos y productos que he construido: aplicaciones web, experimentos y las historias detrás de ellos.',
    contactTitle: 'Contacto',
    contactDescription:
      'Ponte en contacto con Jorge Monge: LinkedIn, GitHub, YouTube, correo o agenda una llamada.',
  },
  nav: {
    about: 'Sobre mí',
    blog: 'Blog',
    projects: 'Proyectos',
    contact: 'Contacto',
    switchLabel: 'Switch to English',
    switchShort: 'EN',
  },
  hero: {
    greeting: 'Hola, soy Jorge Monge',
    role: 'Ingeniero de Software',
    description:
      'Construyo cosas para internet — y las llevo de la idea hasta producción. Backend, frontend y todo lo que hay en medio.',
    ctaProjects: 'Ver mis proyectos',
    ctaBlog: 'Leer el blog',
    location: 'El Salvador · Remoto',
  },
  experience: {
    title: 'Experiencia',
    present: 'Actualidad',
    jobs: [
      {
        title: 'Ingeniero de Software',
        company: 'Holacasa.mx (YC W23)',
        type: 'Tiempo completo',
        period: 'Mar 2024 — Actualidad',
        location: 'Remoto',
        description: [
          'Formo parte del equipo de Holacasa.mx, una startup de Y Combinator W23 que busca cambiar la forma en que se compran inmuebles en México.',
        ],
        skills: ['Node.js', 'NestJS', 'PostgreSQL', 'Next.js'],
      },
      {
        title: 'Ingeniero de Software',
        company: 'Terapify (YC W21)',
        type: 'Tiempo completo',
        period: 'May 2022 — Oct 2023',
        location: 'Remoto',
        description: [
          'Trabajé en el equipo de producto de Terapify, principalmente en backend pero aportando en todo el stack: desde el concepto inicial hasta producción.',
          'En un hackathon interno convertí una idea en un sistema funcional de seguimiento de tareas para psicólogos y pacientes, construyendo tanto el frontend como el backend.',
        ],
        skills: ['Node.js', 'Express', 'MongoDB', 'Next.js', 'AWS', 'Docker'],
      },
      {
        title: 'Desarrollador Back-end',
        company: 'Hospital Nuestra Señora de La Paz',
        type: 'Presencial',
        period: 'Ago 2019 — May 2022',
        location: 'San Miguel, El Salvador',
        description: [
          'Construí un sistema ERP a la medida para el hospital como parte del equipo de TI, levantando requerimientos de cada departamento y convirtiéndolos en software funcional.',
          'Colaboré de cerca con personal no técnico de todas las áreas del hospital para que el sistema se adaptara a la forma real de trabajar de cada una.',
        ],
        skills: ['Node.js', 'Express', 'React', 'MySQL', 'Docker', 'Prisma'],
      },
    ],
  },
  featured: {
    title: 'Proyecto destacado',
    cta: 'Leer el caso de estudio',
  },
  projectsSection: {
    title: 'Proyectos',
    viewAll: 'Ver todos los proyectos',
  },
  blogSection: {
    title: 'Últimos posts',
    viewAll: 'Ver todos los posts',
  },
  listing: {
    blogHeading: 'Blog',
    blogIntro:
      'Lo que voy aprendiendo construyendo para la web: JavaScript, TypeScript y misiones secundarias.',
    projectsHeading: 'Proyectos',
    projectsIntro:
      'Productos y experimentos que he construido, y lo que aprendí lanzándolos.',
  },
  post: {
    backToBlog: 'Volver al blog',
    backToProjects: 'Volver a proyectos',
    share: 'Compartir en X',
    notTranslated:
      'Este post aún no está traducido al español — mostrando el original en inglés.',
    publishedOn: 'Publicado el',
  },
  contact: {
    heading: 'Hablemos',
    intro:
      '¿Tienes algo en mente — un proyecto, una duda o solo quieres saludar? Estoy a un mensaje de distancia.',
    email: 'Escríbeme un correo',
    schedule: 'Agenda una llamada',
    links: 'También me encuentras en',
  },
  footer: {
    heading: '¿Tienes algo en mente?',
    text: 'Escríbeme por cualquiera de estas plataformas — estoy a un mensaje de distancia.',
    visitorLabel: 'Eres el visitante número:',
    builtWith: 'Hecho con Next.js · Desplegado en AWS',
    rights: 'Jorge Monge',
  },
  toast: {
    visitor: '👋 ¡Hola! Eres el visitante número #{count} de mi portafolio. ¡Gracias por pasar!',
  },
  notFound: {
    title: '404',
    text: 'No sé qué andabas buscando, ¡pero tómate un vaso de agua!',
    back: 'Volver al inicio',
  },
}
