import { React, useEffect, useState } from 'react';
import axios from '../axios';
import { IoStarSharp } from 'react-icons/io5';



function ShowMovie(props) {
  const id = props.match.params.id
  const mediaType = props.location.state.trending.media_type
  const API_KEY = process.env.REACT_APP_API_KEY
  const [movie, setMovie] = useState(null);


  useEffect(() => {
    async function getMovie() {
      const res = await axios.get(`${mediaType}/${id}?api_key=${API_KEY}&append_to_response=videos`)
      setMovie(res.data)
    }
    getMovie()
  }, []);

  const backgroundUrl = "https://image.tmdb.org/t/p/w1280/"
  const posterUrl = "https://image.tmdb.org/t/p/w780/"

  return (
    <div className='backgroundDiv' style={{ color: '#10B174', background: `url(${backgroundUrl}${movie?.backdrop_path})` }}>
      {/* <img className='showPageBackgroundImg' src={`${base_url}${movie?.backdrop_path || movie?.poster_path}`} alt={movie?.id} /> */}
      <div className="showMovieMainDiv">
        <div>
          <img className="showMovieSecondPosterDiv" src={`${posterUrl}${movie?.poster_path}`} alt={movie?.id} />
        </div>
        <div className="showMovieInfoDiv">
          <div className="showMovieRatingDiv">
            <img src="http://www.userlogos.org/files/logos/jumpordie/imdb-iphone.png" alt="imbdrating" style={{ width: '4.6em' }} />
            <span>{movie?.vote_average}<IoStarSharp style={{color: 'gold'}} /></span><br />
          </div>
          <h1>{movie?.title || movie?.original_title || movie?.original_name}</h1><br />
          <p>{movie?.overview}</p><br />
          <span><b>Runtime</b>: {movie?.runtime}</span><br />
          <span><b>Revenue</b>: ${movie?.revenue}</span><br />
          <span><b>Release Date</b>: {movie?.release_date}</span><br />

        </div>
      </div>

    </div>
  )

}

export default ShowMovie;

