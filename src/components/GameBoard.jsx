import React from 'react';
import styled from 'styled-components';
import generateFrForGrid from '../utils/generateFrForGrid';
import GameCell from './GameCell';

const BoardContainer = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  margin: 20px 0;
  padding: 10px;
  display: grid;
  grid-template-columns: ${({cols}) => generateFrForGrid(cols)};
  grid-template-rows: ${({rows}) => generateFrForGrid(rows)};
  background-color: #114b5f;
  box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.75);
  border-radius: 5px;
`;

const GameBoard = ({ board, handleClick, handleGameReset, gameLost, gameWon }) => {

  return (
    <BoardContainer rows={board.length} cols={board[0].length}>
      {board.map((row, i) => row.map((col, j) => (
        <GameCell
          key={`${i}, ${j}`}
          row={i}
          col={j}
          board={board}
          handleClick={handleClick}
          gameLost={gameLost}
        />)
      ))}
      <div className={gameLost ? 'message-container show' : 'message-container'}>
        <h1>You've be blown up by a mine!</h1>
        <button onClick={handleGameReset}>Start Over?</button>
      </div>
      <div className={gameWon ? 'message-container winner show' : 'message-container winner'}>
        <h1>Congrats! You won!</h1>
        <button onClick={handleGameReset}>Play Again?</button>
      </div>
    </BoardContainer>
  );
}

export default GameBoard;