import { React, useState, useRef, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import Nav from './Nav';
import MovieIndex from '../pages/Movies/MovieIndex';
import SearchMovie from '../pages/Movies/SearchMovie';
import SearchTvShows from '../pages/Tv/SearchTvShows';
import TvIndex from '../pages/Tv/TvIndex';
import ShowContentPage from '../pages/ShowContentPage'
import FavoriteMovies from '../pages/Movies/FavoriteMovies'
import FavoriteTvShows from '../pages/Tv/FavoriteTvShows'


function Main(props) {

    const URL = 'http://localhost:3001/favorites/'
    const TVURL = 'http://localhost:3001/favorites/tvshows/'
    const [favorites, setFavorites] = useState([]);
    const [favoritesTv, setFavoritesTv] = useState([]);
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

    async function getFavoriteTvShows() {
        if (!props.user) return
        const token = await props.user.getIdToken()
        const res = await fetch(TVURL, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })

        const data = await res.json()
        setFavoritesTv(data)
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

    const deleteFavoriteTvShows = async (id) => {
        if (!props.user) return;
        const token = await props.user.getIdToken();
        await fetch(TVURL + id, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        getFavoriteTvShows();
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
                <SearchMovie createFavorite={createFavorite} />
            </Route>

            <Route path='/search/tvshows'>
                <SearchTvShows createFavorite={createFavorite} />
            </Route>

            <Route exact path='/favorites'>
                <FavoriteMovies
                    user={props.user}
                    deleteFavorites={deleteFavorites}
                    favorites={favorites}
                />
            </Route>

            <Route path='/favorites/tvshows'>
                <FavoriteTvShows
                    user={props.user}
                    deleteFavorites={deleteFavoriteTvShows}
                    favorites={favoritesTv}
                />
            </Route>

        </>
    );
}

export default Main;
