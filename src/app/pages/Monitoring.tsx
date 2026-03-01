import { useState } from "react";
import { WaterLevelCard } from "../components/WaterLevelCard";
import { monitoredWaters } from "../data/monitoredWaters";
import "./Monitoring.css";

export function Monitoring() {
  const [selectedId, setSelectedId] = useState(monitoredWaters[0]?.id ?? "");

  return (
    <section className="app__section">
      <h2 className="app__section-title">Monitoring View</h2>
      <p className="app__page-text">
        Click a monitored water card to view more details in this page.
      </p>

      <div className="app__water-grid app__water-grid--monitoring">
        {monitoredWaters.map((location) => {
          const isActive = selectedId === location.id;
          return (
            <button
              key={location.id}
              className={`app__monitor-card-button ${isActive ? "active" : ""}`}
              onClick={() =>
                setSelectedId((current) => (current === location.id ? "" : location.id))
              }
              type="button"
            >
              <WaterLevelCard {...location} />
              <div className="app__monitor-inline-details">
                <div className="app__monitor-inline-photo-wrap">
                  <img
                    src={location.imageUrl}
                    alt={location.locationName}
                    className="app__monitor-inline-photo"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.src = "/location.png";
                    }}
                  />
                </div>
                <div className="app__monitor-inline-row">
                  <span>
                    <strong>Type:</strong> {location.locationType}
                  </span>
                  <span>
                    <strong>Trend:</strong> {location.trend}
                  </span>
                </div>
                <div className="app__monitor-inline-row">
                  <span>
                    <strong>Barangay:</strong> {location.barangay}
                  </span>
                  <span>
                    <strong>Municipality:</strong> {location.municipality}
                  </span>
                </div>
                <div className="app__monitor-inline-row">
                  <span>
                    <strong>Sensor ID:</strong> {location.sensorId}
                  </span>
                  <span>
                    <strong>Last Updated:</strong> {location.lastUpdated}
                  </span>
                </div>
                <p className="app__page-text">{location.notes}</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
