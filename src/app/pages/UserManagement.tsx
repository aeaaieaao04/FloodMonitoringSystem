import { Link, useNavigate } from "react-router";

interface UserManagementProps {
  onLogout: () => void;
}

export function UserManagement({ onLogout }: UserManagementProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <section className="app__section">
      <h2 className="app__section-title">User Management</h2>
      <p className="app__page-text">
        Here an admin can add, remove, or modify users in the system.
      </p>
      <div className="app__page-actions">
        <Link to="/admin" className="app__page-link">
          Back to Admin
        </Link>
        <button className="app__page-link app__page-link--button" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </section>
  );
}
