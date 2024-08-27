import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeStyle = styled.div`
  width: 100%;
  height: 950px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PokeLogo = styled.img`
  width: 50%;
  height: auto;
  gap: 10px;
`;

const GoToPokedex = styled.button`
  width: 200px;
  height: auto;
  padding: 10px;
  font-size: large;
  border-radius: 8px;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeStyle>
      <PokeLogo
        src="https://cdn.discordapp.com/attachments/1256622588420161627/1277837465020928062/International_Pokemon_logo-.png?ex=66ce9e60&is=66cd4ce0&hm=3c53c4ba7c085d1fb3e1513d96d5e287045f371cc7fc25114ab9d6cf64ebeafb&"
        alt="포켓몬 로고"
      />
      <GoToPokedex
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬 도감 시작하기
      </GoToPokedex>
    </HomeStyle>
  );
};

export default Home;
