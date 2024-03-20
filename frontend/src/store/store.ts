import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type TCategoryStore = {
  category: string;
  setCategory: (data: string) => void;
  resetCategory: () => void;
};
export const categoryStore = create<TCategoryStore>()(
  devtools(
    persist(
      (set) => ({
        category: 'All',
        setCategory: (data: string) => {
          set({ category: data });
        },
        resetCategory: () => {
          set({ category: 'All' });
        },
      }),
      { name: 'categoryStore' },
    ),
  ),
);
