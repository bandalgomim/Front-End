"use client"

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import Calendar from './calendar';

export default function CalendarCollapse( { events } ) {
  const [open, setOpen] = useState(false);
  const [ calendarEvents, setCalendarEvents ] = useState(events)
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        리그 일정
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
          <Calendar events={calendarEvents}/>
        </div>
      </Fade>

    </>
  );
}