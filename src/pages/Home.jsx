import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬 도감 시작하기
      </button>
    </div>
  );
};

export default Home;
