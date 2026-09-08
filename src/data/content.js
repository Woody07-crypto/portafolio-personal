export const profile = {
  name: 'AJ Cruz',
  shortName: 'AJ',
  role: 'Desarrollador de software',
  location: 'El Salvador',
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
    tagline: 'El espacio del clan: progresión, proyectos y memoria en un solo lugar.',
    description:
      'Plataforma del Grupo Scout No.1 Los Intrépidos, Rama Rover. Conecta la ruta de progresión, el proyecto de vida, el libro de oro y los proyectos de servicio. Seguimiento claro, interactividad y una experiencia moderna para cada Rover.',
    role: 'Producto y desarrollo',
    tags: ['Scouts', 'Progresión', 'Auth', 'React'],
    accent: '#C26A3A',
    visual: 'maya',
    gallery: [
      { title: 'Inicio', src: '/projects/cloud-maya-inicio.png' },
      { title: 'Progresión', src: '/projects/cloud-maya-progresion.png' },
      { title: 'Iniciar sesión', src: '/projects/cloud-maya-login.png' },
      { title: 'Crear cuenta', src: '/projects/cloud-maya-registro.png' },
    ],
  },
  {
    id: 'utcket',
    number: '02',
    name: 'Utcket',
    year: '2024',
    tagline: 'Los mejores conciertos de la ciudad, a un clic.',
    description:
      'E-commerce de boletos para conciertos y eventos. Buscar por ciudad, fecha y artista, recorrer el calendario y comprar tickets sin fricción. UTCKET conecta a los fans con los eventos que importan.',
    role: 'Frontend y experiencia',
    tags: ['Eventos', 'Ticketing', 'E-commerce', 'React'],
    accent: '#3D6B5A',
    visual: 'ticket',
    gallery: [
      { title: 'Inicio', src: '/projects/utcket-inicio.png' },
      { title: 'Conciertos', src: '/projects/utcket-conciertos.jpg' },
      { title: 'Calendario', src: '/projects/utcket-calendario.png' },
      { title: 'Nosotros', src: '/projects/utcket-nosotros.png' },
    ],
  },
  {
    id: 'la-cuponera',
    number: '03',
    name: 'La Cuponera',
    year: '2023',
    tagline: 'Ahorrar debería sentirse como un pequeño triunfo.',
    description:
      'Plataforma de cupones y descuentos en El Salvador. Explorar ofertas sin cuenta, registrarse en segundos y acceder a códigos exclusivos, descarga en PDF e historial de compras. Una UI clara, pensada para volver a abrirla antes de cada gasto.',
    role: 'Producto y desarrollo',
    tags: ['Cupones', 'Marketplace', 'Auth', 'UX'],
    accent: '#B85C38',
    visual: 'coupon',
    gallery: [
      { title: 'Explorar', src: '/projects/cuponera-explorar.png' },
      { title: 'Registro', src: '/projects/cuponera-registro.png' },
      { title: 'Iniciar sesión', src: '/projects/cuponera-login.png' },
    ],
  },
]
