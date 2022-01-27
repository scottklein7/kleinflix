import './App.css';
import { Route, Switch } from 'react-router-dom'
import Index from './pages/Index';
import ShowMovie from './pages/ShowMovie';
import Nav from './components/Nav'
import Search from './pages/Search';

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
      <Route>
        <Search />
      </Route>

    </div>
  );
}

export default App;
