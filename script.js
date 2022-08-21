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
    const options = document.querySelectorAll(".choice");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    // computer choice
    const computerOption = ["rock", "paper", "scissor"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const randomNum = Math.floor(Math.random() * 3);
        const computerChoice = computerOption[randomNum];
        //call comareHands
        playerHand.src = `./images/${this.textContent}.png`;
        computerHand.src = `./images/${computerChoice}.png`;
        compareHands(this.textContent, computerChoice);
      });
    });
  };
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score");
    const computerScore = document.querySelector(".computer-score");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };
  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    if (playerChoice === computerChoice) {
      winner.textContent = "It's a tie";
      return;
    }
    // checking for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissor") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    // checking for rock
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        return;
      }
    }
    //checking for scissors
    if (playerChoice === "scissor") {
      if (computerChoice === "paper") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
  };
  //call functions
  playmatch();
  startGame();
};
game();
