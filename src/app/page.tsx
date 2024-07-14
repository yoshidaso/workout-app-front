'use client'

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import {calendar, title} from "@/app/index.css";

export default function Home() {
  return (
    <main>
      <h1 className={title}>HOME</h1>
      <div className={calendar}>
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth"/>
      </div>
      <button>
        <h2>本日のトレーニングを追加</h2>
      </button>
    </main>
  )
}
