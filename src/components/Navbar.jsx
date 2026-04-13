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

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={visible ? "navbar visible" : "navbar"}>
      <span>Ritesh's Personal Portfolio</span>
      <ul>
        <li><span onClick={() => scrollTo('about')}>About</span></li>
        <li><span onClick={() => scrollTo('skills')}>Skills</span></li>
        <li><span onClick={() => scrollTo('projects')}>Projects</span></li>
        <li><span onClick={() => scrollTo('contact')}>Contact</span></li>
      </ul>
    </nav>
  )
}

export default Navbar