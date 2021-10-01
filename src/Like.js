import React from 'react'
import LikedMov from './LikedMov';
import { useStateValue } from "./StateProvider";

const Like = () => {
    console.log("test:");
    const [{ LikedMovies }] = useStateValue();
    return (
        <div className="Like">
            {LikedMovies.map((item) => (
                <LikedMov
                    id={item.id}
                    poster_path={item.poster_path}
                    title={item.title}
                    vote_average={item.vote_average}
                />
            ))}
        </div>
    )
}

export default Like
