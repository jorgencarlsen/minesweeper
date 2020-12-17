import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GameCell from './GameCell';
import Board from '../gameLogic/gameLogic';

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

  const generateBoard = (height = 10, width = 10, mines = 10) => {
    const board = new Board();
    board.buildBoard(height, width, mines);
    setBoard(board);
  }

  useEffect(() => {
    generateBoard();
  }, []);

  console.log(board);

  return (
  <BoardContainer board={board} rows={rows} cols={cols}>
    {board.board.map((row, i) => row.map((col, j) => <GameCell row={i} col={j} />))}
  </BoardContainer>);
}

export default GameBoard;