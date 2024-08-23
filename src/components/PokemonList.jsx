import React from "react";

const PokemonList = ({ MOCK_DATA }) => {
  const pokemonList = MOCK_DATA.map(() => {
    <div>
      {MOCK_DATA.img_url}
      <h3>{MOCK_DATA.korean_name}</h3>
      <h4>{MOCK_DATA.type}</h4>
      <h4>{MOCK_DATA.description}</h4>
    </div>;
  });

  return <div>{pokemonList}</div>;
};

export default PokemonList;
