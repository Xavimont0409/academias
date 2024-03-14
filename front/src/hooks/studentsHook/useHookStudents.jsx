import { useStudents } from "./useStudents";
import { useFunctionStudents } from "./useFunctionStudents";
import { studentStore } from "../../store/studentStore";

export function useStudentsHook() {
  const { students } = useStudents()

  const {
    register,
    handleSubmit,
    control,
    errors,
    setValue,
    onSubmit,
    reset,
    getPagStudents,
    handleCategoryId,
    handleLevelId,
    categoryId,
    levelId
  } = useFunctionStudents()

  const {
    loading,
    openModal,
    showModal,
    closeModal,
    updateData,
    setUpdateData,
    limit,
    page,
    totalStudents
  } = studentStore()

  return {
    students,
    register,
    handleSubmit,
    control,
    errors,
    loading,
    openModal,
    showModal,
    closeModal,
    updateData,
    setUpdateData,
    setValue,
    onSubmit,
    reset,
    getPagStudents,
    limit,
    page,
    totalStudents,
    handleCategoryId,
    handleLevelId,
    categoryId,
    levelId
  }
}