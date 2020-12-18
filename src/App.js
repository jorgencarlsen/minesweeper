import React, { useState } from 'react';
import { buildBoard, handleCellClick, checkForWin } from './logic/gameLogic';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import GameControls from './components/GameControls';

const AppContainer = styled.div`
  margin: 0px auto;
`;

function App() {

  const [values, setValues] = useState({
    rows: 10,
    mines: 10,
  });
  const [board, setBoard] = useState(buildBoard(10, 10, 10));
  const [gameLost, setGameLost] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const handleLoseGame = () => {
    setGameLost(true);
  }

  const handleClick = (e, board, row, col) => {
    if (board[row][col].mine) {
      handleLoseGame();
    } else {
      const newBoard = handleCellClick([...board], row, col);
      if (checkForWin(newBoard)) {
        setGameWon(true);
      }
      setBoard(newBoard);
    }
  }

  const handleGameReset = () => {
    setBoard(buildBoard(values.rows, values.rows, values.mines));
    setGameLost(false);
    setGameWon(false);
  }


  return (
    <AppContainer>
      <Header />
      <GameControls
        handleGameReset={handleGameReset}
        setValues={setValues}
        values={values}
      />
      <GameBoard
        board={board}
        handleClick={handleClick}
        handleGameReset={handleGameReset}
        gameLost={gameLost}
        gameWon={gameWon}
      />
    </AppContainer>
  );
}

export default App;
