import { create } from "zustand";

interface UserItem {
  img: string;
  name: string;
  state: "offLine" | "onLine";
  selected: boolean;
}
interface UserInfo {
  bio: string;
  createdAt: string;
  email: string;
  fullName: string;
  password: string;
  profilePic: string;
  updatedAt: string;
  __v: number;
  _id: string;
}
export interface State {
  user: UserItem[];
  userInfo?: undefined | Partial<UserInfo>;
}

export interface Action {
  changeUser: (idx: number) => void;
  setUserInfo?: (info: Record<any, string>) => void;
}

const useUserStore = create<State & Action>((set) => ({
  userInfo: {},
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
  setUserInfo: (info: Record<any, string>) => {
    set(() => {
      return { userInfo: info };
    });
  },
}));

export default useUserStore;
