import { useState } from "react";
import { Link } from "react-router";
import { WaterLevelCard } from "../components/WaterLevelCard";
import { AlertCard } from "../components/AlertCard";
import { StatsCard } from "../components/StatsCard";
import { Button } from "../components/ui/button";
import { monitoredWaters } from "../data/monitoredWaters";

export function Dashboard() {
  const [showAlerts, setShowAlerts] = useState(true);
  const featuredWaters = monitoredWaters.slice(0, 3);
  const safeCount = monitoredWaters.filter((item) => item.status === "Safe").length;
  const alertCount = monitoredWaters.filter((item) => item.status !== "Safe").length;

  const stats = [
    {
      label: "Total Locations",
      value: String(monitoredWaters.length),
      icon: <img src="/location.png" alt="Location" className="app__location-icon" />,
    },
    { label: "Active Alerts", value: String(alertCount), icon: "\u26A0\uFE0F" },
    { label: "Safe Areas", value: String(safeCount), icon: "\u2705" },
  ];

  const alerts = [
    { title: "High Water Level", message: "Central Dam water level is approaching maximum capacity.", type: "danger" },
    { title: "Heavy Rainfall Expected", message: "Weather forecast shows heavy rain in the next 6 hours.", type: "warning" },
    { title: "Tsunami Alert", message: "Tsunami warning issued for coastal areas.", type: "danger" },
  ];

  return (
    <>
      <section className="app__section">
        <h2 className="app__section-title">Overview Statistics</h2>
        <div className="app__stats-grid">
          {stats.map((stat, i) => (
            <StatsCard key={i} label={stat.label} value={stat.value} icon={stat.icon} />
          ))}
        </div>
      </section>

      <section className="app__section">
        <div className="app__alerts-header">
          <h2 className="app__section-title app__section-title--no-margin">Water Levels by Location</h2>
          <Link to="/monitoring" className="app__page-link">
            View All Monitored Waters
          </Link>
        </div>
        <div className="app__water-grid">
          {featuredWaters.map((loc) => (
            <WaterLevelCard key={loc.id} {...loc} />
          ))}
        </div>
      </section>

      <section className="app__section">
        <div className="app__alerts-header">
          <h2 className="app__section-title app__section-title--no-margin">Active Alerts</h2>
          <Button onClick={() => setShowAlerts((v) => !v)} variant="outline">
            {showAlerts ? "Hide Alerts" : "Show Alerts"}
          </Button>
        </div>
        {showAlerts && (
          <div className="app__alerts-grid">
            {alerts.map((alert, i) => (
              <AlertCard key={i} {...alert} />
            ))}
          </div>
        )}
      </section>

      <section className="app__help">
        <h3 className="app__help-title">How to Use</h3>
        <ul className="app__help-list">
          <li>Check water levels at different locations</li>
          <li>Monitor active alerts for dangerous situations</li>
          <li>Green = Safe, Yellow = Warning, Red = Danger</li>
          <li>Click "Hide/Show Alerts" to toggle alerts</li>
        </ul>
      </section>
    </>
  );
}
