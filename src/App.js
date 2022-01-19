import logo from './logo.svg';
import './App.css';
import Background from './components/Background';
import Nav from './components/Nav';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      < Nav />
      < Background />
      < Content />
    </div>
  );
}

export default App;
