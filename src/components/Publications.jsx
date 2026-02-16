import { useState, useEffect, useRef } from "react";
import publications from "../data/publications";
import "./Publications.css";

const CATEGORIES = ["All", "Conference", "Journal", "Report/Book"];

export default function Publications() {
  const [activeCategory, setActiveCategory] = useState("All");
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
  }, [activeCategory]);

  const filtered =
    activeCategory === "All"
      ? publications
      : publications.filter((pub) => pub.type === activeCategory);

  const highlightName = (name) => {
    if (name === "Haein Yeo") {
      return (
        <span key={name} className="pub__author--highlight">
          {name}
        </span>
      );
    }
    return name;
  };

  return (
    <section className="publications" ref={sectionRef}>
      <h1 className="publications__title fade-in" style={{ "--delay": "0s" }}>
        Publications
      </h1>

      <div className="publications__categories fade-in" style={{ "--delay": "0.1s" }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`publications__category ${activeCategory === cat ? "publications__category--active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="publications__list">
        {filtered.map((pub, index) => (
          <div
            key={pub.id}
            className="pub fade-in"
            style={{ "--delay": `${0.15 + index * 0.08}s` }}
          >
            <div className="pub__main">
              <h3 className="pub__title">{pub.title}</h3>
              <p className="pub__authors">
                {pub.authors.map((author, i) => (
                  <span key={i}>
                    {highlightName(author)}
                    {i < pub.authors.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
              <div className="pub__venue">
                <span className="pub__venue-name">{pub.venue}</span>
                {pub.venueNote && (
                  <span className="pub__venue-note">({pub.venueNote})</span>
                )}
                <span className="pub__year">{pub.year}</span>
              </div>
              <div className="pub__extras">
                {pub.award && <span className="pub__award">{pub.award}</span>}
                {pub.links.pdf && (
                  <a
                    href={pub.links.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pub__link"
                  >
                    PDF
                  </a>
                )}
                {pub.links.doi && (
                  <a
                    href={pub.links.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pub__link"
                  >
                    DOI
                  </a>
                )}
                {pub.links.arxiv && (
                  <a
                    href={pub.links.arxiv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pub__link"
                  >
                    arXiv
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
