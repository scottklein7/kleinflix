import { React, useState, useRef, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import Nav from './Nav';
import MovieIndex from '../pages/Movies/MovieIndex';
import SearchMovie from '../pages/Movies/SearchMovie';
import SearchTvShows from '../pages/Tv/SearchTvShows';
import TvIndex from '../pages/Tv/TvIndex';
import ShowContentPage from '../pages/ShowContentPage'
import Favorites from '../pages/Favorites';


function Main(props) {

    const URL = 'http://localhost:3001/favorites/'
    const [favorites, setFavorites] = useState([]);
    const getFavoritesRef = useRef()


    async function getFavorites() {
        if (!props.user) return
        const token = await props.user.getIdToken()
        const res = await fetch(URL, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })

        const data = await res.json()
        setFavorites(data)
    }

    async function createFavorite(favorite) {
        if (!props.user) return
        const token = await props.user.getIdToken()

        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(favorite)
        })
        getFavorites()
    }

    const deleteFavorites = async (id) => {
        if (!props.user) return;
        const token = await props.user.getIdToken();
        await fetch(URL + id, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });

        getFavorites();
    };

    const handleLogout = () => {
        setFavorites([]);
    }

    useEffect(() => {
        getFavoritesRef.current = getFavorites;
    })

    useEffect(() => {
        if (props.user) {
            getFavoritesRef.current();
        } else {
            handleLogout()
        }

    }, [props.user]);

    const loading = () => {
        return <h1>Loading</h1>;
    };
    return (
        <>
            < Nav user={props.user} />

            <Switch>
                <Route exact path='/' >
                    <MovieIndex createFavorite={createFavorite} />
                </Route>

                <Route exact path='/tv' >
                    <TvIndex createFavorite={createFavorite} />
                </Route>

                <Route
                    exact path="/show/:id"
                    render={(routerProps) => <ShowContentPage
                        {...routerProps}
                        createFavorite={createFavorite}
                    />}
                />
            </Switch>

            <Route exact path='/search'>
                <SearchMovie />
            </Route>

            <Route path='/search/tvshows'>
                <SearchTvShows />
            </Route>

            <Route path='/favorites'>
                <Favorites
                    user={props.user}
                    getFavorites={getFavorites}
                    deleteFavorites={deleteFavorites}
                    favorites={favorites}
                />
            </Route>

        </>
    );
}

export default Main;
