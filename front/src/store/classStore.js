import { create } from "zustand";
import { getRequest, createRequest } from "../service/services";

export const classStore = create()((set, get) => {
  const baseUrl = 'classes'
  const baseUrlAdd = 'class'
  return {
    typeClass: [],

    getClass: async () => {
      const { typeClass } = await getRequest(baseUrl)
      set({ typeClass })
    },

    addClass: async (data) => {
			const { typeClass } = await createRequest(baseUrlAdd, data)
			set((state) => ({ typeClass: [...state.typeClass, typeClass] }))
		},
  }
})