import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  Printer,
  X,
} from 'lucide-react';

const skills = [
  {
    group: 'Cloud engineering',
    items: ['Cloud computing', 'Cloud infrastructure', 'Cloud architecture', 'Deployment & hosting'],
  },
  {
    group: 'Technical foundations',
    items: ['Linux fundamentals', 'Computer networking', 'Operating systems', 'Database concepts'],
  },
  {
    group: 'Development tools',
    items: ['Git & GitHub', 'Web technologies', 'Problem solving', 'Technical documentation'],
  },
];

const projects = [
  {
    number: '01',
    title: 'Aurelia Health System',
    type: 'HEALTH TECHNOLOGY · SOFTWARE PROJECT',
    description:
      'A healthcare-focused software project developed to bring essential health-service workflows into a digital experience. Explore the source code and project progress on GitHub.',
    stack: ['Software development', 'Health technology', 'GitHub'],
    link: 'https://github.com/Billianthedev/Aurelia-health-system',
  },
];

const achievements = [
  {
    year: 'NOW',
    title: 'Focused on cloud engineering',
    detail:
      'Developing a strong foundation in cloud computing, infrastructure, networking, and the systems that power reliable digital services.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navItems = ['About', 'Skills', 'Projects', 'Achievements', 'Contact'];

  return (
    <div className="site-shell">
      <div className="topline">
        <span>PORTFOLIO / 2026</span>
        <span>
          AVAILABLE FOR OPPORTUNITIES <i className="status-dot" />
        </span>
      </div>
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Meshack Billian home">
          MB<span>.</span>
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav
          className={menuOpen ? 'nav-links open' : 'nav-links'}
          aria-label="Main navigation"
        >
          {navItems.map((item, index) => (
            <a key={item} href={'#' + item.toLowerCase()} onClick={closeMenu}>
              <span>0{index + 1}</span>
              {item}
            </a>
          ))}
          <button className="nav-resume" onClick={() => window.print()}>
            RESUME <ArrowUpRight size={14} />
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-kicker">
            <span className="kicker-line" /> COMPUTER SCIENCE STUDENT · CLOUD ENGINEERING ENTHUSIAST
          </div>
          <h1>
            Turning ideas
            <br />
            into <em>things</em>
            <br />
            that <span className="outline-word">work.</span>
          </h1>
          <div className="hero-bottom">
            <p className="hero-intro">
              Hey, I'm <strong>Meshack Billian.</strong>
              <br />A Year 2 Computer Science student at Kibabii University, drawn to cloud computing and the engineering behind reliable, scalable technology.
            </p>
            <a
              className="round-link"
              href="#projects"
              aria-label="Explore projects"
            >
              <ArrowDownRight size={27} />
            </a>
          </div>
          <div className="hero-index">
            <span>BASED IN NAIROBI, KE</span>
            <span>SCROLL TO EXPLORE ↓</span>
            <span>01 — 05</span>
          </div>
          <div className="hero-stamp">
            <span>CS</span>
            <span>
              STUDENT
              <br />
              DEVELOPER
            </span>
          </div>
        </section>

        <section id="about" className="about section-wrap section-pad">
          <div className="section-label">
            <span>01 / ABOUT</span>
            <span>A LITTLE INTRODUCTION</span>
          </div>
          <div className="about-grid">
            <h2>
              Curiosity is
              <br />
              my <em>starting point.</em>
            </h2>
            <div className="about-copy">
              <p className="lead">
                I’m Meshack Billian, a second-year Computer Science student at Kibabii University with a growing passion for cloud computing and cloud engineering.
              </p>
              <p>
                I’m especially interested in how cloud platforms, infrastructure, networking, and automation make modern applications dependable and scalable. I enjoy learning by building, documenting what I discover, and steadily developing the practical skills needed to become a Cloud Engineer.
              </p>
              <a className="text-link" href="#contact">
                LET’S CONNECT <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
          <div className="about-facts">
            <div>
              <span>01</span>
              <strong>LEARN</strong>
              <small>Stay curious. Keep asking.</small>
            </div>
            <div>
              <span>02</span>
              <strong>BUILD</strong>
              <small>Turn ideas into useful things.</small>
            </div>
            <div>
              <span>03</span>
              <strong>SHARE</strong>
              <small>Grow by creating together.</small>
            </div>
          </div>
        </section>

        <section id="skills" className="skills section-wrap section-pad">
          <div className="section-label">
            <span>02 / TOOLKIT</span>
            <span>SKILLS & TECHNOLOGIES</span>
          </div>
          <div className="section-heading">
            <h2>
              Tools of
              <br />
              <em>the trade.</em>
            </h2>
            <p>
              The technical areas I’m exploring as I work towards a career in cloud engineering.
            </p>
          </div>
          <div className="skill-list">
            {skills.map((group, i) => (
              <div className="skill-row" key={group.group}>
                <div className="skill-number">0{i + 1}</div>
                <h3>{group.group}</h3>
                <div className="skill-tags">
                  {group.items.map(item => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="micro-note">
            These are learning areas and foundations I’m actively developing, not a claim of professional certification.
          </p>
        </section>

        <section id="projects" className="projects section-pad">
          <div className="section-wrap">
            <div className="section-label">
              <span>03 / SELECTED WORK</span>
              <span>IDEAS MADE TANGIBLE</span>
            </div>
            <div className="section-heading">
              <h2>
                Made with
                <br />
                <em>intention.</em>
              </h2>
              <p>
                A project from my development journey, with more experiments and builds to come.
              </p>
            </div>
            <div className="project-list">
              {projects.map(project => (
                <article className="project-card" key={project.number}>
                  <div className="project-number">{project.number}</div>
                  <div className="project-main">
                    <span className="project-type">{project.type}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-stack">
                      {project.stack.map(item => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={'Open ' + project.title}
                  >
                    <ArrowUpRight />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="achievements"
          className="achievements section-wrap section-pad"
        >
          <div className="section-label">
            <span>04 / THE JOURNEY</span>
            <span>MILESTONES & RECOGNITION</span>
          </div>
          <div className="section-heading">
            <h2>
              Small steps.
              <br />
              <em>Real progress.</em>
            </h2>
            <p>
              My current direction is clear: build strong technical foundations and grow into a capable Cloud Engineer.
            </p>
          </div>
          <div className="timeline">
            {achievements.map(item => (
              <article className="timeline-item" key={item.year + item.title}>
                <span className="timeline-year">{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
                <span className="timeline-mark">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="education section-wrap">
          <div className="section-label">
            <span>05 / CURRENTLY LEARNING</span>
            <span>EDUCATION</span>
          </div>
          <div className="education-content">
            <div>
              <span className="project-type">YEAR 2 · CURRENT</span>
              <h2>
                Computer
                <br />
                <em>Science.</em>
              </h2>
            </div>
            <div>
              <h3>Kibabii University</h3>
              <p>
                Second-year student building a strong foundation in computing, software development, and the technologies shaping modern cloud infrastructure.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="section-wrap contact-inner">
            <div className="section-label">
              <span>06 / YOUR NEXT MOVE</span>
              <span>OPEN TO GOOD CONVERSATIONS</span>
            </div>
            <p className="contact-overline">
              HAVE A PROJECT, IDEA, OR OPPORTUNITY?
            </p>
            <h2>
              Let's make
              <br />
              <em>something</em>
              <br />
              matter.
            </h2>
            <a className="contact-email" href="mailto:ianmesh10@gmail.com?subject=Hello%20Meshack">
              ianmesh10@gmail.com <ArrowUpRight />
            </a>
            <div className="social-links">
              <a href="https://github.com/Billianthedev" target="_blank" rel="noreferrer">
                <Github size={17} /> GITHUB <ArrowUpRight size={13} />
              </a>
              <a href="mailto:ianmesh10@gmail.com">
                <Mail size={17} /> EMAIL <ArrowUpRight size={13} />
              </a>
            </div>
            <footer>
              <a className="wordmark footer-mark" href="#top">
                MB<span>.</span>
              </a>
              <span>MESHACK BILLIAN · © 2026</span>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                BACK TO TOP ↑
              </button>
            </footer>
          </div>
        </section>
      </main>
      <button className="print-fab" onClick={() => window.print()}>
        <Printer size={15} /> SAVE AS PDF
      </button>
    </div>
  );
}

export default App;
