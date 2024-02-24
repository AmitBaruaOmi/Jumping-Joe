class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.livesElement = document.getElementById("lives");
    this.scoreElement = document.getElementById("score");
    this.player = new Player(
      this.gameScreen,
      150,
      190,
      150,
      190,
      "./images/player.gif"
    );
    this.height = 500;
    this.width = 600;
    this.obstacles = []
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.GameLoopFrequency = 1000 / 20;
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;


    this.spawnObstacle()

   
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    this.gameIntervalId = setInterval(() => {
      this.gameLoop()
    }, this.GameLoopFrequency)

    
  }

  spawnObstacle(){
    setTimeout(() => {

      this.obstacles.push(new Obstacle(this.gameScreen))
      this.spawnObstacle()

    }, 2000) // later change this timer to be random (between 2000 and 4000)
  }

  gameLoop() {
    console.log("in the game loop");

    this.update();

    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId)
    }
  }

  update() {

    this.player.updatePosition();

    this.obstacles.forEach(obstacle => {
    obstacle.move();
    })


    this.livesElement.innerHTML = this.lives;

    this.player.move();

    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      this.obstacle.move();

      
      if (this.player.didCollide(obstacle)) {
        
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        this.lives--;
        i--;
      } 
      else if (obstacle.top > this.height) {
        
        this.score++;
        
        obstacle.element.remove();
       
        this.obstacles.splice(i, 1);
        
        i--;
      }
    }


    if (this.lives === 0) {
      this.endGame();
    }


    if (Math.random() > 15.00 && this.obstacles.length < 3) {
      this.obstacles.push(new obstacle(this.gameScreen));
    }

    this.player.move();
  }

  
  endGame() {
    this.player.element.remove();
    this.obstacles.forEach(obstacle => obstacle.element.remove());

    this.gameIsOver = true;

   
    this.gameScreen.style.display = "none";
   
    this.gameEndScreen.style.display = "block";
  }
    


  }
