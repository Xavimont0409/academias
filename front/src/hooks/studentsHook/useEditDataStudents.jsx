import { useEffect } from 'react'

export function useEditDataStudent({ updateData, setValue }) {
  useEffect(() => {
    if (updateData.editMode) {
      // Si estamos en modo de edición, establecer los valores del formulario
      for (const [key, value] of Object.entries(updateData)) {
        setValue(key, value)
      }
    } else {
      // Si no estamos en modo de edición, limpiar los valores del formulario
      const fieldsToClear = ['name', 'lastName', 'age', 'address', 'phone', 'namTutor', 'size', 'Category', 'Level'];
      fieldsToClear.forEach(field => setValue(field, ''));
    }
  }, [updateData, setValue])
}
