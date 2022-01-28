import { React } from 'react'
import Background from '../../components/Background';
import MovieContent from '../../components/Movies/MovieContent';
import movieReq from '../../MovieRequests';



function MovieIndex() {


    return (
        <div className='App'>
            < Background
                backGroundReq={movieReq.fetchAction} />
            < MovieContent />
        </div>
    )
}

export default MovieIndex
