import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { NavBar } from "./components/NavBar";
import { Dashboard } from "./pages/Dashboard";
import { Admin } from "./pages/Admin";
import { UserManagement } from "./pages/UserManagement";
import { Monitoring } from "./pages/Monitoring";
import { Summary } from "./pages/Summary";
import { Configuration } from "./pages/Configuration";
import { Notifications } from "./pages/Notifications";
import { Login } from "./pages/Login";
import { IncidentReport } from "./pages/IncidentReport";
import "./App.css";

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const handleLogout = () => setIsSignedIn(false);

  return (
    <BrowserRouter>
      <div className="app">
        <header className="app__header">
          <div>
            <h1 className="app__title">Flood Monitoring System</h1>
            <p className="app__subtitle">Real-time water level monitoring and alerts</p>
          </div>
          <NavBar />
        </header>

        <main className="app__main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Navigate to="/" replace />} />
            <Route path="/login" element={<Login onLogin={() => setIsSignedIn(true)} />} />
            <Route
              path="/admin"
              element={
                isSignedIn ? (
                  <Admin onLogout={handleLogout} />
                ) : (
                  <Navigate to="/login" replace state={{ from: "/admin" }} />
                )
              }
            />
            <Route
              path="/admin/users"
              element={
                isSignedIn ? (
                  <UserManagement onLogout={handleLogout} />
                ) : (
                  <Navigate to="/login" replace state={{ from: "/admin/users" }} />
                )
              }
            />
            <Route path="/monitoring" element={<Monitoring />} />
            <Route path="/incident-report" element={<IncidentReport />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/configuration" element={<Configuration />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
