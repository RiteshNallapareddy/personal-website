import '../styles/Skills.css'  
import SkillChip from '../components/SkillChip.jsx'

function Skills() {
  return (
    <div id="skills" className="skills">
  <h2 className="section-title">Skills</h2>
  <div className="skills-grid">
    <div className="skill-category">
      <h3>Languages</h3>
      <div className="chips">
        <SkillChip name="Python" />
        <SkillChip name="C++" />
        <SkillChip name="JavaScript" />
      </div>
    </div>
    <div className="skill-category">
      <h3>Frameworks</h3>
      <div className="chips">
        <SkillChip name="React" />
        <SkillChip name="Flask" />
      </div>
    </div>
    <div className="skill-category">
      <h3>Tools</h3>
      <div className="chips">
        <SkillChip name="Git" />
        <SkillChip name="SQL" />
        <SkillChip name="Linux" />
      </div>
    </div>
  </div>
</div>
  )
}

export default Skills