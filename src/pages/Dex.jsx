import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

const Dex = () => {
  const [pokemonList, setPokemonList] = useState([]);

  return (
    <div>
      <Dashboard pokemonList={pokemonList} setPokemonList={setPokemonList} />
      <PokemonList mockdata={MOCK_DATA} />
    </div>
  );
};

export default Dex;
