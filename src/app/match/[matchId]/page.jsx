import { notFound } from "next/navigation";
import { getMatchPage } from "@/component/temp-database";
import Match from "@/component/mtch/match";
/**
 * @param params { params: { matchId: string } }
 */
export default function MatchPage({ params }) {
    const matchId = Number(params.matchId);
    const info = getMatchPage(matchId)

    

    // show 404 page when wrong league id
    if (isNaN(matchId)) {
        return notFound();
    }

    return <>
        <main className="container">
            Match Page: {matchId}
        </main>
        <Match info={info}/>
    </>;
}
