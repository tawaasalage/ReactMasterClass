import { useTheme } from "../context/useTheme";

export default function UseContextPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section>
      <article>
        <h2>UseContextPage Example </h2>
        <p>
          Current Theme : <span className="badge">{theme}</span>
        </p>
        <button className="button" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </article>
    </section>
  );
}
