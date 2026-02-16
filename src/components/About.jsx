import { useEffect, useRef } from "react";
import profile from "../data/profile";
import "./About.css";

export default function About() {
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
    <section className="about" ref={sectionRef}>
      <div className="about__hero">
        <div className="about__profile">
          <div className="about__image-wrapper fade-in" style={{ "--delay": "0s" }}>
            <img
              src={profile.profileImage}
              alt={profile.name}
              className="about__image"
            />
          </div>
          <div className="about__info fade-in" style={{ "--delay": "0.15s" }}>
            <h1 className="about__name">{profile.name}</h1>
            <p className="about__degree">{profile.degree}</p>
            {profile.advisor && (
              <p className="about__advisor">{profile.advisor}</p>
            )}
            <p className="about__affiliation">{profile.affiliation}</p>
            <a href={`mailto:${profile.email}`} className="about__email">
              {profile.email}
            </a>
            <div className="about__social">
              {profile.links.googleScholar && (
                <a href={profile.links.googleScholar} target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                  </svg>
                </a>
              )}
              {profile.links.github && (
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              )}
              {profile.links.linkedin && (
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="about__description fade-in" style={{ "--delay": "0.3s" }}>
          <p>
            Hi! I'm a Ph.D student in the Department of Artificial Intelligence at Hanyang University.
            I am advised by{" "}
            <a href="https://scholar.google.com/citations?user=htyp0xsAAAAJ&hl=ko" target="_blank" rel="noopener noreferrer" className="about__link">
              Prof. Kyungsik Han
            </a>
            {" "}as part of the{" "}
            <a href="https://hcc.hanyang.ac.kr/" target="_blank" rel="noopener noreferrer" className="about__link">
              Human-Centered Computing Lab
            </a>.
          </p>
          {Array.isArray(profile.description)
            ? profile.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))
            : <p>{profile.description}</p>
          }
        </div>

        <div className="about__research fade-in" style={{ "--delay": "0.45s" }}>
          <h2 className="about__section-title">Research Interests</h2>
          <div className="about__tags">
            {profile.researchInterests.map((interest, i) => (
              <span key={i} className="about__tag">
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div className="about__gallery fade-in" style={{ "--delay": "0.6s" }}>
          <h2 className="about__section-title">Conference Gallery</h2>
          <div className="about__gallery-grid">
            <div className="about__gallery-item">
              <img src="/images/chi-hawaii-1.jpg" alt="CHI 2024, Hawaii" />
              <span className="about__gallery-caption">CHI 2024, Hawaii</span>
            </div>
            <div className="about__gallery-item">
              <img src="/images/chi-hawaii-2.jpg" alt="CHI 2024, Hawaii" />
              <span className="about__gallery-caption">CHI 2024, Hawaii</span>
            </div>
            <div className="about__gallery-item">
              <img src="/images/chi-hawaii-3.jpg" alt="CHI 2024, Hawaii" />
              <span className="about__gallery-caption">CHI 2024, Hawaii</span>
            </div>
            <div className="about__gallery-item">
              <img src="/images/chi-hawaii-4.jpg" alt="CHI 2024, Hawaii" />
              <span className="about__gallery-caption">CHI 2024, Hawaii</span>
            </div>
            <div className="about__gallery-item">
              <img src="/images/emnlp-miami-1.jpg" alt="EMNLP 2024, Miami" />
              <span className="about__gallery-caption">EMNLP 2024, Miami</span>
            </div>
            <div className="about__gallery-item">
              <img src="/images/emnlp-miami-2.jpg" alt="EMNLP 2024, Miami" />
              <span className="about__gallery-caption">EMNLP 2024, Miami</span>
            </div>
            <div className="about__gallery-item">
              <img src="/images/aaai-singapore-1.jpg" alt="AAAI 2026, Singapore" />
              <span className="about__gallery-caption">AAAI 2026, Singapore</span>
            </div>
            <div className="about__gallery-item">
              <img src="/images/aaai-singapore-2.jpg" alt="AAAI 2026, Singapore" />
              <span className="about__gallery-caption">AAAI 2026, Singapore</span>
            </div>
            <div className="about__gallery-item">
              <img src="/images/aaai-singapore-3.jpg" alt="AAAI 2026, Singapore" />
              <span className="about__gallery-caption">AAAI 2026, Singapore</span>
            </div>
            <div className="about__gallery-item">
              <img src="/images/aaai-singapore-4.jpg" alt="AAAI 2026, Singapore" />
              <span className="about__gallery-caption">AAAI 2026, Singapore</span>
            </div>
            <div className="about__gallery-item">
              <img src="/images/aaai-singapore-5.jpg" alt="AAAI 2026, Singapore" />
              <span className="about__gallery-caption">CHI 2024, Hawaii</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
