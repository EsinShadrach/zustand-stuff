"use client";
import { useCounterStore } from "~/zustand-store/store";
import { DisplayCount, LogCountBtn } from "./_components/log-count";
import { Counter } from "../_components/counter";

export default function SeeCount() {
  function getCount() {
    const count = useCounterStore.getState().count;
    return count;
  }
  const a = useCounterStore((s) => s.increment);
  return (
    <section className="container flex flex-col items-center justify-center min-h-screen m-3 mx-auto bg-red-100">
      {getCount()}
      {useCounterStore.name}
      <LogCountBtn />
      <button onClick={a}>app</button>
      <div>
        <DisplayCount />
      </div>
      <div>
        <Counter />
      </div>
    </section>
  );
}
