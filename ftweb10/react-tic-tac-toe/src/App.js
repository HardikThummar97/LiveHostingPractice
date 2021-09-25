import "./App.css";
import Gamebox from "./components/Gamebox";
import { useState } from "react";
import Winner from "./components/Winner";

const initialState = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function App() {
  console.log(process.env.REACT_APP_MODE);
  const [game, setGame] = useState(initialState);
  const [player, setPlayer] = useState(true);

  const handleClick = (i, j) => {
    if (game[i][j] === "") {
      // const newGame = [...game];
      const newGame = Array.from(game);
      newGame[i][j] = player ? "X" : "O";
      // console.log("newGame:", newGame);
      // console.log("initialState:", initialState);
      setGame(newGame);
      setPlayer(!player);
      var x = Winner(game);
      if (x) {
        setTimeout(() => {
          alert(
            x === 9
              ? "It's a tie ! ( *..* )"
              : `Hurray ! ${x} wins ! ( ^ _ ^ ) ! `
          );
        }, 300);
      }
    }
  };
  // console.log("refreshed")
  return (
    <div className="header">
      <h1>Tic-Tac-Toe</h1>
      <h3>{player ? "Player 1 (Put X)" : "Player 2 (Put O)"}</h3>
      <div className="row">
        <Gamebox
          className="bot-right"
          state={game[0][0]}
          onClick={() => handleClick(0, 0)}
        />
        <Gamebox
          className="bot-right"
          state={game[0][1]}
          onClick={() => handleClick(0, 1)}
        />
        <Gamebox
          className="bot"
          state={game[0][2]}
          onClick={() => handleClick(0, 2)}
        />
      </div>
      <div className="row">
        <Gamebox
          className="bot-right"
          state={game[1][0]}
          onClick={() => handleClick(1, 0)}
        />
        <Gamebox
          className="bot-right"
          state={game[1][1]}
          onClick={() => handleClick(1, 1)}
        />
        <Gamebox
          className="bot"
          state={game[1][2]}
          onClick={() => handleClick(1, 2)}
        />
      </div>
      <div className="row">
        <Gamebox
          className="right"
          state={game[2][0]}
          onClick={() => handleClick(2, 0)}
        />
        <Gamebox
          className="right"
          state={game[2][1]}
          onClick={() => handleClick(2, 1)}
        />
        <Gamebox
          className=""
          state={game[2][2]}
          onClick={() => handleClick(2, 2)}
        />
      </div>
      <button
        className="reset"
        onClick={() => {
          setGame([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ]);
          setPlayer(true);
        }}
      >
        Reset Game
      </button>
      <p>
        Developed by{" "}
        <a className="link" href="https://github.com/HardikThummar97">
          Hardik Thummar
        </a>
      </p>
    </div>
  );
}

export default App;
