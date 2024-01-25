import { notFound } from "next/navigation";

import CalendarCollapse from "@/component/calendar/calendar-collapse";


async function getLeagueMatches(leagueId) {

}




/**
 * @param params { params: { leagueId: string } }
 */
export default async function LeaguePage({ params }) {
    const leagueId = Number(params.leagueId);

    const matches = await getLeagueMatches(leagueId);

    // TODO: Implement converter (match data to calendar event)
    // TODO: Implement match filter
    const events = [ { id: "1", title: "test1", start: '2024-01-24' },
    { id: "2", title: "test2", start: '2024-01-24' },
    { id: "3", title: "test3", start: '2024-01-25' },
    { id: "4", title: "test4", start: '2024-01-25' },
    { id: "5", title: "test5", start: '2024-01-26' },
    { id: "6", title: "test6", start: '2024-01-26' },
 ];

    // show 404 page when wrong league id
    if (isNaN(leagueId)) {
        return notFound();
    }

    return <>
        <main className="container">
            League Page: {leagueId}
            <div class="container">
                <CalendarCollapse events={events}/>
            </div>
        </main>
        
    </>;
}
