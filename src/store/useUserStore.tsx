import { create } from "zustand";

interface UserItem {
  img: string;
  name: string;
  state: "offLine" | "onLine";
  selected: boolean;
}

export interface State {
  user: UserItem[];
}

export interface Action {
  changeUser: (idx: number) => void;
}

const useUserStore = create<State & Action>((set) => ({
  user: [
    {
      img: "123",
      name: "jack",
      state: "offLine",
      selected: true,
    },
    {
      img: "123",
      name: "jack",
      state: "offLine",
      selected: false,
    },
    {
      img: "123",
      name: "jack",
      state: "offLine",
      selected: false,
    },
    {
      img: "123",
      name: "jack",
      state: "offLine",
      selected: false,
    },
    {
      img: "123",
      name: "jack",
      state: "offLine",
      selected: false,
    },
    {
      img: "123",
      name: "jack",
      state: "offLine",
      selected: false,
    },
    {
      img: "123",
      name: "jack",
      state: "offLine",
      selected: false,
    },
    {
      img: "123",
      name: "jack",
      state: "offLine",
      selected: false,
    },
    {
      img: "123",
      name: "jack",
      state: "offLine",
      selected: false,
    },
    {
      img: "123",
      name: "jack",
      state: "offLine",
      selected: false,
    },
  ],
  changeUser: (idx: number) => {
    return set((state) => {
      state.user.forEach((item, index) => {
        if (idx === index) {
          item.selected = true;
        } else {
          item.selected = false;
        }
      });
      return { user: state.user };
    });
  },
}));

export default useUserStore;
