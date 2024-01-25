import { notFound } from "next/navigation";
import MyCalendar from "../myCalender";
/**
 * @param params { params: { leagueId: string } }
 */
export default function LeaguePage({ params }) {
    const leagueId = Number(params.leagueId);

    // show 404 page when wrong league id
    if (isNaN(leagueId)) {
        return notFound();
    }

    return <>
        <main className="container">
            League Page: {leagueId}
        </main>
        <MyCalendar/>
    </>;
}
