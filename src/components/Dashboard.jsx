import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { PokemonCardLayout } from "./PokemonCard";

const DashboardContainer = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  /* background-color: #fff5d8; */
  align-items: center;
  text-align: center;
`;

const ProfesserOak = styled.img`
  margin-top: 40px;
  width: 100px;
  height: auto;
`;

const PokeBallList = styled.ul`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dashboard = ({ selectPokemonList, setSelectPokemonList }) => {
  const deletePokemonCard = (pokemon) => {
    //삭제 기능
    const sameNameIndex = selectPokemonList.findIndex((c) => {
      return pokemon.korean_name === c?.korean_name;
    });
    const newdelectedPokemon = [...selectPokemonList];
    //삭제 후 null값 새로 끼워넣기
    newdelectedPokemon.splice(sameNameIndex, 1, null);
    //null 값 뒤로 가게 정렬하기
    newdelectedPokemon.sort((a, b) => (a === null) - (b === null));

    setSelectPokemonList(newdelectedPokemon);
  };

  //선택된 포켓몬 리스트 구현
  const selectPokemonCard = selectPokemonList.map((pokemon) => {
    if (pokemon) {
      return (
        <PokemonCardLayout key={pokemon.id}>
          <li>
            {pokemon.korean_name}
            <br></br>
            <img src={pokemon.img_url} alt={pokemon.name} />
            <br></br>
            {pokemon.types}
            <br></br>
            {pokemon.description}
          </li>
          {/* //삭제 버튼 */}
          <button onClick={() => deletePokemonCard(pokemon)}>삭제</button>
        </PokemonCardLayout>
      );
    } else {
      return <PokemonCard />;
    }
  });

  return (
    <DashboardContainer>
      <ProfesserOak
        src="https://cdn.discordapp.com/attachments/1256622588420161627/1277663022156091446/pngegg.png?ex=66cdfbea&is=66ccaa6a&hm=3d7cc8caee2d2bbba81ce7fbe02eeb8085bced68c6159bd6005da8026e465466&"
        alt="오박사"
      />
      <h1>
        바깥은 <br /> 혼자 돌아다니기엔 <br />
        위험하단다! <br />이 아이들 중 <br />
        하나를 데려가렴
      </h1>
      <PokeBallList>{selectPokemonCard}</PokeBallList>
    </DashboardContainer>
  );
};

export default Dashboard;
