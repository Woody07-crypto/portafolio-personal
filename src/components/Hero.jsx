import SplitText from './bits/SplitText'
import StarBorder from './bits/StarBorder'
import Magnet from './bits/Magnet'
import GradientText from './bits/GradientText'
import { profile } from '../data/content'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__orb hero__orb--one" aria-hidden="true" />
      <div className="hero__orb hero__orb--two" aria-hidden="true" />

      <div className="hero__top">
        <p className="eyebrow">Portafolio · {new Date().getFullYear()}</p>
        <p className="hero__meta">
          {profile.role} · {profile.location}
        </p>
      </div>

      <div className="hero__title-wrap">
        <SplitText
          text={profile.headline}
          tag="h1"
          className="hero__title"
          splitType="chars"
          delay={28}
          duration={1.05}
          from={{ opacity: 0, y: 56 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.2}
          rootMargin="-40px"
          textAlign="left"
        />
      </div>

      <div className="hero__bottom">
        <p className="hero__sub">{profile.subhead}</p>

        <div className="hero__actions">
          <Magnet padding={50} magnetStrength={2.2}>
            <StarBorder href="#trabajo" color="#E8C9A8" speed="5.5s">
              Ver trabajo
            </StarBorder>
          </Magnet>
          <Magnet padding={50} magnetStrength={2.2}>
            <a className="btn btn--ghost" href="#sobre-mi">
              Sobre mí
            </a>
          </Magnet>
        </div>
      </div>

      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>

      <div className="hero__accent-word" aria-hidden="true">
        <GradientText colors={['#C26A3A', '#C9A36A', '#8B5E3C']} animationSpeed={10}>
          Cloud · Tickets · Cupones
        </GradientText>
      </div>
    </section>
  )
}
