import '../styles/Projects.css'
import ProjectCard from '../components/ProjectCard.jsx'
import financeTracker from '../assets/finance-tracker.png'

function Projects() {
  return (
    <div id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        <ProjectCard
          title="TMU Course & Student Group Recommender"
          description="A recommendation web app built with the First Year Engineering Office that matches incoming engineering students to liberal studies electives and design teams by interest, using a shared TypeScript matching engine."
          tech={["Next.js", "React", "TypeScript", "Playwright"]}
          github="https://github.com/RiteshNallapareddy/tmu-course-group-recommender"
        />
        <ProjectCard
          image={financeTracker}
          title="Finance Tracker"
          description="A full-stack finance dashboard with 10 REST API endpoints that tracks income and expenses by category alongside a live stock portfolio with real-time profit and loss, plus financial news."
          tech={["Python", "Flask", "SQLite", "JavaScript", "yfinance"]}
          github="https://github.com/RiteshNallapareddy/finance-tracker"
          live="https://finance-tracker-lac-omega.vercel.app/"
        />
      </div>
    </div>
  )
}

export default Projects

