import React from 'react';
import styled from 'styled-components';

const Cell = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ board, row, col }) => board[row][col].clicked ? '#50ffb1' : '#006781'};
  border: 1px solid black;
  color: black;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  font-size: 60%;
`;

const GameCell = ({ row, col, board, handleClick, gameLost }) => {
  const boardCell = board[row][col];

  const handleCellClicked = (e) => {
    if (boardCell.clicked || gameLost) return;
    handleClick(e, board, row, col)
  }

  return (
    <Cell
      onClick={handleCellClicked}
      board={board}
      row={row}
      col={col}
    >
      {boardCell.clicked && `${boardCell.surroundingMines}`}
    </Cell> );
}

export default GameCell;