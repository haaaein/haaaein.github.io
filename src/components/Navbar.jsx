import { NavLink } from "react-router-dom";
import profile from "../data/profile";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <NavLink to="/" className="navbar__logo">
          {profile.name}
        </NavLink>
        <div className="navbar__links">
          <NavLink to="/" end className="navbar__link">
            About
          </NavLink>
          <NavLink to="/publications" className="navbar__link">
            Publications
          </NavLink>
          <NavLink to="/projects" className="navbar__link">
            Projects
          </NavLink>
          {profile.links.cv && (
            <a
              href={profile.links.cv}
              className="navbar__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          )}
        </div>
      </nav>
    </div>
  );
}
