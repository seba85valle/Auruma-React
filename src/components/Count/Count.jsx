import { useState } from "react";
import "./Count.css";

export const Count = ({ btnText, onConfirm }) => {
  const [count, setCount] = useState(1); 

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  const confirm = () => {
    if (count > 0 && typeof onConfirm === "function") {
      onConfirm(count);
    }
  };

  return (
    <div className="count-container">
      <div className="count-buttons">
        <button
          className="btn"
          onClick={decrement}
          disabled={count <= 1}
          aria-label="Disminuir cantidad"
        >
          -
        </button>

        <span className="count-value">{count}</span>

        <button
          className="btn"
          onClick={increment}
          aria-label="Aumentar cantidad"
        >
          +
        </button>
      </div>

      <button
        className="btn btn-add"
        onClick={confirm}
        disabled={count <= 0}
      >
        {btnText}
      </button>
    </div>
  );
};

