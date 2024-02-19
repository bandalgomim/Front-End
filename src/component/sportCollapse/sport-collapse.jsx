"use client";

import { useState } from "react"
import dynamic from 'next/dynamic';
import CollapseList from "./sport-list";

/*"data": {
    "teams":[{ 
        "id": Int,
        "name": String,
        "logoUrl": String
    }],
    "leagues": [{
        "id":Int,
        "name": String,
        "logoUrl": String
    }]
}*/


const Test = dynamic(() => import('./sport-list.jsx'))

export async function getSportData(id) {
    return {
        teams: [ { id: 1, name: "T1", logoUrl:"/" } ],
        leagues: [ { id: 1, name: "L1", logoUrl: "/" } ]
    }
}

export default function SportCollapse( { sports } ) {
    const [ cachedSport, setCachedSport ] = useState([]);
    const [ test,  setTest ] = useState(null);
    
    const buttonOnClick = async (e) => {
        const sportId = e.target.dataset.spId;
        const idx = e.target.dataset.idx;
        const sportData = await getSportData(sportId);
        const newCache = cachedSport;
        newCache[idx] = sportData;
        setCachedSport(newCache);
        const newTest = <CollapseList cachedSport={ cachedSport }/>
        setTest(newTest)
    }

    const buttonList = sports.map((sport, i) => <p key={ i } className="d-inline-flex gap-1">
        <button className="btn btn-primary" type="button" data-sp-id={ sport.id } data-idx={ i }
            data-bs-toggle="collapse" data-bs-target={ `#collapse-${i}` } aria-expanded="false" aria-controls="collapse"
            onClick={ buttonOnClick }
        >
            {sport.name}
        </button>
    </p>);

    

    return <>
        {buttonList}
        {test}
    </>
}