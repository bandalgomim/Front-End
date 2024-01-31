import { notFound } from "next/navigation";
import { getTeamPage } from "@/component/temp-database";
import CalendarCollapse from "@/component/TL/calendar/calendar-collapse";
import TLIcon from "@/component/TL/TLIcon";
import TLInfo from "@/component/TL/TLInfo";
import TLList from "@/component/TL/TLList";
/**
 * @param params { params: { teamId: string } }
 */
export default function TeamPage({ params }) {
    const teamId = Number(params.teamId);
    


    // show 404 page when wrong team id
    if (isNaN(teamId)) {
        return notFound();
    }
    
    const info = getTeamPage(teamId)

    return <>
        <main className="container">
            Team Page: {teamId}
        </main>
        <div className="container">
            <div>
                <div style={ { display:"inline-block" } }>
                    <TLIcon TL={ info.teams[0] }/>
                </div>
                <div style={ { display:"inline-block" } }>
                    <TLInfo TL={ info.teams[0] }/>
                </div>
            </div>
            <div>
                <TLList TL ={ info.leagues }/>
            </div>
            <div>
                <CalendarCollapse events={ info.match } teams={info.teams}/>
            </div>
        </div>
    </>;
}
