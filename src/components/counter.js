import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/counterslice";

export const CounterData = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          className="bg-sky-600  "
          aria-label="Increment value"
          onClick={() => dispatch(increment({ dsat: 12 }))}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
