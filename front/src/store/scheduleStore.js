import { create } from "zustand";
import { getRequest, createRequest } from "../service/services";

export const scheduleStore = create()((get, set) => {
  const baseUrl= 'schedule'
  
  return {
    schedule: [],

    getAllShedule: async () => {
      const schedule = await getRequest(baseUrl)
      set({ schedule })
    },

  }
})