import './styles/Resume.css'
import photo from './assets/profile-small.jpg'
import financeTracker from './assets/finance-tracker.png'

const experience = [
  {
    role: 'Project Manager, CEN100 Introduction to Engineering',
    org: 'TMU Faculty of Engineering and Architectural Science',
    period: 'Sept 2026 – Present',
    description: 'Lead weekly tutorials for 30 first-year students across 3 sections, guiding team engineering design projects',
  },
  {
    role: 'First Year Ambassador Lead',
    org: 'TMU Faculty of Engineering and Architectural Science',
    period: 'May 2026 – Present',
    description: 'Lead 38 upper-year ambassadors, run pre-orientation programs and delivered the Academic Orientation keynote to 1,000+ students',
  },
  {
    role: 'Vice President of Corporate Relations',
    org: 'Metropolitan Undergraduate Engineering Society (MUES)',
    period: 'May 2026 – Present',
    description: 'Lead corporate sponsorship strategy and outreach to 17+ companies, and built a 217-company sponsor prospect database',
  },
  {
    role: 'Peer Mentor',
    org: 'Tri-Mentoring Program',
    period: 'Nov 2025 – Present',
    description: 'Mentor 8 to 12 first-year engineering students through the academic and social transition to university',
  },
  {
    role: 'Vice President of Professional Development',
    org: 'ECESTORMS',
    period: 'May 2025 – May 2026',
    description: 'Planned 5+ professional development events per semester, partnering with faculty, industry and alumni',
  },
  {
    role: 'First Year Ambassador',
    org: 'TMU Faculty of Engineering and Architectural Science',
    period: 'May 2025 – May 2026',
    description: 'Represented the faculty in outreach and helped plan events for first-year audiences of 80 to 120 students',
  },
  {
    role: 'Technology Associate',
    org: 'Google Developer Student Club (GDSC)',
    period: 'Oct 2024 – Present',
    description: 'Ran coding and web development workshops for 150+ participants',
  },
]

const projects = [
  {
    name: 'TMU Course & Student Group Recommender',
    stack: 'Next.js, React, TypeScript, Playwright',
    description: 'A recommendation web app built with the First Year Engineering Office that matches incoming engineering students to liberal studies electives and design teams by interest, using a shared TypeScript matching engine.',
    links: [{ label: 'GitHub', href: 'https://github.com/RiteshNallapareddy/tmu-course-group-recommender' }],
  },
  {
    name: 'Finance Tracker',
    stack: 'Python, Flask, SQLite, JavaScript, yfinance',
    description: 'A full-stack finance dashboard with 10 REST API endpoints that tracks income and expenses by category alongside a live stock portfolio with real-time profit and loss, plus financial news.',
    image: financeTracker,
    links: [
      { label: 'GitHub', href: 'https://github.com/RiteshNallapareddy/finance-tracker' },
      { label: 'Live', href: 'https://finance-tracker-lac-omega.vercel.app/' },
    ],
  },
]

const skills = [
  ['Languages', 'Python, C, C++, Java, JavaScript, TypeScript, HTML, CSS, SQL'],
  ['Frameworks', 'React, Node.js, Flask, Vite, Java Swing, ROS2, LangChain'],
  ['Tools', 'Git, GitHub, Linux, Vercel, Render, SQLite, VS Code'],
]

function Heading({ children }) {
  return (
    <h2 className="r-heading">
      <span className="r-hl">{children}</span>
    </h2>
  )
}

export default function Resume() {
  return (
    <main className="resume">
      <div className="r-page">
        <header className="r-header">
          <img className="r-photo" src={photo} alt="Ritesh Nallapareddy" />
          <div>
            <h1>Ritesh Nallapareddy</h1>
            <p className="r-sub">Computer Engineering student at Toronto Metropolitan University</p>
          </div>
        </header>
        <p className="r-links">
          <a href="mailto:riteshpr8@gmail.com">riteshpr8@gmail.com</a>
          <a href="https://github.com/RiteshNallapareddy" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/ritesh-nallapareddy" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>

        <p className="r-about">
          I build things, solve hard problems and move fast. I specialize in software engineering with a minor in economics, and I'm aiming for software engineering roles in fintech.
        </p>

        <section>
          <Heading>Experience</Heading>
          {experience.map((e) => (
            <div className="r-item" key={e.role + e.period}>
              <div className="r-row">
                <span><b>{e.role}</b>, {e.org}</span>
                <span className="r-date">{e.period}</span>
              </div>
              <p>{e.description}</p>
            </div>
          ))}
        </section>

        <section>
          <Heading>Projects</Heading>
          {projects.map((p) => (
            <div className="r-item" key={p.name}>
              <div className="r-row">
                <span><b>{p.name}</b> <span className="r-date">{p.stack}</span></span>
                <span className="r-proj-links">
                  {p.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>
                  ))}
                </span>
              </div>
              <p>{p.description}</p>
              {p.image && <img className="r-shot" src={p.image} alt={`${p.name} screenshot`} loading="lazy" />}
            </div>
          ))}
        </section>

        <section>
          <Heading>Skills</Heading>
          {skills.map(([label, items]) => (
            <p className="r-skill" key={label}><b>{label}</b> {items}</p>
          ))}
        </section>

        <footer className="r-footer">© 2026 Ritesh Nallapareddy</footer>
      </div>
    </main>
  )
}
