import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  incrementAsync: () => Promise<void>;
  decrement: () => void;
};

function handleIncrement(state: CounterStore) {
  return {
    count: state.count + 1,
  };
}

function handleDecrement(state: CounterStore) {
  return {
    count: state.count - 1,
  };
}

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },
  incrementAsync: async () => {
    const fail = true;

    set(handleIncrement);
    await new Promise((resolve, reject) => {
      return setTimeout(() => {
        if (fail) {
          set(handleDecrement);
          // Maybe Show a toast
          return reject("Failed to increment");
        }

        return resolve("Success");
      }, 2000);
    });
  },
  decrement: () => {
    set(handleDecrement);
  },
}));
