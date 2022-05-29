import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>React Apps Developed As Practice:</h1>
        <nav>
          <Link to='axiosPokemon'>Axios Pokemon API</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;
