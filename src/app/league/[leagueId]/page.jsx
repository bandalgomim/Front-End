import { notFound } from "next/navigation";

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
    const events = [ { id: "1", title: "test1", start: '2024-01-24' },
        { id: "2", title: "test2", start: '2024-01-24' },
        { id: "3", title: "test3", start: '2024-01-25' },
        { id: "4", title: "test4", start: '2024-01-25' },
        { id: "5", title: "test5", start: '2024-01-26' },
        { id: "6", title: "test6", start: '2024-01-26' }
    ];
    const league = { id:0, name:"LCK", icon: "/img/LCK.svg", info: "This is information 인포메이션 스펠링이 이게 맞나 알게 뭐람" };
    // show 404 page when wrong league id
    if (isNaN(leagueId)) {
        return notFound();
    }
    const teams = [
        { id:17, name:"team 00", leageId:1, sportId:1, icon: "/img/Team.svg" },
        { id:18, name:"T1", leageId:1, sportId:2, icon: "/img/t1icon.svg" },
        { id:19, name:"GenG", leageId:1, sportId:2, icon: "/img/GenGicon.svg" },
        { id:20, name:"team 03", leageId:1, sportId:2, icon: "/img/Team.svg" },
        { id:21, name:"team 04", leageId:1, sportId:2, icon: "/img/Team.svg" },
        { id:22, name:"team 05", leageId:1, sportId:2, icon: "/img/Team.svg" },
        { id:23, name:"team 06", leageId:1, sportId:2, icon: "/img/Team.svg" },
        { id:24, name:"team 07", leageId:1, sportId:2, icon: "/img/Team.svg" },
        { id:25, name:"team 08", leageId:1, sportId:2, icon: "/img/Team.svg" },
        { id:26, name:"team 09", leageId:1, sportId:2, icon: "/img/Team.svg" },
        { id:27, name:"team 10", leageId:1, sportId:2, icon: "/img/Team.svg" },
        { id:28, name:"team 11", leageId:1, sportId:2, icon: "/img/Team.svg" },
        { id:29, name:"team 12", leageId:1, sportId:2, icon: "/img/Team.svg" },
        { id:30, name:"team 13", leageId:1, sportId:2, icon: "/img/Team.svg" },
        { id:25, name:"team 14", leageId:1, sportId:2, icon: "/img/Team.svg" },
        { id:26, name:"team 15", leageId:1, sportId:2, icon: "/img/Team.svg" },
        { id:27, name:"team 16", leageId:1, sportId:2, icon: "/img/Team.svg" },
        { id:28, name:"team 17", leageId:1, sportId:2, icon: "/img/Team.svg" },
        { id:29, name:"team 18", leageId:1, sportId:2, icon: "/img/Team.svg" },
        { id:30, name:"team 19", leageId:1, sportId:2, icon: "/img/Team.svg" }
    ]
    return <>
        <main className="container">
            League Page: {leagueId}
            <div className="container">

                <div>
                    <div style={ { display:"inline-block" } }>
                        <TLIcon TL={ league }/>
                    </div>
                    <div style={ { display:"inline-block" } }>
                        <TLInfo TL={ league }/>
                    </div>
                </div>
                <div>
                    <TLList teams={ teams }/>
                </div>
                <div>
                    <CalendarCollapse events={ events }/>
                </div>
                
            </div>
        </main>
        
    </>;
}
