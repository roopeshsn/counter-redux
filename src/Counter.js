import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { byValue, decrement, increment } from "./actions";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  return (
    <Fragment>
      <div>
        <button className="btn" onClick={() => dispatch(decrement())}>
          -
        </button>
        <span className="center">{count}</span>
        <button className="btn" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div>
        <button
          className="btn"
          onClick={() => dispatch(byValue(Number(value), "minus"))}
        >
          -
        </button>
        <input
          onChange={(e) => setValue(e.target.value)}
          className="by-value-input"
          placeholder="value"
        />
        <button
          className="btn"
          onClick={() => dispatch(byValue(Number(value), "plus"))}
        >
          +
        </button>
      </div>
    </Fragment>
  );
};

export default Counter;
