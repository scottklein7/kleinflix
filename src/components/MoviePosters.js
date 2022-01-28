import React from 'react';
import { IoStarSharp, IoAddCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom'

function MoviePosters(props) {
    const { movie, base_url, truncateOverview, sectionTitle, media } = props
    return (
        <>
            <h1 className='contentGenereHeader'>{sectionTitle}</h1>
            <div className='contentMainContainer'>
                {movie.map((movie) => (
                    <Link to={{ pathname: `/show/${movie.id}`, state: { movie, media } }}>
                        <div className="contentSecondContainer">
                            <img
                                className='contentImg'
                                src={`${base_url}${movie?.backdrop_path || movie?.poster_path}`}
                                alt={movie?.name}
                                key={movie?.id}
                            />
                            <div className='hiddenText'>
                                <div className='ratingDiv'>
                                    <img src={'http://www.userlogos.org/files/logos/jumpordie/imdb-iphone.png'} alt="imbdlogo" style={{ width: '2.6em' }} />
                                    <span style={{ fontSize: '10.5px' }}>{movie?.vote_average}<IoStarSharp /></span>
                                </div>
                                <h2 className='moviePosterTitle'>{movie?.title || movie?.original_title || movie?.original_name}</h2>
                                <p style={{ fontSize: '7.5px' }}>{truncateOverview(movie?.overview, 150)}</p>
                                <div className='addToFavDiv'>
                                    <button style={{ width: '2em', border: 'none', display: 'flex', background: 'transparent' }} >
                                        <img src={'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fcustom-icon-design%2Fflatastic-1%2F512%2Fadd-1-icon.png&f=1&nofb=1'} alt="addtolistlogo"
                                            style={{ width: '1.2em' }} />
                                    </button>
                                    <span className='addToFavSpan'>Add to favorites</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}
export default MoviePosters;
