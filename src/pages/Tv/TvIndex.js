import React from 'react';
import TvContent from '../../components/Tv/TvContent';
import Background from '../../components/Background';
import movieReq from '../../MovieRequests';

function TvIndex() {
    return (
        <div className='App'>
            < Background
                backGroundReq={movieReq.fetchTvDiscover} />
            < TvContent />
        </div>
    )
}

export default TvIndex;
