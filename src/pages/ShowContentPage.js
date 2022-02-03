import { React, useEffect, useState } from 'react';
import axios from '../axios';
import ShowContent from '../components/ShowContent';

function ShowContentPage(props) {
  const id = props.match.params.id
  const media = props.location.state.media
  const API_KEY = process.env.REACT_APP_API_KEY
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      const res = await axios.get(`${media}/${id}?api_key=${API_KEY}&append_to_response=credits`)
      setMovie(res.data)
    } 
    
    getMovie()
  }, [API_KEY, id, media]);

  const backgroundUrl = "https://image.tmdb.org/t/p/w1280/"
  const posterUrl = "https://image.tmdb.org/t/p/w780/"

  console.log('this is teee', movie)
  return (
    <ShowContent
      movie={movie}
      backgroundUrl={backgroundUrl}
      posterUrl={posterUrl}
      media={media}
      id={id}
      createFavorite={props.createFavorite}
    />

  )

}

export default ShowContentPage;
