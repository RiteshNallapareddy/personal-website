import '../styles/About.css' 
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'
import Slideshow from '../components/Slideshow.jsx'

function About() {
  return (
    <div id="about" className="about">
    <h2 className="section-title">About Me</h2>
    <div className="about-grid">
        <div className="about-bio">
        <p>I build things, solve hard problems and move fast. I'm a Computer Engineering student at Toronto Metropolitan University, specializing in software engineering with a minor in economics. I turn ideas into real, impactful systems, and I'm aiming for software engineering roles in fintech. I'm constantly learning, building and pushing myself toward high-performance engineering work.</p>
        </div>
        <Slideshow photos={[about1, about2]} />
    </div>
    </div>
  )
}

export default About