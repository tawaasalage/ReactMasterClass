import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import UseStatePage from "./pages/UseStatePage";
import UseReducerPage from "./pages/UseReducerPage";
import UseEffectsPage from "./pages/UseEffectsPage";
import UseContextPage from "./pages/UseContextPage";
import { useTheme } from "./context/ThemeContext";
import UseRefPage from "./pages/UseRefPage";
import UseMemoPage from "./pages/UseMemoPage";
import ReduxPage from "./pages/ReduxPage";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app theme-${theme}`}>
      <div className="page">
        <nav className="simple-nav">
          <div className="links">
            <NavLink
              to="/use-state"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              useState
            </NavLink>
            <NavLink
              to="/use-reducer"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              useReducer
            </NavLink>
            <NavLink
              to="/use-effects"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              useEffects
            </NavLink>
            <NavLink
              to="/use-context"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              useContext
            </NavLink>
            <NavLink
              to="/use-ref"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              useRef
            </NavLink>
            <NavLink
              to="/use-memo"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              useMemo
            </NavLink>
            <NavLink
              to="/redux"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Redux
            </NavLink>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<UseStatePage />} />
          <Route path="/use-state" element={<UseStatePage />} />
          <Route path="/use-reducer" element={<UseReducerPage />} />
          <Route path="/use-effects" element={<UseEffectsPage />} />
          <Route path="/use-context" element={<UseContextPage />} />
          <Route path="/use-ref" element={<UseRefPage />} />
          <Route path="/use-memo" element={<UseMemoPage />} />
          <Route path="/redux" element={<ReduxPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
