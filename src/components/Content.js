import React, { useEffect, useState } from 'react'
import { IoStarSharp, IoAddCircle } from 'react-icons/io5';
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

    function truncateOverview(str, cutOffNum) {
        return str?.length > cutOffNum ? str.slice(0, cutOffNum - 1) + '...read more' : str
    }

    function addToList() {
        <span>Added to list</span>
    }





    return (
        <>
            <h1 style={{ color: 'white' }}>Trending Now</h1>
            <div className='contentMainContainer'>
                {trending.map((trending) => (
                    <div className="contentSecondContainer" style={{ padding: '12px' }}
                    >
                        <img
                            className='contentImg'
                            src={`${base_url}${trending?.backdrop_path || trending?.poster_path}`}
                            alt={trending?.name}
                            key={trending?.id}
                            style={{
                                maxHeight: '300px',
                                width: '320px',
                            }}
                        />
                        <div className='hiddenText' style={{ color: 'white' }}>
                            <div className='ratingDiv' style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={'http://www.userlogos.org/files/logos/jumpordie/imdb-iphone.png'} alt="imbdlogo" style={{ width: '2.6em' }} />
                                <span style={{ fontSize: '12.5px' }}>{trending?.vote_average} <IoStarSharp /></span>
                            </div>
                            <h2 style={{ marginBottom: '10px', fontSize: '14.5px' }}>{trending?.title || trending?.original_title || trending?.original_name}</h2>
                            <p style={{ fontSize: '12px' }}>{truncateOverview(trending?.overview, 150)}</p>
                            <div style={{ display: 'flex', position: 'fixed', bottom: '10%' }}>
                                <button style={{ width: '2em', border: 'none', display: 'flex', background: 'transparent' }} >
                                    <img src={'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fcustom-icon-design%2Fflatastic-1%2F512%2Fadd-1-icon.png&f=1&nofb=1'} alt="addtolistlogo"
                                        style={{ width: '1.2em' }} />
                                </button>
                                <span style={{ fontSize: '11px', marginLeft: '3px' }}>Add to favorites</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h1 style={{ color: 'white' }}>Thrillers</h1>
            <div className='contentMainContainer'>
                {thriller.map((thriller) => (
                    <div className="contentSecondContainer" style={{ padding: '12px' }}
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
                        <div className='hiddenText' style={{ color: 'white' }}>
                            <div className='ratingDiv' style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={'http://www.userlogos.org/files/logos/jumpordie/imdb-iphone.png'} alt="imbdlogo" style={{ width: '2.6em' }} />
                                <span style={{ fontSize: '12.5px' }}>{thriller?.vote_average} <IoStarSharp /></span>
                            </div>
                            <h2 style={{ marginBottom: '10px', fontSize: '14.5px' }}>{thriller?.title || thriller?.original_title}</h2>
                            <p style={{ fontSize: '12px' }}>{truncateOverview(thriller?.overview, 150)}</p>
                            <div style={{ display: 'flex', marginTop: '8px' }}>
                                <IoAddCircle />
                                <span style={{ fontSize: '11px', marginLeft: '3px' }}>Add to favorites</span>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            <h1 style={{ color: 'white' }}>Action</h1>
            <div className='contentMainContainer'>
                {action.map((action) => (
                    <div className="contentSecondContainer" style={{ padding: '12px' }}
                    >
                        <img
                            className='contentImg'
                            src={`${base_url}${action.backdrop_path || action.poster_path}`}
                            alt={action.name}
                            key={action.id}
                            style={{
                                maxHeight: '300px',
                                width: '320px',
                            }}
                        />
                        <div className='hiddenText' style={{ color: 'white' }}>
                            <div className='ratingDiv' style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={'http://www.userlogos.org/files/logos/jumpordie/imdb-iphone.png'} alt="imbdlogo" style={{ width: '2.6em' }} />
                                <span style={{ fontSize: '12.5px' }}>{action?.vote_average} <IoStarSharp /></span>
                            </div>
                            <h2 style={{ marginBottom: '10px', fontSize: '14.5px' }}>{action?.title || action?.original_title}</h2>
                            <p style={{ fontSize: '12px' }}>{truncateOverview(action?.overview, 150)}</p>
                            <div style={{ display: 'flex', marginTop: '8px' }}>
                                <button style={{ width: '2em', border: 'none', display: 'flex', background: 'transparent' }} >
                                    <img src={'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fcustom-icon-design%2Fflatastic-1%2F512%2Fadd-1-icon.png&f=1&nofb=1'} alt="addtolistlogo"
                                        style={{ width: '1.2em' }} />
                                </button>
                                <span style={{ fontSize: '11px', marginLeft: '3px' }}>Add to favorites</span>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            <h1 style={{ color: 'white' }}>Comedy</h1>
            <div className='contentMainContainer'>
                {comedy.map((comedy) => (
                    <div className="contentSecondContainer" style={{ padding: '12px' }}
                    >
                        <img
                            className='contentImg'
                            src={`${base_url}${comedy.backdrop_path || comedy.poster_path}`}
                            alt={comedy.name}
                            key={comedy.id}
                            style={{
                                maxHeight: '300px',
                                width: '320px',
                            }}
                        />
                        <div className='hiddenText' style={{ color: 'white' }}>
                            <div className='ratingDiv' style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={'http://www.userlogos.org/files/logos/jumpordie/imdb-iphone.png'} alt="imbdlogo" style={{ width: '2.6em' }} />
                                <span style={{ fontSize: '12.5px' }}>{comedy?.vote_average} <IoStarSharp /></span>
                            </div>
                            <h2 style={{ marginBottom: '10px', fontSize: '14.5px' }}>{comedy?.title || comedy?.original_title}</h2>
                            <p style={{ fontSize: '12px' }}>{truncateOverview(comedy?.overview, 150)}</p>
                            <div style={{ display: 'flex', marginTop: '8px' }}>
                                <button style={{ width: '2em', border: 'none', display: 'flex', background: 'transparent' }} >
                                    <img src={'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fcustom-icon-design%2Fflatastic-1%2F512%2Fadd-1-icon.png&f=1&nofb=1'} alt="addtolistlogo"
                                        style={{ width: '1.2em' }} />
                                </button>
                                <span style={{ fontSize: '11px', marginLeft: '3px' }}>Add to favorites</span>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            <h1 style={{ color: 'white' }}>War</h1>
            <div className='contentMainContainer'>
                {war.map((war) => (
                    <div className="contentSecondContainer" style={{ padding: '12px' }}
                    >
                        <img
                            className='contentImg'
                            src={`${base_url}${war.backdrop_path || war.poster_path}`}
                            alt={war.name}
                            key={war.id}
                            style={{
                                maxHeight: '300px',
                                width: '320px',
                            }}
                        />
                        <div className='hiddenText' style={{ color: 'white' }}>
                            <div className='ratingDiv' style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={'http://www.userlogos.org/files/logos/jumpordie/imdb-iphone.png'} alt="imbdlogo" style={{ width: '2.6em' }} />
                                <span style={{ fontSize: '12.5px' }}>{war?.vote_average} <IoStarSharp /></span>
                            </div>
                            <h2 style={{ marginBottom: '10px', fontSize: '14.5px' }}>{war?.title || war?.original_title}</h2>
                            <p style={{ fontSize: '12px' }}>{truncateOverview(war?.overview, 150)}</p>
                            <div style={{ display: 'flex', marginTop: '8px' }}>
                                <button style={{ width: '2em', border: 'none', display: 'flex', background: 'transparent' }} >
                                    <img src={'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fcustom-icon-design%2Fflatastic-1%2F512%2Fadd-1-icon.png&f=1&nofb=1'} alt="addtolistlogo"
                                        style={{ width: '1.2em' }} />
                                </button>
                                <span style={{ fontSize: '11px', marginLeft: '3px' }}>Add to favorites</span>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            <h1 style={{ color: 'white' }}>Documentaries</h1>
            <div className='contentMainContainer'>
                {Docs.map((Docs) => (
                    <div className="contentSecondContainer" style={{ padding: '12px' }}
                    >
                        <img
                            className='contentImg'
                            src={`${base_url}${Docs.backdrop_path || Docs.poster_path}`}
                            alt={Docs.name}
                            key={Docs.id}
                            style={{
                                maxHeight: '300px',
                                width: '320px',
                            }}
                        />
                        <div className='hiddenText' style={{ color: 'white' }}>
                            <div className='ratingDiv' style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={'http://www.userlogos.org/files/logos/jumpordie/imdb-iphone.png'} alt="imbdlogo" style={{ width: '2.6em' }} />
                                <span style={{ fontSize: '12.5px' }}>{Docs?.vote_average} <IoStarSharp /></span>
                            </div>
                            <h2 style={{ marginBottom: '10px', fontSize: '14.5px' }}>{Docs?.title || Docs?.original_title}</h2>
                            <p style={{ fontSize: '12px' }}>{truncateOverview(Docs?.overview, 150)}</p>
                            <div style={{ display: 'flex', marginTop: '8px' }}>
                                <button style={{ width: '2em', border: 'none', display: 'flex', background: 'transparent' }} >
                                    <img src={'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fcustom-icon-design%2Fflatastic-1%2F512%2Fadd-1-icon.png&f=1&nofb=1'} alt="addtolistlogo"
                                        style={{ width: '1.2em' }} />
                                </button>
                                <span style={{ fontSize: '11px', marginLeft: '3px' }}>Add to favorites</span>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            <h1 style={{ color: 'white' }}>Animation</h1>
            <div className='contentMainContainer'>
                {animation.map((animation) => (
                    <div className="contentSecondContainer" style={{ padding: '12px' }}
                    >
                        <img
                            className='contentImg'
                            src={`${base_url}${animation.backdrop_path || animation.poster_path}`}
                            alt={animation.name}
                            key={animation.id}
                            style={{
                                maxHeight: '300px',
                                width: '320px',
                            }}
                        />
                        <div className='hiddenText' style={{ color: 'white' }}>
                            <div className='ratingDiv' style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={'http://www.userlogos.org/files/logos/jumpordie/imdb-iphone.png'} alt="imbdlogo" style={{ width: '2.6em' }} />
                                <span style={{ fontSize: '12.5px' }}>{animation?.vote_average} <IoStarSharp /></span>
                            </div>
                            <h2 style={{ marginBottom: '2.5px', fontSize: '14.5px' }}>{animation?.title || animation?.original_title}</h2>
                            <p style={{ fontSize: '12px' }}>{truncateOverview(animation?.overview, 150)}</p>
                            <div style={{ display: 'flex', marginTop: '8px' }}>
                                <button style={{ width: '2em', border: 'none', display: 'flex', background: 'transparent' }} >
                                    <img src={'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fcustom-icon-design%2Fflatastic-1%2F512%2Fadd-1-icon.png&f=1&nofb=1'} alt="addtolistlogo"
                                        style={{ width: '1.2em' }} />
                                </button>
                                <span style={{ fontSize: '11px', marginLeft: '3px' }}>Add to favorites</span>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Content
