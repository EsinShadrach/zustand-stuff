import { useCounterStore } from "~/zustand-store/store";

export function LogCountBtn() {
  return (
    <button className="p-2 px-6 bg-emerald-200 rounded-md">Log Count</button>
  );
}

export function DisplayCount() {
  const count = useCounterStore((state) => state.count);
  // For some reason if get count like this it doesn't re render
  return <>{count}</>;
}
