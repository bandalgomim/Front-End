"use client"

import { useEffect } from "react"

import "./page.module.css";
import IconList from "@/component/iconList/icon-list";


const teams =[
    { id:1, name:"T1", icon: "/img/t1icon.svg" },
    { id:2, name:"GEN.G", icon: "/img/GenGicon.svg" },
    { id:3, name:"MUN", icon: "/img/manU.svg" }
]

const league = [
    { id:1, name:"LCK", icon: "/img/LCK.svg" },
    { id:2, name:"EPL", icon: "/img/EPl.svg" },
    { id:3, name:"Ligue1", icon: "/img/리그앙.svg" }
]



export default function IndexPage() {

    return <>
        <main className="container">
            
            <IconList tag="선호 팀" info="team" fav={ true } favThings={ teams }/>
            <IconList tag="선호 리그" info="league" fav= { true } favThings={ league }/>
            
        </main>
    </>;
}

