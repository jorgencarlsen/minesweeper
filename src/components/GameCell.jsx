import React from 'react';
import styled from 'styled-components';

const Cell = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ board, row, col }) => board[row][col].clicked ? 'yellow' : 'blue'};
  border: 1px solid black;
`;

const GameCell = ({row, col, board, handleClick}) => {
  const boardCell = board[row][col];

  const handleCellClicked = (e) => {
    if (boardCell.clicked) return;
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