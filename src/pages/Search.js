import React from 'react';
import SearchComp from '../components/SearchComp';

function Search() {
    const API_KEY = process.env.REACT_APP_API_KEY
    const movieReq = `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
    const discoverMovie = `/discover/movie?api_key=${API_KEY}&language=en-US&page=1`
    return (
        <SearchComp
        movieReq={movieReq}
        API_KEY={API_KEY}
        discoverMovie={discoverMovie}
         />
  )
}

export default Search;


