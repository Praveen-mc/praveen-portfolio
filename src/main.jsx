
import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin,
  Braces, BrainCircuit, Network, Database, Cloud, Code2, Workflow,
  Layers3, ExternalLink, Menu, X, Download
} from "lucide-react";
import "./styles.css";

const skills = [
  { title: "GenAI & LLM Engineering", icon: BrainCircuit, items: ["LLM Applications", "RAG", "Prompt Engineering", "LangChain", "LangGraph", "AI Agents", "MCP"] },
  { title: "Backend Engineering", icon: Braces, items: ["Python", "FastAPI", "Node.js", "REST APIs", "Microservices", "API Integration"] },
  { title: "Cloud & Data", icon: Cloud, items: ["AWS Bedrock", "DynamoDB", "PostgreSQL", "MySQL", "Solr"] },
  { title: "Frontend & Tools", icon: Code2, items: ["React", "Angular", "JavaScript", "TypeScript", "Git", "GitHub"] }
];

const experience = [
  {
    company: "TATA CONSULTANCY SERVICES",
    role: "Software Engineer – Generative AI",
    type: "ENTERPRISE IT",
    period: "1.5 YEARS",
    description: "Contributed to an enterprise GenAI IAM Chat Assistant, working across agent workflows, backend APIs, MCP integrations, and the Angular user experience.",
    points: [
      "Worked with AWS Bedrock, LangGraph, FastAPI and MCP-based tool integrations.",
      "Contributed to multi-agent workflows and intent-based playbooks for relevant tool selection.",
      "Developed FastAPI APIs and supported frontend-backend integration.",
      "Worked on Angular frontend integration and API troubleshooting."
    ]
  },
  {
    company: "VIRTUAL MAZE SOFTSYS PVT. LTD.",
    role: "Software Developer Intern",
    type: "INTERNSHIP",
    period: "5 MONTHS",
    description: "Worked on a map-based application, contributing to web application development and implementation tasks.",
    points: [
      "Contributed to the development of a map-based application.",
      "Worked on application development and implementation."
    ]
  }
];

