import React from "react";

const PokemonList = ({
  MOCK_DATA,
  selectPokemonList,
  setSelectPokemonList,
}) => {
  const createPokemonList = MOCK_DATA.map((pokemon) => {
    return (
      <div key={pokemon.id}>
        <img src={pokemon.img_url} />
        <h3>{pokemon.korean_name}</h3>
        <h4>{pokemon.types}</h4>
        <h4>{pokemon.description}</h4>
        <button onClick={() => handleAddPokemonList(pokemon)}>추가</button>
      </div>
    );
  });

  const handleAddPokemonList = (pokemon) => {
    if (!selectPokemonList.find((c) => c.korean_name === pokemon.korean_name)) {
      const selectedPokemon = {
        id: new Date().getTime(),
        img: pokemon.img_url,
        name: pokemon.korean_name,
        types: pokemon.types,
        description: pokemon.description,
      };

      console.log("firstselectPokemon", selectPokemonList);
      setSelectPokemonList([...selectPokemonList, selectedPokemon]);
      console.log("secondselectPokemon", selectPokemonList);
      //selectPokemonList에 포켓몬 추가하기
    } else {
      alert("이미 존재하는 포켓몬입니다.");
    }
  };

  return <div>{createPokemonList}</div>;
};

export default PokemonList;
