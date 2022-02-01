import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { IoStarSharp, IoCodeSharp, IoCodeSlashSharp } from 'react-icons/io5';
import axios from '../axios';


function SearchComp(props) {
  const { media, searchReq, discoverContent } = props
  const [search, setSearch] = useState('');
  const [movie, setMovie] = useState(null);
  const base_url = "https://image.tmdb.org/t/p/original/"

  useEffect(() => {
    async function handleSearchChange() {
      try {
        const res = await axios.get(`${discoverContent}`)
        setMovie(res.data.results)
      } catch {
        throw Error('wait')
      }
    }
    handleSearchChange()
    console.log(movie)
  }, []);


  async function handleSearchChange(evt) {
    evt.preventDefault()
    try {
      const res = await axios.get(`${searchReq}&query=${search}`)
      console.log(res.data.results)
      setMovie(res.data.results)
    } catch {
      throw Error('wait')
    }


  }

  async function handleSumbit(evt) {
    evt.preventDefault()
    const res = await axios.get(`${searchReq}&query=${search}`)
    console.log(res.data.results, 'dattttta')
    setSearch('')
  }

  const truncateOverview = (str, cutOffNum) => {
    return str?.length > cutOffNum ? str.slice(0, cutOffNum - 1) + '...' : str

  }


  return (
    <>
      <header className='searchHeader'>
        <div className='mainSearchDiv'>
          <div className="searchLinks">
            <Link className='searchLinkTags' to={{ pathname: `/search` }} >
              <IoCodeSharp />Search Movies<IoCodeSlashSharp />
            </Link>
            <Link className='searchLinkTags' to={{ pathname: `/search/tvshows` }} >
              <IoCodeSharp />Search Tv Shows<IoCodeSlashSharp />
            </Link>
          </div>
          <form onSubmit={handleSumbit} >
            <input type="text"
              value={search.searchTerm}
              placeholder='Movie'
              onChange={handleSearchChange}
              onInput={(evt) => setSearch(evt.target.value)}
              className='searchInput' />
          </form>
        </div>
      </header>


      <div className='contentMainContainerSearch'>
        {movie?.map((movie) => (
          <Link key={movie.id} to={{ pathname: `/show/${movie.id}`, state: { movie, media } }}>
            <div className="contentSecondContainer">
              <img
                className='contentImg'
                src={`${base_url}${movie?.backdrop_path || movie?.poster_path}`}
                alt={movie?.name}
              />
              <div className='hiddenText'>
                <div className='ratingDiv'>
                  <img src={'http://www.userlogos.org/files/logos/jumpordie/imdb-iphone.png'} alt="imbdlogo" style={{ width: '2.6em' }} />
                  <span style={{ fontSize: '10.5px' }}>{movie?.vote_average}<IoStarSharp /></span>
                </div>
                <h2 className='moviePosterTitle'>{movie?.title || movie?.original_title || movie?.original_name}</h2>
                <p style={{ fontSize: '7.5px' }}>{truncateOverview(movie?.overview, 150)}</p>
                {/* <div className='addToFavDiv'>
                  <AddToFavorites movie={movie} media={media} createFavorite={createFavorite} />
                  <span className='addToFavSpan'>Add to favorites</span>
                </div> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default SearchComp;
