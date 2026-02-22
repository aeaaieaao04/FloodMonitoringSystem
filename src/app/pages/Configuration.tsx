import { Link } from "react-router";

export function Configuration() {
  return (
    <section className="app__section">
      <h2 className="app__section-title">Configuration</h2>
      <p className="app__page-text">This screen allows changing system settings.</p>
      <div className="app__page-actions">
        <Link to="/summary" className="app__page-link">
          Back to Summary
        </Link>
      </div>
    </section>
  );
}
