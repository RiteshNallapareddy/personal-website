import '../styles/Projects.css'

function ProjectCard(props) {
    return (
    <div className="project-card">
    <img src={props.image} alt={props.title} className="project-image" />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    <div className="project-tech">
        {props.tech.map(t => (
        <span key={t} className="tech-tag">{t}</span>
        ))}
    </div>
    <div className="project-links">
        <a href={props.github} target="_blank">GitHub ↗</a>
        <a href={props.live} target="_blank">Live Demo ↗</a>
    </div>
    </div>
  )
}
export default ProjectCard