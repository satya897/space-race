var leftShip,rightShip;

var allDebris = [];

//const NUM_DEBRIS = 30;

var leftScore,rightScore;

var spaceshipImage;
var backgroundImg;

var timer;

function preload () {
  
  spaceshipImage = loadImage('spaceship.png');
}

function setup() {

  createCanvas(400, 400);

  leftShip = new Ship(width * 0.33, spaceshipImage);
  rightShip = new Ship(width * 0.66, spaceshipImage);
  
  for (var i = 0; i < 50; i++) {
  	allDebris.push(new Debris());
  }

  
  // creating the score objects
  leftScore = new Score(width * 0.33 - 40);
  rightScore = new Score(width * 0.66 + 40);

  timer = new Timer();

  
}

function draw() {
  background(0);

  leftShip.update();
  rightShip.update();
  
  leftShip.display();
  rightShip.display();
  
  updateDebrisAndCheckCollisions();
  
  
  // pass in the players current score
  leftScore.display(leftShip.score);
  rightScore.display(rightShip.score);
  
  timer.display();
  
  if (timer.y >= height) {
  	noLoop();
  }
}



function updateDebrisAndCheckCollisions() {
  for (var i = 0; i < allDebris.length; i++) {
    allDebris[i].update();
  	allDebris[i].display();
    
    if (allDebris[i].hasHitShip(leftShip)) {
    	leftShip.respawn();
    } else if (allDebris[i].hasHitShip(rightShip)) {
    	rightShip.respawn();
    }
  }
}


function keyPressed() {
	if (keyCode == UP_ARROW) {
  	rightShip.velocityY = -200;
    rightShip.velocityY1 = 0;
  } else if (keyCode == DOWN_ARROW) {
  	rightShip.velocityY1 = 200;
    rightShip.velocityY  = 0;
  }
  
  
  if (keyCode == 87) {
  	// keycode is 'w'
    leftShip.velocityY  = true;
    leftShip.velocityY1 = false;
  } else if (keyCode == 83) {
  	// keycode is 's'
    leftShip.velocityY1 = true;
    leftShip.velocityY  = false;
  }
}


function keyReleased() {
	if (keyCode == UP_ARROW) {
  	rightShip.velocityY  = 0;
  } else if (keyCode == DOWN_ARROW) {
  	rightShip.velocityY1 = 0;
  }
  
  if (keyCode == 87) {
    leftShip.velocityY  = false;
  } else if (keyCode == 83) {
    leftShip.velocity = false;
  }
}


