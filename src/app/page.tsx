'use client'

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import {calendar, title} from "@/app/styles/index.css";
import TrainingButton from "@/app/components/TrainingButton";

type WorkDetail = {
  title: string;
  start: string;
}

const workDetails: WorkDetail[] = [{title: '三頭', start: '2024-09-08'}, {title: '二頭', start: '2024-09-08'}];

export default function Home() {


  return (
    <main>
      <h1 className={title}>HOME</h1>
      <TrainingButton/>
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
