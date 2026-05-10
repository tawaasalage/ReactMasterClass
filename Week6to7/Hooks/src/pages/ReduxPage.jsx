import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../store/reduxCounterStore";

export default function ReduxPage() {
  const count = useSelector((state) => state.normalCounter.count);
  const dispatch = useDispatch();

  return (
    <section>
      <article className="card">
        <h1>Default Redux </h1>
        <p className="count">{count}</p>
        <div className="actions">
          <button
            className="button"
            onClick={() => dispatch(increment())}
          >
            Increase
          </button>
          <button
            className="button secondary"
            onClick={() => dispatch(decrement())}
          >
            Decrease
          </button>
          <button className="button reset" onClick={() => dispatch(reset())}>
            Reset
          </button>
        </div>
      </article>
    </section>
  );
}
