import React from 'react';
import styled from 'styled-components';

const Cell = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
  border: 1px solid black;
`;

const GameCell = ({row, col, handleCellClick}) => {

  const handleClick = () => {
    handleCellClick(row, col);
  }

  return ( <Cell onClick={handleClick} /> );
}

export default GameCell;