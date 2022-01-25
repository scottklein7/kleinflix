import { React, useEffect, useState } from 'react';
import axios from '../axios';
import ShowContent from '../components/ShowContent';



function ShowMovie(props) {
  const id = props.match.params.id
  const mediaType = props.location.state.trending.media_type
  const API_KEY = process.env.REACT_APP_API_KEY
  const [movie, setMovie] = useState(null);


  useEffect(() => {
    async function getMovie() {
      const res = await axios.get(`${mediaType}/${id}?api_key=${API_KEY}&append_to_response=videos,credits`)
      setMovie(res.data)
    }
    getMovie()
  }, []);

  const backgroundUrl = "https://image.tmdb.org/t/p/w1280/"
  const posterUrl = "https://image.tmdb.org/t/p/w780/"

  return (
   <ShowContent 
   mediaType={mediaType}
   movie={movie}
   backgroundUrl={backgroundUrl}
   posterUrl={posterUrl}
   />
  
  )

}

export default ShowMovie;
