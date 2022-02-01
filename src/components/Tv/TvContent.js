import { React, useState, useEffect } from 'react';
import axios from '../../axios'
import movieReq from '../../MovieRequests'
import MoviePosters from '../MoviePosters';


function TvContent(props) {
    const [tvDiscover, setTvDiscover] = useState([]);
    const [tvAction, settvAction] = useState([]);
    const [tvSciFi, setTvSciFi] = useState([]);
    const [tvComedy, setTvComedy] = useState([]);
    const [tvAnimation, setTvAnimation] = useState([]);
    const [mystery, setTvMystery] = useState([]);
    const [media, setMedia] = useState('tv');

    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchTv(evt) {
            try {
                const res = await Promise.all([
                    axios.get(movieReq.fetchTvDiscover),
                    axios.get(movieReq.fetchTvAction),
                    axios.get(movieReq.fetchTvSciFi),
                    axios.get(movieReq.fetchTvComedy),
                    axios.get(movieReq.fetchTvAnimation),
                    axios.get(movieReq.fetchMystery),
                ])
                const data = res.map((res) => res.data.results)
                console.log(data)


                setTvDiscover(data[0])
                settvAction(data[1])
                setTvSciFi(data[2])
                setTvComedy(data[3])
                setTvAnimation(data[4])
                setTvMystery(data[5])
                evt.preventDefault()

            } catch {
                throw Error('Promise failed')
            }
        }
        fetchTv()
    }, []);



    function truncateOverview(str, cutOffNum) {
        return str?.length > cutOffNum ? str.slice(0, cutOffNum - 1) + '...read more' : str
    }

    return (
        <>
            <MoviePosters
                movie={tvDiscover}
                sectionTitle={'Discover Tv Shows'}
                base_url={base_url}
                truncateOverview={truncateOverview}
                media={media}
                createFavorite={props.createFavorite} />

            <MoviePosters
                movie={tvAction}
                sectionTitle={'Action'}
                base_url={base_url}
                truncateOverview={truncateOverview}
                media={media}
                createFavorite={props.createFavorite} />

            <MoviePosters
                movie={tvSciFi}
                sectionTitle={'Sci-Fi'}
                base_url={base_url}
                truncateOverview={truncateOverview}
                media={media}
                createFavorite={props.createFavorite} />

            <MoviePosters
                movie={tvComedy}
                sectionTitle={'Comedy'}
                base_url={base_url}
                truncateOverview={truncateOverview}
                media={media}
                createFavorite={props.createFavorite} />

            <MoviePosters
                movie={tvAnimation}
                sectionTitle={'Animation'}
                base_url={base_url}
                truncateOverview={truncateOverview}
                media={media}
                createFavorite={props.createFavorite} />

            <MoviePosters
                movie={mystery}
                sectionTitle={'Mystery'}
                base_url={base_url}
                truncateOverview={truncateOverview}
                media={media}
                createFavorite={props.createFavorite} />
        </>
    );
}

export default TvContent;
