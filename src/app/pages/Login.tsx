import { useLocation, useNavigate } from "react-router";
import { Button } from "../components/ui/button";

interface LoginProps {
  onLogin: () => void;
}

export function Login({ onLogin }: LoginProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPath =
    typeof location.state === "object" &&
    location.state !== null &&
    "from" in location.state &&
    typeof (location.state as { from?: unknown }).from === "string"
      ? (location.state as { from: string }).from
      : "/";

  const handleLogin = () => {
    onLogin();
    navigate(fromPath);
  };

  return (
    <section className="app__section app__section--centered">
      <div className="app__login-card">
        <h2 className="app__section-title">Login</h2>
        <p className="app__page-text">
          Sign in to continue.
        </p>
        <Button onClick={handleLogin}>Log In</Button>
      </div>
    </section>
  );
}
