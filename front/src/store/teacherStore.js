import { create } from 'zustand'
import { getRequest } from '../service/services'

export const teacherStore = create()((set, get) => {
  const baseUrl = 'teacher'

  return {
    teacher: [],

    getAllTeacher: async() => {
      const teacher = await getRequest(baseUrl)
      set({ teacher })
    }
  }
})