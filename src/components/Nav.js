import {React, useEffect, useState} from 'react'
import { Link, Switch } from 'react-router-dom'
import Typewriter from 'typewriter-effect';



function Nav() {
    const [show, handleShow] = useState(false)
    const transitionNavBar = () => {
        window.scrollY > 100 ? handleShow(true) : handleShow(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])
    
    return (
        <>
            <div className='navContainer' style={{
                height: '60px',
                background: '#000',
            }}>
                <div className='navItems' style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    padding: '10px'
                }}>
                    <Link to='/'>
                        <img src="https://user-images.githubusercontent.com/81238878/150051814-9c556143-464e-4010-aa2c-81f25a9277ce.png" alt="logo"
                            style={{
                                height: '40px',
                                cursor: 'pointer'
                            }} />
                    </Link>
        
                    <Link to='/tv' style={{textDecoration: 'none', color: '#10B174'}}>
                        TvShows
                    </Link>
                    <Link to='/favorites' style={{ textDecoration: 'none' }}>
                        <div className="favoritesNavDiv">
                            <Typewriter
                                options={{
                                    strings: ['Fav', 'Favori', 'Favorites'],
                                    autoStart: true,
                                    loop: true,
                                    cursorClassName: 'Typewriter__cursor'
                                }}
                            />
                        </div>
                    </Link>
                    <Link to='/search'>
                        <img src="data:image/png;base64,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" alt="search"
                            style={{
                                'width': '28px'
                            }} />
                    </Link>
                </div >
            </div>
        </>
    )
}

export default Nav