const projects = [
  {
    number: "01",
    type: "ENTERPRISE · GENERATIVE AI",
    title: "GenAI IAM Chat Assistant",
    summary: "An enterprise assistant designed to help users navigate Identity & Access Management workflows across multiple internal applications.",
    details: [
      "Contributed to a multi-agent architecture using AWS Bedrock, LangGraph and FastAPI.",
      "Worked across the Angular experience and backend API integration.",
      "Helped implement MCP-based tool wrappers for IAM application actions.",
      "Worked on intent-based playbooks to load relevant tools and reduce unnecessary context."
    ],
    stack: ["AWS Bedrock", "LangGraph", "FastAPI", "MCP", "Angular", "DynamoDB"],
    note: "Built as part of a client engagement at TCS. Screenshots and source code are not displayed because the work is confidential."
  },
  {
    number: "02",
    type: "COMPUTER VISION · PERSONAL PROJECT",
    title: "Face Detection File Vault",
    summary: "A file-vault concept that explores face detection as an additional layer in a file access workflow.",
    details: [
      "Explored computer-vision-based face detection.",
      "Built as a hands-on project to understand practical computer vision integration."
    ],
    stack: ["Python", "Computer Vision"]
  },
  {
    number: "03",
    type: "WEB · PERSONAL PROJECT",
    title: "AI Chatbot for Navigation",
    summary: "A chatbot concept focused on helping users navigate information through a conversational interface.",
    details: [
      "Built a web interface for conversational interaction.",
      "Used Python for the application logic."
    ],
    stack: ["Python", "HTML", "CSS"]
  }
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">P.</span>
            <span>PRAVEEN BABU</span>
          </a>

          <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["About", "Experience", "Expertise", "Work", "Contact"].map(x => (
              <a key={x} href={`#${x.toLowerCase()}`} onClick={closeMenu}>{x}</a>
            ))}
            <a className="nav-cta" href="mailto:praveensb2002@gmail.com">
              Let's talk <ArrowUpRight size={15} />
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              SOFTWARE ENGINEER
              <span className="eyebrow-divider">/</span>
              GENAI & BACKEND
            </div>

            <h1>Building useful<br /><span className="gradient-text">intelligence.</span></h1>

            <p className="hero-lede">
              I'm Praveen — a software engineer working at the intersection of
              <strong> Generative AI, backend systems, and product engineering.</strong>
            </p>

            <p className="hero-sub">
              I build agent-driven workflows, connect LLMs to real-world tools,
              and turn complex requirements into practical software.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowUpRight size={17} />
              </a>

              <a
                href={`${import.meta.env.BASE_URL}Praveen_resume_2026.pdf`}
                download="Praveen_resume_2026.pdf"
                className="button button-quiet"
              >
                <Download size={16} />
                Download Resume
              </a>

              <a className="button button-quiet" href="mailto:praveensb2002@gmail.com">
                <Mail size={16} /> Get in touch
              </a>
            </div>

            <div className="hero-meta">
              <span><MapPin size={14} /> Bengaluru, India</span>
              <span className="meta-separator">·</span>
              <span>Open to opportunities</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Abstract illustration of connected AI systems">
            <div className="visual-orbit orbit-a" />
            <div className="visual-orbit orbit-b" />
            <div className="visual-core">
              <BrainCircuit size={47} strokeWidth={1.2} />
              <span>GENAI</span>
            </div>

            <div className="float-card card-agent">
              <span className="mini-icon"><Workflow size={16} /></span>
              <span><b>AI Agents</b><small>Orchestrated workflows</small></span>
            </div>

            <div className="float-card card-api">
              <span className="mini-icon"><Network size={16} /></span>
              <span><b>MCP & APIs</b><small>Tools and integrations</small></span>
            </div>

            <div className="float-card card-data">
              <span className="mini-icon"><Database size={16} /></span>
              <span><b>RAG Systems</b><small>Grounded responses</small></span>
            </div>

            <div className="visual-caption">
              FROM IDEAS TO WORKING SYSTEMS <span>✳</span>
            </div>
          </div>

          <a className="scroll-cue" href="#about">
            <span>SCROLL TO EXPLORE</span><ArrowDownRight size={15} />
          </a>
        </section>

        {/* ABOUT */}
        <section className="section about-section" id="about">
          <div className="container two-col">
            <div>
              <div className="section-kicker">01 / ABOUT</div>
              <h2>Engineering with<br /><span className="muted-heading">purpose and curiosity.</span></h2>
            </div>

            <div className="about-copy">
              <p className="large-copy">
                My focus is building software that makes complex work feel simple — especially where AI meets backend engineering.
              </p>

              <p>
                I have worked on an enterprise GenAI IAM assistant at Tata Consultancy Services,
                contributing to agent workflows, MCP tool integrations, API development,
                and the user-facing experience. I enjoy understanding the full path:
                from a user's intent to the system response.
              </p>

              <div className="facts-grid">
                <div>
                  <span className="fact-label">EDUCATION</span>
                  <b>B.E. Computer Science</b>
                  <small>Rathinam Technical Campus · 2024</small>
                </div>
                <div>
                  <span className="fact-label">CURRENT FOCUS</span>
                  <b>GenAI & Backend</b>
                  <small>Agentic systems · API engineering</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section experience-section" id="experience">
          <div className="container">
            <div className="section-kicker">02 / EXPERIENCE</div>

            <div className="section-heading-row">
              <h2>Where I've contributed.</h2>
              <p>Professional experience across enterprise GenAI and application engineering.</p>
            </div>

            <div className="experience-list">
              {experience.map((item) => (
                <article className="experience-item" key={item.company}>
                  <div className="experience-period">{item.period}</div>

                  <div className="experience-content">
                    <div className="experience-company">
                      {item.company} <span>· {item.type}</span>
                    </div>

                    <h3>{item.role}</h3>
                    <p>{item.description}</p>

                    <ul>
                      {item.points.map(point => <li key={point}>{point}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="section expertise-section" id="expertise">
          <div className="container">
            <div className="section-kicker">03 / EXPERTISE</div>

            <div className="section-heading-row">
              <h2>What I work with.</h2>
              <p>A practical toolkit for designing, building, and connecting modern applications.</p>
            </div>

            <div className="skill-grid">
              {skills.map((group, i) => {
                const Icon = group.icon;
                return (
                  <article className="skill-card" key={group.title}>
                    <div className="skill-top">
                      <span className="skill-index">0{i + 1}</span>
                      <Icon size={21} />
                    </div>
                    <h3>{group.title}</h3>
                    <div className="tag-list">
                      {group.items.map(item => <span className="tag" key={item}>{item}</span>)}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section work-section" id="work">
          <div className="container">
            <div className="section-kicker">04 / SELECTED WORK</div>

            <div className="section-heading-row">
              <h2>Projects & experience.</h2>
              <p>A selection of work that reflects how I approach real-world engineering problems.</p>
            </div>

            <div className="project-list">
              {projects.map(p => (
                <article className="project-card" key={p.number}>
                  <div className="project-number">{p.number}</div>

                  <div className="project-main">
                    <div className="project-type">{p.type}</div>
                    <h3>{p.title}</h3>
                    <p className="project-summary">{p.summary}</p>

                    <ul>
                      {p.details.map(d => <li key={d}>{d}</li>)}
                    </ul>

                    <div className="tag-list project-tags">
                      {p.stack.map(s => <span className="tag" key={s}>{s}</span>)}
                    </div>

                    {p.note && <p className="confidential-note"><span>↳</span> {p.note}</p>}
                  </div>

                  <div className="project-symbol">
                    <Layers3 size={34} strokeWidth={1} />
                    <span>CASE<br />STUDY</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="section approach-section">
          <div className="container approach-inner">
            <div>
              <div className="section-kicker">05 / HOW I THINK</div>
              <h2>Good engineering<br />starts with <span className="gradient-text">clarity.</span></h2>
            </div>

            <div className="principles">
              <div><span>01</span><p><b>Understand the problem.</b> Start with the user, the workflow, and the real constraint.</p></div>
              <div><span>02</span><p><b>Design the right system.</b> Choose the simplest architecture that solves the need.</p></div>
              <div><span>03</span><p><b>Build for the real world.</b> Care about integration, reliability, and maintainability — not just the demo.</p></div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <div className="section-kicker">06 / CONTACT</div>

            <h2>Have a problem<br />worth <span className="gradient-text">solving?</span></h2>

            <p>
              I'm open to software engineering, backend, and GenAI opportunities —
              and conversations with teams building thoughtful products.
            </p>

            <a className="button button-primary contact-button" href="mailto:praveensb2002@gmail.com">
              Start a conversation <ArrowUpRight size={17} />
            </a>

            <div className="social-links">
              <a href="mailto:praveensb2002@gmail.com"><Mail size={17} /> Email</a>
              <a href="https://www.linkedin.com/in/praveenbabu18/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ExternalLink size={12} /></a>
              <a href="https://github.com/Praveen-mc" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ExternalLink size={12} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand" href="#home">
            <span className="brand-mark">P.</span><span>PRAVEEN BABU</span>
          </a>
          <span>Designed & built with care.</span>
          <span>© {new Date().getFullYear()} Praveen Babu</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);
