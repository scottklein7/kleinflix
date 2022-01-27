import React from 'react';

function ShowCast({ movie }) {
    const baseUrl = 'https://image.tmdb.org/t/p/w154'
    return (
        <>
            <div className="showCastImgDiv" style={{marginLeft: '0px'}}>
                <img className='showCastImg' src={`${baseUrl}${movie?.credits.cast[0].profile_path}`} alt="castImg" width={85} />
                <div className="castTextDiv">
                    <span>{movie?.credits.cast[0].name}</span><br />
                    <span>CASTED AS: {movie?.credits.cast[0].character}</span>
                </div>
            </div>
            <div className="showCastImgDiv">
                <img className='showCastImg' src={`${baseUrl}${movie?.credits.cast[1].profile_path}`} alt="castImg" width={85} />
                <div className="castTextDiv">
                    <span>{movie?.credits.cast[1].name}</span><br />
                    <span>CASTED AS: {movie?.credits.cast[1].character}</span>
                </div>
            </div>
            <div className="showCastImgDiv">
                <img className='showCastImg' src={`${baseUrl}${movie?.credits.cast[2].profile_path}`} alt="castImg" width={85} />
                <div className="castTextDiv">
                    <span>{movie?.credits.cast[2].name}</span><br />
                    <span>CASTED AS: {movie?.credits.cast[2].character}</span>
                </div>
            </div>
            <div className="showCastImgDiv">
                <img className='showCastImg' src={`${baseUrl}${movie?.credits.cast[3].profile_path}`} alt="castImg" width={85} />
                <div className="castTextDiv">
                    <span>{movie?.credits.cast[3].name}</span><br />
                    <span>CASTED AS: {movie?.credits.cast[3].character}</span>
                </div>
            </div>
        </>
    )
}

export default ShowCast;
