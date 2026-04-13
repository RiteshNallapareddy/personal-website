import '../styles/Navbar.css'
import { useState, useEffect } from 'react'

function Navbar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

    const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', `/#${id}`)
    }
    }

  return (
    <nav className={visible ? "navbar visible" : "navbar"}>
      <span>Ritesh's Personal Portfolio</span>
      <ul>
        <li><span onClick={() => scrollToSection('about')}>About</span></li>
        <li><span onClick={() => scrollToSection('skills')}>Skills</span></li>
        <li><span onClick={() => scrollToSection('projects')}>Projects</span></li>
        <li><span onClick={() => scrollToSection('contact')}>Contact</span></li>
      </ul>
    </nav>
  )
}

export default Navbar