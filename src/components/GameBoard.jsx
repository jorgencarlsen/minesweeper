import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GameCell from './GameCell';
import { buildBoard, handleCellClick } from '../gameLogic/gameLogic';

const printFr = (num) => {
  let outputString = '';
  for (let i = 0; i < num; i++) {
    outputString += '1fr ';
  }
  return outputString;
}

const BoardContainer = styled.div`
  width: 600px;
  height: 600px;
  display: grid;
  grid-template-columns: ${({cols}) => printFr(cols)};
  grid-template-rows: ${({rows}) => printFr(rows)};
`;

const GameBoard = ({ rows, cols }) => {
  const [board, setBoard] = useState([]);

  const loseGame = () => {
    console.log('You lost the game!');
  }

  const handleClick = (e, board, row, col) => {
    e.stopPropagation();
    if (board[row][col].mine) {
      loseGame();
    } else {
      setBoard(handleCellClick([...board], row, col));
    }
  }

  useEffect(() => {
    setBoard(buildBoard(10, 10, 10));
  }, []);

  console.log({board});

  return (
  <BoardContainer rows={rows} cols={cols}>
    {board.map((row, i) => row.map((col, j) => (
      <GameCell
        key={`${i}, ${j}`}
        row={i}
        col={j}
        board={board}
        handleClick={handleClick}
      />)
    ))}
  </BoardContainer>);
}

export default GameBoard;