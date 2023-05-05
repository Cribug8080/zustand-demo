import useCounterStore from "../zustand/counter";

export default function Counter() {
  const { count, increment, decrement } = useCounterStore();
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
    </div>
  );
}
