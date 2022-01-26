import { React, useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from '../axios';
import { IoPlay, IoClose } from 'react-icons/io5';


function Trailer({ id, mediaType }) {

    const [trailerId, setTrailerId] = useState(null);
    const [play, setPlay] = useState(false);

    const API_KEY = process.env.REACT_APP_API_KEY

    useEffect(() => {
        async function getTrailer() {
            const res = await axios.get(`${mediaType}/${id}?api_key=${API_KEY}&append_to_response=videos`)
            const trailerData = res.data
            if (trailerData.videos && trailerData.videos.results) {
                const trailer = trailerData.videos.results.find(vid => vid.name === ("Official Trailer"))
                setTrailerId(trailer ? trailer : trailerData.videos.results[0])
            }
        }
        getTrailer()
    }, []);

    return (
        <div className='youtubeTrailerDiv'>
            {play ?
                <>
                    <YouTube
                        videoId={trailerId.key}
                        className={'youtubeTrailer'}
                        opts={
                            {
                                width: '100%',
                                height: '100%',
                                playerVars: {
                                    autoplay: 1,
                                    controls: 0,
                                    cc_load_policy: 0,
                                    fs: 0,
                                    iv_load_policy: 0,
                                    modestbranding: 0,
                                    rel: 0,

                                },
                            }
                        }
                    />
                    <button className='youtubeCloseBtn' onClick={() => setPlay(false)}>
                        <IoClose className='youtubeIcons' />
                    </button>
                </> :
                <div className="setPlay">
                    {trailerId ?
                        <button className='playTrailerBtn' onClick={() => setPlay(true)}><IoPlay className='youtubeIcons' /></button>
                        : 'Sorry, no trailer available'}
                </div>
            }



        </div>
    )
}

export default Trailer;
