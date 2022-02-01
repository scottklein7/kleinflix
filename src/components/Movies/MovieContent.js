import React, { useEffect, useState } from 'react'
import Posters from '../MoviePosters';
import axios from '../../axios'
import movieReq from '../../MovieRequests'


function MovieContent({ createFavorite }) {
    const [thriller, setThriller] = useState([]);
    const [action, setAction] = useState([]);
    const [comedy, setComedy] = useState([]);
    const [war, setWar] = useState([]);
    const [Docs, setDocs] = useState([]);
    const [animation, setAnimation] = useState([]);
    const [media, setMedia] = useState('movie');

    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchMovies(evt) {
            try {
                const res = await Promise.all([
                    axios.get(movieReq.fetchThriller),
                    axios.get(movieReq.fetchAction),
                    axios.get(movieReq.fetchComedy),
                    axios.get(movieReq.fetchWar),
                    axios.get(movieReq.fetchDocs),
                    axios.get(movieReq.fetchAnimation),
                ])
                const data = res.map((res) => res.data.results)
                console.log(data)

                setThriller(data[0])
                setAction(data[1])
                setComedy(data[2])
                setWar(data[3])
                setDocs(data[4])
                setAnimation(data[5])
                evt.preventDefault()

            } catch {
                throw Error('Promise failed')
            }
        }
        fetchMovies()
    }, []);

    function truncateOverview(str, cutOffNum) {
        return str?.length > cutOffNum ? str.slice(0, cutOffNum - 1) + '...read more' : str
    }

    function addToList() {
        <span>Added to list</span>
    }

    return (
        <>
            <Posters
                movie={action}
                sectionTitle={'Action'}
                base_url={base_url}
                truncateOverview={truncateOverview}
                media={media}
                createFavorite={createFavorite} />

            <Posters
                movie={thriller}
                sectionTitle={'Thrillers'}
                base_url={base_url}
                truncateOverview={truncateOverview}
                media={media}
                createFavorite={createFavorite} />

            <Posters
                movie={comedy}
                sectionTitle={'Comedy'}
                base_url={base_url}
                truncateOverview={truncateOverview}
                media={media}
                createFavorite={createFavorite} />

            <Posters
                movie={war}
                sectionTitle={'War'}
                base_url={base_url}
                truncateOverview={truncateOverview}
                media={media}
                createFavorite={createFavorite} />

            <Posters
                movie={animation}
                sectionTitle={'Animation'}
                base_url={base_url}
                truncateOverview={truncateOverview}
                media={media}
                createFavorite={createFavorite} />

            <Posters
                movie={Docs}
                sectionTitle={'Docs'}
                base_url={base_url}
                truncateOverview={truncateOverview}
                media={media}
                createFavorite={createFavorite} />


        </>



    )
}

export default MovieContent
