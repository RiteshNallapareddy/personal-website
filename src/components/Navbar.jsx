import '../styles/Navbar.css'
import { useState, useEffect } from 'react'

function Navbar() {
  const [visible, setVisible] = useState(window.scrollY > 50)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
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
        <li><a href="/#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a></li>
        <li><a href="/#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills') }}>Skills</a></li>
        <li><a href="/#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>Projects</a></li>
        <li><a href="/#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar