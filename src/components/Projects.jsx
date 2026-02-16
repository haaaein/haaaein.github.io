import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import "./Projects.css";

export default function Projects() {
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
  }, []);

  return (
    <section className="projects" ref={sectionRef}>
      <div className="projects__grid">
        {projects.map((project, index) => (
          <Link
            key={project.id}
            to={`/projects/${project.slug}`}
            className="projects__item fade-in"
            style={{ "--delay": `${index * 0.08}s` }}
          >
            <div className="projects__icon">
              <span className="projects__emoji">{project.emoji}</span>
            </div>
            <span className="projects__name">
              {project.shortName || project.title}
            </span>
            <div className="projects__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="projects__tag">#{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
