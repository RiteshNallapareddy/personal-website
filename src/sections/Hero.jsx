import '../styles/Hero.css'
import { useState, useEffect } from 'react'


function Hero() {
  const roles = ["Quant Developer.", "Engineer.", "Builder."]
    const [roleIndex, setRoleIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')    

  useEffect(() => {
  const currentRole = roles[roleIndex]
  
  if (displayText.length < currentRole.length) {
    setTimeout(() => {
      setDisplayText(currentRole.slice(0, displayText.length + 1))
    }, 100)
  } else {
    setTimeout(() => {
      setRoleIndex((roleIndex + 1) % roles.length)
      setDisplayText('')
    }, 2000)
  }
}, [displayText, roleIndex])

  return (
    <div className="hero">
  <div className="hero-content">
    <h1 className="hero-name">Ritesh Nallapareddy</h1>
    <h2 className="hero-title">{displayText}</h2>
    <div className="hero-buttons">
      <a href="#projects" className="btn-primary">View Projects</a>
      <a href="#contact" className="btn-secondary">Contact Me</a>
    </div>
  </div>
</div>
  )
}
export default Hero