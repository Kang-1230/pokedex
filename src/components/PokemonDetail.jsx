import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";
import styled from "styled-components";

const DetailPageStyle = styled.div`
  width: 100%;
  height: 950px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PokemonDetail = () => {
  const [searchParams] = useSearchParams();
  const pokemonId = searchParams.get("id");

  console.log(pokemonId);
  const goback = useNavigate();
  const pokemon = MOCK_DATA.find((p) => p.id === Number(pokemonId));
  if (!pokemon) {
    return (
      <DetailPageStyle>
        <div>이 포켓몬을 아직 만나지 않았단다!</div>
        <button
          onClick={() => {
            goback(`/dex`);
          }}
        >
          뒤로 가기
        </button>
      </DetailPageStyle>
    );
  }
  return (
    <DetailPageStyle>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h2>{pokemon.korean_name}</h2>
      <p>타입: {pokemon.types.join(", ")}</p>
      <button
        onClick={() => {
          goback(`/dex`);
        }}
      >
        뒤로 가기
      </button>
    </DetailPageStyle>
  );
};
export default PokemonDetail;
