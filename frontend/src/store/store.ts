import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type TCategoryStore = {
  category: string;
  setCategory: (data: string) => void;
  resetCategory: () => void;
};

type TCategoryList = {
  categoryList: string[];
  setCategoryList: (data: string[]) => void;
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

export const categoryListStore = create<TCategoryList>()(
  devtools(
    persist(
      (set) => ({
        categoryList: [],
        setCategoryList: (data: string[]) => {
          set({ categoryList: data });
        },
      }),
      { name: 'categoryStore' },
    ),
  ),
);
