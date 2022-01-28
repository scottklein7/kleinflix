import React from 'react';
import SearchComp from '../components/SearchComp';

function Search() {
    const API_KEY = process.env.REACT_APP_API_KEY
    const searchReq = `search/tv?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
    const discoverContent = `/discover/tv?api_key=${API_KEY}&language=en-US&page=1`
    return (
        <SearchComp
        searchReq={searchReq}
        API_KEY={API_KEY}
        discoverContent={discoverContent}
        mediaType={'tv'}
         />
  )
}

export default Search;

