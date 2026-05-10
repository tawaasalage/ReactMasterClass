import { useState, useMemo } from "react";

export default function UseMemoPage() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");

  const doubleNumber = useMemo(() => {
    console.log("Calculating double number...");
    return number * 2;
  }, [number]);

  return (
    <article className="card">
      <h2>useMemo Example</h2>

      <input
        className="field"
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value || 0))}
      />

      <p>
        Double: <span className="badge">{doubleNumber}</span>
      </p>

      <input
        className="field"
        type="text"
        placeholder="Type something..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Hello : Enter Your Name here {name}</p>
    </article>
  );
}
