import ClickSpark from './components/bits/ClickSpark'
import SmoothScroll from './components/SmoothScroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import TechLoop from './components/TechLoop'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <ClickSpark sparkColor="#C26A3A" sparkCount={10} sparkRadius={20}>
      <SmoothScroll />
      <div className="bg" aria-hidden="true">
        <div className="bg__mesh" />
        <div className="bg__blob bg__blob--white" />
        <div className="bg__blob bg__blob--cream" />
        <div className="bg__blob bg__blob--gold" />
        <div className="bg__grid" />
      </div>
      <div className="noise" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <TechLoop />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ClickSpark>
  )
}
