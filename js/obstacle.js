class Obstacle {
    constructor(gameScreen){
        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random() * 700 + 50);
        this.top = 0;
        this.width = 50;
        this.height = 50;
        this.element = document.createElement("img");
        
        this.element.src = "./../images/Obstacle.gif"
        this.element.style.position = "absolute";

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.gameScreen.appendChild(this.element);
        }

        move(){
            this.top += 5;
            this.updatePosition();
        }

        updatePosition(){
            this.element.style.left = `${this.left}px`;
            this.element.style.top = `${this.top}px`;
        }
    }
