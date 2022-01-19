import React, { useEffect, useState } from 'react'
import axios from '../axios'
import movieReq from '../MovieRequests'

function Content() {
    const [trending, setTrending] = useState([]);
    const [thriller, setThriller] = useState([]);
    const [action, setAction] = useState([]);
    const [comedy, setComedy] = useState([]);
    const [war, setWar] = useState([]);
    const [Docs, setDocs] = useState([]);
    const [animation, setAnimation] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchMovies() {
            try {
                const res = await Promise.all([
                    axios.get(movieReq.fetchTrending),
                    axios.get(movieReq.fetchThriller),
                    axios.get(movieReq.fetchAction),
                    axios.get(movieReq.fetchComedy),
                    axios.get(movieReq.fetchWar),
                    axios.get(movieReq.fetchDocs),
                    axios.get(movieReq.fetchAnimation),
                ])
                const data = res.map((res) => res.data.results)

                console.log(data[0], data[1], data[2], data[3], data[4], data[5], data[6])
                setTrending(data[0])
                setThriller(data[1])
                setAction(data[2])
                setComedy(data[3])
                setWar(data[4])
                setDocs(data[5])
                setAnimation(data[6])

            } catch {
                throw Error('Promise failed')
            }
        }
        fetchMovies()
    }, []);




    return (
        <div>
            {trending.map((trending) => (
                <img
                    src={`${base_url}${trending.backdrop_path}`}
                    alt={trending.name}
                    key={trending.id} />

            ))}
        </div>
    )
}

export default Content
