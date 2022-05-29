import axios from 'axios';
import * as React from 'react';
import '../App.css';
import './index.css';

// https://pokeapi.co/api/v2/pokemon?limit=10000
// body.results[index].name

export default function AxiosPokemon() {
  const [pokemon, setPokemon] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const list = await axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=10000')
        .then((res) => res.data.results);
      setPokemon(list.map((elem, index) => <li key={index}>{elem.name}</li>));
    })();
  }, []);
  return (
    <main className='App App-header Align-top Align-left'>
      <ul>{pokemon}</ul>
    </main>
  );
}
