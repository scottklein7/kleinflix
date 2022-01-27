import './App.css';
import { Route, Switch } from 'react-router-dom'
import Index from './pages/Index';
import ShowMovie from './pages/ShowMovie';
import Nav from './components/Nav'
import Search from './pages/Search';
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
        <Search />
      </Route>
      <Route path='/search/tvshows'>
        <SearchTvShows />
      </Route>


    </div>
  );
}

export default App;
