import SplitText from './bits/SplitText'
import StarBorder from './bits/StarBorder'
import Magnet from './bits/Magnet'
import { profile } from '../data/content'

export default function Contact() {
  return (
    <section className="section contact" id="contacto">
      <SplitText
        text="Hablemos de tu próximo proyecto."
        tag="h2"
        className="contact__title"
        splitType="words"
        delay={70}
        duration={0.95}
        from={{ opacity: 0, y: 28 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.25}
        rootMargin="-40px"
        textAlign="left"
      />
      <p className="eyebrow">Contacto</p>
      <p className="contact__copy">
        Si buscas a alguien que combine desarrollo, criterio de producto y una UI cuidadosa, este es un buen lugar
        para empezar.
      </p>
      <div className="contact__actions">
        <Magnet padding={48} magnetStrength={2.2}>
          <StarBorder href={`mailto:${profile.email}`} color="#E8C9A8" speed="5s">
            {profile.email}
          </StarBorder>
        </Magnet>
      </div>
    </section>
  )
}
