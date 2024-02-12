import IconList from "@/component/iconList/icon-list"
import { useState } from "react"

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

export default function SportCollapse( { data } ) {

    const [ sportList, setSport ] = useState(data) 
    const buttonList = [];
    const collapseList = []

    for(let i = 0; i<sportList.length; i++) {
        let target = "collapseExample"+i;
        buttonList.push(
            <p key={ i } className="d-inline-flex gap-1">
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={ "#"+target } aria-expanded="false" aria-controls="collapseExample">
                    {data.name}
                </button>
            </p>
        )

        collapseList.push(
            <div key={ i } className="collapse" id={ target }>
                <div className="card card-body">
                    <IconList tag="소속 리그" info="league" TLList={ leagues }/>
                    <IconList tag="소속 팀" info="team" TLList={ teams }/>
                    
                </div>
            </div>
        )
    }

    return <>
        {buttonList}
        {collapseList}
        
        
    </>
}