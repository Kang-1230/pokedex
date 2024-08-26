import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import PokemonCard from "../components/PokemonCard";

const Dex = () => {
  const [selectPokemonList, setSelectPokemonList] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [selectedPokemonCard, setSelectedPokemonCard] = useState([
    selectPokemonList.map((pokemon) => {
      if (pokemon) {
        return (
          <div key={pokemon.id}>
            <li>
              {pokemon.korean_name}
              <br></br>
              <img src={pokemon.img_url} alt={pokemon.korean_name} />
              <br></br>
              {pokemon.types}
              <br></br>
              {pokemon.description}
            </li>
            <button onClick={() => deletePokemonCard(pokemon)}>삭제</button>
          </div>
        );
      } else {
        return <PokemonCard />;
      }
    }),
  ]);

  const deletePokemonCard = () => {
    const filteredPokemon = selectPokemonList.filter((pokemon) => {
      selectPokemonList !== pokemon.korean_name;
    });
    setSelectPokemonList(filteredPokemon);
  };

  // console.log(MOCK_DATA);
  return (
    <div>
      <Dashboard
        selectPokemonList={selectPokemonList}
        setSelectPokemonList={setSelectPokemonList}
        selectedPokemonCard={selectedPokemonCard}
        setSelectedPokemonCard={setSelectedPokemonCard}
      />
      <PokemonList
        MOCK_DATA={MOCK_DATA}
        selectPokemonList={selectPokemonList}
        setSelectPokemonList={setSelectPokemonList}
      />
    </div>
  );
};

export default Dex;
