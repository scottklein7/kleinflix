import { React, useState } from 'react';

function ShowAddToFav({ movie, createFavorite, media }) {
    const [addFavorite, setAddFavorite] = useState({
        movieID: null,
        media: null,
        backDrop: null,
        voteAvg: null,
        title: null,
        overview: null
    });

    function onClick() {
        setAddFavorite({
            movieID: movie?.id,
            media: media,
            backDrop: (movie?.backdrop_path || movie?.poster_path),
            voteAvg: movie?.vote_average,
            title: (movie?.title || movie?.original_title || movie?.original_name),
            overview: movie?.overview
        })
        createFavorite(addFavorite)
        console.log(addFavorite)
    }

    return (
        <button className='showAddToFavBtn' onClick={onClick} >
            +Favorites
        </button>
    )
}


export default ShowAddToFav;
