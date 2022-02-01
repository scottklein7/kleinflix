import React, { useEffect, useState } from 'react';
import axios from '../axios';
import { IoStarSharp } from 'react-icons/io5';

import AddToFavorites from '../components/AddToFavorites';
import FavoritesContent from '../components/FavoritesContent';
import RemoveFavorites from '../components/RemoveFavorites';

function Favorites(props) {
  const { deleteFavorites, favorites } = props
  const base_url = "https://image.tmdb.org/t/p/original/"

  const truncateOverview = (str, cutOffNum) => {
    return str?.length > cutOffNum ? str.slice(0, cutOffNum - 1) + '...' : str

  }

  return (
    <>
      <div className='contentMainContainerSearch'>
        {favorites.map((movie) => (
          // <Link to={{ pathname: `/show/${movie.movieID}`, state: { movie, media } }}>
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
          // </Link>

        ))}
      </div>
    </>
  );
}

export default Favorites;
