const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeout");
      match.classList.add("fadein");
    });
  };
  //play match
  const playmatch = () => {
    const options = document.querySelector(".option button");
    const playerHand = document.querySelector(".player-hand");
    const conputerHand = document.querySelector(".computer-hand");

    // computer choice
    const computerOption = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
  };

  //call functions
  playmatch();
  startGame();
};
game();
