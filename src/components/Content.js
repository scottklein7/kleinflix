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
    const [showOverview, setShowOverview] = useState(false);

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

    const truncateOverview = (str, cutOffNum) => {
        return str?.length > cutOffNum ? str.slice(0, cutOffNum - 1) + '...read more' : str
    }



    return (
        <>
            <h1 style={{ color: 'white', paddingTop: '20px', paddingBottom: '15px', marginLeft: '15px' }}>Trending Now</h1>
            <div className='contentMainContainer'>
                {trending.map((trending) => (
                    <div className="contentSecondContainer">
                        <img
                            src={`${base_url}${trending.backdrop_path || trending.poster_path}`}
                            alt={trending.name}
                            key={trending.id}
                            style={{
                                maxHeight: '300px',
                                width: '320px',
                                marginLeft: '15px'
                            }} />

                    </div>
                ))}
            </div>

            <h1 style={{ color: 'white' }}>Thrillers</h1>
            <div className='contentMainContainer'>
                {thriller.map((thriller) => (
                    <div className="contentSecondContainer" style={{padding: '12px'}}
                    >
                        <img
                            className='contentImg'
                            src={`${base_url}${thriller.backdrop_path || thriller.poster_path}`}
                            alt={thriller.name}
                            key={thriller.id}
                            style={{
                                maxHeight: '300px',
                                width: '320px',
                            }}
                            />
                        <div className='hiddenText' style={{color: 'white'}}>
                            <span style={{marginBottom: '10px', fontSize: '12px'}}>Rating: {thriller.vote_average}</span>
                            <h3 style={{ fontSize: '14px' }}>{thriller?.title || thriller?.original_title}</h3>
                            <p style={{ fontSize: '12px' }}>{truncateOverview(thriller?.overview, 200)}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h1 style={{ color: 'white', paddingTop: '20px', paddingBottom: '15px', marginLeft: '15px' }}>Action</h1>
            <div className='contentMainContainer'>
                {action.map((action) => (
                    <div className="contentSecondContainer">
                        <img
                            src={`${base_url}${action.backdrop_path || action.poster_path}`}
                            alt={action.name}
                            key={action.id}
                            style={{
                                maxHeight: '300px',
                                width: '320px',
                                marginLeft: '15px'
                            }} />

                    </div>
                ))}
            </div>

            <h1 style={{ color: 'white', paddingTop: '20px', paddingBottom: '15px', marginLeft: '15px' }}>Comedy</h1>
            <div className='contentMainContainer'>
                {comedy.map((comedy) => (
                    <div className="contentSecondContainer">
                        <img
                            src={`${base_url}${comedy.backdrop_path || comedy.poster_path}`}
                            alt={comedy.name}
                            key={comedy.id}
                            style={{
                                maxHeight: '300px',
                                width: '320px',
                                marginLeft: '15px'
                            }} />

                    </div>
                ))}
            </div>

            <h1 style={{ color: 'white', paddingTop: '20px', paddingBottom: '15px', marginLeft: '15px' }}>War</h1>
            <div className='contentMainContainer'>
                {war.map((war) => (
                    <div className="contentSecondContainer">
                        <img
                            src={`${base_url}${war.backdrop_path || war.poster_path}`}
                            alt={war.name}
                            key={war.id}
                            style={{
                                maxHeight: '300px',
                                width: '320px',
                                marginLeft: '15px'
                            }} />

                    </div>
                ))}
            </div>

            <h1 style={{ color: 'white', paddingTop: '20px', paddingBottom: '15px', marginLeft: '15px' }}>Documentaries</h1>
            <div className='contentMainContainer'>
                {Docs.map((Docs) => (
                    <div className="contentSecondContainer">
                        <img
                            src={`${base_url}${Docs.backdrop_path || Docs.poster_path}`}
                            alt={Docs.name}
                            key={Docs.id}
                            style={{
                                maxHeight: '300px',
                                width: '320px',
                                marginLeft: '15px'
                            }} />

                    </div>
                ))}
            </div>

            <h1 style={{ color: 'white', paddingTop: '20px', paddingBottom: '15px', marginLeft: '15px' }}>Animation</h1>
            <div className='contentMainContainer'>
                {animation.map((animation) => (
                    <div className="contentSecondContainer">
                        <img
                            src={`${base_url}${animation.backdrop_path || animation.poster_path}`}
                            alt={animation.name}
                            key={animation.id}
                            style={{
                                maxHeight: '300px',
                                width: '320px',
                                marginLeft: '15px'
                            }} />

                    </div>
                ))}
            </div>

        </>
    )
}

export default Content
