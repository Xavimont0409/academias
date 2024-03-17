import { create } from "zustand";
import { getRequest, createRequest, updateRequest } from "../service/services";

export const studentStore = create()((set, get) => {
  const baseUrl = "students";
  const baseUrlfilter = 'paginado'

  return {
    students: [],
    typeClass: [],
    loading: false,
    limit: 3,
    page: 1,
    totalPages: 0,
    openModal: false,
    updateData: {},
    totalStudents: 0,

    getAllStudents: async () => {
      const students = await getRequest(baseUrl);
      set({ students });
    },

    getAllClass: async () => {
      const { typeClass } = await getRequest('classes');
      console.log(typeClass);
      set({ typeClass })
    },

    getPagAllStudents: async (filter) => {
      const { categoryId, levelId, page, limit } = filter
      const url = `${baseUrlfilter}?page=${page}&size=${limit}&categoryId=${categoryId}&levelId=${levelId}`;
      const response = await getRequest(url);
      const { totalPages, currentPage, totalStudents, students } = response;
      set({ totalPages, page: currentPage, totalStudents, students });
    },

    createStudent: async (data) => {
      const student = await createRequest(baseUrl, data)
      set((state) => ({ students: [...state.students, student.student] }))
    },

    updateStudent: async(data) => {
      const updateStudent = await updateRequest(baseUrl, data)
      const { students } = get()
      const newStudent = structuredClone(students)
      const indexStudent = students.findIndex(elem => elem.id === data.id)

      newStudent[indexStudent] = updateStudent.student

      set({ students: newStudent })
    },

    addScheduleStudent: async () => {
      
    },

    showModal: async () => {
      set({ openModal: true });
    },

    closeModal: async () => {
      set({ openModal: false, updateData: { editMode: false } });
    },

    setUpdateData: async (data) => {
      set({ updateData: data });
    },
  };
});
