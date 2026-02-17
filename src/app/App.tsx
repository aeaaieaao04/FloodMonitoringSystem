
import { useState } from "react";
import { WaterLevelCard } from "./components/WaterLevelCard";
import { AlertCard } from "./components/AlertCard";
import { StatsCard } from "./components/StatsCard";
import { Button } from "./components/ui/button";

// Main app for the Flood Monitoring System
// This is the single screen required for Lab Activity 2 and 3
export default function App() {
  // UI state: show/hide alerts (Lab 3: interaction)
  const [showAlerts, setShowAlerts] = useState(true);

  // System data (Lab 2: dynamic data)
  // These arrays can be changed to update the UI
  const stats = [
    { label: "Total Locations", value: "3", icon: <img src="/location.png" alt="Location" style={{ width: 65, height: 65 }} /> },
    { label: "Active Alerts", value: "2", icon: "⚠️" },
    { label: "Safe Areas", value: "1", icon: "✅" },
  ];
  const waterLevels = [
    { locationName: "Cagayan De Oro River", currentLevel: 8.0, maxLevel: 10.0, status: "Danger" },
    { locationName: "Bigaan River", currentLevel: 4.1, maxLevel: 8.0, status: "Safe" },
    { locationName: "Bitan-ag Creek", currentLevel: 7.0, maxLevel: 10.0, status: "Warning" },
  ];
  const alerts = [
    { title: "High Water Level", message: "Central Dam water level is approaching maximum capacity.", type: "danger" },
    { title: "Heavy Rainfall Expected", message: "Weather forecast shows heavy rain in the next 6 hours.", type: "warning" },
  ];

  // Toggle alerts (Lab 3: interaction)
  const toggleAlerts = () => setShowAlerts((v) => !v);

  // UI layout uses semantic HTML and Tailwind for simple styling
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-6">
        <h1 className="text-2xl">Flood Monitoring System</h1>
        <p className="text-blue-100 mt-1">Real-time water level monitoring and alerts</p>
      </header>
      <main className="container mx-auto p-6 space-y-6">
        {/* Statistics (Grid) */}
        <section>
          <h2 className="text-lg mb-2">Overview Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <StatsCard key={i} label={stat.label} value={stat.value} icon={stat.icon} />
            ))}
          </div>
        </section>
        {/* Water Levels (Grid) */}
        <section>
          <h2 className="text-lg mb-2">Water Levels by Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {waterLevels.map((loc, i) => (
              <WaterLevelCard key={i} {...loc} />
            ))}
          </div>
        </section>
        {/* Alerts (Flex + Grid) */}
        <section>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg">Active Alerts</h2>
            <Button onClick={toggleAlerts} variant="outline">
              {showAlerts ? "Hide Alerts" : "Show Alerts"}
            </Button>
          </div>
          {showAlerts && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {alerts.map((alert, i) => (
                <AlertCard key={i} {...alert} />
              ))}
            </div>
          )}
        </section>
        {/* Simple instructions for demo */}
        <section className="bg-white p-4 rounded border">
          <h3 className="font-medium mb-2">How to Use</h3>
          <ul className="text-sm text-muted-foreground list-disc list-inside">
            <li>Check water levels at different locations</li>
            <li>Monitor active alerts for dangerous situations</li>
            <li>Green = Safe, Yellow = Warning, Red = Danger</li>
            <li>Click "Hide/Show Alerts" to toggle alerts</li>
          </ul>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4 mt-8 text-center text-sm">
        Flood Monitoring System - Laboratory Activity #3
      </footer>
    </div>
  );
}
