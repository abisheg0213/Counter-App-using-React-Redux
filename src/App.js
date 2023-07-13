import { useSelector, useDispatch } from "react-redux";
export default function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <center>
        <h2>Counter</h2>
        <h1>{count}</h1>
        <button
          onClick={() => {
            dispatch({ type: "Increment" });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch({ type: "Decrement" });
          }}
        >
          -
        </button>
      </center>
    </div>
  );
}
