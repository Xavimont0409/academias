import { create } from "zustand";
import { getRequest } from "../service/services";

export const levelStore = create()((set, get) => {
  const baseUrl = 'level'

  return {
    level : [],

    getLevel : async() => {
      const { level } = await getRequest(baseUrl)
      set({ level })
    }
  }
})