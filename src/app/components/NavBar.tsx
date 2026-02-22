import { useState } from "react";
import { Link, useLocation } from "react-router";

export function NavBar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-menu">
        <button
          className="app__navbar-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className="app__hamburger">
            <span />
            <span />
            <span />
          </span>
        </button>
        {menuOpen && (
          <div className="app__navbar-dropdown">
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/admin"
              className={location.pathname.startsWith("/admin") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Admin
            </Link>
            <Link
              to="/monitoring"
              className={location.pathname === "/monitoring" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Monitoring
            </Link>
            <Link
              to="/incident-report"
              className={location.pathname === "/incident-report" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Incident Report
            </Link>
            <Link
              to="/notifications"
              className={location.pathname === "/notifications" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Notifications
            </Link>
            <Link
              to="/summary"
              className={location.pathname === "/summary" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Summary
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
