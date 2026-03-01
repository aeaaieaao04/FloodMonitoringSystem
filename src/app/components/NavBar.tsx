import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import "./NavBar.css";

interface NavBarProps {
  onLogout: () => void;
}

export function NavBar({ onLogout }: NavBarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    onLogout();
    setMenuOpen(false);
    navigate("/admin/login", { replace: true, state: { from: "/" } });
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-menu">
        <button
          type="button"
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
            <button type="button" className="app__navbar-logout" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
