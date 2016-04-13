$(document).ready(function() {
"use strict";

var audio = new Audio('/sound/pkmnbattle.mp3');
audio.loop = true;
audio.play();

var score = 0;

var timer = 30;

var highScore = 0;

var x = Math.floor((Math.random() * 9) + 1);

$('#score').html('Score: ' + score);

$('#timer').html('Time Remaining: ' + timer+'s');

$('#highScore').html('High Score: ' + highScore);

var whackPattern = setInterval(function() {
    x = Math.floor((Math.random() * 9) + 1);
    }, 1000);

var checkHighScore = setInterval(function() {
        if (score > highScore){
            highScore = score;
            $('#highScore').html('High Score: ' + highScore);
        }
    }, 20);

$('.digglet').fadeOut("slow");

function startGame(){
    var gameInterval = setInterval (function() { 
    endGame();
    if (x == 1){
        $('#box1.digglet').fadeIn('slow').fadeOut('slow');
    } else if (x == 2){
        $('#box2.digglet').fadeIn('slow').fadeOut('slow');
    } else if (x == 3){
        $('#box3.digglet').fadeIn('slow').fadeOut('slow');
    } else if (x == 4){ 
        $('#box4.digglet').fadeIn('slow').fadeOut('slow');
    } else if (x == 5){ 
        $('#box5.digglet').fadeIn('slow').fadeOut('slow');
    } else if (x == 6){ 
        $('#box6.digglet').fadeIn('slow').fadeOut('slow');
    } else if (x == 7){ 
        $('#box7.digglet').fadeIn('slow').fadeOut('slow');
    } else if (x == 8){ 
        $('#box8.digglet').fadeIn('slow').fadeOut('slow');
    } else if (x == 9){ 
        $('#box9.digglet').fadeIn('slow').fadeOut('slow');
    };
    }, 1500);
};

function startTimer(){
    score = 0;
    $('#score').html('Score: ' + score);
    var timeInterval = setInterval (function () {
        endGame();
        timer--;
        $('#timer').html('Time Remaining: ' + timer+'s');
    }, 1000);
};

function endGame(){
    if (timer == 0){
        clearInterval(gameInterval);
        clearInterval(timeInterval);
        audio.play();
    };
};

//Add points to score
function increaseScore(){
    score++;
    $('#score').html('Score: ' + score);
}

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

$('#resetButton').attr('disabled', true);

$('#resetButton').click(function(){
    score = 0;
    $('#score').html('Score: ' + score);
    timer = 30;
    $('#timer').html('Time Remaining: ' + timer+'s');
});

$(document).on('click', '#box1', function(){
   increaseScore();
});

$(document).on('click', '#box2', function(){
   increaseScore();
});

$(document).on('click', '#box3', function(){
   increaseScore();
});

$(document).on('click', '#box4', function(){
   increaseScore();
});

$(document).on('click', '#box5', function(){
   increaseScore();
});

$(document).on('click', '#box6', function(){
   increaseScore();
});

$(document).on('click', '#box7', function(){
   increaseScore();
});

$(document).on('click', '#box8', function(){
   increaseScore();
});

$(document).on('click', '#box9', function(){
   increaseScore();
});

});

