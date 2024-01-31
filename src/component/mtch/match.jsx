import Image from "next/image";

export default function Match( { info } ) {

    const match = info.match;
    const league = info.league;
    const teams = [info.team1, info.team2]
    let score = [null, null]
    let state = null;
    if(match.state===0) {
        state = "경기 종료"
        score[0] = match.score[0];
        score[1] = match.score[1];
    }else if(match.state===1) {
        state = "경기 중"
        score[0] = match.socre[0];
        score[1] = match.score[1];
    }else {
        state = "경기 예정"
    }

    

    let content = (
        <>
            <div>
                <p>
                    {state}
                </p>
            </div>
            <div>
                <p>{score[0]}</p>
                <p>vs</p>
                <p>{score[1]}</p>
            </div>
        </>
    )
    


    
    
    return(
        <div>
            <div>{league.name}</div>
            <div>{match.start}</div>
            <div>
                <div>
                    <Image src={teams[0].icon} width={100} height={100}></Image>
                    <div>
                        {teams[0].name}
                    </div>
                </div>
                <div>
                    {content}
                </div>
                <div>
                    <div>
                        {teams[1].name}
                    </div>
                    <Image src={teams[1].icon} width={100} height={100}></Image>
                </div>
            </div>
            <div></div>
        </div>
    )

}