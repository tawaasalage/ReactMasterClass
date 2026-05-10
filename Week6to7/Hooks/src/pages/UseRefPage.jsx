import { useRef } from "react";

export default function UseRefPage() {
  const inputRef = useRef(null);

  const forceInputFocus = () => {
    inputRef.current.focus();
  };

  return (
    <article className="card">
      <h2>UseRefPage Example</h2>

      <input
        type="text"
        placeholder="Type something..."
        className="field"
        ref={inputRef}
      />

      <div className="actions">
        <button className="button" onClick={forceInputFocus}>
          Focus Input
        </button>
      </div>
    </article>
  );
}
