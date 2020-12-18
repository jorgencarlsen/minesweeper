import { checkForWin } from './logic/gameLogic';

test('returns true when there is a winning board', () => {
  const board = [];
  for (let i = 0; i < 4; i++) {
    board[i] = [];

    for (let j = 0; j < 4; j++) {
      board[i].push({ clicked: true, mine: false, surroundingMines: null });
    }
  }


  expect(checkForWin(board)).toBe(true);
});

test('returns false when there is not a winning board', () => {
  const board = [];
  for (let i = 0; i < 4; i++) {
    board[i] = [];

    for (let j = 0; j < 4; j++) {
      board[i].push({ clicked: false, mine: false, surroundingMines: null });
    }
  }

  board[1][2].clicked = true;

  expect(checkForWin(board)).toBe(false);
});

