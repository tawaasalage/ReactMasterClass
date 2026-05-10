import { useState, useReducer } from "react";

function toDoReducer(state, action) {
  switch (action.type) {
    case "add":
      if (!action.payload.trim()) {
        return state;
      }
      return [...state, action.payload];

    case "clear":
      return [];
    default:
      return state;
  }
}

export default function UseReducerPage() {
  const [value, setValue] = useState("");
  const [todo, dispatch] = useReducer(toDoReducer, [
    "Study React Hooks",
    "Go for a walk",
  ]);

  return (
    <div>
      <article className="card">
        <h2>useReducer Example</h2>

        <input
          type="text"
          placeholder="Enter a task"
          className="field"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        <div className="actions">
          <button
            className="button"
            onClick={() => {
              dispatch({ type: "add", payload: value });
              setValue("");
            }}
          >
            Add Task
          </button>
          <button
            className="button secondary"
            onClick={() => dispatch({ type: "clear" })}
          >
            Clear Tasks
          </button>
        </div>
        <ul className="todo-list">
          {todo.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}
