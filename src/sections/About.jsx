import '../styles/About.css' 
import { useState, useEffect } from 'react'
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'


function About() {
  const photos = [about1, about2]

    const [photoIndex, setPhotoIndex] = useState(0)

    useEffect(() => {
    const timer = setTimeout(() => {
        setPhotoIndex((photoIndex + 1) % photos.length)
    }, 3000)
    return () => clearTimeout(timer)
    }, [photoIndex])

  return (
    <div id="about" className="about">
    <h2 className="section-title">About Me</h2>
    <div className="about-grid">
        <div className="about-bio">
        <p>I build things, solve hard problems and move fast. I'm a Compuer Engineering student at Toronto Metropolitan University focused on developing strong technical skills and turning ideas into real, impactful systems. I'm constantly earning, building and pushing myself toward high-performance engineering roles.</p>
        </div>
        <div className="about-image">
            <img src={photos[photoIndex]} alt="About me" />
        </div>
    </div>
    </div>
  )
}

export default About