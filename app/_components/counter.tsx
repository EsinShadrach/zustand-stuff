"use client";
import { useCounterStore } from "~/zustand-store/store";

export function Counter() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const incrementAync = useCounterStore((state) => state.incrementAsync);

  return (
    <div>
      <p>THIS IS A CLIENT COMPONENT BELOW</p>
      <button onClick={decrement} className="p-2 px-6 bg-red-200 rounded-md">
        Decrement
      </button>
      <span>{count}</span>

      <button onClick={increment} className="p-2 px-6 bg-green-200 rounded-md">
        Increment
      </button>
      <br />

      <button
        onClick={incrementAync}
        className="p-2 px-6 bg-orange-200 rounded-md"
      >
        Increment Async
      </button>
    </div>
  );
}
