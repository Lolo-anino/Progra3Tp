import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch} from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Index from './components/Index';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>





  );
}

export default App;
