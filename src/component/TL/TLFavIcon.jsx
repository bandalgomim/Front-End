"use client"
import { useState } from "react";

export default function TLFavIcon ( {favourite} ) {
    const [fav, setFav] = useState(favourite);
    let favicon;
    if(fav === true) {
        favicon = <i className="bi bi-star-fill"></i>;
    }else {
        favicon = <i className="bi bi-star"></i>;
    }
    function changeFav() {
        if(fav === true) {
            setFav(false);
        } else {
            setFav(true);
    }
}

    return(
        <>
            <span onClick={changeFav}>
            {favicon}
            </span>
            
        </>
    )
}