import { React, useState } from 'react'
import Background from '../../components/Background';
import MovieContent from '../../components/Movies/MovieContent';
import movieReq from '../../MovieRequests';



function MovieIndex({ createFavorite }) {

    const [media] = useState('movie');
    return (
        <div className='App'>
            < Background
                backGroundReq={movieReq.fetchAction}
                media={media} />
            < MovieContent
                createFavorite={createFavorite} />
        </div>
    )
}

export default MovieIndex
