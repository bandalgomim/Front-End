import { notFound } from "next/navigation";
import { getLeaguePage } from "@/component/temp-database";
import CalendarCollapse from "@/component/TL/calendar/calendar-collapse";
import TLIcon from "@/component/TL/TLIcon";
import TLInfo from "@/component/TL/TLInfo";
import TLList from "@/component/TL/TLList";

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
    
    
    // show 404 page when wrong league id
    if (isNaN(leagueId)) {
        return notFound();
    }
    
    const info = getLeaguePage(leagueId)


    return <>
        <main className="container">
            League Page: {leagueId}
        </main>
        <div className="container">
            <div>
                <div style={ { display:"inline-block" } }>
                    <TLIcon TL={ info.league }/>
                </div>
                <div style={ { display:"inline-block" } }>
                    <TLInfo TL={ info.league }/>
                </div>
            </div>
            <div>
                <TLList TL ={ info.teams }/>
            </div>
            <div>
                <CalendarCollapse events={ info.match } teams={info.teams}/>
            </div>
        </div>
    </>;
}
