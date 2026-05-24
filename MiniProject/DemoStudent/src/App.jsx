import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import AppNavBar from "./components/layout/AppNavBar";

function App() {
  return (
    <>
      <AppNavBar />
      <main className="page-shell">
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
