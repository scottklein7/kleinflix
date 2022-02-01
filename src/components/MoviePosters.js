import React from 'react';
import { IoStarSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom'
import AddToFavorites from './AddToFavorites';

function MoviePosters(props) {

    const { movie, base_url, truncateOverview, sectionTitle, media, createFavorite } = props

    return (
        <>
            <h1 className='contentGenereHeader'>{sectionTitle}</h1>
            <div className='contentMainContainer'>
                {movie.map((movie) => (
                    <Link key={movie.id} to={{ pathname: `/show/${movie.id}`, state: { media } }}>
                        <div className="contentSecondContainer" key={movie.id}>
                            <img
                                className='contentImg'
                                src={`${base_url}${movie?.backdrop_path || movie?.poster_path}`}
                                alt={movie?.id}
                            />
                            <div className='hiddenText'>
                                <div className='ratingDiv'>
                                    <img src={'http://www.userlogos.org/files/logos/jumpordie/imdb-iphone.png'} alt="imbdlogo" style={{ width: '2.6em' }} />
                                    <span style={{ fontSize: '10.5px' }}>{movie?.vote_average}<IoStarSharp /></span>
                                </div>
                                <h2 className='moviePosterTitle'>{movie?.title || movie?.original_title || movie?.original_name}</h2>
                                <p style={{ fontSize: '7.5px' }}>{truncateOverview(movie?.overview, 150)}</p>
                                <div className='addToFavDiv'>
                                    <AddToFavorites movie={movie} media={media} createFavorite={createFavorite} />
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
