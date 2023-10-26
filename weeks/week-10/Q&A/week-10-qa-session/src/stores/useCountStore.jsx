import { create } from "zustand";

export const useCountStore = create((set, get) => ({
  count: 0,
  increment: (amount) => set((state) => ({ count: state.count + amount })),
  decrement: (amount) => set((state) => ({ count: state.count - amount })),
  logCount: () => {
    // Accessing the 'count' variable and logging it
    const currentCount = get().count;
    console.log(`Current count: ${currentCount}`);
  },
  isPositive: () => {
    // Checking if the count is positive using 'get'
    const currentCount = get().count;
    return currentCount > 0;
  },
  doubleCount: () => {
    // Doubling the count using 'get'
    const currentCount = get().count;
    return currentCount * 2;
  },
}));
