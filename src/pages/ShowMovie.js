import { React, useEffect, useState } from 'react';
import axios from '../axios';


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

  const base_url = "https://image.tmdb.org/t/p/original/"

  return (
    <div className='backgroundDiv' style={{ color: '#10B174', background: `url(${base_url}${movie?.backdrop_path || movie?.poster_path})`}}>
      {/* <img className='showPageBackgroundImg' src={`${base_url}${movie?.backdrop_path || movie?.poster_path}`} alt={movie?.id} /> */}
      <div className="showMovieMainDiv">
        <div className="showMovieSecondPosterDiv">
          <img src={`${base_url}${movie?.backdrop_path || movie?.poster_path}`} alt={movie?.id} width='565px' height='500px' />
        </div>
        <div className="showMovieInfoDiv">
          <h1>{movie?.title || movie?.original_title || movie?.original_name}</h1>
          <p>{movie?.overview}</p>
          <span> {movie?.vote_average}</span><br />
          <span>Runtime: {movie?.runtime}</span><br />
          <span>Revenue: ${movie?.revenue}</span><br />
          <span>Release Date: {movie?.release_date}</span><br />

        </div>
      </div>

    </div>
  )

}

export default ShowMovie;

