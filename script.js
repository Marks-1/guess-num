'use strict';

//classes: between, again, guess, number, score, highscore, message

// document.querySelector('.number').textContent = number;

// document.querySelector('.message').textContent = 'Correct Number..';

// document.querySelector('.score').textContent = 16;

// document.querySelector('.highscore').textContent = 19;

// document.querySelector('.guess').value = 10;

// document.querySelector('.number').textContent = 20;

// console.log(document.querySelector('.guess').value);
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// document.querySelector('.number').textContent = secretNumber;

let score = 20;
// console.log(number);
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // when there is no input
    if(!guess){
        document.querySelector('.message').textContent = '⛔Not a number.';

    // when player wins
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = '🎉✔ Correct guess!';
        document.querySelector('body').style.backgroundColor = '#90be6d';
        // document.querySelector('.number').style.width = '15rem';
        document.querySelector('.number').textContent = secretNumber;

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    // when guess is too high
    
    }else if(guess !== secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = guess > secretNumber ? '📈Too high' : '📉Too low';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
    //else if(guess > secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📈Too high';
    //         score--;
    //         document.querySelector('.score').textContent = score;
        
    //     }else{
    //         document.querySelector('.message').textContent = 'You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }
        
    // when guess is too low
    // }else if(guess < secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📉Too low'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else {
    //         document.querySelector('.message').textContent = 'You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
})

// reset the game. again class
document.querySelector('.again').addEventListener('click', function(){

    score = 20;
    // secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = '🎈Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '';
})


