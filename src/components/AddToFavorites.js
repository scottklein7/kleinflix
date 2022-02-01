import {React, useState} from 'react';

function AddToFavorites({movie, media, createFavorite}) {
    const id = movie.id
    const [addFavorite] = useState({
        movieID: id,
        media: media,
        backDrop: (movie?.backdrop_path || movie?.poster_path),
        voteAvg: movie?.vote_average,
        title: (movie?.title || movie?.original_title || movie?.original_name),
        overview: movie?.overview
    });


    return (
            <button className='addToFavBtn' onClick={() => createFavorite(addFavorite)} >
                <img src={'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fcustom-icon-design%2Fflatastic-1%2F512%2Fadd-1-icon.png&f=1&nofb=1'} alt="addtolistlogo"
                    style={{ width: '1.2em' }} />
            </button>
    )
}

export default AddToFavorites;
