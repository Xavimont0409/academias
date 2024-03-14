import { InputSelect } from "../../utils/InputSelect";
import { useLevel } from "../../hooks/levelHook/useLevel";
import { useCategory } from "../../hooks/categoryHook/useCategory";

export function FilterStudents({ register, control, errors, handleCategoryId, handleLevelId }) {

  const { category } = useCategory()
  const { level } = useLevel()

  const categoria = [
    {value: 0, name: '[CATEGORIA]', id: 0}
  ]
  const state = [
    {value: 0, name: '[ESTADO DE PAGO]', id: 0}
  ]
  const type = [
    {value: 0, name: '[LEVEL]', id: 0}
  ]

  return (
    <section className='flex gap-5'>
      <InputSelect
        register={register} control={control} name='Categoria' options={category}
        onChange={handleCategoryId} 
      />
      <InputSelect
        register={register} control={control} name='estado de pago' options={state}
      />
      <InputSelect
        register={register} control={control} name='Nivel' options={level}
        onChange={handleLevelId}
      />
    </section>
  );
}
