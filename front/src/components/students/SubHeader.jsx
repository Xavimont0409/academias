import { AddUser } from "../../assets/Icons";
import { Button } from "../../utils/Button";
import { FilterStudents } from "./FilterStudents";

export function SubHeader({ control, register, errors, showModal, handleCategoryId, handleLevelId }) {
  const handleOpenModal = () => {
    showModal();
  };

  return (
    <div className="flex justify-between w-full pb-5 pt-4">
      <Button
        handleClick={handleOpenModal}
        icon={<AddUser />}
        className="btn-primary"
        type="button"
      />
      <FilterStudents
        control={control} register={register} errors={errors}
        handleCategoryId={handleCategoryId} handleLevelId={handleLevelId}
        />
    </div>
  );
}
