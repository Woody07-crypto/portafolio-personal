import LogoLoop from './bits/LogoLoop'

const techLogos = [
  { node: <span className="tech-mark">React</span>, title: 'React' },
  { node: <span className="tech-mark">JavaScript</span>, title: 'JavaScript' },
  { node: <span className="tech-mark">HTML5</span>, title: 'HTML5' },
  { node: <span className="tech-mark">CSS3</span>, title: 'CSS3' },
  { node: <span className="tech-mark">GSAP</span>, title: 'GSAP' },
  { node: <span className="tech-mark">Node.js</span>, title: 'Node.js' },
  { node: <span className="tech-mark">Git</span>, title: 'Git' },
  { node: <span className="tech-mark">APIs REST</span>, title: 'APIs REST' },
  { node: <span className="tech-mark">UI / UX</span>, title: 'UI / UX' },
  { node: <span className="tech-mark">Motion</span>, title: 'Motion' },
]

export default function TechLoop() {
  return (
    <section className="tech-loop" aria-label="Tecnologías">
      <LogoLoop
        logos={techLogos}
        speed={90}
        direction="left"
        logoHeight={28}
        gap={64}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Tecnologías y herramientas"
      />
    </section>
  )
}
