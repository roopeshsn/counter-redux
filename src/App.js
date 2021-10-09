import Counter from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Counter with Redux</h1>
      <p>
        Redux is a pattern and library for managing and updating application
        state, using events called "actions".
      </p>
      <Counter />
    </div>
  );
}
