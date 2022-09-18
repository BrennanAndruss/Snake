let canvasSize = 400;
let boardSize = 10;
let tileSize = canvasSize / boardSize;


// BOARD AND TILES

const board = {
  board: [],

  generate() {
    // Create rows of board and fill with tiles
    for (let i = 0; i < boardSize; i++) {
      let array = [];
      this.board.push(array);
      for (let j = 0; j < boardSize; j++) {
        let tile = new Tile(tileSize * j, tileSize * i);
        this.board[i].push(tile);
      }
    }
  },

  draw() {
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        this.board[i][j].draw();
      }
    }
  }
}

class Tile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = 'black';
    this.w = tileSize;
    this.h = tileSize;
  }

  draw() {
    fill(this.color);
    strokeWeight(1);
    stroke('white');
    rect(this.x, this.y, this.w, this.h);
  }
}


// SNAKE




// SETUP AND RUN

function setup() {
  createCanvas(canvasSize, canvasSize);
  board.generate();
}

function draw() {
  background(220);
  board.draw();
}
