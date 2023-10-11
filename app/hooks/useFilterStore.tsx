import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FilterState {
  filters: String[];
  toggleFilter: (value: boolean, title: string) => void;
  resetFilters: () => void;
}

const useFilterStore = create<FilterState>()(
  persist(
    (set, get) => ({
      // initial state
      filters: [],
      toggleFilter: (value, title) => {
        // add title to filters if it doesn't exist and remove it if it does
        if (value && !get().filters.includes(title)) {
          set(() => ({
            filters: [...get().filters, title],
          }));
        }
        if (!value && get().filters.includes(title)) {
          set((state) => ({
            filters: state.filters.filter((filter) => filter !== title),
          }));
        }
      },
      resetFilters: () => {
        set(() => ({
          filters: [],
        }));
      },
    }),
    {
      name: "filter-surveys ",
    }
  )
);

export default useFilterStore;
