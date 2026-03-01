import { Link } from "react-router";
import "./UserManagement.css";

export function UserManagement() {
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
      </div>
    </section>
  );
}
