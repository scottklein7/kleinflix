import './App.css';
import { Route, Switch } from 'react-router-dom'
import Index from './pages/Index';
import ShowMovie from './pages/ShowMovie';
import Nav from './components/Nav'
import SearchMovie from './pages/SearchMovie';
import SearchTvShows from './pages/SearchTvShows';

function App() {
  return (
    <div className="App">
      < Nav />

      <Switch>
        <Route exact path='/' >
          <Index />
        </Route>
       <Route
          exact path="/show/:id"
          render={(routerProps) => <ShowMovie {...routerProps}
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
