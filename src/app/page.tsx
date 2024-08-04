'use client'

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import {calendar, title} from "@/app/index.css";

type WorkDetail = {
  title: string;
  start: string;
}

const workDetails: WorkDetail[] = [
  {title: 'chest', start: '2024-08-01'}
];

export default function Home() {
  return (
    <main>
      <h1 className={title}>HOME</h1>
      <div className={calendar}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={workDetails}
        />
      </div>
      <button>
        <h2>本日のトレーニングを追加</h2>
      </button>
    </main>
  )
}
