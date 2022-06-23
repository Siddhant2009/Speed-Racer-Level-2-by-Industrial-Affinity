var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2,fuels, powerCoins;
var cars = [];
var fuelImage,lifeImage , powerCoinImage;
var obstacle1, obstacle1Image;
var obstacle2, obstacle2Image;
var blastImage;
var coinSound, blastSound, gameOverSound, winSound, carSound, obstacleCollision;

//BP
function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
  track = loadImage("./assets/track.png");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/coin.png");
  lifeImage = loadImage("./assets/life.png");
  obstacle1Image= loadImage("./assets/obstacle1.png")
  obstacle2Image= loadImage("./assets/obstacle 2.png")
  blastImage= loadImage("./assets/blast.png")
  coinSound = loadSound("./assets/coinSoundEffect.wav")
  blastSound= loadSound("./assets/carBlastSound.wav")
  gameOverSound= loadSound("./assets/gameOver.wav")
  winSound= loadSound("./assets/winner.wav")
  carSound= loadSound("./assets/carSound.wav")
  obstacleCollision= loadSound("./assets/obstacleCrash.wav")
}

//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}

//BP
function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();;
  }
  if (gameState === 2) {
    game.showLeaderboard();
    //game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
