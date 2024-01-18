"use client";

export default function NavSearch() {
    return <form className="d-flex" role="search">
        <button className="btn btn-outline-success" type="submit"
            style={ {paddingRight: "9em"} }>
            <i className="bi bi-search"
                style={ {paddingRight: "0.5em"} }
            ></i>
            Search
        </button>
    </form>;
}
