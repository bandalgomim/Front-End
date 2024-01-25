import { notFound } from "next/navigation";


import Calendar from "@/component/calendar/calendar";

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
    const events = [];

    // show 404 page when wrong league id
    if (isNaN(leagueId)) {
        return notFound();
    }

    return <>
        <main className="container">
            League Page: {leagueId}
            <div className="container">
                <Calendar events={ events }/>
            </div>
        </main>
        
    </>;
}
