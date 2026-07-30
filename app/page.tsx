"use client"

import { useEffect, useState } from "react"

const projectsData = [
  {
    id: 1,
    exeName: "TRANSITOPS.EXE",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80",
    tag: "#REACT #NODEJS #MONGODB #JWT #CRON",
    title: "TransitOps Fleet Intelligence",
    shortDesc: "A multi-tenant fleet intelligence and management platform with automated risk scoring and telemetry visualization.",
    year: "2026",
    members: "Burhan (Solo)",
    technology: "React, Node.js, Express, MongoDB, JWT, node-cron, GIS mapping",
    description: "Built a multi-tenant fleet management platform featuring role-scoped dashboards (Fleet Manager, Safety Officer, Financial Analyst, Driver), Google OAuth/JWT authentication, and per-request fleet-level data scoping to prevent cross-tenant leakage. Designed an automated Risk Radar engine utilizing node-cron background jobs that dynamically scores driver risk from safety history and license expirations, alongside a trip dispatch state machine and realtime KPI analytics (utilization, ROI, fuel efficiency) with GIS mapping and PDF/CSV export capability.",
    link: "https://github.com/Burhanmalu/TransitOps"
  },
  {
    id: 2,
    exeName: "HOLOSPHERE.SH",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
    tag: "#PYTHON #OPENCV #IMAGEPROC",
    title: "HoloSphere Video Converter",
    shortDesc: "A system to convert standard 2D video messages into hologram-style visuals with background removal.",
    year: "2025",
    members: "Burhan (Solo)",
    technology: "Python, OpenCV, Computer Vision, Video Automation",
    description: "Built HoloSphere, a system designed to convert standard 2D video messages into immersive hologram-style visuals. Implemented background removal using advanced Python libraries for clean subject isolation. Applied computer vision techniques for real-time video processing, enhancement, and developed robust automation pipelines for converting arbitrary video inputs into visual effects.",
    link: ""
  },
  {
    id: 3,
    exeName: "SMART_CROP.OUT",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80",
    tag: "#PYTHON #ML #AGRITECH #SIH",
    title: "Smart Crop Suggestion System",
    shortDesc: "An SIH-nominated platform utilizing agricultural data analytics to recommend crops dynamically.",
    year: "2024",
    members: "Team SIH",
    technology: "Python, Machine Learning, Data Processing, Agritech",
    description: "Developed core backend functionality for a smart crop recommendation platform. Processed agricultural and chemical soil parameters to generate intelligent, context-aware crop suggestions. Designed analytics logic for agricultural inputs and parameters to provide data-driven decision support for farmers.",
    link: "https://github.com/Burhanmalu/Agritech"
  },
  {
    id: 4,
    exeName: "CIVIC_SAMADHAN.EXE",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=80",
    tag: "#REACT #NODEJS #AI #CIVICTECH",
    title: "Civic Complaint Management System",
    shortDesc: "An AI-powered complaint submission platform with fake image detection and automated moderation.",
    year: "2025",
    members: "Burhan (Solo)",
    technology: "React, Node.js, Express, AI Image Processing, MongoDB",
    description: "Developed Civic Samadhan, an AI-powered citizen grievance platform featuring image-based complaint submission and automated fake image detection for quality assurance. Designed a comprehensive administrator dashboard for real-time complaint monitoring and built an engagement-driven reward system for citizen participation.",
    link: "https://github.com/Burhanmalu/CivicSamadhan"
  }
];

