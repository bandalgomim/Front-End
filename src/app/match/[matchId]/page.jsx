import { notFound } from "next/navigation";

/**
 * @param params {params: {matchId: string}}
 */
export default function MatchPage({ params }) {
    const matchId = Number(params.matchId);

    // show 404 page when wrong league id
    if (isNaN(matchId)) {
        return notFound();
    }

    return <>
        <main>
            Match Page: {matchId}
        </main>
    </>;
}
