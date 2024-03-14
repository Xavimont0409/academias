import DataTable  from 'react-data-table-component'
import { Modal } from '../../utils/Modal'
import { useStudents } from '../../hooks/studentsHook/useStudents'
export function ModalAddUser ({ setOpenModalAdd }){
  const { students } = useStudents()
  const closeModal = () => {
    setOpenModalAdd(false)
  }

  const columns = [
    {
      name: <span className=' font-bold'>Nombre</span>,
      selector: row => row.name,
      sortable: true,
      header: 'NOMBRES'
    },
    {
      name: <span className=' font-bold'>Apellido</span>,
      selector: row => row.lastName,
      sortable: true
    },
    {
      name: <span className=' font-bold'>Categoria</span>,
      selector: row => row.CategoryName,
      sortable: true
    },
    {
      name: <span className=' font-bold'>Nivel</span>,
      selector: row => row.LevelName,
      sortable: true
    }
  ]

  return (
    <Modal title='Agregar estudiante' closeModal={closeModal} className='flex flex-col justify-between bg-white rounded-md w-2/4 px-5 pb-5' >
      <DataTable 
        title='Alumnos sin horarios'
        columns={columns}
        data={students}

        striped
        responsive
        pagination
        highlightOnHover
        paginationServer
      />
    </Modal>
  )
}
