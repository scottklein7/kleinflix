import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { IoStarSharp, IoCodeSharp, IoCodeSlashSharp, IoSearch } from 'react-icons/io5';
import axios from '../axios';


function SearchComp(props) {
  const { API_KEY, searchReq, discoverContent } = props
  const [search, setSearch] = useState('');
  const [movie, setMovie] = useState(null);
  // https://api.themoviedb.org/3/search/movie?api_key=3c73026aded75f276f28e49aaaa8cf92&language=en-US&page=1&query=batman
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
              {/* <input type="submit" name="searchBar" value={<IoSearch />} /> */}
          </form>
        </div>
      </header>

      {console.log('yooo', movie)}

      <div className='contentMainContainerSearch'>
        {movie?.map((movie) => (
          <Link to={{ pathname: `/show/${movie?.id}`, state: { movie } }}>
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
                  <button className='addToFavBtn' >
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

export default SearchComp;
