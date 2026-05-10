import { useState } from "react";

export default function UseStatePage() {
  const [counter, setCounter] = useState(0);

  return (
    <section className="hook-page">
      <article className="card">
        <h2>useState Example</h2>
        <p className="count">Counter Value: {counter} </p>

        <div className="actions">
          <button
            className="button"
            onClick={() => {
              setCounter((oldValue) => oldValue + 1);
            }}
          >
            Increment
          </button>
          <button
            className="button secondary"
            onClick={() => {
              setCounter((oldValue) => oldValue - 1);
            }}
          >
            Decrement
          </button>
        </div>
      </article>
    </section>
  );
}
