import { useForm } from 'react-hook-form'
import { studentStore } from '../../store/studentStore'
import { useState } from 'react'

export function useFunctionStudents () {
  const { register, handleSubmit, control, formState: { errors }, setValue, reset } = useForm()
  const { createStudent, closeModal, updateStudent, getPagAllStudents } = studentStore()
  const [categoryId, setCategoryId] = useState('')
  const [levelId, setLevelId] = useState('')

  const getPagStudents = (page, limit, categoryId, levelId) => {
    const fitlers = { categoryId, levelId, page, limit }
    getPagAllStudents(fitlers)
  }

  const handleCategoryId = (e) => {
    console.log(e.target.value);
    setCategoryId(e.target.value)
  }

  const handleLevelId = (e) => {
    console.log(e.target.value);
    setLevelId(e.target.value)
  }

  const onSubmit = async (values) => {
    try {
      values.editMode
        ? await updateStudent(values)
        : await createStudent(values)
      await closeModal()
    } catch (error) {
      console.log(error)
    }
  }

  return {
    register,
    handleSubmit,
    control,
    errors,
    onSubmit,
    setValue,
    reset,
    getPagStudents,
    handleCategoryId,
    handleLevelId,
    categoryId,
    levelId
  }
}