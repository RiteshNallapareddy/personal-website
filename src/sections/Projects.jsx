import '../styles/Projects.css'
import ProjectCard from '../components/ProjectCard.jsx'
import financeTracker from '../assets/finance-tracker.png'

function Projects() {
  return (
    <div id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        <ProjectCard
          image={financeTracker}
          title="Finance Tracker"
          description="A full-stack financial dashboard with stock portfolio tracking and financial news integration."
          tech={["React", "Python", "Flask", "SQLite"]}
          github="https://github.com/RiteshNallapareddy/finance-tracker"
          live="https://finance-tracker-lac-omega.vercel.app/"
        />
      </div>
    </div>
  )
}

export default Projects

