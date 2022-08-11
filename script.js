const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        const scores = document.querySelector('.score');
        const restart = document.querySelector('.restart');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
            scores.classList.add('fadeIn');
            restart.classList.add('fadeIn');

        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const computerOptions = ['rock','paper','scissors'];
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
                this.style.animation = "";
            })
        })

        options.forEach(option => {
            option.addEventListener("click", function() {
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);

                    playerHand.src = `./images/${this.textContent}.png`;
                    computerHand.src = `./images/${computerChoice}.png`;
                }, 2000);
                
                playerHand.src = `./images/rock.png`;
                computerHand.src = `./images/rock.png`;
                
                
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";


            });

        });
        
        
    };

    const restartGame = () => {
        const restartBtn = document.querySelector('.restart button');
        restartBtn.addEventListener('click', () => {
            pScore=0;
            cScore=0;
            updateScore();
            const winner = document.querySelector(".winner");
            winner.textContent = "Choose an option";
            const playerHand = document.querySelector('.player-hand');
            const computerHand = document.querySelector('.computer-hand');
            playerHand.src = `./images/rock.png`;
            computerHand.src = `./images/rock.png`;
        });
   };

    

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
    
        const winner = document.querySelector(".winner");
       
        if (playerChoice === computerChoice) {
          winner.textContent = "TIE !";
          return;
        }
        
        if (playerChoice === "rock") {
          if (computerChoice === "paper") {
            winner.textContent = "Computer Wins !";
            cScore++;
            updateScore();
            return;
          } else {
            winner.textContent = "Player Wins !";
            pScore++;
            updateScore();
            return;
          }
        }
        
        if (playerChoice === "paper") {
          if (computerChoice === "scissors") {
            winner.textContent = "Computer Wins !";
            cScore++;
            updateScore();
            return;
          } else {
            winner.textContent = "Player Wins !";
            pScore++;
            updateScore();
            return;
          }
        }
       
        if (playerChoice === "scissors") {
            
          if (computerChoice === "rock") {
            winner.textContent = "Computer Wins !";
            cScore++;
            updateScore();
            return;
          } else {
            winner.textContent = "Player Wins !";
            pScore++;
            updateScore();
            return;
          }
        }
      };


    startGame();
    playMatch();
    restartGame();
};
game();

/**********************************************************************************************
Reference:
https://www.youtube.com/watch?v=qWPtKtYEsN4&t=2401s

Additions I made:
Added a restart button (which sets points to zero again)
Changed hands to rock when palyed again
Chnaged hands to rock when pressed restart
Changed the display style of scoreboard for it to fade in

Further additions which can be made:
Display the winner when a score of say 10 is reached
Give the choice to play single player or multiplayer
Provide sound effects
 ***********************************************************************************************/
