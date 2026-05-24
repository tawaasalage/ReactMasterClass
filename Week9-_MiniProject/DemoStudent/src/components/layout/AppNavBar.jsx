import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../ui/Button";
import { useThemeStore } from "../../zustand/useThemeStore";
import { useAuthStore } from "../../zustand/useAuthStore";
import { useNavigate } from "react-router-dom";

export default function AppNavBar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useThemeStore();
  const { user, logoutUser } = useAuthStore();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <header className="topbar">
      <NavLink to="/" className="brand">
        Student Manager
      </NavLink>
      <nav className="nav-actions">
        <Button onClick={toggleTheme}>
          {theme == "light" ? "Dark Mode" : "Light Mode"}
        </Button>

        {user ? (
          <>
            <span className="nav-chip">Welcome, {user.name}</span>
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <NavLink to="/login" className="primary-link">
            Login
          </NavLink>
        )}
      </nav>
    </header>
  );
}
