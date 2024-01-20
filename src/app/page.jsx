"use client"

import { useEffect } from "react"

import T1 from "./t1icon.svg"
import GenG from "./GenGicon.svg"
import manU from "./manU.svg"
import Paris from "./paris.svg"
import MainIcons from "./main-icons";

import LCK from "./LCK.svg";
import EPL from "./EPL.svg";
import Ligue1 from "./리그앙.svg";


import "./page.module.css";


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



export default function IndexPage() {

    return <>
        <main className="container">
            
            <MainIcons info="선호 팀" favThings={ teams }/>
            <MainIcons info="선호 리그" favThings={ league }/>
            
        </main>
    </>;
}

