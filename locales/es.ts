import type { Dictionary } from './en'

export const es: Dictionary = {
  locale: 'es',
  siteName: 'Jorge Monge',
  meta: {
    homeTitle: 'Jorge Monge · Ingeniero de Software Senior',
    homeDescription:
      'Jorge Monge es un ingeniero fullstack JavaScript/TypeScript senior con más de 5 años construyendo y escalando plataformas SaaS en producción, desde la arquitectura hasta el código.',
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
    role: 'Ingeniero de Software Senior',
    description:
      'Ingeniero fullstack JavaScript/TypeScript senior con más de 5 años construyendo y escalando plataformas SaaS en producción. Llevo productos de la idea a producción: backend, frontend y todo lo que hay en medio.',
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
        company: 'Ravn',
        type: 'Fullstack · Consultoría',
        period: 'Sep 2024 a la actualidad',
        location: 'Remoto',
        description: [
          'Lideré el refactor de rendimiento de un calendario en React para una aplicación de fixtures deportivos de alto tráfico, rediseñando su manejo de estado y su arquitectura de componentes hasta convertir una vista casi inutilizable en una experiencia fluida, incluso en dispositivos de bajos recursos como Chromebooks.',
          'Optimicé consultas complejas de base de datos, mejoré el rendimiento de múltiples vistas y entregué funcionalidades de punta a punta en todo el stack para productos de clientes.',
        ],
        skills: ['Node.js', 'React', 'Redux', 'MongoDB', 'PostgreSQL'],
      },
      {
        title: 'Ingeniero de Software',
        company: 'Holacasa (YC W23)',
        type: 'Fullstack',
        period: 'Feb 2024 a Sep 2024',
        location: 'Remoto',
        description: [
          'Reemplacé el flujo de OTP basado en Twilio por un sistema de OTP propio en el backend, eliminando una dependencia de terceros y reduciendo costos operativos.',
          'Ayudé a liderar el rediseño del dashboard de back office con Next.js y Tailwind CSS, e hice mobile friendly la app de los agentes inmobiliarios con Capacitor.js, usando plugins nativos en iOS y Android.',
        ],
        skills: ['Node.js', 'NestJS', 'PostgreSQL', 'Next.js', 'AWS'],
      },
      {
        title: 'Ingeniero de Software',
        company: 'Terapify (YC W21 · Healthtech)',
        type: 'Fullstack',
        period: 'May 2022 a Oct 2023',
        location: 'Remoto',
        description: [
          'Jugué un papel clave implementando IA en el sistema de matching entre pacientes y terapeutas, guiando de forma inteligente a los pacientes hacia el modelo terapéutico correcto y mejorando significativamente la experiencia inicial de terapia.',
          'Diseñé y construí un sistema de asignación de tareas post sesión con recordatorios automáticos por correo para terapeutas y pacientes, nacido en un hackathon interno, y seguí impulsando mejoras de producto de la idea a producción en una plataforma de salud en vivo.',
        ],
        skills: ['Node.js', 'Express', 'MongoDB', 'React', 'AWS'],
      },
      {
        title: 'Desarrollador Backend',
        company: 'Hospital Nuestra Señora de la Paz',
        type: 'Presencial',
        period: 'Ago 2019 a Abr 2023',
        location: 'San Miguel, El Salvador',
        description: [
          'Ayudé a diseñar y construir un ERP a la medida para el hospital, jugando un papel clave en la migración de un sistema legacy a un stack moderno y escalable, enfocado principalmente en el backend con trabajo ocasional de frontend.',
          'Colaboré con todos los departamentos levantando requerimientos y retroalimentación, asegurando que el ERP se adaptara a las necesidades de cada área del hospital.',
        ],
        skills: ['Node.js', 'Express', 'React', 'MySQL', 'Docker', 'Prisma'],
      },
    ],
  },
  about: {
    title: 'Más sobre mí',
    items: [
      {
        label: 'Certificación',
        value: 'AWS Cloud Practitioner',
        detail: 'AWS Academy',
      },
      {
        label: 'Educación',
        value: 'Ing. en Sistemas Informáticos y Redes',
        detail: 'Universidad Gerardo Barrios · 2017 a 2023',
      },
      {
        label: 'Comunidad',
        value: 'Organizador de GDG San Miguel',
        detail: 'Speaker en KCD El Salvador 2023',
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
    projectsIntro: 'Productos y experimentos que he construido, y lo que aprendí lanzándolos.',
  },
  post: {
    backToBlog: 'Volver al blog',
    backToProjects: 'Volver a proyectos',
    share: 'Compartir en X',
    notTranslated:
      'Este post aún no está traducido al español, así que estás leyendo el original en inglés.',
    publishedOn: 'Publicado el',
  },
  contact: {
    heading: 'Hablemos',
    intro:
      '¿Tienes algo en mente? Un proyecto, una duda o solo saludar. Estoy a un mensaje de distancia.',
    email: 'Escríbeme un correo',
    schedule: 'Agenda una llamada',
    links: 'También me encuentras en',
  },
  footer: {
    heading: '¿Tienes algo en mente?',
    text: 'Escríbeme por cualquiera de estas plataformas. Estoy a un mensaje de distancia.',
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
