import { create } from "zustand";

interface IUser {
    fullName: string;
    setFullName: (name: string) => void;
}

export const useUser = create<IUser>((set: (arg0: { fullName: string; }) => any) => ({
    fullName: "",
    setFullName: (name:string) => set({ fullName:name }),
}));

export default useUser;



