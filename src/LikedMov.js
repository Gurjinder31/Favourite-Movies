import React from 'react'

import { useStateValue } from "./StateProvider";

const IMG_API = "https://image.tmdb.org/t/p/w1280"


const LikedMov = ({ id, title, poster_path, overview, vote_average }) => {

    const [{ LikedMovies }] = useStateValue();
    console.log("LikedMovies:11");
    console.log(LikedMovies);
    return (
        <div className="LikedMov">
            <img src={IMG_API + poster_path} alt={title} />
            <div className="LikedMov__info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>

        </div >
    )
}

export default LikedMov
