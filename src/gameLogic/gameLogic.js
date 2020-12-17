export const buildBoard = function (height = 10, width = 10, numberOfMines = 10) {
    const board = [];
    for (let i = 0; i < height; i++) {
      board[i] = [];
      for (let j = 0; j < width; j++) {
        board[i].push({ clicked: false, mine: false, surroundingMines: null });
      }
    }
    placeMines(board, numberOfMines);
    return board;
}

export const placeMines = function (board, numberOfMines) {
  for (let i = 0; i < numberOfMines; i++) {
    const row = Math.floor(Math.random() * board.length);
    const col = Math.floor(Math.random() * board[0].length);
    board[row][col].mine = true;
  }
}

export const handleCellClick = function (board, row, col) {
  if (board[row][col].clicked === true) return;
  board[row][col].clicked = true;
  board[row][col].surroundingMines = findSurroundingMines(board, row, col);
  if (board[row][col].surroundingMines === 0) {
    clickAllSurroundingNodes(board, row, col);
  }
  return board;
}

const clickAllSurroundingNodes = function (board, row, col) {
  const directions = [[0, 1], [0, -1], [1, 1], [1, -1], [-1, 0], [1, 0], [-1, 1], [-1, -1]];
  directions.forEach(direction => {
    const newRow = row + direction[0];
    const newCol = col + direction[1];
    const rowInBounds = newRow < board.length && newRow >= 0;
    const colInBounds = newCol < board[0].length && newCol >= 0;
    if (rowInBounds && colInBounds) {
      handleCellClick(board, newRow, newCol);
    }
  });
  return;
}


export const findSurroundingMines = function (board, row, col) {
  let numberOfMinesFound = 0;
  const directions = [[0, 1], [0, -1], [1, 1], [1, -1], [-1, 0], [1, 0], [-1, 1], [-1, -1]];
  directions.forEach(direction => {
    const newRow = row + direction[0];
    const newCol = col + direction[1];
    const rowInBounds = newRow < board.length && newRow >= 0;
    const colInBounds = newCol < board[0].length && newCol >= 0;
    if (rowInBounds && colInBounds) {
      if (board[newRow][newCol].mine === true) {
        numberOfMinesFound += 1;
      }
    }
  });
  return numberOfMinesFound;
}