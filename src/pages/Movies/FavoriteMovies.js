import React, { useState } from 'react';
import FavoritesComp from '../../components/FavoritesComp';


function FavoriteMovies(props) {
  const { deleteFavorites, favorites } = props
  const [media] = useState('movie');
  const base_url = "https://image.tmdb.org/t/p/original/"

  const truncateOverview = (str, cutOffNum) => {
    return str?.length > cutOffNum ? str.slice(0, cutOffNum - 1) + '...' : str
  }

  console.log('yopoo', favorites)
  return (
   <FavoritesComp 
   deleteFavorites={deleteFavorites}
   favorites={favorites}
   media={media}
   base_url={base_url}
   truncateOverview={truncateOverview} />
  );
}

export default FavoriteMovies;
