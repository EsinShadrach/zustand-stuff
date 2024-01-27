import { useCounterStore } from "~/zustand-store/store";
import { Counter } from "./_components/counter";
import Link from "next/link";

function handleCount() {
  const count = useCounterStore.getState().count;
  return count;
}

export default function Home() {
  return (
    <section className="container p-3 mx-auto">
      <Counter />
      <p>THIS IS A SERVER COMPONENT BELOW</p>
      <h1 className="text-4xl font-semibold">{handleCount()}</h1>

      <Link href="/see-count">Navigate to see count</Link>
    </section>
  );
}
