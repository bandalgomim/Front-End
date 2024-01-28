"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import bootstrapPlugin from "@fullcalendar/bootstrap5"
import interactionPlugin from "@fullcalendar/interaction";
import { getCalendarConfig } from "@/config/calendar";
import MyVerticallyCenteredModal from "./calendar-modal"
import moment from 'moment';

function resolveCalendarDateRange() {
    const { validRange } = getCalendarConfig();
    const start = new Date((new Date().valueOf()) - validRange.start);
    const end = new Date((new Date().valueOf()) + validRange.end);
    return { start, end }
}

/**
 * @typedef {{ id: string, title: string, start: string }} CalendarEvent
 * @typedef {{ events: CalendarEvent[] }} CalendarProps
 */

/**
 * @param props {CalendarProps}
 */
export default function Calendar(props) {
    const [ modalShow, setModalShow ] = useState(false);
    const [ dateMatchSchedule, setDateMatchSchedule ] = useState([]);
    const router = useRouter();
    const validRange = resolveCalendarDateRange();
    const calendarRef = useRef();
    
    const [ calendarEvents, setCalendarEvents ] = useState(props.events);
    
    function dateMatchScheduleSet(dateString) {
        setDateMatchSchedule([])
        let newCalendarEvents = [ ...calendarEvents ];
        let tempDateMatchSchedule = [];
        for(let i of newCalendarEvents) {
            if(i.start === dateString) {
                tempDateMatchSchedule.push(i)
            }
        }
        setDateMatchSchedule(tempDateMatchSchedule);
        console.log(dateMatchSchedule)
    }

    return <>
        <FullCalendar
            ref={ calendarRef }
            plugins={ [ dayGridPlugin, bootstrapPlugin, interactionPlugin ] }
            initialView="dayGridMonth"
            themeSystem="bootstrap5"
            headerToolbar={ { start: "prev", center: "title", end: "next" } }
            titleFormat={ (args) => {
                const date = args.date.marker;
                return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
            } }
            validRange={ validRange }
            events={ calendarEvents }
            eventClick={ (info) => {
                const { id } = info.event;
                router.push(`/match/${id}`);
            } }
            dateClick={ (info) => 
            // TODO: Implement Date Click Event Handler
            // (day 클릭시 부트스트랩 모달창 띄우기)
            { let date=moment(info.date).format('YYYY-MM-DD');
                dateMatchScheduleSet(date);
                
               
                
                setModalShow(true);
                
            }

            }
        />
        <MyVerticallyCenteredModal
            
            show={ modalShow }
            test={ dateMatchSchedule }
            onHide={ () => setModalShow(false) }
        />
        
    </>
}
