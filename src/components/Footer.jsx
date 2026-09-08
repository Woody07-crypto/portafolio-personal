import { profile, navLinks } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <span className="nav__mark">{profile.shortName}</span>
        <p>Diseño y desarrollo con calma, no con prisa.</p>
      </div>
      <nav className="footer__links" aria-label="Pie de página">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <p className="footer__copy">© {new Date().getFullYear()} {profile.name}</p>
    </footer>
  )
}
