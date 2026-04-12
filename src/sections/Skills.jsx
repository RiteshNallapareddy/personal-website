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
        <SkillChip name="C" />
        <SkillChip name="Java" />
        <SkillChip name="JavaScript" />
        <SkillChip name="HTML" />
        <SkillChip name="CSS" />
        <SkillChip name="SQL" />
      </div>
    </div>
    <div className="skill-category">
      <h3>Frameworks</h3>
      <div className="chips">
        <SkillChip name="React" />
        <SkillChip name="Node.js" />
        <SkillChip name="Flask" />
      </div>
    </div>
    <div className="skill-category">
      <h3>Tools</h3>
      <div className="chips">
        <SkillChip name="Git" />
        <SkillChip name="Github" />
        <SkillChip name="VS Code" />
      </div>
    </div>
  </div>
</div>
  )
}

export default Skills