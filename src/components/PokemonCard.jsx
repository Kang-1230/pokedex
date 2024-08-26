import styled from "styled-components";

export const PokemonCardLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 150px;
  height: 250px;
  padding: 10px;
  border: 1px solid black;
  margin: 5px;
  list-style: none;
`;

const PokeBallImg = styled.img`
  width: 100px;
  height: auto;
`;

const PokemonCard = () => {
  return (
    <PokemonCardLayout>
      <PokeBallImg
        src="https://cdn.discordapp.com/attachments/1256622588420161627/1277511152095461419/pngwing.com.png?ex=66cd6e79&is=66cc1cf9&hm=b814aca75972fc9740a0b20b2dc29fb11426ed78eb22c962530f2de5cbdcae4a&"
        alt="포켓볼"
      />
    </PokemonCardLayout>
  );
};

export default PokemonCard;
