class Ship {

  constructor(x, spaceshipImage) {
     this.x = x;
     this.velocityY = this.velocityY = -200;
     this.velocityY1 = this.velocityY = 200;
    this.score = 0;
    this.r = 15;
    this.respawn();
    // store the image in the ship object
    this.spaceshipImage = spaceshipImage;
  }
  
  update() {
  	if (this.velocityY  && this.y > 0) {
    	this.up();
    } else if (this.velocityY1 && this.y < height - 10) {
    	this.down();
    }
    
    if (this.hasPlayerScoredAPoint()) {
    	this.score ++;
      this.respawn();
    }
  }
  
  display() {

    console.log(rightShip.velocityY);
    console.log(rightShip.velocityY1);
    // display our beautiful ship to the world!
    imageMode(CENTER);
    image(this.spaceshipImage, this.x, this.y, 15 *3, 15*3);
  }
  
  
  up() {
  	this.y--;
  }
  
  down() {
  	this.y++;
  }
  
  hasPlayerScoredAPoint() {
  	if (this.y <= 0) {
    	return true;
    }
    return false;
  }
  
  respawn() {
    this.y = height - 10;
    this.velocityY  = 0
    this.velocityY1 = 0;
  }
  

}