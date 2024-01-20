"use client"

import SportsIcons from "./sports-icons";
import T1 from "../t1icon.svg"
import GenG from "../GenGicon.svg"
import manU from "../manU.svg"
import Paris from "../paris.svg"


import LCK from "../LCK.svg";
import EPL from "../EPL.svg";
import Ligue1 from "../리그앙.svg";
const teams =[
    { id:1, name:"T1", icon:T1 },
    { id:2, name:"GEN.G", icon:GenG },
    { id:3, name:"MUN", icon:manU }/*,
    { id:4, name:"PSG", icon:Paris }*/
]

const league = [
    { id:1, name:"LCK", icon:LCK },
    { id:2, name:"EPL", icon:EPL },
    { id:3, name:"Ligue1", icon:Ligue1 }
]


export default function SportPage() {
    
    return (
        <main>
      Sport Page
            <p class="d-inline-flex gap-1">
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                    스포츠1
                </button>
            </p>
            <p class="d-inline-flex gap-1">
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                    스포츠2
                </button>
            </p>
            <p class="d-inline-flex gap-1">
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                    스포츠3
                </button>
            </p>
            <div class="collapse" id="collapseExample1">
                <div class="card card-body">
                    <SportsIcons info="소속 리그" favThings={ league }/>
                    <SportsIcons info="소속 팀" favThings={ teams }/>
                    
                </div>
            </div>
            <div class="collapse" id="collapseExample2">
                <div class="card card-body">
                    test2
                </div>
            </div>
            <div class="collapse" id="collapseExample3">
                <div class="card card-body">
                    test3
                </div>
            </div>
        </main>
    );
}
