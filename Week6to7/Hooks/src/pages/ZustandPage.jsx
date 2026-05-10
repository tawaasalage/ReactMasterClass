import useZustandStore from "../store/useZustandStore";

export default function ZustandPage() {
  const { count, increment, decrement, reset } = useZustandStore();

  return (
    <section>
      <article className="card">
        <h1>Zustand</h1>
        <p className="count">{count}</p>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              increment();
            }}
          >
            Increase
          </button>
          <button
            className="button secondary"
            onClick={() => {
              decrement();
            }}
          >
            Decrease
          </button>
          <button
            className="button reset"
            onClick={() => {
              reset();
            }}
          >
            Reset
          </button>
        </div>
      </article>
    </section>
  );
}
