import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FilterState {
  status: String[];
  toggleStatus: (value: boolean, title: string) => void;
  resetStatus: () => void;
}
// Statuses are: New, Pending, Enrolled, Denied
const useStatusStore = create<FilterState>()(
  persist(
    (set, get) => ({
      // initial state
      status: [],
      toggleStatus: (value, title) => {
        if (value && !get().status.includes(title)) {
          set(() => ({
            status: [...get().status, title],
          }));
        }
        if (!value && get().status.includes(title)) {
          set((state) => ({
            status: state.status.filter((status) => status !== title),
          }));
        }
      },
      resetStatus: () => {
        set(() => ({
          status: [],
        }));
      },
    }),
    {
      name: "filter-surveys ",
    }
  )
);

export default useStatusStore;
