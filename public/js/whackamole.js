$(document).ready(function() {
"use strict";

// Looping audio that starts once start button is pressed
var audio = new Audio('/sound/pkmnbattle.mp3');
audio.loop = true;
// player score variable
var score = 0;
// timer variable
var timer = 30;
// high score variable
var highScore = 0;
//rate moles show up
var speed = 2000;
// random number generation
var x = Math.floor((Math.random() * 9) + 1);
// displays score
$('#score').html('Score: ' + score);
// displays time remaining
$('#timer').html('Time Remaining: ' + timer+'s');
// displays high score
$('#highScore').html('High Score: ' + highScore);

// Generates random number to reference for mole positioning
var whackPattern = setInterval(function() {
    x = Math.floor((Math.random() * 9) + 1);
    }, 1000);

// Constantly and rapidly checks high score to make it appear that high score changes as soon as a new high score is reached
var checkHighScore = setInterval(function() {
        if (score > highScore){
            highScore = score;
            $('#highScore').html('High Score: ' + highScore);
        }
    }, 20);

// initially hides moles so that they can fadeIn and out with the random number generator.
$('.diglett').fadeOut('slow');

// Randomly causes a mole to appear in one of nine div boxes.
function startGame(){
    var gameInterval = setInterval (function() { 
    endGame();
    audio.play();
    if (x == 1){
        $('#box1.diglett').fadeIn('slow').fadeOut('slow');
    } else if (x == 2){
        $('#box2.diglett').fadeIn('slow').fadeOut('slow');
    } else if (x == 3){
        $('#box3.diglett').fadeIn('slow').fadeOut('slow');
    } else if (x == 4){ 
        $('#box4.diglett').fadeIn('slow').fadeOut('slow');
    } else if (x == 5){ 
        $('#box5.diglett').fadeIn('slow').fadeOut('slow');
    } else if (x == 6){ 
        $('#box6.diglett').fadeIn('slow').fadeOut('slow');
    } else if (x == 7){ 
        $('#box7.diglett').fadeIn('slow').fadeOut('slow');
    } else if (x == 8){ 
        $('#box8.diglett').fadeIn('slow').fadeOut('slow');
    } else if (x == 9){ 
        $('#box9.diglett').fadeIn('slow').fadeOut('slow');
    };
    }, speed);
};

//Add points to score
function increaseScore(){
    score++;
    $('#score').html('Score: ' + score);
};

// Timer increments every second and logs time remaining.
function startTimer(){
    score = 0;
    $('#score').html('Score: ' + score);
    var timeInterval = setInterval (function () {
        endGame();
        timer--;
        $('#timer').html('Time Remaining: ' + timer+'s');
    }, 1000);
};

// Ends game when timer equals zero. Clears intervals that cause moles to appear and timer to increment. 
function endGame(){
    if (timer == 0){
        clearInterval(gameInterval);
        clearInterval(timeInterval);
        audio.pause();
    };
};

// reset button begins disabled
$('#resetButton').attr('disabled', true);

// start button starts game, disables start button from being clicked again, and allows player to reset the
// game by clicking the reset button.
$('#startButton').click(function(){
    score = 0;
    $('#score').html('Score: ' + score);
    timer = 30;
    $('#timer').html('Time Remaining: ' + timer+'s');
    startGame();
    startTimer();
    $(this).attr('disabled', true);
    $('#resetButton').attr('disabled', false);
});

// Clears player score and sets timer back to 30s for 'new game'
$('#resetButton').click(function(){
    score = 0;
    $('#score').html('Score: ' + score);
    timer = 30;
    $('#timer').html('Time Remaining: ' + timer+'s');
    speed=1500;
});

// Increases player score, mole appearance rate, and causes mole to disappear when clicked
$('#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9').click(function(){
    increaseScore();
    $('.diglett').hide();
    speed-=100;
});

});