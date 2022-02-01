import { React, useState } from 'react';
import YouTube from 'react-youtube';

import { IoPlay, IoClose } from 'react-icons/io5';


function Trailer({ trailerId }) {
    const [play, setPlay] = useState(false);

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
                                    showinfo: 0,

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
