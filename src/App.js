import React, {useState, useEffect, use} from "react"
import api from './api'

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [formPokemon, setFormPokemon] = useState({
    name: '',
    type: [],
    hp: '',
    attack: '',
    weakness: '',
  });

  const fetchPokemons = async() => {
    const response = await api.get('/total_pokemons');
    setPokemons(response.data)
  };

  useEffect(() => {
    fetchPokemons(); 
  }, []);

  return (
    <div>
      <nav className="navbar ,navbar-dark bg primarys">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Pokemons
          </a>
        </div>
      </nav>
    </div>
  )
}

export default App;
