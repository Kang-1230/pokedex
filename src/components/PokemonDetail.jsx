import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";

const PokemonDetail = () => {
  const [searchParams] = useSearchParams();
  const pokemonId = searchParams.get("id");

  console.log(pokemonId);
  const goback = useNavigate();
  const pokemon = MOCK_DATA.find((p) => p.id === Number(pokemonId));
  if (!pokemon) {
    return (
      <>
        <div>이 포켓몬을 아직 만나지 않았단다!</div>
        <button
          onClick={() => {
            goback(`/dex`);
          }}
        >
          뒤로 가기
        </button>
      </>
    );
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
