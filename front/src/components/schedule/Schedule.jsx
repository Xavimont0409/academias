import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import { useState, useRef } from "react";
import { ModalAddUser } from './ModalAddUser'

export function Schedule() {
  const calendarRef = useRef(null);
  const [openModalAdd, setOpenModalAdd] = useState(false)

  const handleDataSelect = () => {
    setOpenModalAdd(true)
  }
  
  return (
    <div className='p-10'>
      <FullCalendar
        ref={calendarRef}
        firstDay={1}
        allDaySlot={false}
        locale="es"
        slotMinTime="13:00:00"
        slotMaxTime="20:00:00"
        expandRows
        selectable
        initialView="timeGridWeek"
        slotDuration="00:30:00"
        slotLabelInterval="00:30:00"
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        select={handleDataSelect}
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
          right:
            "timeGridWeek,timeGridDay,listWeek prev next",
        }}
        views={{
          listweek: { buttonText: "list week" },
          dayGridMonth: {
            titleFormat: { year: "numeric", month: "long", day: "numeric" },
          },
        }}
      />
      {
        openModalAdd && <ModalAddUser setOpenModalAdd={setOpenModalAdd} />
      }
    </div>
  );
  
}