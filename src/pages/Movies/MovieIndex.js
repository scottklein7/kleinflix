import { React, useState } from 'react'
import Background from '../../components/Background';
import MovieContent from '../../components/Movies/MovieContent';
import movieReq from '../../MovieRequests';



function MovieIndex() {

    const [media, setMedia] = useState('movie');
    return (
        <div className='App'>
            < Background
                backGroundReq={movieReq.fetchAction}
                media={media} />
            < MovieContent />
        </div>
    )
}

export default MovieIndex
