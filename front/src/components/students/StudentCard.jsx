import { Edit, Off, On } from "../../assets/Icons";

export function StudentCard({ student, showModal, setUpdateData }) {
  const updateData = () => {
    setUpdateData({ ...student, editMode: true });
    showModal();
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <h2 className="text-lg font-bold">{student.name} {student.lastName}</h2>
      <p className="text-sm text-gray-600">Edad: {student.age}</p>
      {/* Muestra otros datos del estudiante si están disponibles */}
      {student.address && (
        <p className="text-sm text-gray-600">Dirección: {student.address}</p>
      )}
      {student.phone && (
        <p className="text-sm text-gray-600">Teléfono: {student.phone}</p>
      )}
      {student.nameTutor && (
        <p className="text-sm text-gray-600">Nombre del Tutor: {student.nameTutor}</p>
      )}
      {student.size && (
        <p className="text-sm text-gray-600">Tamaño: {student.size}</p>
      )}
      {student.CategoryName && (
        <p className="text-sm text-gray-600">Categoría: {student.CategoryName}</p>
      )}
      {student.LevelName && (
        <p className="text-sm text-gray-600">Nivel: {student.LevelName}</p>
      )}
      <p className={`text-sm ${student.status ? 'text-green-600' : 'text-red-600'}`}>
        Estado: {student.status ? 'HABILITADO' : 'INHABILITADO'}
      </p>
      <div className="mt-2 flex justify-end">
        <button className="text-red-500 hover:text-red-600" onClick={() => updateData()}>
          <Edit className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
