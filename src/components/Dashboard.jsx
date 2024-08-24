import styled from "styled-components";

const DashboardContainer = styled.div`
  background-color: #fff5d8;
`;

const Dashboard = ({ selectPokemonList }) => {
  const selectPokemonCard = selectPokemonList.map((pokemon) => {
    return (
      <div key={pokemon.id}>
        <li>
          {pokemon.name}
          <br></br>
          <img src={pokemon.img} alt={pokemon.name} />
          <br></br>
          {pokemon.types}
          <br></br>
          {pokemon.description}
        </li>
      </div>
    );
  });

  console.log(selectPokemonCard);

  // console.log(pokemon);

  // console.log("selectPokemonCard", selectPokemonCard);

  // {selectPokemonCard.length === 0? (<p>선택된 포켓몬이 없습니다<div className=""></div></p>):

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
//UI는 무조건 return 하위에다가.
