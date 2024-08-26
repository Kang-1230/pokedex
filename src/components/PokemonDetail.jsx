import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../mock";

const PokemonDetail = () => {
  const { id } = useParams();
  const pokemonId = Number(id);
  const goback = useNavigate();
  // 포켓몬 ID 를 쿼리스트링으로부터 받아옵시다.
  const pokemon = MOCK_DATA.find((p) => p.id === pokemonId);
  if (!pokemon) {
    return <div>이 포켓몬을 아직 만나지 않았단다!</div>;
  }
  return (
    <div>
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
    </div>
  );
};
export default PokemonDetail;
