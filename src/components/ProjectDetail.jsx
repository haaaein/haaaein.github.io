import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import projects from "../data/projects";
import publications from "../data/publications";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const sectionRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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
  }, [slug]);

  if (!project) {
    return (
      <section className="pd" ref={sectionRef}>
        <p>Project not found.</p>
        <Link to="/projects">Back to Projects</Link>
      </section>
    );
  }

  const relatedPubs = project.relatedPublications
    ?.map((pubId) => publications.find((p) => p.id === pubId))
    .filter(Boolean);

  const hasLinks = Object.values(project.links).some(Boolean);

  const handleCopyBibtex = () => {
    navigator.clipboard.writeText(project.bibtex).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="pd" ref={sectionRef}>
      {/* Title */}
      <h1 className="pd__title fade-in" style={{ "--delay": "0s" }}>
        {project.title}
      </h1>

      {/* Subtitle */}
      <p className="pd__subtitle fade-in" style={{ "--delay": "0.05s" }}>
        {project.fullTitle || project.shortDescription}
      </p>

      {/* Meta row: PERIOD / PROJECT TYPE / Venue */}
      <div className="pd__meta fade-in" style={{ "--delay": "0.1s" }}>
        {project.period && (
          <div className="pd__meta-item">
            <span className="pd__meta-label">PERIOD</span>
            <span className="pd__meta-value">{project.period}</span>
          </div>
        )}
        <div className="pd__meta-item">
          <span className="pd__meta-label">PROJECT TYPE</span>
          <span className="pd__meta-value">{project.projectType || "Research"}</span>
        </div>
        {project.venue && (
          <div className="pd__meta-venue">
            <span className="pd__venue-badge">{project.venue}</span>
            {project.venueNote && (
              <span className="pd__venue-note">{project.venueNote}</span>
            )}
          </div>
        )}
        {project.collaboration && (
          <div className="pd__meta-item">
            <span className="pd__meta-label">COLLABORATION</span>
            <span className="pd__meta-value">{project.collaboration}</span>
          </div>
        )}
      </div>

      {/* Action buttons */}
      {hasLinks && (
        <div className="pd__links fade-in" style={{ "--delay": "0.15s" }}>
          {project.links.paper && (
            <a
              href={project.links.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="pd__link"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              Paper
            </a>
          )}
          {project.links.doi && (
            <a
              href={project.links.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="pd__link"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              DOI
            </a>
          )}
          {project.links.code && (
            <a
              href={project.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="pd__link"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              Github
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="pd__link"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
              Demo
            </a>
          )}
        </div>
      )}

      {/* Divider */}
      <hr className="pd__divider fade-in" style={{ "--delay": "0.2s" }} />

      {/* Abstract - no header, just text */}
      {project.abstract && (
        <div className="pd__abstract fade-in" style={{ "--delay": "0.25s" }}>
          <p>{project.abstract}</p>
        </div>
      )}

      {/* Main figure */}
      {project.image && (
        <figure className="pd__figure pd__main-figure fade-in" style={{ "--delay": "0.28s" }}>
          <img src={project.image} alt={project.shortName || project.title} />
        </figure>
      )}

      {/* Dynamic sections */}
      {project.sections?.map((section, i) => (
        <div
          key={i}
          className="pd__section fade-in"
          style={{ "--delay": `${0.3 + i * 0.1}s` }}
        >
          <hr className="pd__divider" />
          <h2 className="pd__section-title">{section.title}</h2>
          <p className="pd__section-text">{section.content}</p>
          {section.image && (
            <figure className="pd__figure">
              <img src={section.image} alt={section.imageCaption || section.title} />
              {section.imageCaption && (
                <figcaption>{section.imageCaption}</figcaption>
              )}
            </figure>
          )}
        </div>
      ))}

      {/* Related Publications */}
      {relatedPubs && relatedPubs.length > 0 && (
        <div
          className="pd__section fade-in"
          style={{
            "--delay": `${0.3 + (project.sections?.length || 0) * 0.1}s`,
          }}
        >
          <hr className="pd__divider" />
          <h2 className="pd__section-title">Related Publications</h2>
          <ul className="pd__pub-list">
            {relatedPubs.map((pub) => (
              <li key={pub.id} className="pd__pub-item">
                <span className="pd__pub-title">{pub.title}</span>
                <span className="pd__pub-venue">
                  {pub.venue} {pub.year}
                </span>
                <div className="pd__pub-links">
                  {pub.links.pdf && (
                    <a href={pub.links.pdf} target="_blank" rel="noopener noreferrer" className="pd__pub-link">PDF</a>
                  )}
                  {pub.links.doi && (
                    <a href={pub.links.doi} target="_blank" rel="noopener noreferrer" className="pd__pub-link">DOI</a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* BibTeX */}
      {project.bibtex && (
        <div
          className="pd__section fade-in"
          style={{
            "--delay": `${0.3 + (project.sections?.length || 0) * 0.1 + 0.1}s`,
          }}
        >
          <hr className="pd__divider" />
          <h2 className="pd__section-title">BibTeX</h2>
          <div className="pd__bibtex">
            <button
              className="pd__bibtex-copy"
              onClick={handleCopyBibtex}
              title="Copy to clipboard"
            >
              {copied ? (
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
            </button>
            <pre><code>{project.bibtex}</code></pre>
          </div>
        </div>
      )}
    </section>
  );
}
