export const profile = {
  name: 'AJ Cruz',
  shortName: 'AJ',
  role: 'Desarrollador de software',
  location: 'Latinoamérica',
  email: 'ajcruzlinares05@gmail.com',
  headline: 'Productos digitales con carácter y detalle.',
  subhead:
    'Diseño y desarrollo experiencias claras, cálidas y memorables. Me importa tanto la arquitectura como el último pixel.',
  about: [
    'Soy desarrollador de software con un pie en el producto y otro en la interfaz. Me gusta construir plataformas que se sienten simples de usar, aunque por detrás resuelvan problemas complejos.',
    'He trabajado en productos como Cloud Maya, Utcket y La Cuponera: sistemas reales, con usuarios reales y con la presión de que cada flujo cuente. Busco un equilibrio entre rendimiento, claridad visual y una experiencia que invite a volver.',
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/Woody07-crypto' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alejandro-javier-cruz-linares-57184a31a/' },
    { label: 'Email', href: 'mailto:ajcruzlinares05@gmail.com' },
  ],
}

export const navLinks = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Skills', href: '#skills' },
  { label: 'Trabajo', href: '#trabajo' },
  { label: 'Contacto', href: '#contacto' },
]

export const skills = [
  {
    group: 'Frontend',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Motion / GSAP'],
  },
  {
    group: 'Producto y UX',
    items: ['UI design', 'Flujos de usuario', 'Prototipado', 'Accesibilidad', 'Design systems'],
  },
  {
    group: 'Ingeniería',
    items: ['APIs REST', 'Git', 'Node.js', 'Arquitectura web', 'Performance'],
  },
]

export const projects = [
  {
    id: 'cloud-maya',
    number: '01',
    name: 'Cloud Maya',
    year: '2024',
    tagline: 'Operaciones en la nube, con una interfaz que no se siente técnica.',
    description:
      'Plataforma cloud para centralizar operaciones, servicios y datos en un solo lugar. El objetivo fue traducir procesos complejos a una experiencia limpia: tableros claros, flujos ágiles y visibilidad en tiempo real para equipos que necesitan moverse rápido.',
    role: 'Producto y desarrollo',
    tags: ['SaaS', 'Cloud', 'Dashboards', 'React'],
    accent: '#C26A3A',
    visual: 'maya',
    gallery: [
      {
        title: 'Tablero',
        src: '/projects/cloud-maya-dashboard.png',
      },
      {
        title: 'Operaciones',
        src: '/projects/cloud-maya-ops.png',
      },
    ],
  },
  {
    id: 'utcket',
    number: '02',
    name: 'Utcket',
    year: '2024',
    tagline: 'Boletos, eventos y control de acceso sin fricción.',
    description:
      'Plataforma de ticketing para crear, vender y validar boletos. Pensada para el momento de mayor presión: la entrada. Compra en segundos, QR confiable y un flujo de check-in que no se traba cuando la fila empieza a crecer.',
    role: 'Frontend y experiencia',
    tags: ['Eventos', 'Ticketing', 'QR', 'Tiempo real'],
    accent: '#3D6B5A',
    visual: 'ticket',
    gallery: [
      {
        title: 'Evento',
        src: '/projects/utcket-evento.png',
      },
      {
        title: 'Check-in',
        src: '/projects/utcket-checkin.png',
      },
    ],
  },
  {
    id: 'la-cuponera',
    number: '03',
    name: 'La Cuponera',
    year: '2023',
    tagline: 'Ahorrar debería sentirse como un pequeño triunfo.',
    description:
      'Aplicación de cupones y ofertas para el día a día. Descubrir promociones, canjear beneficios y convertir cada compra en una oportunidad de ahorro. Una UI cercana, con jerarquía clara y una experiencia pensada para volver a abrirla antes de ir al súper.',
    role: 'Producto y desarrollo',
    tags: ['Mobile', 'Cupones', 'Fidelización', 'UX'],
    accent: '#B85C38',
    visual: 'coupon',
    gallery: [
      {
        title: 'Ofertas',
        src: '/projects/cuponera-ofertas.png',
      },
      {
        title: 'Cupones',
        src: '/projects/cuponera-cupones.png',
      },
    ],
  },
]
