import {React, useState} from 'react';
import FavoritesComp from '../../components/FavoritesComp';

function FavoriteTvShows(props) {
    const { deleteFavorites, favorites } = props
    const [media, setMedia] = useState('tv');
    const base_url = "https://image.tmdb.org/t/p/original/"

    const truncateOverview = (str, cutOffNum) => {
        return str?.length > cutOffNum ? str.slice(0, cutOffNum - 1) + '...' : str
    }


    return (
        <FavoritesComp
            deleteFavorites={deleteFavorites}
            favorites={favorites}
            media={media}
            base_url={base_url}
            truncateOverview={truncateOverview} />
    );

}

export default FavoriteTvShows;
