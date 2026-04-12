import '../styles/About.css'  

function About() {
  return (
    <div id="about" className="about">
    <h2 className="section-title">About Me</h2>
    <div className="about-grid">
        <div className="about-bio">
        <p>I'm a Computer Engineering student with a passion for building things at the intersection of technology and finance. My goal is to become a Quant Developer — combining strong programming fundamentals with financial systems.</p>
        </div>
        <div className="about-facts">
        <ul>
            <li>🎓 Computer Engineering</li>
            <li>💻 Currently learning React</li>
            <li>📈 Interested in Quant Finance</li>
            <li>🛠️ Building real projects</li>
        </ul>
        </div>
    </div>
    </div>
  )
}

export default About