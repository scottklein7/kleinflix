import { React, useState, useEffect } from 'react';
import axios from '../axios';
import ShowCast from './ShowCast';
import Trailer from './Trailer';
import { IoStarSharp, IoPlay } from 'react-icons/io5';


export default function ShowContent(props) {
    const { backgroundUrl, posterUrl, media, id } = props

    const [movie, setMovie] = useState(null);
    const [trailerId, setTrailerId] = useState(null);

    const networkUrl = 'https://image.tmdb.org/t/p/w92'
    const API_KEY = process.env.REACT_APP_API_KEY


    useEffect(() => {
        async function getMovie() {
            const res = await axios.get(`${media}/${id}?api_key=${API_KEY}&append_to_response=videos,credits`)
            const trailerData = res.data
            setMovie(trailerData)
            if (trailerData.videos && trailerData.videos.results) {
                const trailer = trailerData.videos.results.find(vid => vid.name === ("Official Trailer"))
                setTrailerId(trailer ? trailer : trailerData.videos.results[0])
            }
        }
        getMovie()
    }, []);



    const truncateOverview = (str, cutOffNum) => {
        return str?.length > cutOffNum ? str.slice(0, cutOffNum - 1) + '...' : str
    }

    return (
        <div className='backgroundDiv' style={{ color: '#10B174', background: `url(${backgroundUrl}${movie?.backdrop_path})` }}>
            {media === 'movie' ?
                <>
                    <Trailer
                        movie={movie}
                        trailerId={trailerId}
                    />
                    <div className="showMovieMainDiv">
                        <div className='showMoviePosterDiv'>
                            <img className="showMovieSecondPosterImg" src={`${posterUrl}${movie?.poster_path}`} alt={movie?.id} />
                        </div>
                        <div className="showMovieInfoDiv">
                            <div className="showMovieRatingDiv">
                                <img src="http://www.userlogos.org/files/logos/jumpordie/imdb-iphone.png" alt="imbdrating" style={{ width: '4.6em' }} />
                                <span>{movie?.vote_average}<IoStarSharp style={{ color: 'gold' }} /></span><br />
                            </div>
                            <h1>{movie?.title || movie?.original_title || movie?.original_name}</h1><br />
                            <div className="showMovieOverview">
                                <p className='showMovieOverviewP'>{movie?.overview}</p>
                            </div><br />
                            <span><b>Runtime</b>: {movie?.runtime} Minutes</span><br />
                            <span><b>Revenue</b>: ${movie?.revenue}</span><br />
                            <span><b>Release Date</b>: {movie?.release_date}</span><br />
                            <div className="showCastMainDiv">
                                <ShowCast
                                    movie={movie}
                                />
                            </div>
                        </div>

                    </div>
                </> :

                <>
                    <Trailer
                        movie={movie}
                        trailerId={trailerId}
                    />
                    <div className="showMovieMainDiv">
                        <div>
                            <img className="showMovieSecondPosterImg" src={`${posterUrl}${movie?.poster_path}`} alt={movie?.id} />
                        </div>
                        <div className="showMovieInfoDiv">
                            <div className="showMovieRatingDiv">
                                <img src="http://www.userlogos.org/files/logos/jumpordie/imdb-iphone.png" alt="imbdrating" style={{ width: '4.6em' }} />
                                <span>{movie?.vote_average}<IoStarSharp style={{ color: 'gold' }} /></span><br />
                            </div>
                            <h1>{movie?.title || movie?.original_title || movie?.original_name}</h1><br />
                            <p style={{ fontSize: '11px' }}>{movie?.overview}</p><br />
                            <span><b>Episode Runtime</b>: {movie?.episode_run_time} Minutes</span><br />
                            <span><b>Season(s)</b>: {movie?.number_of_seasons || movie?.season_number}</span><br />
                            <span><b>Episode(s)</b>: {movie?.number_of_episodes || movie?.season_number}</span><br />
                            <span><b>Air Date</b>: {movie?.first_air_date}</span><br />
                            <span><b>Next Episode To Air</b>: {movie?.next_episode_to_air?.air_date}</span><br />
                            <div className="showMovieNetworkDiv">
                                <span><b>Available On</b>: {movie?.networks[0].name}</span>
                                <img className='networkLogo' src={`${networkUrl}/${movie?.networks[0].logo_path}`} alt="networkLogo" />
                            </div><br />
                            <div className="showCastMainDiv">
                                <ShowCast
                                    movie={movie}
                                />
                            </div>
                        </div>

                    </div>
                </>
            }
        </div >
    )

}

