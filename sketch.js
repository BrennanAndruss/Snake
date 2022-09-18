let canvasSize = 400;
let canvasColor = 0;

// BOARD AND TILES

let boardSize = 10;
let tileSize = canvasSize / boardSize;

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
    this.color = canvasColor;
  }

  draw() {
    fill(this.color);
    strokeWeight(1);
    stroke('white');
    square(this.x, this.y, tileSize);
  }
}


// SNAKE

let startPos = [1, boardSize / 2];

const snake = {
  snake: [startPos],
  direction: [1, 0],
  color: [0, 255, 0],

  move() {
    // Determine direction of movement
    if (keyIsDown(UP_ARROW)) {
      this.direction = [0, -1];
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      this.direction = [1, 0];
    }
    else if (keyIsDown(DOWN_ARROW)) {
      this.direction = [0, 1];
    }
    else if (keyIsDown(LEFT_ARROW)) {
      this.direction = [-1, 0];
    }

    // Move the snake
    let x = this.snake[this.snake.length - 1][0] + this.direction[0];
    let y = this.snake[this.snake.length - 1][1] + this.direction[1];
    this.snake.push([x, y]);
    this.snake.shift();
  },

  draw() {
    for (let i = 0; i < this.snake.length; i++) {
      fill(this.color);
      strokeWeight(1);
      stroke(255);
      square(this.snake[i][0] * tileSize, this.snake[i][1] * tileSize, tileSize);
    }
  }
}


// SETUP AND RUN

function setup() {
  createCanvas(canvasSize, canvasSize);
  frameRate(6);
  board.generate();
}

function draw() {
  background(220);
  board.draw();
  snake.draw();
  snake.move();
}
