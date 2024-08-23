import styled from "styled-components";

const DashboardContainer = styled.div``;

const Dashboard = ({ pokemonList, setPokemonList }) => {
  {selectPokemonCard.length === 0? (<p>선택된 포켓몬이 없습니다<div className=""></div></p>):
  const selectPokemonCard = pokemonList.map((pokemon) => 
    <li key={pokemon.id}>{pokemon.korean_name}</li>)
  }}; 

  return (
    <DashboardContainer>
      <div>
        <h1>나만의 포켓몬</h1>
        <ul>{selectPokemonCard}</ul>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
