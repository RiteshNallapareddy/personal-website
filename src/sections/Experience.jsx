import '../styles/Experience.css'
import Slideshow from '../components/Slideshow.jsx'
import img1 from '../assets/experience1.jpg'
import img2 from '../assets/experience2.jpg'
import img3 from '../assets/experience3.jpg'

function Experiences() {
  const experiences = [
  {
    club: "ECESTORMS",
    role: "Vice President of Professional Development",
    date: "2025",
    description: "Led workshops and events connecting students with career opportunities"
  },
  {
    club: "First-Year Engineering Office",
    role: "First-Year Ambassador",
    date: "2025",
    description: "Helped first-year students transition into university"
  },
  {
    club: "Google Developer Groups on Campus TMU",
    role: "Vice President of Technology",
    date: "2025",
    description: "Led technical initiatives and student developer projects"
  }]

  const sorted = [...experiences].sort((a, b) => b.date - a.date)

  return (
  <div id="experience" className="experience">
    <h2 className="section-title">Experience</h2>
    <div className="experience-grid">
      <div className="timeline">
        {sorted.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{item.club}</h3>
              <h4>{item.role}</h4>
              <p className="timeline-date">{item.date} — Present</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Slideshow photos={[img1, img2, img3]} />
    </div>
  </div>
)
}

export default Experiences