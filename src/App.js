import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import ShoppingItem from './components/ShoppingItem';

function App() {
  const [pokeItems, setPokeItems] = useState([]);

  const apiURL = 'https://pokeapi.co/api/v2/item/';

  useEffect(() => {
    async function getPokeData() {
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        setPokeItems(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getPokeData();
  }, []);

  // --> alternative with .then notation
  // useEffect(() => {
  //   fetch(apiURL)
  //     .then((response) => response.json())
  //     .then((data) => setPokeItems(data.results));
  // }, []);

  return (
    <>
      <Header />
      <ul>
        {pokeItems.map((item) => (
          <ShoppingItem key={item.name} text={item.name} />
        ))}
      </ul>
    </>
  );
}

export default App;
