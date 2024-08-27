import { createContext, useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

export const GlobalContext = createContext();

const Dex = () => {
  const [selectPokemonList, setSelectPokemonList] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  return (
    <GlobalContext.Provider
      value={{
        selectPokemonList,
        setSelectPokemonList,
        MOCK_DATA,
      }}
    >
      <Dashboard />
      <PokemonList />
    </GlobalContext.Provider>
  );
};

export default Dex;
