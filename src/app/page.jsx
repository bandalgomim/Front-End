"use client"


import MainIcons from "./main-icons";
import "./page.module.css";


const teams =[
    {id:1, name:"T1", icon:"/T1.jpg"},
    {id:2, name:"GEN.G", icon:"/logo.svg"}
]



export default function IndexPage() {

    return <>
        <main className="container">
            
            <MainIcons info="선호 팀" favThings={teams}/>
            
        </main>
    </>;
}

