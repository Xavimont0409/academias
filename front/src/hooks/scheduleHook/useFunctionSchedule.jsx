import { useForm } from 'react-hook-form'

export function useFunctionStudents () {
  const { register, handleSubmit, control, formState: { errors } } = useForm()

  return {
    register,
    handleSubmit,
    control,
    errors
  }
}