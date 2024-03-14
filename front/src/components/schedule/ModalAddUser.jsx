import { Modal } from '../../utils/Modal'

export function ModalAddUser ({ setOpenModalAdd }){
  const closeModal = () => {
    setOpenModalAdd(false)
  }
  return (
    <Modal title='Agregar estudiante' closeModal={closeModal} className='flex flex-col justify-between bg-white rounded-md w-2/4 px-5 pb-5' >
      <h1>soy un modal</h1>
    </Modal>
  )
}
