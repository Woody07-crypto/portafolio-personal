import { useState } from 'react'

export default function ImageCarousel({ project }) {
  const slides = project.gallery || []
  const [index, setIndex] = useState(0)
  const total = slides.length
  const slide = slides[index]

  if (!slide) return null

  const go = (dir) => {
    setIndex((current) => (current + dir + total) % total)
  }

  return (
    <div className="img-carousel">
      <div className="img-carousel__stage">
        <div className="img-carousel__frame is-photo">
          <img src={slide.src} alt={slide.title || project.name} className="img-carousel__photo" />
        </div>
      </div>

      {total > 1 ? (
        <div className="img-carousel__ui">
          <button type="button" className="img-carousel__btn" onClick={() => go(-1)} aria-label="Anterior">
            ‹
          </button>
          <div className="img-carousel__dots">
            {slides.map((item, i) => (
              <button
                key={item.title || i}
                type="button"
                className={`img-carousel__dot ${i === index ? 'is-active' : ''}`}
                aria-label={`Ir a la imagen ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button type="button" className="img-carousel__btn" onClick={() => go(1)} aria-label="Siguiente">
            ›
          </button>
        </div>
      ) : null}
    </div>
  )
}
