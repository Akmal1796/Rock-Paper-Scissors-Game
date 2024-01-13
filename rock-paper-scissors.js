

let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Losses: 0,
    Ties: 0
};

function playerMove(value) {

    const computerMove = pickComputerMove();
    let result = '';

    if(value === 'rock') {
        if(computerMove === 'rock') {
            result = 'Tie';
            resultCheck();
            //console.log('Tie');
            score.Ties += 1;
        }
        else if(computerMove === 'paper') {
            result = 'You Lose';
            resultCheck();
            //console.log('You Lose');
            score.Losses += 1;
        }
        else if(computerMove === 'scissors') {
            result = 'You Won';
            resultCheck();
            //console.log('You Won');
            score.Wins += 1;
        }
    }
    else if(value === 'paper') {
        if(computerMove === 'rock') {
            result = 'You Won';
            resultCheck();
            //console.log('You Won');
            score.Wins += 1;
        }
        else if(computerMove === 'paper') {
            result = 'Tie';
            resultCheck();
            //console.log('Tie');
            score.Ties += 1;
        }
        else if(computerMove === 'scissors') {
            result = 'You Lose';
            resultCheck();
            //console.log('You Lose');
            score.Losses += 1;
        }
    }
    else if(value === 'scissors') {
        if(computerMove === 'rock') {
            result = 'You Lose';
            resultCheck();
            //console.log('You Lose');
            score.Losses += 1;
        }
        else if(computerMove === 'paper') {
            result = 'You Won';
            resultCheck();
            //console.log('You Won');
            score.Wins += 1;
        }
        else if(computerMove === 'scissors') {
            result = 'Tie';
            resultCheck();
            //console.log('Tie');
            score.Ties += 1;
        }
    }
    
    function resultCheck() {
        if(result === 'You Won') {

            document.querySelector('.js-finalResult').innerHTML = `<h3>${result}</h3>`;
        }
        else if(result === 'You Lose') {
            
            document.querySelector('.js-finalResult').innerHTML = `<h3>${result}</h3>`;
        }
        else if (result === 'Tie') {
            
            document.querySelector('.js-finalResult').innerHTML = `<h3>${result}</h3>`;
        }
    }

    document.querySelector('.js-result').innerHTML = `<h4>You Picked <img src="images/${value}-emoji.png" class="move-icon"> Computer Picked <img src="images/${computerMove}-emoji.png" class="move-icon"></h4>`;

    localStorage.setItem('score', JSON.stringify(score));
    showScore();
}

function showScore() {
    document.querySelector('.js-score').innerHTML = `<h2>Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}.</h2>`;
}

function resetScore() {
    score.Wins = 0;
    score.Losses = 0;
    score.Ties = 0;
    localStorage.removeItem('score');
    document.querySelector('.js-score').innerHTML = `You Score Was Reseted. Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}.`;
}

function pickComputerMove() {
    let randomNum = Math.random();
    let computerMove = '';

    if(randomNum < 1/3) {
        computerMove = 'rock';
    }

    else if(randomNum < 2/3) {
        computerMove = 'paper';
    }

    else if(randomNum < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}

