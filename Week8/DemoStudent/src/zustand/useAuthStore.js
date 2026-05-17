import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      loginUser: (userData) => set({ user: userData }),
      logoutUser: () => set({ user: null }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
