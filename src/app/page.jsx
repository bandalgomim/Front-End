"use client"

import { useEffect } from "react"

import "./page.module.css";
import IconList from "@/component/iconList/icon-list";


const teams =[
    { id:0, name:"T1", icon: "/img/LCK/T1.svg" },
    { id:1, name:"GEN", icon: "/img/LCk/GEN.svg" },
    { id:2, name:"MUN", icon: "/img/manU.svg" }
]

const league = [
    { id:1, name:"LCK", icon: "/img/LCK.svg" },
    { id:2, name:"LPL", icon: "/img/LPL.webp" },
    { id:3, name:"WORDS", icon: "/img/WORDS.svg" }
]



export default function IndexPage() {

    return <>
        <main className="container">
            
            <IconList tag="선호 팀" info="team" favThings={ teams }/>
            <IconList tag="선호 리그" info="league" favThings={ league }/>
            
        </main>
    </>;
}

