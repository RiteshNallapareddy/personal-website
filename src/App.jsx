import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Experiences from './sections/Experience.jsx'
import Contact from './sections/Contact.jsx'


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Contact /> 
    </div>
  )
}

export default App