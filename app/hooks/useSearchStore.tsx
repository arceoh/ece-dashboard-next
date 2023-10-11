import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FilterState {
  searchText: string;
  setSearchText: (tex: string) => void;
}

const useSearchStore = create<FilterState>()(
  persist(
    (set) => ({
      searchText: "",
      setSearchText: (text) => set({ searchText: text }),
    }),
    {
      name: "search-text-surveys ",
    }
  )
);

export default useSearchStore;
