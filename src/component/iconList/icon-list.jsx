"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';

export default function IconList(props) {

    const tag = props.tag;
    const info = props.info
    const [ favThings, setFavThings ] = useState(props.favThings)
    
    let isTeam = null;

    if(info === "team") {
        isTeam = "/team/"
    }else if(info === "league") {
        isTeam = "/league/"
    }
    
    let content = [];
    let newList = [ ...favThings ];

    for(let i of favThings) {
        let href = isTeam+i.id;
        let src = i.icon;
        let alt = i.name;
        content.push(<Link key={ i.id } href={ href } className="col">
            <Image src={ src } width={ 60 } height={ 60 } style={ { fontSize:"40px" } } alt={ alt }></Image>
            <span style={ { display:"block" } }>{alt}</span>
        </Link>);
    }

    return <>
        <div >
            {tag}
        </div>

        <div className="container text-center">
            <div className="row">
                {content}
            </div>
        </div>   
    </>
}