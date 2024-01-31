"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import bootstrapPlugin from "@fullcalendar/bootstrap5"
import interactionPlugin from "@fullcalendar/interaction";
import { getCalendarConfig } from "@/config/calendar";
import CalendarModal from "./calendar-modal"
import moment from 'moment';
import CalendarList from "./calendar-list"


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
    const teams = props.teams;
    const [ modalShow, setModalShow ] = useState(false);
    const [ dateMatchSchedule, setDateMatchSchedule ] = useState([]);
    const router = useRouter();
    const validRange = resolveCalendarDateRange();
    const calendarRef = useRef();
    let events = props.events

    for(let i of events) {
        let team1, team2
        for(let j of teams) {
            if(j.id === i.teamId1) team1= j.name;
            else if(j.id === i.teamId2) team2=j.name
        }

        let title = `${team1} vs ${team2}`
        i.title =title;
        
    }

    const [ calendarEvents, setCalendarEvents ] = useState(events);
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
            events={ calendarEvents}
            eventOrder={"id"}
            eventClick={ (info) => {
                const { id } = info.event;
                router.push(`/match/${id}`);
            } }
            dateClick={ (info) => 
                { 
                    let date=moment(info.date).format('YYYY-MM-DD');
                    dateMatchScheduleSet(date);
                    setModalShow(true);
            } }
        />
        
        <CalendarModal
            show={ modalShow }
            test={ dateMatchSchedule }
            onHide={ () => setModalShow(false) }
        />
        <CalendarList match={calendarEvents} teams={props.teams} />
    </>
}
