class Player {
    constructor(gameScreen, left, top, width, height, imgSrc) {
      this.gameScreen = gameScreen;
      this.left = left;
      this.top = top;
      this.width = width;
      this.height = height;
      this.element = document.createElement("img");
  
      this.element.src = imgSrc;
      this.element.style.position = "absolute";
      this.element.style.width = `${width}px`;
      this.element.style.height = `${height}px`;
      this.element.style.left = `${left}px`;
      this.element.style.top = `${top}px`;
  
      this.gameScreen.appendChild(this.element);
    }

  
    didCollide(obstacle) {

      const playerRect = this.element.getBoundingClientRect();
      const obstacleRect = obstacle.element.getBoundingClientRect();

      if (
        playerRect.left < obstacleRect.right &&
        playerRect.right > obstacleRect.left &&
        playerRect.top < obstacleRect.bottom &&
        playerRect.bottom > obstacleRect.top
      ) {
        return true;
      } else {
        return false;
      }

    }
  
    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    move() {
      this.left += this.directionX;
      this.top += this.directionY;

      if (this.left < 2) {
        this.left = 2;
      }

      if (this.left > this.gameScreen.offsetWidth - this.width - 2) {
        this.left = this.gameScreen.offsetWidth - this.width - 2;
      }

      this.updatePosition();
    }
  }

  