'use client'

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import {addBtn, calendar, title} from "@/app/index.css";

type WorkDetail = {
  title: string;
  start: string;
}

const workDetails: WorkDetail[] = [];

export default function Home() {
  return (
    <main>
      <h1 className={title}>HOME</h1>
      <button className={addBtn}>
        <h2>本日のトレーニングを追加</h2>
      </button>
      <div className={calendar}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={workDetails}
        />
      </div>
    </main>
  )
}
