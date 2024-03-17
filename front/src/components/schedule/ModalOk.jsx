import { Modal } from "../../utils/Modal";

export function ModalOk({ setModalOk, nameClass, submitDataClass }) {
  const closeModal = () => {
    setModalOk(false);
  };
  return (
    <Modal
      closeModal={closeModal}
      className="flex flex-col justify-between bg-white rounded-md w-1/4 px-5 pb-5"
    >
      <h1>Desea que este clase sea {nameClass}?</h1>
      <section>
        <button
          type="button"
          className="text-black bg-red-500 font-bold py-2 px-4 rounded mx-5"
          onClick={submitDataClass}
        >
          SI
        </button>
        <button
          type="button"
          className="text-black bg-red-500 font-bold py-2 px-4 rounded mx-5"
          onClick={closeModal}
        >
          NO
        </button>
      </section>
    </Modal>
  );
}
