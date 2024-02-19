import IconList from "../iconList/icon-list";

export default function CollapseList( { cachedSport } ) {
    console.log(cachedSport)
    const collapseList = cachedSport.map((sport, i) => <div key={ i } className="collapse show" id={ `collapse-${i}` }>
        <div  className="card card-body">
            <IconList tag="소속 리그" info="league" TLList={ sport.leagues }/>
            <IconList tag="소속 팀" info="team" TLList={ sport.teams }/>
        </div>
    </div>);

    return <>
        {collapseList}
    </>
}