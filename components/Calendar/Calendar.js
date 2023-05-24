"use client";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

function Calendar() {
    const [events, setEvents] = useState([]);
    

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[
        {  title: 'The Title',
        start: '2023-05-05'  },
        { title: "event 2", date: "2019-05-05" },
      ]}
    />
  );
}

export default Calendar;
