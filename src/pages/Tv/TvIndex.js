import {React, useState} from 'react';
import TvContent from '../../components/Tv/TvContent';
import Background from '../../components/Background';
import movieReq from '../../MovieRequests';

function TvIndex() {
    const [media, setMedia] = useState('tv');
    return (
        <div className='App'>
            < Background
                backGroundReq={movieReq.fetchTvDiscover}
                media={media} />
            < TvContent />
        </div>
    )
}

export default TvIndex;
