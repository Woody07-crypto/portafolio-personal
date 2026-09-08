import SplitText from './bits/SplitText'
import SpotlightCard from './bits/SpotlightCard'
import Magnet from './bits/Magnet'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section__head">
        <p className="eyebrow">Skills</p>
        <SplitText
          text="Un stack al servicio del producto."
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

      <div className="skills__grid">
        {skills.map((group) => (
          <SpotlightCard key={group.group} className="skill-card" spotlightColor="rgba(194, 106, 58, 0.2)">
            <p className="skill-card__group">{group.group}</p>
            <ul>
              {group.items.map((item) => (
                <li key={item}>
                  <Magnet padding={18} magnetStrength={4}>
                    <span className="chip">{item}</span>
                  </Magnet>
                </li>
              ))}
            </ul>
          </SpotlightCard>
        ))}
      </div>
    </section>
  )
}