function ProjectModal({ project, onClose }: { project: any, onClose: () => void }) {
  if (!project) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content window-frame" onClick={e => e.stopPropagation()}>
        <div className="window-header" style={{ background: "var(--text-primary)", color: "var(--bg-color)" }}>
          <span>{project.exeName} - FILE_READ</span>
          <div className="window-controls">
            <button className="window-btn window-close" onClick={onClose} aria-label="Close" style={{ borderColor: "var(--bg-color)" }}>
              <span className="close-icon"></span>
            </button>
          </div>
        </div>
        <div className="modal-body">
          <h2 className="project-title" style={{ fontSize: "2rem", marginBottom: "15px", color: "var(--accent-retro)", textTransform: "uppercase" }}>{project.title}</h2>
          <div className="modal-meta" style={{ marginBottom: "20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", fontSize: "0.9rem", fontFamily: "'Space Mono', monospace", padding: "15px", border: "1px dashed var(--border-color)", background: "var(--bg-color)" }}>
            <div><strong style={{ color: "var(--text-secondary)" }}>YEAR:</strong> {project.year}</div>
            <div><strong style={{ color: "var(--text-secondary)" }}>MEMBERS:</strong> {project.members}</div>
            <div style={{ gridColumn: "1 / -1" }}><strong style={{ color: "var(--text-secondary)" }}>TECH:</strong> {project.technology}</div>
          </div>
          <img src={project.image} alt={project.title} style={{ width: "100%", maxHeight: "250px", objectFit: "cover", marginBottom: "20px", border: "2px solid var(--border-color)", filter: "grayscale(100%) contrast(120%)" }} />
          <p style={{ lineHeight: 1.6, color: "var(--text-primary)", marginBottom: "20px" }}>{project.description}</p>
          {project.link && (
            <div style={{ marginTop: "20px" }}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-retro" style={{ fontSize: "0.85rem", padding: "8px 15px", display: "inline-block" }}>
                VIEW SOURCE CODE (GITHUB)
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  useEffect(() => {
    // Update the system clock
    function updateClock() {
      const now = new Date()
      const timeStr =
        now.getHours().toString().padStart(2, "0") +
        ":" +
        now.getMinutes().toString().padStart(2, "0") +
        ":" +
        now.getSeconds().toString().padStart(2, "0")
      const statusElement = document.querySelector(".system-status")
      if (statusElement) {
        statusElement.textContent = `SYS_UP: ${timeStr} | CPU: ${Math.floor(Math.random() * 20) + 5}%`
      }
    }
    updateClock()
    const interval = setInterval(updateClock, 1000)

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearInterval(interval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
          <span className="scroll-arrow">↑</span>
        </button>
      )}

      <header>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
          <div className="logo" style={{ zIndex: 1001 }}>BURHAN.DEV</div>

          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMobileMenuOpen} style={{ zIndex: 1001 }}>
            {isMobileMenuOpen ? "CLOSE [X]" : "MENU [=]"}
          </button>

          <nav className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
            <a href="#experience" onClick={() => setIsMobileMenuOpen(false)}>EXPERIENCE</a>
            <a href="#skill" onClick={() => setIsMobileMenuOpen(false)}>SKILLS</a>
            <a href="#project" onClick={() => setIsMobileMenuOpen(false)}>PROJECTS</a>
            <a href="#achievement" onClick={() => setIsMobileMenuOpen(false)}>ACHIEVEMENTS</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</a>
            <a href="#resume" onClick={() => setIsMobileMenuOpen(false)}>RESUME</a>
          </nav>
          <div className="system-status desktop-only">SYS_UP: 24:12:05:08 | CPU: 12%</div>
        </div>
      </header>

      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <p style={{ color: "var(--accent)", marginBottom: "10px" }}>{"[ COMPILING SOURCE CODE... ]"}</p>
            <h1>
              Computer Science <span>Engineering</span>
            </h1>
            <p>
              Passionate about algorithms, system design, and building efficient software solutions. Navigating the depths of binary and beyond.
            </p>
            <a href="#project" className="btn-retro">
              EXPLORE PROJECTS
            </a>
          </div>
          <div className="window-frame">
            <div className="window-header">
              <span>PORTRAIT_01.JPG</span>
              <div className="window-controls">
                <button className="window-btn" aria-label="Minimize">
                  <span className="minimize-icon"></span>
                </button>
                <button className="window-btn" aria-label="Maximize">
                  <span className="maximize-icon"></span>
                </button>
                <button className="window-btn window-close" aria-label="Close">
                  <span className="close-icon"></span>
                </button>
              </div>
            </div>
            <img src="/Profilephoto.jpeg" alt="Professional Portrait" className="hero-image" />
          </div>
        </section>

        {/* Stats */}
        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-val">15+</div>
            <div className="stat-label">Projects Built</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">10</div>
            <div className="stat-label">Hackathons</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">7.5</div>
            <div className="stat-label">Current CGPA</div>
          </div>
        </div>

        {/* Experience Section */}
        <section id="experience" className="experience-section" style={{ marginBottom: "80px", display: "flex", flexDirection: "column", gap: "40px" }}>
          <h2 className="section-title">Professional Experience</h2>

          {/* Indore Municipal Corporation */}
          <div className="window-frame">
            <div className="window-header">
              <span>INTERNSHIP_RECORD_01.TXT</span>
              <div className="window-controls">
                <button className="window-btn" aria-label="Minimize">
                  <span className="minimize-icon"></span>
                </button>
                <button className="window-btn" aria-label="Maximize">
                  <span className="maximize-icon"></span>
                </button>
              </div>
            </div>
            <div style={{ padding: "30px", background: "var(--surface)", fontFamily: "Space Mono, monospace" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "20px", borderBottom: "1px dashed var(--border-color)", paddingBottom: "15px" }}>
                <div>
                  <h3 style={{ fontSize: "1.4rem", color: "var(--accent-retro)", margin: 0 }}>IT Intern – Internship with Mayor Program</h3>
                  <div style={{ fontSize: "1.1rem", fontWeight: "bold", marginTop: "5px" }}>Indore Municipal Corporation (IT Department)</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>July 2026 – Present | Indore, MP</span>
                </div>
              </div>

              <ul style={{ paddingLeft: "20px", lineHeight: "1.8", color: "var(--text-primary)" }}>
                <li style={{ marginBottom: "10px" }}>Developed a full-stack web application to digitize and streamline municipal public transportation operations through centralized monitoring, workflow automation, and data-driven decision support.</li>
                <li style={{ marginBottom: "10px" }}>Designed and implemented real-time dashboards, role-based access control, incident management, and analytics modules to improve operational visibility and administrative efficiency.</li>
                <li style={{ marginBottom: "10px" }}>Collaborated with municipal stakeholders to translate operational requirements into scalable software solutions, enhancing coordination between administrators and field personnel.</li>
              </ul>

              <div style={{ marginTop: "25px", display: "flex", gap: "15px", flexWrap: "wrap" }}>
                <a href="/OFFER Letter (IWM).jpeg" target="_blank" rel="noopener noreferrer" className="btn-retro" style={{ fontSize: "0.85rem", padding: "8px 15px" }}>
                  VIEW OFFER LETTER
                </a>
              </div>
            </div>
          </div>

          {/* Go Digital Global */}
          <div className="window-frame">
            <div className="window-header">
              <span>INTERNSHIP_RECORD_02.TXT</span>
              <div className="window-controls">
                <button className="window-btn" aria-label="Minimize">
                  <span className="minimize-icon"></span>
                </button>
                <button className="window-btn" aria-label="Maximize">
                  <span className="maximize-icon"></span>
                </button>
              </div>
            </div>
            <div style={{ padding: "30px", background: "var(--surface)", fontFamily: "Space Mono, monospace" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "20px", borderBottom: "1px dashed var(--border-color)", paddingBottom: "15px" }}>
                <div>
                  <h3 style={{ fontSize: "1.4rem", color: "var(--accent-retro)", margin: 0 }}>Software Development Intern</h3>
                  <div style={{ fontSize: "1.1rem", fontWeight: "bold", marginTop: "5px" }}>Go Digital Global | Remote</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>Nov 2025 – May 2026</span>
                </div>
              </div>

              <ul style={{ paddingLeft: "20px", lineHeight: "1.8", color: "var(--text-primary)" }}>
                <li style={{ marginBottom: "10px" }}>Built APIs and an MVC application in C# and .NET, recognized by CEO for high-quality delivery.</li>
                <li style={{ marginBottom: "10px" }}>Built and maintained backend modules and RESTful APIs for business applications.</li>
                <li style={{ marginBottom: "10px" }}>Optimized SQL queries to enhance database performance and data retrieval speed.</li>
                <li style={{ marginBottom: "10px" }}>Performed debugging, testing, and issue resolution to improve application stability.</li>
                <li style={{ marginBottom: "10px" }}>Worked with SDLC processes, Git version control, and agile development practices.</li>
              </ul>

              <div style={{ marginTop: "25px", display: "flex", gap: "15px", flexWrap: "wrap" }}>
                <a href="/offer letter.png" target="_blank" rel="noopener noreferrer" className="btn-retro" style={{ fontSize: "0.85rem", padding: "8px 15px" }}>
                  VIEW OFFER LETTER
                </a>
                <a href="/internship certificate.png" target="_blank" rel="noopener noreferrer" className="btn-retro" style={{ fontSize: "0.85rem", padding: "8px 15px" }}>
                  VIEW CERTIFICATE
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="project" style={{ marginBottom: "80px" }}>
          <h2 className="section-title">Academic & Personal Projects</h2>
          <div className="portfolio-grid">
            {projectsData.slice(0, showAllProjects ? projectsData.length : 3).map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
                style={{ cursor: "crosshair" }}
              >
                <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                  <span>{project.exeName}</span>
                  <div className="window-controls">
                    <button className="window-btn" aria-label="Minimize">
                      <span className="minimize-icon"></span>
                    </button>
                    <button className="window-btn" aria-label="Maximize">
                      <span className="maximize-icon"></span>
                    </button>
                  </div>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-info">
                  <span className="project-tag">{project.tag}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                    {project.shortDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {projectsData.length > 3 && (
            <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "30px" }}>
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="btn-retro"
                style={{ padding: "10px 25px", fontSize: "0.9rem" }}
              >
                {showAllProjects ? "SHOW LESS" : "MORE"}
              </button>
            </div>
          )}
        </section>

        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>

      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee-text">
          <span>COMPUTER SCIENCE ENGINEERING • </span>
          <span>SOFTWARE DEVELOPMENT • </span>
          <span>SYSTEM ARCHITECTURE • </span>
          <span>ALGORITHMS & DATA STRUCTURES • </span>
          <span>COMPUTER SCIENCE ENGINEERING • </span>
          <span>SOFTWARE DEVELOPMENT • </span>
          <span>SYSTEM ARCHITECTURE • </span>
          <span>ALGORITHMS & DATA STRUCTURES • </span>
        </div>
      </div>

      <div className="container">
        {/* Terminal Section */}
        <section className="terminal-section" id="skill">
          <div className="terminal-header">SYSTEM_CONSOLE.EXE</div>
          <div className="terminal-row">
            <span className="prompt">{"student@cse:~$"}</span>
            <span className="command">fetch skills --all</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"> Analyzing system architecture and tech stack..."}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[████████████████] LANGUAGES: C, C++, C#, JavaScript (ES6+), Python, HTML5, CSS3"}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[██████████████░░] FRONTEND : React.js, Tailwind CSS, Bootstrap, Redux Toolkit"}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[████████████████] BACKEND  : ASP.NET MVC, ASP.NET Web API, .NET Framework, Node.js, Express.js, RESTful APIs, JWT Authentication, Middleware"}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[██████████████░░] DATABASES: SQL Server, MySQL, MongoDB, Mongoose"}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[████████████░░░░] TOOLS    : Visual Studio, VS Code, Git, GitHub, Postman, Chrome DevTools, Unity"}</span>
          </div>
          <div className="terminal-row">
            <span className="output">{"[████████████████] CORE_COMP: Full-Stack Development (MERN), Backend Development, RESTful API Development, Database Design, Authentication & Authorization, API Design, Error Handling, Software Testing & Debugging, Version Control, Agile Development"}</span>
          </div>
          <div className="terminal-row">
            <span className="prompt">{"student@cse:~$"}</span>
            <span className="command">run learning_loop.sh</span>
          </div>
          <div className="terminal-row">
            <span className="output">
              {"> Continually absorbing new paradigms... "}
              <span className="cursor-blink">_</span>
            </span>
          </div>
        </section>

        {/* Archive Section */}
        <section id="achievement" className="archive-section">
          <h2 className="section-title">Achievements & Certifications</h2>
          <table className="archive-list">
            <thead>
              <tr>
                <th>Year</th>
                <th>Achievement</th>
                <th>Issuer/Event</th>
                <th>Domain</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="archive-year">2026</td>
                <td>3rd Place - National Hackathon</td>
                <td>National Level Committee</td>
                <td>Software / Problem Solving</td>
                <td><span style={{ color: "var(--accent-retro)" }}>SECURED</span></td>
              </tr>
              <tr>
                <td className="archive-year">2023</td>
                <td>1st Place - Engineering Day</td>
                <td>College Committee</td>
                <td>General Engineering</td>
                <td>TROPHY AWARDED</td>
              </tr>
              <tr>
                <td className="archive-year">2023</td>
                <td>1st Place - Sports Competition</td>
                <td>College Sports Meet</td>
                <td>Athletics / Team</td>
                <td>WINNER</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="window-header" style={{ position: "absolute", top: -15, left: 20, zIndex: 10 }}>
            <span>COMMUNICATION_LINK.EXE</span>
          </div>
          <h2 className="section-title" style={{ marginTop: 20 }}>Open Channel</h2>

          <div className="contact-container">
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-item-label">Direct Line / Phone</span>
                <span className="contact-item-value">
                  <a href="tel:+917415701497">+91 7415701497</a>
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-item-label">Mailbox / Email</span>
                <span className="contact-item-value">
                  <a href="mailto:Burhan.malu.learning@gmail.com">Burhan.malu.learning@gmail.com</a>
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-item-label">Professional Node / LinkedIn</span>
                <span className="contact-item-value">
                  <a href="https://linkedin.com/in/burhanuddin-malubhaiwala-35537b277" target="_blank" rel="noopener noreferrer">
                    burhanuddin-malubhaiwala-35537b277
                  </a>
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-item-label">Source Repositories / GitHub</span>
                <span className="contact-item-value">
                  <a href="https://github.com/Burhanmalu" target="_blank" rel="noopener noreferrer">
                    Burhanmalu
                  </a>
                </span>
              </div>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">IDENTIFIER / NAME</label>
                <input type="text" id="name" className="form-input" placeholder="Enter guest identifier..." />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">RETURN PATH / EMAIL</label>
                <input type="email" id="email" className="form-input" placeholder="Enter return address..." />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">PAYLOAD / MESSAGE</label>
                <textarea id="message" className="form-textarea" placeholder="Transmit packet contents here..."></textarea>
              </div>
              <button type="submit" className="btn-retro" style={{ alignSelf: "flex-start", marginTop: "10px" }}>TRANSMIT DATA</button>
            </form>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="terminal-section" style={{ marginBottom: "100px", padding: "40px", textAlign: "center" }}>
          <div className="terminal-header" style={{ position: "absolute", top: -15, left: 20 }}>
            <span>USER_DATA_DUMP.EXE</span>
          </div>
          <h2 className="section-title" style={{ marginTop: 10, justifyContent: "center" }}>Curriculum Vitae</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "30px", fontFamily: "Space Mono, monospace" }}>
            {"> Ready to download comprehensive system specifications and candidate capabilities."}
          </p>
          <a href="/resume(Mernstack).png" target="_blank" className="btn-retro">
            VIEW RESUME.PNG
          </a>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: "2px solid var(--border-color)", padding: "60px 0 40px 0", marginTop: "80px" }} className="main-footer">
          {/* Column 1: Directory */}
          <div className="footer-col" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <span style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: "800", fontSize: "0.9rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "1px" }}>DIRECTORY</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontFamily: "var(--font-space-mono), Space Mono, monospace", fontSize: "0.9rem" }}>
              <a href="#project" className="footer-link">{"[01] PROJECTS"}</a>
              <a href="#experience" className="footer-link">{"[02] EXPERIENCE"}</a>
              <a href="#skill" className="footer-link">{"[03] SKILLS"}</a>
              <a href="#contact" className="footer-link">{"[04] CONTACT"}</a>
            </div>
          </div>

          {/* Column 2: Connections */}
          <div className="footer-col" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <span style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: "800", fontSize: "0.9rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "1px" }}>CONNECTIONS</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontFamily: "var(--font-space-mono), Space Mono, monospace", fontSize: "0.9rem" }}>
              <a href="https://github.com/Burhanmalu" target="_blank" rel="noopener noreferrer" className="footer-link">{"[GITHUB] SOURCE"}</a>
              <a href="https://linkedin.com/in/burhanuddin-malubhaiwala-35537b277" target="_blank" rel="noopener noreferrer" className="footer-link">{"[LINKEDIN] LINK"}</a>
              <a href="/resume(Mernstack).png" target="_blank" rel="noopener noreferrer" className="footer-link">{"[RESUME] VIEW"}</a>
              <a href="mailto:Burhan.malu.learning@gmail.com" className="footer-link">{"[EMAIL] MAIL_TO"}</a>
            </div>
          </div>

          {/* Column 3: Live System Status Panel */}
          <div className="footer-col" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <span style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: "800", fontSize: "0.9rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "1px" }}>SYSTEM STATUS</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontFamily: "var(--font-space-mono), Space Mono, monospace", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-primary)" }}>
                <span className="pulse-dot"></span> STATUS: ONLINE
              </div>
              <div>VERSION  : 2.0</div>
              <div>SERVER   : STABLE</div>
              <div>DEPLOY   : TODAY</div>
              <div>UPTIME   : 99.99%</div>
            </div>
          </div>

          {/* Column 4: Brand Section */}
          <div className="footer-brand" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <span style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: "800", fontSize: "0.8rem", color: "var(--accent-retro)", textTransform: "uppercase", letterSpacing: "1px" }}>END_OF_PAGE</span>
            <h2 style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontSize: "1.8rem", fontWeight: "800", lineHeight: "1.1", margin: 0, textTransform: "uppercase" }}>
              TransitOps
            </h2>
            <div style={{ fontFamily: "var(--font-space-mono), Space Mono, monospace", fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
              <div>Fleet Intelligence</div>
              <div>Built by Burhan<span className="cursor-blink">_</span></div>
              <div style={{ marginTop: "10px" }}>© 2026 All Rights Reserved</div>
            </div>
          </div>
        </footer>

        <div className="footer-badge">
          <a href="https://v0.link/cdiK7jS" target="_blank" rel="noopener noreferrer" className="badge-link-footer">
            <div className="badge-content-footer">
              <span className="badge-label">UI:</span>
              <span className="badge-highlight">1UI.dev</span>
              <span className="badge-separator">→</span>
              <span className="badge-label">LIVE:</span>
              <span className="badge-highlight">v0.app</span>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
