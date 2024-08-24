import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

const Dex = () => {
  const [selectPokemonList, setSelectPokemonList] = useState([]);

  // console.log(MOCK_DATA);
  return (
    <div>
      <Dashboard selectPokemonList={selectPokemonList} />
      <PokemonList
        MOCK_DATA={MOCK_DATA}
        selectPokemonList={selectPokemonList}
        setSelectPokemonList={setSelectPokemonList}
      />
    </div>
  );
};

export default Dex;
