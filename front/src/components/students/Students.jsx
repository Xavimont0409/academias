import { useStudentsHook } from "../../hooks/studentsHook/useHookStudents";
import { ModalStudents } from "./ModalStudents";
import { StudentCard } from "./StudentCard";
import { SubHeader } from "./SubHeader";
import { Pagination } from "./Pagination";
import { useEffect, useState } from "react";

export function Students() {
  const {
    control,
    register,
    errors,
    students,
    openModal,
    showModal,
    closeModal,
    updateData,
    setUpdateData,
    getPagStudents,
    limit,
    totalStudents,
    handleCategoryId,
    handleLevelId,
    categoryId,
    levelId
  } = useStudentsHook();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getPagStudents(currentPage, limit, categoryId, levelId)
  }, [currentPage, limit, categoryId, levelId])
  
  return (
    <div className="min-h-screen w-full bg-red-50">
      <div className="container mx-auto px-4 py-12">
        <SubHeader
          control={control} register={register} errors={errors} showModal={showModal}
          handleCategoryId={handleCategoryId} handleLevelId={handleLevelId}
          />
        <h1 className="text-2xl font-bold mb-4">Lista de alumnos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {students.map((student, index) => (
            <StudentCard key={index} student={student} showModal={showModal} setUpdateData={setUpdateData} />
          ))}
        </div>
      </div>
      {openModal && <ModalStudents closeModal={closeModal} updateData={updateData} />}
      <div>
        <Pagination
          totalItems={totalStudents} itemsPerPage={limit} currentPage={currentPage} setCurrentPage={setCurrentPage}
          totalPages={totalPages} setTotalPages={setTotalPages}
          />
      </div>
    </div>
  );
}

