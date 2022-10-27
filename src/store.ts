import create from "zustand";
import { v4 as uuidv4 } from "uuid";
import { getQuotes } from "./components/getQuotes";

type DreamStoreType = {
  dreams: number;
  randomQuote: string;
  haveADream: () => void;
  loseADream: () => void;
  lucidDream: () => void;
};

type DescriptionStoreType = {
  entries: Entry[];
  setNewEntry: (text: string, author: string) => void;
};

type Entry = {
  id: string;
  description: string;
  author: string;
};

const useDreamStore = create<DreamStoreType>((set, get) => ({
  dreams: 3,
  randomQuote: "",
  haveADream: () => set((state) => ({ dreams: state.dreams + 1 })),
  loseADream: () => set((state) => ({ dreams: state.dreams - 1 })),
  lucidDream: async () => {
    const theDream = get().dreams;
    const response = await getQuotes();
    set({
      randomQuote: response[theDream as keyof typeof response].text,
    });
  },
}));

const useDescriptionStore = create<DescriptionStoreType>((set) => ({
  entries: [
    {
      id: "9",
      description: "All the clowns were juggling in the distance",
      author: "Simon",
    },
    {
      id: "10",
      description: "I forgot my own name",
      author: "Shawny",
    },
  ],
  setNewEntry: (description: string, author: string) => {
    set((state) => ({
      entries: [
        ...state.entries,
        {
          id: uuidv4(),
          description,
          author,
        },
      ],
    }));
  },
}));

export { useDreamStore, useDescriptionStore };
