import React from 'react';
import { Link } from 'react-router-dom';
import RemoveFavorites from '../components/RemoveFavorites';
import { IoStarSharp, IoCodeSharp, IoCodeSlashSharp } from 'react-icons/io5'


function FavoritesComp(props) {
    const { deleteFavorites, favorites, media, base_url, truncateOverview } = props
    return (
        <>
            <header className='searchHeader'>
                <div className='mainSearchDiv'>
                    <div className="searchLinks">
                        <Link className='searchLinkTags' to={{ pathname: `/favorites` }} >
                            <IoCodeSharp />Movies<IoCodeSlashSharp />
                        </Link>
                        <Link className='searchLinkTags' to={{ pathname: `/favorites/tvshows` }} >
                            <IoCodeSharp />TvShows<IoCodeSlashSharp />
                        </Link>
                    </div>
                </div>
            </header>
            
            <div className='contentMainContainerSearch'>
                {favorites.map((movie) => (
                    <Link key={movie.movieID} to={{ pathname: `/show/${movie.movieID}`, state: { media } }}>
                        <div key={movie.movieID} className="contentSecondContainer">
                            <img
                                className='contentImg'
                                src={`${base_url}${movie.backDrop}`}
                                alt={movie.movieID}
                                key={movie.movieID}
                            />
                            <div className='hiddenText'>
                                <div className='ratingDiv'>
                                    <img src={'http://www.userlogos.org/files/logos/jumpordie/imdb-iphone.png'} alt="imbdlogo" style={{ width: '2.6em' }} />
                                    <span style={{ fontSize: '10.5px' }}>{movie.voteAvg}<IoStarSharp /></span>
                                </div>
                                <h2 className='moviePosterTitle'>{movie.title}</h2>
                                <p style={{ fontSize: '7.5px' }}>{truncateOverview(movie.overview, 150)}</p>
                                <div className='addToFavDiv'>
                                    <RemoveFavorites id={movie._id} deleteFavorites={deleteFavorites} />
                                    <span className='addToFavSpan'>Delete</span>
                                </div>
                            </div>
                        </div>
                    </Link>

                ))}
            </div>
        </>
    )
}

export default FavoritesComp;
