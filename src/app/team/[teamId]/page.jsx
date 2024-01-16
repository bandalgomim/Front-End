import { notFound } from "next/navigation";

/**
 * @param params {params: {teamId: string}}
 */
export default function TeamPage({ params }) {
    const teamId = Number(params.teamId);

    // show 404 page when wrong team id
    if (isNaN(teamId)) {
        return notFound();
    }

    return <>
        <main>
            Team Page: {teamId}
        </main>
    </>;
}
