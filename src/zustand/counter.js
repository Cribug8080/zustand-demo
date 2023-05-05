import create from "zustand";

// defined a zustand store with an initial value

const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ ...state, count: state.count + 1 })),
  decrement: () => set((state) => ({ ...state, count: state.count - 1 }))
}));

export default useCounterStore;
