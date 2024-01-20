"use client"

import Link from "next/link";

import Image from "next/image";
import { useState } from 'react';
export default function MainIcons(props) {

    const [favThings, setFavThings] = useState(props.favThings)
    const info = props.info
    let isTeam = null;

    if(info === "선호 팀") {
        isTeam = "/team/"
    }else {
        isTeam = "/league/"
    }

    //porps로 객체 리스트 받아서 리스트 인덱스만큼 col생산하고 id를 isTeam과 더해서 href에 넣어주는 함수 필요
    
    let content = [];

    
    let newList = [...favThings];
    console.log(newList)
    for(let i of newList) {
        let href = isTeam+i.id;
        let src = i.icon;
        let alt = i.name;
        content.push(<Link key={i.id} href={href} className="col">
                        <Image src={src} width={70} height={70} style={{fontSize:"40px"}} alt={alt}></Image>
                        <span style={{display:"block"}}>{alt}</span>
                    </Link>);
        console.log(content)
        
    }
    content.push(<Link key={null} href={isTeam} className="col">
                <i className="bi bi-plus-square" style={{fontSize:"40px"}}></i>
                <span style={{display:"block"}}>add</span>
              </Link>)
    


    return <>
        <div onLoad={event=>{
            event.preventDefault;
            console.log("test");
            favList;
        }}>
            {info}
        </div>

        <div >
            
        </div>

        <div className="container text-center">
            <div className="row">
                {content}
            </div>
        </div>   
    </>
}