window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    restartGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game();

    game.start();
  }

  function restartGame() {
    location.reload();
  };


  
  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowRight",
      " ",
    ];

    
    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      console.log(key)

      switch (key) {
        case "ArrowLeft":
          game.player.left = 90;
          break;
        case "ArrowRight":
          game.player.left = 350;
          break;
        case " ":
          // jump
          game.player.top = 250;

          // after 400ms, jump back down
          setTimeout(() => game.player.top = 400, 400)
          break;
      }
    }
  }

  // Add the handleKeydown function as an event listener for the keydown event
  window.addEventListener("keydown", handleKeydown);
}