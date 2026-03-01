import { useState } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from "react-router";
import { NavBar } from "./components/NavBar";
import { Dashboard } from "./pages/Dashboard";
import { Admin } from "./pages/Admin";
import { UserManagement } from "./pages/UserManagement";
import { Monitoring } from "./pages/Monitoring";
import { Summary } from "./pages/Summary";
import { Configuration } from "./pages/Configuration";
import { Notifications } from "./pages/Notifications";
import { AdminLogin } from "./auth/AdminLogin";
import { IncidentReport } from "./pages/IncidentReport";
import "./App.css";

interface AppLayoutProps {
  onLogout: () => void;
}

function AppLayout({ onLogout }: AppLayoutProps) {
  return (
    <div className="app">
      <header className="app__header">
        <div>
          <h1 className="app__title">Flood Monitoring System</h1>
          <p className="app__subtitle">Real-time water level monitoring and alerts</p>
        </div>
        <NavBar onLogout={onLogout} />
      </header>

      <main className="app__main">
        <Outlet />
      </main>
    </div>
  );
}

interface ProtectedLayoutProps {
  isSignedIn: boolean;
  onLogout: () => void;
}

function ProtectedLayout({ isSignedIn, onLogout }: ProtectedLayoutProps) {
  const location = useLocation();

  if (!isSignedIn) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
  }

  return <AppLayout onLogout={onLogout} />;
}

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const handleLogout = () => setIsSignedIn(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin onLogin={() => setIsSignedIn(true)} />} />
        <Route path="/login" element={<Navigate to="/admin/login" replace />} />
        <Route element={<ProtectedLayout isSignedIn={isSignedIn} onLogout={handleLogout} />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Navigate to="/" replace />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/monitoring" element={<Monitoring />} />
            <Route path="/incident-report" element={<IncidentReport />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/configuration" element={<Configuration />} />
        </Route>
        <Route path="*" element={<Navigate to={isSignedIn ? "/" : "/admin/login"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}
