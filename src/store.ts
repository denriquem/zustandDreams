import create from "zustand";

type DreamStoreType = {
  dreams: number;
  haveADream: () => void;
  loseADream: () => void;
};

type DescriptionStoreType = {
  entries: Entry[];
  setNewEntry: (text: string, author: string) => void;
};

type Entry = {
  id: number;
  description: string;
  author: string;
};

const useDreamStore = create<DreamStoreType>((set) => ({
  dreams: 11,
  haveADream: () => set((state) => ({ dreams: state.dreams + 1 })),
  loseADream: () => set((state) => ({ dreams: state.dreams - 1 })),
}));

const useDescriptionStore = create<DescriptionStoreType>((set) => ({
  entries: [
    {
      id: 9,
      description: "all the clowns were juggling in the distance",
      author: "Simon",
    },
  ],
  setNewEntry: (description: string, author: string) => {
    set((state) => ({
      entries: [
        ...state.entries,
        {
          id: 2,
          description,
          author,
        },
      ],
    }));
  },
}));

export { useDreamStore, useDescriptionStore };
