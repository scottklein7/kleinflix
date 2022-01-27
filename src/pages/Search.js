import { React, useState } from 'react';
import axios from '../axios';

function Search() {
    const [search, setSearch] = useState('');
    // https://api.themoviedb.org/3/search/movie?api_key=3c73026aded75f276f28e49aaaa8cf92&language=en-US&page=1&query=batman

    const API_KEY = process.env.REACT_APP_API_KEY


    async function handleSearchChange(evt) {
        evt.preventDefault()
        
        const res = await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${search}`)
        console.log(res.data)


    }

    async function handleSumbit(evt) {
        evt.preventDefault()
        const res = await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${search}`)
        console.log(res.data, 'dattttta')
        setSearch('')
    }


    return (
        <div style={{ color: 'white' }}>
            <form onSubmit={handleSumbit} >
                <input type="text"
                    value={search.searchTerm}
                    placeholder='Movie'
                    onChange={handleSearchChange}
                    onInput={(evt) => setSearch(evt.target.value)} />
            </form>
        </div>
    )
}

export default Search;
