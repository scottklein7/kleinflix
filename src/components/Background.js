import React from 'react'
import { useState, useEffect } from 'react'
import axios from '../axios'
import movieReq from '../MovieRequests'
import App from '../App.css'

function Background() {
    // we need to get a fetch req from one of our movieReqs
    const [background, setBackground] = useState([])

    useEffect(() => {
        async function getBackgroundImg() {
            await axios.get(movieReq.fetchTrending).then(movie => {
                const result = movie.data.results
                let randomMovie = Math.floor(Math.random() * result.length)
                setBackground(result[randomMovie])
            })
        }
        getBackgroundImg()
    }, [])

    const movieImg = `https://image.tmdb.org/t/p/original${background?.backdrop_path}`

    return (
        <div className="mainBackgroundContainer">
            <div className="backgroundImgContainer">
                <img src={movieImg} alt={background.title} style={{
                    width: '100vw'
                }} />
            </div>
            <div className="backgroundTextContainer">
                <h1 className='backgroundMovieTitle'>{background?.title || background?.original_title || background?.name}</h1>
                <p className='backgroundMovieOverview'>{background?.overview}</p>
            </div>
        </div>

    )
}

export default Background
