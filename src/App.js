import './App.css';
import { Route, Switch } from 'react-router-dom'
import MovieIndex from './pages/Movies/MovieIndex';
import Nav from './components/Nav'
import SearchMovie from './pages/Movies/SearchMovie';
import SearchTvShows from './pages/Tv/SearchTvShows';
import TvIndex from './pages/Tv/TvIndex';
import ShowContentPage from './pages/ShowContentPage'

function App() {
  return (
    <div className="App">
      < Nav />

      <Switch>
        <Route exact path='/' >
          <MovieIndex />
        </Route>

        <Route exact path='/tv' >
          <TvIndex />
        </Route>

        <Route
          exact path="/show/:id"
          render={(routerProps) => <ShowContentPage {...routerProps}
          />}
        />
      </Switch>
      <Route exact path='/search'>
        <SearchMovie />
      </Route>
      <Route path='/search/tvshows'>
        <SearchTvShows />
      </Route>


    </div>
  );
}

export default App;
