import { notFound } from "next/navigation";

/**
 * @param params {params: {leagueId: string}}
 */
export default function LeaguePage({ params }) {
    const leagueId = Number(params.leagueId);

    // show 404 page when wrong league id
    if (isNaN(leagueId)) {
        return notFound();
    }

    return <>
        <main>
            League Page: {leagueId}
        </main>
    </>;
}
