import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../pages/Dex";
import styled from "styled-components";

const PokeListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13%, auto));
  grid-gap: 8px;
  place-items: center;
`;

const PokeCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  width: 200px;
  height: 350px;
  padding: 10px;
  border: 1px solid black;
  box-shadow: 1px;
  margin: 5px;
  list-style: none;
`;

const PokemonList = () => {
  const { selectPokemonList, setSelectPokemonList, MOCK_DATA } =
    useContext(GlobalContext);

  const goToDetail = useNavigate();

  const createPokemonList = MOCK_DATA.map((pokemon) => {
    return (
      <PokeCardStyle key={pokemon.id}>
        <div onClick={() => goToDetail(`/dex/detail?id=${pokemon.id}`)}>
          <img src={pokemon.img_url} />
          <h3>{pokemon.korean_name}</h3>
          <h4>{pokemon.types}</h4>
          <h4>{pokemon.description}</h4>
        </div>
        <button
          onClick={(event) => {
            event.stopPropagation();
            handleAddPokemonList(pokemon);
          }}
        >
          추가
        </button>
      </PokeCardStyle>
    );
  });

  const handleAddPokemonList = (pokemon) => {
    const falseIndex = selectPokemonList.indexOf(null);

    //포켓몬 6마리 초과 시 alert
    if (falseIndex === -1) {
      return alert("포켓몬은 6마리까지 선택 가능하단다!");
    }

    const searchName = selectPokemonList.findIndex((c) => {
      return pokemon.korean_name === c?.korean_name;
    });
    //포켓몬 중복 선택 시 alert
    if (searchName !== -1) {
      return alert("이미 선택한 포켓몬이란다!");
    }

    const newSelectPokemonList = [...selectPokemonList];
    newSelectPokemonList.splice(falseIndex, 1, pokemon);

    setSelectPokemonList(newSelectPokemonList);
  };
  return <PokeListStyle>{createPokemonList}</PokeListStyle>;
};

export default PokemonList;
