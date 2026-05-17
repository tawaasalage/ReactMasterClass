import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../ui/Button";

import { useThemeStore } from "../../zustand/useThemeStore";

export default function AppNavBar() {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <header className="topbar">
      <NavLink to="/" className="brand">
        Student Manager
      </NavLink>
      <nav className="nav-actions">
        <Button onClick={toggleTheme}>
          {theme == "light" ? "Dark Mode" : "Light Mode"}
        </Button>
        <NavLink to="/dashboard" className="nav-link">
          Dashboard
        </NavLink>
        <NavLink to="/login" className="primary-link">
          Login
        </NavLink>
        {/* <button className="danger-button">Logout</button> */}
        <Button variant="danger">Logout</Button>
      </nav>
    </header>
  );
}
