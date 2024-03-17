import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { useState, useRef } from "react";
import { ModalAddUser } from "./ModalAddUser";
import { ModalAddClass } from "./ModalAddClass";
import { useClassHook } from "../../hooks/typeClassHook/useClassHook";

export function Schedule() {
  const calendarRef = useRef(null);
  const { onSubmit, classes, findTuesdaysAndThursdaysInMonth } = useClassHook();
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalOk, setModalOk] = useState(false);
  const [openModallAddClass, setOpenModallAddClass] = useState(false);
  const [classData, setClassData] = useState({});
  const [grupal, setGrupal] = useState([]);
  const [month, setMonth] = useState(0);

  const submitDataClass = () => {
    onSubmit(grupal);
    setOpenModallAddClass(false);
    setModalOk(false);
  };

  const setDataClass = (e, number) => {
    e.preventDefault;
    if (number === 1) {
      const dataGrup = findTuesdaysAndThursdaysInMonth(2024, month);
      const dataGrup2 = [];
      for (const day of dataGrup) {
        dataGrup2.push({
          ...classData,
          acountStudent: 0,
          NameClassId: number,
          startDay: day.day,
          endDay: day.day,
          uniqueValue: `${day.day.slice(0,7)}-${classData.startHour}-${classData.endHour}`
        });
      }
      setGrupal(dataGrup2);
    } else {
      setGrupal([
        {
          ...classData,
          acountStudent: 0,
          NameClassId: number,
          uniqueValue: ''
        },
      ]);
    }
  };

  const handleDataSelect = (event) => {
    setMonth(Number(event.startStr.slice(6, 7)));
    setClassData({
      startDay: event.startStr.slice(0, 10),
      endDay: event.endStr.slice(0, 10),
      startHour: event.startStr.slice(11, 19),
      endHour: event.endStr.slice(11, 19),
    });
    setOpenModallAddClass(true);
  };

  return (
    <div className="p-10">
      <FullCalendar
        ref={calendarRef}
        firstDay={1}
        allDaySlot={false}
        locale="es"
        slotMinTime="16:00:00"
        slotMaxTime="22:00:00"
        expandRows
        selectable
        initialView="timeGridWeek"
        slotDuration="01:00:00"
        slotLabelInterval="01:00:00"
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        select={handleDataSelect}
        events={classes}
        slotLabelFormat={{
          hour: "2-digit",
          minute: "2-digit",
          omitZeroMinute: false,
          meridiem: "short",
        }}
        buttonText={{
          day: "Vista día",
          week: "Vista semana",
          list: "Listar semana",
          today: "Hoy",
        }}
        headerToolbar={{
          left: "title",
          right: "timeGridWeek,timeGridDay,listWeek prev next",
        }}
        views={{
          listweek: { buttonText: "list week" },
          dayGridMonth: {
            titleFormat: { year: "numeric", month: "long", day: "numeric" },
          },
        }}
      />
      {openModalAdd && <ModalAddUser setOpenModalAdd={setOpenModalAdd} />}
      {openModallAddClass && (
        <ModalAddClass
          setOpenModallAddClass={setOpenModallAddClass}
          setDataClass={setDataClass}
          openModalOk={openModalOk}
          setModalOk={setModalOk}
          submitDataClass={submitDataClass}
        />
      )}
    </div>
  );
}
