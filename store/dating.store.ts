// stores/headerStore.ts
import { mockUsers } from "@/testDatas/mockUsers";
import { isUserLoggedIn } from "@/utils/helpers";
import { User } from "@/utils/models";
import { create } from "zustand";

interface DatingStore {
  users: User[];
  totalUserProfiles: User[];
  currentUserProfiles: User[];
  cities: string[];
  currentCity: string;
  loggedInUser: User | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  error: any;
  currentPage: string;
  setCurrentPage: (pageName: string) => void;
  setCurrentCity: (city: string) => void;
  setUsers: (users: User[]) => void;
  getTotalUserProfiles: (users?: User[]) => void;
  setCurrentUserProfiles: (currentUsers: User[]) => void;
  setCities: (cities: string[]) => void;
  setLoggedInUser: (user: User | null) => void;
  setIsLoggedIn: (isLogin: boolean) => void;
}

export const useDatingStore = create<DatingStore>((set, get) => ({
  users: [],
  totalUserProfiles: [],
  currentUserProfiles: [],
  cities: [],
  loggedInUser: null,
  isLoggedIn: isUserLoggedIn(),
  isLoading: false,
  error: null,
  currentCity: "",
  currentPage: "/",
  setCurrentPage: (pageName: string) => set({ currentPage: pageName }),
  setCurrentCity: (city) => set({ currentCity: city }),
  setUsers: (users) => set({ users: users }),
  setCities: (cities) => set({ cities: cities }),
  setIsLoggedIn: (isLogin) => set({ isLoggedIn: isLogin }),
  setLoggedInUser: (user) => set({ loggedInUser: user }),
  getTotalUserProfiles: async (users?) => {
    // async
    // get all the user profiles for the given city or given area range
    try {
      set({ isLoading: true });
      // const response = await fetch("/api/users/crudUsers");
      // console.log("total user profilesisLoggedIn response ", response);
      // set({ isLoggedIn: true });
      set({
        isLoading: false,
        totalUserProfiles: mockUsers,
        // currentUserProfiles: mockUsers,
      });
      // console.log(
      //   "total user profiles totalUserProfiles ",
      //   get().totalUserProfiles
      // );
    } catch (err: any) {
      set({ error: err?.message, isLoading: false });
    }
  },
  setCurrentUserProfiles: (currentUsers) =>
    set({ currentUserProfiles: currentUsers }),
}));
