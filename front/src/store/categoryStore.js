import { create } from "zustand";
import { getRequest } from "../service/services";

export const categoryStore = create()((set, get) => {
  const baseUrl = 'category'

  return {
    category: [],

    getCategory : async () => {
      const { category } = await getRequest(baseUrl)
      set({ category })
    }
  }
})