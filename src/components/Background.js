import React from 'react'
import { useState, useEffect } from 'react'
import axios from '../axios'
import { Link } from 'react-router-dom'

function Background({ backGroundReq, media }) {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function getBackgroundImg() {
            await axios.get(backGroundReq).then(movie => {
                const result = movie.data.results
                let randomMovie = Math.floor(Math.random() * result.length)
                setMovie(result[randomMovie])
            })
        }
        getBackgroundImg()
    }, [backGroundReq])
    console.log('backgrounddddd', movie)

    const movieImg = `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`

    const truncateOverview = (str, cutOffNum) => {
        return str?.length > cutOffNum ? str.slice(0, cutOffNum - 1) + '...' : str
    }

    return (
        <div className="mainBackgroundContainer">
            <Link to={{ pathname: `/show/${movie.id}`, state: { movie, media } }}>
                <div className="backgroundImgContainer">
                    <img src={movieImg} alt={movie.title} style={{
                        width: '100vw',
                    }} />
                </div>
                <div className="backgroundTextContainer">
                    <h1 className='backgroundMovieTitle'>{movie?.title || movie?.original_title || movie?.name}</h1>
                    <p className='backgroundMovieOverview'>{truncateOverview(movie?.overview, 300)}</p>
                </div>
            </Link>
        </div>

    )
}

export default Background
