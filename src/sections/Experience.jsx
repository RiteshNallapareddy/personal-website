import '../styles/Experience.css'
import Slideshow from '../components/Slideshow.jsx'
import img1 from '../assets/experience1.jpg'
import img2 from '../assets/experience2.jpg'
import img3 from '../assets/experience3.jpg'
import img4 from '../assets/experience4.jpg'
import img5 from '../assets/experience5.jpg'

function Experiences() {
  const experiences = [
  {
    club: "TMU Faculty of Engineering and Architectural Science",
    role: "Project Manager, CEN100 Introduction to Engineering",
    start: 202609,
    period: "Sept 2026 — Present",
    description: "Lead weekly tutorials for 30 first-year students across 3 sections, guiding team engineering design projects"
  },
  {
    club: "TMU Faculty of Engineering and Architectural Science",
    role: "First Year Ambassador Lead",
    start: 202605,
    period: "May 2026 — Present",
    description: "Lead 38 upper-year ambassadors, run pre-orientation programs and delivered the Academic Orientation keynote to 1,000+ students"
  },
  {
    club: "Metropolitan Undergraduate Engineering Society (MUES)",
    role: "Vice President of Corporate Relations",
    start: 202605,
    period: "May 2026 — Present",
    description: "Lead corporate sponsorship strategy and outreach to 17+ companies, and built a 217-company sponsor prospect database"
  },
  {
    club: "Tri-Mentoring Program",
    role: "Peer Mentor",
    start: 202511,
    period: "Nov 2025 — Present",
    description: "Mentor 8 to 12 first-year engineering students through the academic and social transition to university"
  },
  {
    club: "ECESTORMS",
    role: "Vice President of Professional Development",
    start: 202505,
    period: "May 2025 — May 2026",
    description: "Planned 5+ professional development events per semester, partnering with faculty, industry and alumni"
  },
  {
    club: "TMU Faculty of Engineering and Architectural Science",
    role: "First Year Ambassador",
    start: 202505,
    period: "May 2025 — May 2026",
    description: "Represented the faculty in outreach and helped plan events for first-year audiences of 80 to 120 students"
  },
  {
    club: "Google Developer Student Club (GDSC)",
    role: "Technology Associate",
    start: 202410,
    period: "Oct 2024 — Present",
    description: "Ran coding and web development workshops for 150+ participants"
  }]

  const sorted = [...experiences].sort((a, b) => b.start - a.start)

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
              <p className="timeline-date">{item.period}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Slideshow photos={[img1, img2, img3, img4, img5]} />
    </div>
  </div>
)
}

export default Experiences