$(document).ready(function() {
"use strict";

// Looping audio that starts once start button is pressed
var audio = new Audio('/sound/pkmnbattle.mp3');
audio.loop = true;
//creates global game interval variable
var gameInterval = ''
// creates global time interval variable
var timeInterval = ''
// high score variable
var highScore = 0;
// player score variable
var score = 0;
//rate moles show up
var speed = 2000;
// timer variable
var timer = 30;
// Generates random number to reference for mole positioning
var whackPattern = setInterval(function() {
    x = Math.floor((Math.random() * 9) + 1);
    }, 1000);
// random number generation
var x = Math.floor((Math.random() * 9) + 1);

// initially hides moles so that they can fadeIn and out with the random number generator.
$('.diglett').fadeOut('slow');
// displays high score
$('#highScore').html('High Score: ' + highScore);
// displays score
$('#score').html('Score: ' + score);
// displays time remaining
$('#timer').html('Time Remaining: ' + timer+'s');

//resets score and logs refreshed score
function callScore(){
    score = 0;
    $('#score').html('Score: ' + score);
};

//resets timer and logs refreshed timer
function callTimer(){
    timer = 30;
    $('#timer').html('Time Remaining: ' + timer+'s');
};

//Add points to score
function increaseScore(){
    score++;
    $('#score').html('Score: ' + score);
};

// Randomly causes a mole to appear in one of nine div boxes.
function startGame(){
    gameInterval = setInterval (function() { 
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

// Timer increments every second and logs time remaining.
function startTimer(){
    score = 0;
    $('#score').html('Score: ' + score);
    timeInterval = setInterval (function () {
        timer--;
        $('#timer').html('Time Remaining: ' + timer+'s');
        if (timer == 25){
        clearInterval(gameInterval);
        clearInterval(timeInterval);
        audio.pause();
        $('#resetButton').attr('disabled', false);
    };
    }, 1000);
};

// Increases player score, mole appearance rate, and causes mole to disappear when clicked. 
// Also increases high score when score is greater than current high score.
$('#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9').click(function(){
    increaseScore();
    $('.diglett').hide();
    speed-=100;
    if (score > highScore){
    highScore = score;
    $('#highScore').html('High Score: ' + highScore);
    };
});

// reset button begins disabled
$('#resetButton').attr('disabled', true);

// Clears player score and sets timer back to 30s for 'new game'
$('#resetButton').click(function(){
    callScore();
    callTimer();
    speed=1500;
    startGame();
    startTimer();
    $('#resetButton').attr('disabled', true);
});

// start button starts game, disables start button from being clicked again, and allows player to reset the
// game by clicking the reset button.
$('#startButton').click(function(){
    callScore();
    startGame();
    callTimer();
    startTimer();
    $(this).attr('disabled', true);
    $('#resetButton').attr('disabled', false);
});

});