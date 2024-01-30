import { useSelector } from "react-redux";
import { useGetVideoGamesQuery } from "./app/videogamesApi";
import { useNavigate } from "react-router-dom";

function App() {
  const { data, isLoading } = useGetVideoGamesQuery();
  const { games } = useSelector((state) => state.videogamesSlice);
  const navigate = useNavigate();
  console.log(games);
  return (
    <>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <button
            onClick={() => {
              navigate("/newgame");
            }}
          >
            New Game
          </button>
          {games.map((game) => {
            return (
              <div key={game.id}>
                {game.name}{" "}
                <button onClick={() => navigate(`/${game.id}`)}>
                  See More
                </button>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}

export default App;
