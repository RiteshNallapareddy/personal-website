// Portfolio App
import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Experiences from './sections/Experience.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollReveal from './components/ScrollReveal.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><Skills /></ScrollReveal>
      <ScrollReveal><Projects /></ScrollReveal>
      <ScrollReveal><Experiences /></ScrollReveal>
      <ScrollReveal><Contact /></ScrollReveal>
      <Footer />
    </div>
  )
}

export default App