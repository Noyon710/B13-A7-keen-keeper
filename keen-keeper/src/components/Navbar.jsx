import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>KeenKeeper</h2>

      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          ⌂ Home
        </NavLink>

        <NavLink to="/timeline" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          ◷ Timeline
        </NavLink>

        <NavLink to="/stats" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          ⌁ Stats
        </NavLink>
      </div>
    </nav>
  );
}