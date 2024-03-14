import { Modal } from "../../utils/Modal";
import { InputSelect } from "../../utils/InputSelect";
import { InputFiel } from "../../utils/InputFiel";
import { useStudentsHook } from "../../hooks/studentsHook/useHookStudents";
import { useCategory } from "../../hooks/categoryHook/useCategory";
import { useLevel } from "../../hooks/levelHook/useLevel";
import { Button } from "../../utils/Button";
import { Return, Save } from '../../assets/Icons'
import { useEditDataStudent } from "../../hooks/studentsHook/useEditDataStudents";

export function ModalStudents({ closeModal, updateData }) {
  const { errors, control, register, handleSubmit, onSubmit, setValue } = useStudentsHook();
  const { category } = useCategory();
  const { level } = useLevel();

  const sizeData = [
    { id: 0, value: 0, name: "[TALLAS]" },
    { id: 1, value: 1, name: "Talla 6" },
    { id: 2, value: 2, name: "Talla 8" },
    { id: 3, value: 3, name: "Talla 10" },
    { id: 4, value: 4, name: "Talla 12" },
    { id: 5, value: 5, name: 'Talla 14' },
    { id: 6, value: 6, name: "Talla 16" },
    { id: 7, value: 7, name: "Talla XS" },
    { id: 8, value: 8, name: "Talla S" },
    { id: 9, value: 9, name: "Talla M" },
    { id: 10, value: 10, name: "Talla L" },
    { id: 11, value: 11, name: "Talla XL" },
    { id: 12, value: 12, name: "Talla XXL" },
  ];

  const submitForm = (data) => {
    onSubmit({
      ...data,
      size: Number(data.size),
      CategoryId: Number(data.CategoryId),
      LevelId: Number(data.LevelId)
    });
  }

  const handleChange = (e, fieldName) => {
    setValue(fieldName, e.target.value)
  }

  useEditDataStudent({ setValue, updateData })

  return (
    <Modal title={updateData.editMode ? 'Actualizar Alumno' : 'Nueva Alumno'} closeModal={closeModal} onSubmit={handleSubmit(submitForm)}>
      <section className="grid grid-cols-12 gap-5 pb-5">
        <InputFiel
          errors={errors} register={register} name="name" labelText="Nombre" xlColSpan="xl:col-span-4"
        />
        <InputFiel
          errors={errors} register={register} name="lastName" labelText="Apellido" xlColSpan="xl:col-span-4"
        />
        <InputFiel
          errors={errors} register={register} name="age" labelText="Edad" xlColSpan="xl:col-span-4"
        />
        <InputFiel
          errors={errors} register={register} name="address" labelText="Direccion" xlColSpan="xl:col-span-4"
        />
        <InputFiel
          errors={errors} register={register} name="phone" labelText="Telefono" xlColSpan="xl:col-span-4"
        />
        <InputFiel
          errors={errors} register={register} name="nameTutor" labelText="Nombre del apoderado" xlColSpan="xl:col-span-4"
        />
        <InputSelect
          options={sizeData} errors={errors} register={register} control={control} name="size" labelText="Talla del polo" xlColSpan="xl:col-span-4"
          onChange={(e) => handleChange(e, 'size')}
        />
        <InputSelect
          options={category} errors={errors} register={register} control={control} name="CategoryId" labelText="Categoria"
          xlColSpan="xl:col-span-4" onChange={(e) => handleChange(e, 'CategoryId')}
        />
        <InputSelect
          options={level} errors={errors} register={register} control={control} name="LevelId" labelText="Nivel"
          xlColSpan="xl:col-span-4" onChange={(e) => handleChange(e, 'LevelId')}
        />
      </section>
      <hr />
      <section className='flex justify-start gap-5 items-center pt-5'>
        {
          updateData.editMode
            ? <Button type='submit' text='Actualizar' icon={<Save />} />
            : <Button type='submit' text='Guardar' icon={<Save />} />
        }
        <Button type='button' text='Cancelar' icon={<Return />} className='btn-secondary' handleClick={closeModal} />
      </section>
    </Modal>
  );
}
