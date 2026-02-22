import { Link, useNavigate } from "react-router";

interface AdminProps {
  onLogout: () => void;
}

export function Admin({ onLogout }: AdminProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <section className="app__section">
      <h2 className="app__section-title">Admin View</h2>
      <p className="app__page-text">
        Administrative actions such as configuration or user management are
        accessible here.
      </p>
      <div className="app__graph-placeholder">
        <h3>IoT Alert History Graph (Prototype)</h3>
        <p className="app__page-text">
          This section is reserved for past tsunami/flood alert records from the IoT device.
        </p>
      </div>
      <div className="app__page-actions">
        <Link to="/admin/users" className="app__page-link">
          User Management
        </Link>
        <button className="app__page-link app__page-link--button" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </section>
  );
}
