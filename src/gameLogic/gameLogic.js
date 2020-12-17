class Board {
  constructor(height = 10, width = 10) {
    this.board = null;
  }

  buildBoard(height = 10, width = 10, numberOfMines = 10) {
    const board = [];
    for (let i = 0; i < height; i++) {
      board[i] = Array(width).fill(0);
    }
    this.placeMines(board, numberOfMines);
    this.board = board;
  }

  placeMines(board, numberOfMines) {
    let minesToPlace = numberOfMines;
    while (minesToPlace > 0) {
      const row = Math.floor(Math.random() * board.length);
      const col = Math.floor(Math.random() * board[0].length);
      if (board[row][col] !== -1) {
        board[row][col] = -1;
        minesToPlace -= 1;
      }
    }
  }

  handleCellClick(row, col) {
    if (this.board[row][col] === -1) {
      // lose the game;
    } else {
      this.board[row][col] = this.findSurroundingMines(row, col);
      if (this.board[row][col] === 0) {
        // this.handleCellClick all surrounding nodes;
      }
    }
  }

  findSurroundingMines(row, col) {

  }
}

export default Board;