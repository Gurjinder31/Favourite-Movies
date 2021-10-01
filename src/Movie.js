import React, { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import { useStateValue } from "./StateProvider";



const IMG_API = "https://image.tmdb.org/t/p/w1280"

const Movie = ({ id, title, poster_path, overview, vote_average }) => {

    const [{ LikedMovies }, dispatch] = useStateValue();

    var [likeActive, setLikeActive] = useState(false);
    const [dislikeActive, setDislikeActive] = useState(false);
    if (Object.keys(LikedMovies).length !== 0) {
        var isBtnLiked = LikedMovies.find(x => x.id === id);
        if (isBtnLiked) {
            likeActive = true;
        }


        // console.log(LikedMovies[0]);
    }
    const addToList = (e) => {

        // dispatch manipulate data
        // dispatch some action ino data layer
        if (!likeActive) {
            dispatch({
                type: "ADD_TO_LIST",
                item: {
                    id: id,
                    poster_path: poster_path,
                    title: title,
                    vote_average: vote_average,
                },
            });
        }
        else {
            dispatch({
                type: "REMOVE_FROM_LIST",
                id: id,
            });
        }

        console.log("done");
    };

    const removeFromList = () => {
        // remove from basket
        setDislikeActive(!dislikeActive)
        dispatch({
            type: "REMOVE_FROM_LIST",
            id: id,
        });
    };

    return (
        <div className="movie">
            <img src={IMG_API + poster_path} alt={title} />
            <div className="movie__info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
            <div className="movie_likeB">
                <ThumbUpIcon id={id} onClick={addToList} className={likeActive ? "movie__thumbsChange" : "movie__thumb"} />
                <span ><ThumbDownIcon onClick={removeFromList} className={dislikeActive === true ? "movie__dthumbsChange" : "movie__dthumb"} /></span>
            </div>
        </div >
    )
}

export default Movie
