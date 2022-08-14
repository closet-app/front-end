import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserState {
  id: number | undefined;
  firstName: string;
  lastName: string;
  email: string;
  login: (options: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    token: string;
  }) => void;
}

const useUserStore = create<UserState>()(
  devtools(
    persist((set) => ({
      id: undefined,
      firstName: "",
      lastName: "",
      email: "",
      token: "",
      login: ({ id, email, firstName, lastName, token }) => {
        set({ id, email, firstName, lastName });
        localStorage.setItem("token", token);
      },
    }))
  )
);

export default useUserStore;
