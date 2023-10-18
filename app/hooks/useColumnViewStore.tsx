import { create } from "zustand";
import { persist } from "zustand/middleware";
import { userSettings } from "../api/users/_data/userSettings"; // TODO: replace with real user settings from db

interface Column {
  title: string;
  value: boolean;
}

interface ColumnsState {
  columns: Column[];
  addColumn: (description: string) => void;
  removeColumn: (title: string) => void;
  toggleColumn: (title: string) => void;
}

const useColumnViewStore = create<ColumnsState>()(
  persist(
    (set, get) => ({
      // initial state
      columns: [...userSettings.columns],
      addColumn: (title) => {
        set(() => ({
          columns: [
            ...get().columns,
            {
              title,
              value: true,
            } as Column,
          ],
        }));
      },
      removeColumn: (title) => {
        set((state) => ({
          columns: state.columns.filter((column) => column.title !== title),
        }));
      },
      toggleColumn: (title) => {
        set((state) => ({
          columns: state.columns.map((column) =>
            column.title === title
              ? ({ ...column, value: !column.value } as Column)
              : column
          ),
        }));
      },
    }),
    {
      name: "column-views",
    }
  )
);

export default useColumnViewStore;
