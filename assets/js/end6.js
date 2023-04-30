//board
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

let pipeCount = 0; // add this variable to count how many pipes have been placed
let momma;

momma = new Image();
momma.src = "/assets/public/images/Minigames 7 momma.png";

//bird
let birdWidth = 48;
let birdHeight = 64;
let birdX = boardWidth / 8;
let birdY = boardHeight / 2;
let birdImg;

let bird = {
  x: birdX,
  y: birdY,
  width: birdWidth,
  height: birdHeight,
};

//pipes
let pipeArray = [];
let pipeWidth = 64; //width/height ratio = 384/3072 = 1/8
let pipeHeight = 512;
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

//physics
let velocityX = -2; //pipes moving left speed
let velocityY = 0; //bird jump speed
let gravity = 0.4;

let gameOver = false;
let score = 0;

window.onload = function () {
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d"); //used for drawing on the board

  //draw flappy bird
  // context.fillStyle = "green";
  // context.fillRect(bird.x, bird.y, bird.width, bird.height);

  //load images
  birdImg = new Image();
  birdImg.src = "/assets/public/images/Minigames 7 child.png";
  birdImg.onload = function () {
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
  };

  topPipeImg = new Image();
  topPipeImg.src = "/assets/public/images/toppipe.png";

  bottomPipeImg = new Image();
  bottomPipeImg.src = "/assets/public/images/bottompipe.png";

  requestAnimationFrame(update);
  setInterval(placePipes, 1500); //every 1.5 seconds
  document.addEventListener("keydown", moveBird);
};

function update() {
  requestAnimationFrame(update);
  if (gameOver) {
    return;
  }
  context.clearRect(0, 0, board.width, board.height);

  //bird
  velocityY += gravity;
  bird.y = Math.max(bird.y + velocityY, 0);
  context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

  if (bird.y > board.height) {
    gameOver = true;
    pipeCount = 0;
  }

  //pipes
  for (let i = 0; i < pipeArray.length; i++) {
    let pipe = pipeArray[i];
    pipe.x += velocityX;
    context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

    if (!pipe.passed && bird.x > pipe.x + pipe.width) {
      pipe.passed = true;
    }

    if (detectCollision(bird, pipe)) {
      if (i === pipeArray.length - 1) {
        // check if this is the last pipe
        alert("Success!!!");

        var element = document.getElementById("lanjut");
        element.classList.remove("d-none");
        gameOver = true;
        pipeCount = 0;
      } else {
        gameOver = true;
        pipeCount = 0;
      }
    }
  }

  while (pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
    pipeArray.shift();
  }

  if (gameOver) {
    context.fillText("Game Over, Tap Again", 10, 90);
  }
}

function placePipes() {
  if (gameOver || pipeCount === 4) {
    return;
  }

  let randomPipeY = pipeY - pipeHeight / 4 - Math.random() * (pipeHeight / 2);
  let openingSpace = board.height / 4;

  let topPipe = {
    img: topPipeImg,
    x: pipeX,
    y: randomPipeY,
    width: pipeWidth,
    height: pipeHeight,
    passed: false,
  };
  pipeArray.push(topPipe);

  let bottomPipe = {
    img: bottomPipeImg,
    x: pipeX,
    y: randomPipeY + pipeHeight + openingSpace,
    width: pipeWidth,
    height: pipeHeight,
    passed: false,
  };
  pipeArray.push(bottomPipe);

  pipeCount++;

  if (pipeCount === 4) {
    bottomPipe.y = 900;
    topPipe.y = 900;
    bottomPipe.passed = true;
    let gapX = pipeX + pipeWidth / 3;
    let gap = {
      img: momma,
      x: gapX,
      y: 280,
      width: 160,
      height: 100,
      passed: false,
    };
    pipeArray.push(gap);
  }
}

function moveBird(e) {
  if (e.code == "Space" || e.code == "ArrowUp" || e.code == "KeyX") {
    //jump
    velocityY = -6;

    //reset game
    if (gameOver) {
      bird.y = birdY;
      pipeArray = [];
      score = 0;
      gameOver = false;
    }
  }
}

function detectCollision(a, b) {
  return (
    a.x < b.x + b.width && //a's top left corner doesn't reach b's top right corner
    a.x + a.width > b.x && //a's top right corner passes b's top left corner
    a.y < b.y + b.height && //a's top left corner doesn't reach b's bottom left corner
    a.y + a.height > b.y
  ); //a's bottom left corner passes b's top left corner
}
