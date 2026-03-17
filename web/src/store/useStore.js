import { create } from "zustand";

export const useAuthStore = create((set)=>({
    user:null,
    token:null,
    setLogin:(userData,token)=>{
        set({user:userData,token:token})
    },
    logout:()=>{
        set({user:null,token:null})
    }
}))