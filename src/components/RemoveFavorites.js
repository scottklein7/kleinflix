import React from 'react';

function RemoveFavorites({ id, deleteFavorites }) {


    return (
        <button className='addToFavBtn' onClick={() => deleteFavorites(id)} >
            <img src={'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fcustom-icon-design%2Fflatastic-1%2F512%2Fadd-1-icon.png&f=1&nofb=1'} alt="addtolistlogo"
                style={{ width: '1.2em' }} />
        </button>
    )
}

export default RemoveFavorites;