import { InputFiel } from '../../utils/InputFiel'
import { InputSelect } from '../../utils/InputSelect'

export function SearchStudents ({ control, errors, register }) {
  return (
    <>
      <InputFiel errors={errors} register={register} name='busqueda nombre estudiante' labelText='Buscar alumno' />
      <InputSelect control={control} register={register} name='tipo de horario' labelText='Particular o grupal' />
    </>
  )
}