import { Modal } from "../../utils/Modal";
import { ModalOk } from "./ModalOk";
import { useState } from "react";

export function ModalAddClass({
  setOpenModallAddClass,
  setDataClass,
  openModalOk,
  setModalOk,
  submitDataClass
}) {
  const [nameClass, setNameClass] = useState("");
  const closeModal = () => {
    setOpenModallAddClass(false);
  };

  return (
    <Modal
      title="Agregar Clase"
      closeModal={closeModal}
      className="flex flex-col justify-between bg-white rounded-md w-2/4 px-5 pb-5"
    >
      <section>
        <button
          type="button"
          className="text-black bg-red-500 font-bold py-2 px-4 rounded mx-5"
          onClick={(e) => {
            setDataClass(e, 2);
            setNameClass("INDIVIDUAL");
            setModalOk(true);
          }}
        >
          INDIVIDUAL
        </button>
        <button
          type="button"
          className="text-black bg-red-500 font-bold py-2 px-4 rounded mx-5"
          onClick={(e) => {
            setDataClass(e, 1);
            setNameClass("GRUPAL");
            setModalOk(true);
          }}
        >
          GRUPAL
        </button>
        {openModalOk && (
          <ModalOk setModalOk={setModalOk} nameClass={nameClass} submitDataClass={submitDataClass} />
        )}
      </section>
    </Modal>
  );
}
