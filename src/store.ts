import create from "zustand";
import { v4 as uuidv4 } from "uuid";
import { getQuotes } from "./components/getQuotes";
import { persist } from "zustand/middleware";

type DreamStoreType = {
  dreams: number;
  randomQuotes: string[];
  haveADream: () => void;
  loseADream: () => void;
  lucidDream: () => void;
};

type DescriptionStoreType = {
  entries: Entry[];
  setNewEntry: (text: string, author: string) => void;
  removeEntry: (id: string) => void;
};

type Entry = {
  id: string;
  description: string;
};

const useDreamStore = create<DreamStoreType>((set) => ({
  dreams: 3,
  randomQuotes: [],
  haveADream: () => set((state) => ({ dreams: state.dreams + 1 })),
  loseADream: () => set((state) => ({ dreams: state.dreams - 1 })),
  lucidDream: async () => {
    const response = await getQuotes();
    set({ randomQuotes: await response });
  },
}));

const useDescriptionStore = create<
  DescriptionStoreType,
  [["zustand/persist", DescriptionStoreType]]
>(
  persist((set, get) => ({
    entries: [
      {
        id: "9",
        description: "All the clowns were juggling in the distance",
      },
    ],
    setNewEntry: (description: string) => {
      set((state) => ({
        entries: [
          ...state.entries,
          {
            id: uuidv4(),
            description,
          },
        ],
      }));
    },
    removeEntry: (id: string) => {
      const isRelevantIndex = (element: Entry) => element.id === id;
      const indexToBeRemoved = get().entries.findIndex(isRelevantIndex);
      get().entries.splice(indexToBeRemoved, 1);
      set((state) => ({
        entries: state.entries,
      }));
    },
  }))
);

export { useDreamStore, useDescriptionStore };
