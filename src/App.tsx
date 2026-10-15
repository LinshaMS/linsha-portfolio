import { useState } from "react";
import "./App.css";

type Category = "Frontend" | "Full Stack" | "Backend";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  category: Category;
  description: string;
  technologies: string[];
  githubUrl: string;
  image?: string;
  features: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "EduManage",
    subtitle: "Student Management System",
    category: "Full Stack",
    description:
      "A student administration platform for managing student records, courses, and dashboard information.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    githubUrl:
      "https://github.com/LinshaMS/edumanage-student-management",
    image: "/images/edumanage-dashboard.png",
    features: [
      "Administrator authentication",
      "Student records and search",
      "Course management",
      "Dashboard statistics",
      "Password settings",
    ],
  },
  {
    id: 2,
    title: "SayHey",
    subtitle: "Real-Time Chat Application",
    category: "Backend",
    description:
      "A messaging application focused on real-time communication, authentication, and persistent conversations.",
    technologies: [
      "Node.js",
      "Express",
      "TypeScript",
      "Socket.IO",
      "MongoDB",
      "Mongoose",
    ],
    githubUrl: "https://github.com/LinshaMS/Chat-Application",
    image: "/images/sayhey-chat-dashboard.png",
    features: [
      "One-to-one messaging",
      "Real-time communication with Socket.IO",
      "Persistent chat history",
      "Online and offline status",
      "Typing indicators",
    ],
  },
  {
    id: 3,
    title: "Pennywise",
    subtitle: "Personal Expense Tracker",
    category: "Frontend",
    description:
      "A personal finance application for tracking income and expenses, setting budgets, and understanding spending.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "CSS",
      "Recharts",
      "localStorage",
    ],
    githubUrl:
      "https://github.com/LinshaMS/pennywise-expense-tracker",
    image: "/images/pennywise-dashboard.png",
    features: [
      "Income and expense tracking",
      "Monthly budgets",
      "Transaction search and filters",
      "Spending charts",
      "Browser-based data persistence",
    ],
  },
  {
    id: 4,
    title: "Sushi",
    subtitle: "Restaurant Website",
    category: "Frontend",
    description:
      "A restaurant website exploring food presentation, page layouts, and frontend design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/LinshaMS/sushi-website",
    features: [
      "Restaurant landing page",
      "Food-focused presentation",
      "Navigation and page sections",
      "Responsive layout",
    ],
  },
  {
    id: 5,
    title: "DriveEase",
    subtitle: "Car Rental Website",
    category: "Frontend",
    description:
      "A car rental interface where users can explore vehicles, compare options, and submit booking requests.",
    technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    githubUrl: "https://github.com/LinshaMS/Car-Rental",
    image: "/images/drivease.png",
    features: [
      "Vehicle browsing",
      "Category filters",
      "Price sorting",
      "Car details",
      "Booking cost estimates",
    ],
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description: "Building interfaces for the web.",
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
  },
  {
    number: "02",
    title: "Backend",
    description: "Working with APIs and application logic.",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    number: "03",
    title: "Databases",
    description: "Working with application data.",
    skills: ["MongoDB", "Mongoose", "MySQL"],
  },
  {
    number: "04",
    title: "Tools",
    description: "Tools used while building projects.",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

const filters = ["All", "Full Stack", "Frontend", "Backend"] as const;

function App() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === "All" || project.category === activeFilter,
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio" id="home">
      <header className="navbar page-width">
        <a className="logo" href="#home" aria-label="Linsha home">
          Linsha Mary Sabu<span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#beyond" onClick={closeMenu}>
            Beyond code
          </a>
          <a
            className="nav-contact"
            href="#contact"
            onClick={closeMenu}
          >
            Let&apos;s talk <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero page-width">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="availability-dot" />
              COMPUTER SCIENCE GRADUATE · KERALA, INDIA
            </p>

            <h1>
              Learning to build
              <br />
              <span className="hero-accent">
                things that matter.
              </span>
            </h1>

            <p className="hero-name">Hi, I&apos;m Linsha Mary Sabu.</p>

            <p className="hero-description">
              An aspiring web developer learning to turn ideas into
              practical web applications. I&apos;m looking for an
              opportunity to contribute, learn from a team, and grow
              through real-world experience.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                Explore my work <span>↗</span>
              </a>

              <a
                href="/resume.pdf"
                download="Linsha_Mary_Resume.pdf"
                className="button button-outline"
              >
                Download resume <span>↓</span>
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/LinshaMS"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a href="mailto:linshasabu@gmail.com">Email ↗</a>
            </div>
          </div>

          <div
            className="hero-collage"
            aria-label="Selected project previews"
          >
            <div className="collage-note">
              <span className="note-dot" />
              A FEW THINGS I&apos;VE BEEN BUILDING
            </div>

            {[
              {
                project: projects[0],
                className: "collage-main",
                label: "01 / FULL STACK",
              },
              {
                project: projects[2],
                className: "collage-side",
                label: "02 / FRONTEND",
              },
              {
                project: projects[1],
                className: "collage-bottom",
                label: "03 / REAL-TIME",
              },
            ].map((item) => (
              <button
                key={item.project.id}
                type="button"
                className={`collage-image ${item.className}`}
                onClick={() => setSelectedProject(item.project)}
                aria-label={`View ${item.project.title} details`}
              >
                <img
                  src={item.project.image}
                  alt={`${item.project.title} project preview`}
                />
                <span className="collage-caption">
                  <span>{item.label}</span>
                  <strong>{item.project.title} ↗</strong>
                </span>
              </button>
            ))}

            <div className="collage-stamp" aria-hidden="true">
              <span>LEARN</span>
              <span>BUILD</span>
              <span>REPEAT.</span>
            </div>
          </div>

          <a className="scroll-cue" href="#about">
            A LITTLE ABOUT ME <span>↓</span>
          </a>
        </section>

        <section className="section page-width" id="about">
          <div className="section-heading">
            <p className="section-number">01</p>
            <div>
              <p className="section-kicker">A LITTLE ABOUT ME</p>
              <h2>
                Still learning.
                <br />
                <span className="lavender-text">
                  Always moving forward.
                </span>
              </h2>
            </div>
          </div>

        <div className="about-layout">
            

            <div className="about-body">
              <p>
                I&apos;m Linsha Mary Sabu, a Computer Science graduate
                interested in web development and how the pieces of a
                software application fit together.
              </p>
              <p>
                Through hands-on projects, I&apos;m practising frontend
                development, APIs, databases, and the process of turning
                a feature idea into a working application.
              </p>
             
              <a href="#contact" className="inline-link">
                Let&apos;s connect <span>↗</span>
              </a>
            </div>
          </div>

          <div className="principles">
            <div>
              <span>01</span>
              <p>Learn by building</p>
            </div>
            <div>
              <span>02</span>
              <p>Understand the why</p>
            </div>
            <div>
              <span>03</span>
              <p>Improve with feedback</p>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="page-width">
            <div className="section-heading">
              <p className="section-number">02</p>
              <div>
                <p className="section-kicker">TOOLS I&apos;M LEARNING</p>
                <h2>
                  A growing
                  <br />
                  <span className="lavender-text">
                    technical toolkit.
                  </span>
                </h2>
              </div>
            </div>

            <p className="section-intro">
              Technologies I&apos;ve explored and practised in my
              projects. I&apos;m continuing to strengthen my fundamentals
              through hands-on development.
            </p>

            <div className="skills-list">
              {skillGroups.map((group) => (
                <article className="skill-row" key={group.number}>
                  <span className="skill-number">{group.number}</span>

                  <div className="skill-description">
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>

                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section page-width" id="projects">
          <div className="section-heading">
            <p className="section-number">03</p>
            <div>
              <p className="section-kicker">SELECTED WORK</p>
              <h2>
                Practice turned
                <br />
                <span className="lavender-text">into projects.</span>
              </h2>
            </div>
          </div>

          <div className="projects-topline">
            <p>
              Personal projects built to practise concepts, explore
              ideas, and learn by doing.
            </p>

            <div
              className="project-filters"
              aria-label="Filter projects"
            >
              {filters.map((filter) => (
                <button
                  type="button"
                  key={filter}
                  className={
                    activeFilter === filter
                      ? "filter-button active"
                      : "filter-button"
                  }
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <p className="project-count">
            SHOWING {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "PROJECT" : "PROJECTS"}
          </p>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <article
                className={`project-card ${
                  index === 0 ? "project-featured" : ""
                }`}
                key={project.id}
              >
                <button
                  type="button"
                  className="project-preview"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`View ${project.title} details`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} application screenshot`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="project-placeholder">
                      <span>
                        PROJECT / {String(project.id).padStart(2, "0")}
                      </span>
                      <strong>
                        {project.title}
                        <i>.</i>
                      </strong>
                      <p>{project.subtitle}</p>
                    </div>
                  )}
                  <span className="preview-open">View project ↗</span>
                </button>

                <div className="project-information">
                  <div className="project-heading-line">
                    <div>
                      <p className="project-category">
                        {project.category}
                      </p>
                      <h3>{project.title}</h3>
                      <p className="project-subtitle">
                        {project.subtitle}
                      </p>
                    </div>
                    <span className="project-index">
                      {String(project.id).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-technologies">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                    >
                      Details <span>↗</span>
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub <span>↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <a
            className="github-banner"
            href="https://github.com/LinshaMS"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <small>MORE PROJECTS &amp; CODE</small>
              <strong>Explore my GitHub profile</strong>
            </span>
            <span className="github-arrow">↗</span>
          </a>
        </section>

        <section className="section beyond-section" id="beyond">
          <div className="page-width">
            <div className="section-heading">
              <p className="section-number">04</p>
              <div>
                <p className="section-kicker">
                  LIFE OUTSIDE THE SCREEN
                </p>
                <h2>
                  A little more
                  <br />
                  <span className="lavender-text">than code.</span>
                </h2>
              </div>
            </div>

            <div className="beyond-intro">
              <p>
                Technology is one part of who I am. I also make time for
                the interests that let me slow down, recharge, and stay
                curious.
              </p>
            </div>

            <div className="beyond-grid">
              <article className="beyond-item">
                <span className="beyond-icon" aria-hidden="true">♫</span>
                <p className="beyond-label">01 / CREATIVITY</p>
                <h3>Music &amp; guitar</h3>
                <p>
                  A creative outlet away from the screen and a way to
                  unwind.
                </p>
              </article>

              <article className="beyond-item">
                <span className="beyond-icon" aria-hidden="true">↗</span>
                <p className="beyond-label">02 / CURIOSITY</p>
                <h3>Learning new things</h3>
                <p>
                  Exploring new concepts and finding ways to put what I
                  learn into practice.
                </p>
              </article>

              <article className="beyond-item">
                <span className="beyond-icon" aria-hidden="true">▤</span>
                <p className="beyond-label">03 / DOWNTIME</p>
                <h3>Reading</h3>
                <p>
                  Taking time to read, discover ideas, and enjoy a
                  slower pace.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section page-width approach-section">
          <div className="section-heading">
            <p className="section-number">05</p>
            <div>
              <p className="section-kicker">
                HOW I APPROACH LEARNING
              </p>
              <h2>
                Progress over
                <br />
                <span className="lavender-text">perfection.</span>
              </h2>
            </div>
          </div>

          <div className="approach-list">
            <article>
              <span>01</span>
              <h3>Understand the problem</h3>
              <p>
                Break a task into smaller pieces and work out what needs
                to happen.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Build and experiment</h3>
              <p>
                Practise concepts by applying them to real features and
                projects.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Learn from feedback</h3>
              <p>
                Stay open to guidance and improve the quality of my work
                over time.
              </p>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-width">
            <div className="section-heading">
              <p className="section-number">06</p>
              <div>
                <p className="section-kicker">LET&apos;S CONNECT</p>
                <h2>
                  The next step
                  <br />
                  <span className="lavender-text">
                    starts with a hello.
                  </span>
                </h2>
              </div>
            </div>

            <div className="contact-bottom">
              <p>
                <p>
                  Every great developer starts somewhere. I’m ready to turn what I’ve learned into what’s next.
                </p>
              </p>
              <a
                className="button button-primary"
                href="mailto:linshasabu@gmail.com"
              >
                Get in touch <span>↗</span>
              </a>
            </div>

            <div className="contact-links">
              <a href="mailto:linshasabu@gmail.com">
                linshasabu@gmail.com
              </a>
              <a
                href="https://github.com/LinshaMS"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <span>Kerala, India</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer page-width">
        <a className="logo" href="#home">
          Linsha Mary Sabu<span>.</span>
        </a>
        <p>Made with care by Linsha Mary Sabu.</p>
        <a href="#home">Back to top ↑</a>
      </footer>

      {selectedProject && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setSelectedProject(null)}
        >
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              ✕
            </button>

            {selectedProject.image && (
              <img
                className="modal-image"
                src={selectedProject.image}
                alt={`${selectedProject.title} preview`}
              />
            )}

            <p className="section-kicker">
              PROJECT / {String(selectedProject.id).padStart(2, "0")} ·{" "}
              {selectedProject.category}
            </p>
            <h2 id="modal-title">{selectedProject.title}</h2>
            <p className="modal-subtitle">{selectedProject.subtitle}</p>
            <p className="modal-description">
              {selectedProject.description}
            </p>

            <h3>Features</h3>
            <ul className="feature-list">
              {selectedProject.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <h3>Technologies</h3>
            <div className="project-technologies modal-technologies">
              {selectedProject.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <a
              className="button button-primary modal-github"
              href={selectedProject.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub <span>↗</span>
            </a>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;