import SplitText from './bits/SplitText'
import SpotlightCard from './bits/SpotlightCard'
import { profile } from '../data/content'

const stats = [
  { value: '03', label: 'Proyectos destacados' },
  { value: 'UX', label: 'Primero la experiencia' },
  { value: 'JS', label: 'React y JavaScript' },
]

export default function About() {
  return (
    <section className="section about" id="sobre-mi">
      <div className="about__grid">
        <div className="about__copy">
          <div className="section__head">
            <p className="eyebrow">Sobre mí</p>
            <SplitText
              text="Construyo software que se siente humano."
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
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="about__p">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="about__aside">
          <SpotlightCard className="portrait" spotlightColor="rgba(201, 163, 106, 0.28)">
            <div className="portrait__frame">
              <div className="portrait__monogram">{profile.shortName}</div>
              <p className="portrait__name">{profile.name}</p>
              <p className="portrait__role">{profile.role}</p>
            </div>
          </SpotlightCard>

          <div className="stats">
            {stats.map((stat) => (
              <SpotlightCard key={stat.label} className="stat" spotlightColor="rgba(194, 106, 58, 0.16)">
                <p className="stat__value">{stat.value}</p>
                <p className="stat__label">{stat.label}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
