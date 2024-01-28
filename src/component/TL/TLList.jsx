"use client"

import Link from "next/link";
import Image from "next/image";

export default function TLList( { teams } ) {
    const info = "team"//teams.info
    
    let isTeam = null;

    if(info === "team") {
        isTeam = "/team/"
    }else if(info === "league") {
        isTeam = "/league/"
    }

    let TLList = []
    let collapse = []
    const content = []
    const collapseContent = [] 


    if(teams.length>10) {
        TLList = teams.slice(0, 10)
        collapse = teams.slice(10)

        for(let i of collapse) {
            let href = isTeam+i.id;
            let src = i.icon;
            let alt = i.name;
            collapseContent.push(<Link key={ i.id } href={ href } className="col">
                <Image src={ src } width={ 60 } height={ 60 } style={ { fontSize:"40px" } } alt={ alt }></Image>
                <span style={ { display:"block" } }>{alt}</span>
            </Link>);
        }

    }else {
        TLList = teams;
        
    }
   
    for(let i of TLList) {
        let href = isTeam+i.id;
        let src = i.icon;
        let alt = i.name;
        content.push(<Link key={ i.id } href={ href } className="col">
            <Image src={ src } width={ 60 } height={ 60 } style={ { fontSize:"40px" } } alt={ alt }></Image>
            <span style={ { display:"block" } }>{alt}</span>
        </Link>);
    }

    console.log(TLList)
    console.log(collapse)
    
    


    
    return(
        <>  
            <div>
                <div className="container text-center">
                    <div className="row">
                        {content}
                    </div>
                </div>
                <div className="collapse" id="TL">
                    <div className="card card-body" style={ { border: "0px", padding:"0px", paddingTop:"20px" } }>
                        <div className="container text-center">
                            <div className="row">
                                {collapseContent}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={ "#TL" } aria-expanded="false" aria-controls="collapseExample">
                    전체보기
            </button>

            
        </>
    )
    
}