import { useState } from 'react'
import ProjectVisual from './ProjectVisual'

export default function ImageCarousel({ project }) {
  const slides = [
    { type: 'visual', visual: project.visual, accent: project.accent, title: project.name },
    ...(project.gallery || []).map((item) => ({ type: 'image', ...item })),
  ]
  const [index, setIndex] = useState(0)
  const total = slides.length
  const slide = slides[index]

  const go = (dir) => {
    setIndex((current) => (current + dir + total) % total)
  }

  return (
    <div className="img-carousel">
      <div className="img-carousel__stage">
        <div className="img-carousel__frame">
          {slide.type === 'visual' ? (
            <ProjectVisual type={slide.visual} accent={slide.accent} />
          ) : (
            <img src={slide.src} alt={slide.title || project.name} className="img-carousel__photo" />
          )}
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
