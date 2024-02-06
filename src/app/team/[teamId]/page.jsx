import { notFound } from "next/navigation";
import { getTeamPage } from "@/component/temp-database";
import CalendarCollapse from "@/component/TL/calendar/calendar-collapse";
import TLIcon from "@/component/TL/TLLogo";
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

    /*
    	"data": {
		"id": Int,
        "teamName": String,
		"information": String,
		"logoUrl": String,
		"leagues": [{
				"id": Int,
				"name": string,
				"logoUrl": String
		}],
		"matches": [{
			"id": Int,
			"homeTeamName": String,
			"awayTeamName": String,
			"matchDate": DateTime,
			"homeTeamScore": Int,
            "awayTeamScore": Int,
			"homeTeamLogoUrl": String,
            "awayTeamLogoUrl": String,
			"matchStatus": String,
		}],					
	}
    */
    
    const info = getTeamPage(teamId)

    return <>
        <main className="container">
            Team Page: {teamId}
        </main>
        <div className="container">
            <div>
                <div style={ { display:"inline-block" } }>
                    <TLIcon name={ data.teamName } icon={ data.logoUrl }/>
                </div>
                <div style={ { display:"inline-block" } }>
                    <TLInfo information={ data.information }/>
                </div>
            </div>
            <div>
                <TLList TL ={ data.leagues }/>
            </div>
            <div>
                <CalendarCollapse matches={ data.matchs }/>
            </div>
        </div>
    </>;
}
