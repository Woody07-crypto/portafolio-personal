import { useEffect, useState } from 'react'
import PillNav from './bits/PillNav'
import { navLinks, profile } from '../data/content'

const SECTION_IDS = ['inicio', 'sobre-mi', 'skills', 'trabajo', 'contacto']

export default function Navbar() {
  const [activeHref, setActiveHref] = useState('#inicio')

  useEffect(() => {
    const onScroll = () => {
      const marker = window.scrollY + 140
      let current = '#inicio'
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= marker) current = `#${id}`
      })
      setActiveHref(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <PillNav
      logo="/aj-logo.svg"
      logoAlt={profile.name}
      items={navLinks}
      activeHref={activeHref}
      baseColor="#1F1A14"
      pillColor="#FFF8EF"
      pillTextColor="#1F1A14"
      hoveredPillTextColor="#FFF8EF"
    />
  )
}
