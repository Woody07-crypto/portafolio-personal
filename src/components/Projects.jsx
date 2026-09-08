import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import SplitText from './bits/SplitText'
import Magnet from './bits/Magnet'
import ImageCarousel from './ImageCarousel'
import { projects } from '../data/content'

function SienaScene({ project }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.62],
    ['inset(10% 12% round 2.2rem)', 'inset(0% 0% round 0rem)'],
  )
  const copyY = useTransform(scrollYProgress, [0.35, 0.7], [36, 0])
  const copyOpacity = useTransform(scrollYProgress, [0.32, 0.62], [0, 1])

  return (
    <article ref={ref} className="siena-scene">
      <div className="siena-scene__sticky">
        <motion.div className="siena-scene__mask" style={{ clipPath, WebkitClipPath: clipPath }}>
          <div className="siena-scene__media">
            <ImageCarousel project={project} />
          </div>
        </motion.div>

        <motion.div className="siena-scene__copy" style={{ y: copyY, opacity: copyOpacity }}>
          <div className="project__meta">
            <span>{project.number}</span>
            <span>{project.year}</span>
            <span>{project.role}</span>
          </div>
          <h3>{project.name}</h3>
          <p className="project__tagline">{project.tagline}</p>
          <p className="project__desc">{project.description}</p>
          <ul className="project__tags">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Magnet padding={16} magnetStrength={4.5}>
                  <span className="chip chip--soft">{tag}</span>
                </Magnet>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section className="section projects siena" id="trabajo">
      <div className="section__head">
        <p className="eyebrow">Trabajo</p>
        <SplitText
          text="Tres productos que importan."
          tag="h2"
          className="section__title"
          splitType="words"
          delay={70}
          duration={0.9}
          from={{ opacity: 0, y: 32 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.2}
          rootMargin="-60px"
          textAlign="left"
        />
      </div>

      <div className="siena__reel">
        {projects.map((project) => (
          <SienaScene key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
