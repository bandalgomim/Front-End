import IconList from "@/component/iconList/icon-list"
import { useState } from "react"

const teams =[
    { id:0, name:"T1", icon: "/img/t1icon.svg" },
    { id:1, name:"GEN.G", icon: "/img/GenGicon.svg" },
    { id:2, name:"MUN", icon: "/img/manU.svg" }
]

const league = [
    { id:0, name:"LCK", icon: "/img/LCK.svg" },
    { id:1, name:"EPL", icon: "/img/ELP.svg" },
    { id:2, name:"Ligue1", icon: "/img/리그앙.svg" }
]

const sportList = [
    { id:0, name:"축구" },
    { id:1, name:"야구" },
    { id:2, name:"LOL" }
]

const leagueList = [
    { id:0, name:"EPL", sportId:0, icon: "/img/EPL.svg" },
    { id:1, name:"Leaue1", sportId:0, icon: "/img/리그앙.svg" },
    { id:2, name:"K리그", sportId:0, icon: "/img/League.svg" },
    { id:2, name:"TempLeague", sportId:0, icon: "/img/League.svg" },
    { id:2, name:"TempLeague", sportId:0, icon: "/img/League.svg" },
    { id:2, name:"TempLeague", sportId:0, icon: "/img/League.svg" },
    { id:2, name:"TempLeague", sportId:0, icon: "/img/League.svg" },
    { id:2, name:"TempLeague", sportId:0, icon: "/img/League.svg" },
    { id:2, name:"TempLeague", sportId:0, icon: "/img/League.svg" },
    { id:3, name:"KB0", sportId:1, icon: "/img/League.svg"  },
    { id:4, name:"MLB", sportId:1, icon: "/img/League.svg"  },
    { id:5, name:"NPB", sportId:1, icon: "/img/League.svg"  },
    { id:2, name:"TempLeague", sportId:1, icon: "/img/League.svg" },
    { id:2, name:"TempLeague", sportId:1, icon: "/img/League.svg" },
    { id:2, name:"TempLeague", sportId:1, icon: "/img/League.svg" },
    { id:2, name:"TempLeague", sportId:1, icon: "/img/League.svg" },
    { id:2, name:"TempLeague", sportId:1, icon: "/img/League.svg" },
    { id:2, name:"TempLeague", sportId:1, icon: "/img/League.svg" },
    { id:6, name:"LCK", sportId:2, icon: "/img/LCK.svg" },
    { id:7, name:"LPL", sportId:2, icon: "/img/League.svg"  },
    { id:8, name:"LEC", sportId:2, icon: "/img/League.svg"  },
    { id:2, name:"TempLeague", sportId:2, icon: "/img/League.svg" },
    { id:2, name:"TempLeague", sportId:2, icon: "/img/League.svg" },
    { id:2, name:"TempLeague", sportId:2, icon: "/img/League.svg" },
    { id:2, name:"TempLeague", sportId:2, icon: "/img/League.svg" },
    { id:2, name:"TempLeague", sportId:2, icon: "/img/League.svg" },
    { id:2, name:"TempLeague", sportId:2, icon: "/img/League.svg" }
]

const teamList = [
    { id:0, name:"EPL Tema 0", leagueId:0, sportId:0, icon: "/img/manU.svg" },
    { id:1, name:"EPL Tema 1", leagueId:0, sportId:0, icon: "/img/Team.svg" },
    { id:2, name:"EPL Tema 2", leagueId:0, sportId:0, icon: "/img/Team.svg" },
    { id:3, name:"Leaue1 team 3", leagueId:1, sportId:0, icon: "/img/Team.svg" },
    { id:4, name:"Leaue1 team 4", leagueId:1, sportId:0, icon: "/img/Team.svg" },
    { id:5, name:"Leaue1 team 5", leagueId:1, sportId:0, icon: "/img/Team.svg" },
    { id:6, name:"K리그 team 6", leagueId:2, sportId:0, icon: "/img/Team.svg" },
    { id:7, name:"K리그 team 7", leagueId:2, sportId:0, icon: "/img/Team.svg" },
    { id:8, name:"K리그 team 8", leagueId:2, sportId:0, icon: "/img/Team.svg" },
    { id:9, name:"KB0 team 9", leageId:3, sportId:1, icon: "/img/Team.svg" },
    { id:10, name:"KB0 team 10", leageId:3, sportId:1, icon: "/img/Team.svg" },
    { id:11, name:"KB0 team 11", leageId:3, sportId:1, icon: "/img/Team.svg" },
    { id:12, name:"MLB team 12", leageId:4, sportId:1, icon: "/img/Team.svg" },
    { id:13, name:"MLB team 13", leageId:4, sportId:1, icon: "/img/Team.svg" },
    { id:14, name:"MLB team 14", leageId:4, sportId:1, icon: "/img/Team.svg" },
    { id:15, name:"NPB team 15", leageId:5, sportId:1, icon: "/img/Team.svg" },
    { id:16, name:"NPB team 16", leageId:5, sportId:1, icon: "/img/Team.svg" },
    { id:17, name:"NPB team 17", leageId:5, sportId:1, icon: "/img/Team.svg" },
    { id:18, name:"LCK team 18", leageId:6, sportId:2, icon: "/img/t1icon.svg" },
    { id:19, name:"LCK team 19", leageId:6, sportId:2, icon: "/img/GenGicon.svg" },
    { id:20, name:"LCK team 20", leageId:6, sportId:2, icon: "/img/Team.svg" },
    { id:21, name:"LPL team 21", leageId:7, sportId:2, icon: "/img/Team.svg" },
    { id:22, name:"LPL team 22", leageId:7, sportId:2, icon: "/img/Team.svg" },
    { id:23, name:"LPL team 23", leageId:7, sportId:2, icon: "/img/Team.svg" },
    { id:24, name:"LEC team 24", leageId:8, sportId:2, icon: "/img/Team.svg" },
    { id:25, name:"LEC team 25", leageId:8, sportId:2, icon: "/img/Team.svg" },
    { id:26, name:"LEC team 26", leageId:8, sportId:2, icon: "/img/Team.svg" }
    
]

export default function SportCollapse(props) {

    const [ sportList, setSport ] = useState(props.sportList) 
    const buttonList = [];
    const collapseList = []

    for(let i = 0; i<sportList.length; i++) {
        let target = "collapseExample"+i;
        buttonList.push(
            <p key={ i } className="d-inline-flex gap-1">
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={ "#"+target } aria-expanded="false" aria-controls="collapseExample">
                    {sportList[i].name}
                </button>
            </p>
        )

        let tempLeagueList = leagueList.filter((value) => value.sportId == i)
        let tempTeamList = teamList.filter((value) => value.sportId == i)


        collapseList.push(
            <div key={ i } className="collapse" id={ target }>
                <div className="card card-body">
                    <IconList tag="소속 리그" info="league" favThings={ tempLeagueList }/>
                    <IconList tag="소속 팀" info="team" favThings={ tempTeamList }/>
                    
                </div>
            </div>
        )
    }

    return <>
    {collapseList}
        {buttonList}
        
    </>
}