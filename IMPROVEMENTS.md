# Roadmap de mejoras de monge1h.com

Lista viva de mejoras pendientes, ordenadas por lo que más señal de seniority da por hora invertida. Marcar con `[x]` lo que se vaya completando.

## Contenido (la mayor palanca)

- [ ] Publicar el post del i18n con CloudFront Functions (borrador listo en `drafts/`, moverlo a `blog/{en,es}/` cuando esté editado)
- [ ] Escribir el caso de estudio del refactor del calendario en Ravn: perfil de rendimiento, decisiones de estado y componentes, métricas de antes y después
- [ ] Escribir sobre el sistema de OTP propio que reemplazó a Twilio: análisis de costo, decisiones de seguridad, qué haría distinto
- [ ] Escribir sobre el matching con IA de Terapify (lo que se pueda contar públicamente)
- [ ] Definir una cadencia realista y sostenerla: un post de caso de estudio o postmortem al mes vale más que diez tutoriales
- [ ] Escribir primero en inglés (mercado que contrata senior), traducir al español con la infraestructura que ya existe

## Proyectos

- [ ] Retomar Socnare Pets como producto vivo: es el mejor activo (hardware + software + historia de negocio). Documentar su evolución con métricas y costos
- [ ] Cerrar las historias de Forkify y sendthistomyfuture.me: quitar el 🚧 y escribir un "qué aprendí y por qué lo pausé/maté". Un proyecto cerrado con reflexión da mejor señal que uno abandonado a medias
- [ ] Considerar una herramienta open source pequeña que otros usen (un paquete npm con descargas es evidencia verificable de impacto)
- [ ] Cada proyecto nuevo debe salir con su caso de estudio: problema, decisiones, arquitectura, números

## El sitio como evidencia técnica

- [ ] Post o página de arquitectura del sitio con diagrama: S3, CloudFront, Terraform, GitHub Actions, la función de idioma
- [ ] Botón de descarga del CV en el hero o en contacto
- [ ] Página "/now" o "what I'm building" que muestre que el sitio está vivo
- [ ] Imágenes OG propias por post (hoy varios reutilizan imágenes viejas o placeholders)
- [ ] Más tests e2e: navegación entre idiomas, fallback de traducción, links del navbar (hoy solo se testea el contador de visitas)
- [ ] Lighthouse en verde en las cuatro categorías, y presumirlo en el post de arquitectura
- [ ] Configurar `NEXT_PUBLIC_GOOGLE_ANALYTICS` como secret en el workflow de deploy (hoy Analytics no recibe el ID en producción)

## Deuda técnica (menor, sin prisa)

- [ ] Actualizar Next.js 14 a 15 y TypeScript 4.5 a 5.x (requiere subir Node en los workflows)
- [ ] Activar `strict: true` en tsconfig
- [ ] Actualizar ESLint 7 a la versión que usa eslint-config-next moderno
- [ ] Revisar el API del contador de visitas y escribir sobre cómo está hecho (estilo cloud resume challenge)

## Comunidad y marca

- [ ] Publicar cada charla (GDG, KCD) como post con slides y video
- [ ] Proponer dos o tres charlas al año en eventos de LATAM
- [ ] Alinear el título en todas partes: el sitio ya dice Senior Software Engineer, revisar LinkedIn y GitHub
- [ ] GitHub: fijar los repos con mejor README, agregar screenshots y descripción a cada uno
- [ ] Pedir recomendaciones en LinkedIn a excompañeros de Ravn, Holacasa y Terapify
