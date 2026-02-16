import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import "./Projects.css";

export default function Projects() {
  const [view, setView] = useState("diagram");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in--visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [view]);

  const hciProjects = projects.filter((p) => p.area === "hci");
  const bothProjects = projects.filter((p) => p.area === "both");
  const nlpProjects = projects.filter((p) => p.area === "nlp");

  return (
    <section className="projects" ref={sectionRef}>
      {/* View toggle */}
      <div className="projects__toggle fade-in" style={{ "--delay": "0s" }}>
        <button
          className={`projects__toggle-btn ${view === "diagram" ? "projects__toggle-btn--active" : ""}`}
          onClick={() => setView("diagram")}
        >
          Diagram
        </button>
        <button
          className={`projects__toggle-btn ${view === "grid" ? "projects__toggle-btn--active" : ""}`}
          onClick={() => setView("grid")}
        >
          Grid
        </button>
      </div>

      {view === "diagram" ? (
        <div className="venn fade-in" style={{ "--delay": "0.1s" }}>
          {/* Labels */}
          <span className="venn__label venn__label--left">HCI</span>
          <span className="venn__label venn__label--right">NLP / AI</span>

          {/* Circles */}
          <div className="venn__circle venn__circle--left" />
          <div className="venn__circle venn__circle--right" />

          {/* Content areas */}
          <div className="venn__content">
            <div className="venn__area venn__area--left">
              {hciProjects.map((p) => (
                <ProjectIcon key={p.id} project={p} />
              ))}
            </div>
            <div className="venn__area venn__area--center">
              {bothProjects.map((p) => (
                <ProjectIcon key={p.id} project={p} />
              ))}
            </div>
            <div className="venn__area venn__area--right">
              {nlpProjects.map((p) => (
                <ProjectIcon key={p.id} project={p} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="projects__grid">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="projects__item fade-in"
              style={{ "--delay": `${index * 0.08}s` }}
            >
              <div className="projects__icon">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.shortName || project.title}
                  />
                ) : (
                  <span className="projects__emoji">{project.emoji}</span>
                )}
              </div>
              <span className="projects__name">
                {project.shortName || project.title}
              </span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

function ProjectIcon({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="venn__item">
      <span className="venn__emoji">{project.emoji}</span>
      <span className="venn__name">{project.shortName}</span>
    </Link>
  );
}
