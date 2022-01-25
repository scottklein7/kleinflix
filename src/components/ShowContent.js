import { React } from 'react';
import { IoStarSharp } from 'react-icons/io5';
import ShowCast from './ShowCast';


export default function ShowContent(props) {
    const { mediaType, movie, backgroundUrl, posterUrl } = props

    return (
        <div className='backgroundDiv' style={{ color: '#10B174', background: `url(${backgroundUrl}${movie?.backdrop_path})` }}>
            {mediaType === 'movie' ?
                <div className="showMovieMainDiv">
                    <div>
                        <img className="showMovieSecondPosterDiv" src={`${posterUrl}${movie?.poster_path}`} alt={movie?.id} />
                    </div>
                    <div className="showMovieInfoDiv">
                        <div className="showMovieRatingDiv">
                            <img src="http://www.userlogos.org/files/logos/jumpordie/imdb-iphone.png" alt="imbdrating" style={{ width: '4.6em' }} />
                            <span>{movie?.vote_average}<IoStarSharp style={{ color: 'gold' }} /></span><br />
                        </div>
                        <h1>{movie?.title || movie?.original_title || movie?.original_name}</h1><br />
                        <p style={{ fontSize: '12px' }}>{movie?.overview}</p><br />
                        <span><b>Runtime</b>: {movie?.runtime} Minutes</span><br />
                        <span><b>Revenue</b>: ${movie?.revenue}</span><br />
                        <span><b>Release Date</b>: {movie?.release_date}</span><br />
                        <div className="showCastMainDiv">
                            <ShowCast
                                movie={movie}
                            />
                        </div>
                    </div>
                </div> :

                <div className="showMovieMainDiv">
                    <div>
                        <img className="showMovieSecondPosterDiv" src={`${posterUrl}${movie?.poster_path}`} alt={movie?.id} />
                    </div>
                    <div className="showMovieInfoDiv">
                        <div className="showMovieRatingDiv">
                            <img src="http://www.userlogos.org/files/logos/jumpordie/imdb-iphone.png" alt="imbdrating" style={{ width: '4.6em' }} />
                            <span>{movie?.vote_average}<IoStarSharp style={{ color: 'gold' }} /></span><br />
                        </div>
                        <h1>{movie?.title || movie?.original_title || movie?.original_name}</h1><br />
                        <p style={{ fontSize: '12px' }}>{movie?.overview}</p><br />
                        <span><b>Episode Runtime</b>: {movie?.episode_run_time} Minutes</span><br />
                        <span><b>Season</b>: {movie?.number_of_seasons || movie?.season_number}</span><br />
                        <span><b>Episodes</b>: {movie?.number_of_episodes || movie?.season_number}</span><br />
                        <span><b>Air Date</b>: {movie?.first_air_date}</span><br />
                        <span><b>Next Episode To Air</b>: {movie?.next_episode_to_air.air_date}</span><br />
                    </div>
                    {/* <ShowCast
                        movie={movie}
                    /> */}

                </div>
            }
        </div >
    )

}


