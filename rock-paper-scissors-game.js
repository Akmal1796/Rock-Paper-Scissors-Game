

const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

function playerGame(playerMove) {

    const computerMove = computerGame();
    let result = '';

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
            resultCheck();
        }

        else if (computerMove === 'paper') {
            result = 'You Lose';
            resultCheck();
        }

        else if (computerMove === 'scissors') {
            result = 'You Won';
            resultCheck();
        }
    }

    else if (playerMove === 'paper') {
        if(computerMove === 'rock') {
            result = "You Won";
            resultCheck();
        }

        else if (computerMove === 'paper') {
            result = "Tie";
            resultCheck();
        }

        else if (computerMove === 'scissors') {
            result = "You Lose";
            resultCheck();
        }
    }

    else if (playerMove === 'scissors') {
        if(computerMove === 'rock') {
            result = "You Lose";
            resultCheck();
        }

        else if (computerMove === 'paper') {
            result = "You Won";
            resultCheck();
        }

        else if(computerMove === 'scissors') {
            result = "Tie";
            resultCheck();
        }
    }

    function resultCheck() { 
        if(result === 'You Won') {
            score.wins++;
        }

        else if (result === 'You Lose') {
            score.losses++;
        }

        else if(result === 'Tie') {
            score.ties++;
        }
        return score;
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-final-result').innerHTML = `<h2>${result}</h2>`;

    document.querySelector('.js-move-result').innerHTML = `<h3>You Picked <img src="images/${playerMove}-emoji.png" class="move-icon">, Computer Picked <img src="images/${computerMove}-emoji.png" class="move-icon"></h3>`;
    showScore();

    }

function showScore() {
    document.querySelector('.js-show-score').innerHTML = `<h3>Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}</h3>`;
}

document.body.addEventListener('keydown', event => {
    if(event.key === 'a') {
        autoplay();
    }
    else if(event.key === 'r') {
        playerGame('rock');
    }
    else if(event.key === 'p') {
        playerGame('paper');
    }
    else if(event.key === 's') {
        playerGame('scissors');
    }
    else if(event.key === 'Backspace') {
        resetConformation();
    }
});

document.querySelector('.js-reset-btn').addEventListener('click', () => {
    resetConformation();
});

function resetConformation() {
    document.querySelector('.js-reset-conformation-button').innerHTML = `<p><h3>Are you sure you want to reset the score? 
        <button class="reset-conformation-yes reset-conformation-btn-yes">Yes</button>
        <button class="reset-conformation-no reset-conformation-btn-no">No</button>
    </h3></p>`;

    document.querySelector('.reset-conformation-yes').addEventListener('click', () => {
        resetScore();
        hideResetConformation();
    });

    document.querySelector('.reset-conformation-no').addEventListener('click', () => {
        hideResetConformation();
    });

}

function hideResetConformation() {
    document.querySelector('.js-reset-conformation-button').innerHTML = '';
}
    
function resetScore() {
    resetConformation();
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    
    localStorage.setItem('score', JSON.stringify(score));
    showScore();
}


let isAutoPlaying = false;
let intervalId;

function autoplay() {
    if(!isAutoPlaying) {
        intervalId = setInterval(() => {
            const playerMove = computerGame();
            playerGame(playerMove);
        }, 1000);
        isAutoPlaying = true;

        setTimeout(() => {                
            document.querySelector('.js-autopaly-btn').innerHTML = 'Stop Playing';
        }, 1000);

    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
          
        setTimeout(() => {
            document.querySelector('.js-autopaly-btn').innerHTML = 'Auto Play';
        }, 500);
    }
}


function computerGame() {
    let randumNum = Math.random();
    let computerMove= '';

    if(randumNum < 1/3) {
        computerMove = 'rock';
    }
    else if (randumNum < 2/3) {
        computerMove = 'paper';
    }

    else if (randumNum < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}