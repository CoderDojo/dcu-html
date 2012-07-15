//get the random number where the balloon will below
var maxBlows=0;

//the score value
var score;

//blown up attempts
var blownUpAttempts;

//increase the size
var increaseSizeBy = 50;

//this will be our image
var logo;

//boom div
var boom;

//game over div
var gameOver;

//score div
var scoreDiv;

//increase the score by
var increaseScoreBy;

//current life
var livesRemaining;

//lives left div
var livesLeft;

// High score div
var highScore;

//reset the game
function resetGame(increaseBy) {

	//get random number between 0-10
	maxBlows = Math.floor(Math.random()*11);
	
	//you starting a new balloon here
	blownUpAttempts = 0;
	
	//hide the boom
	boom.style.display="none";
	
	//display the image
	logo.style.display="block";
	
	//set the lives left
	livesLeft.innerHTML = livesRemaining;
	
	//score div
	scoreDiv = document.getElementById("score");
	
	//reset the size
	logo.style.width="150px";
	
	//increase the score, this will increase by level
	increaseScoreBy += increaseBy;
}

//resets the values
function resetGameValues() {
	score = 0;
	livesRemaining = 3;
	increaseScoreBy=0;
}

//starts the game
function startGame() {
	
	//reset the game values
	resetGameValues();
	
	//get the image
	logo = document.getElementById("logoDiv");
	
	//get the lives left div
	livesLeft = document.getElementById("livesLeft");
	
	// boom div
	boom = document.getElementById("boom");
	
	//high score
	highScore = document.getElementById("highScore");
	highScore.style.display="none";
	
	//resets the max baloon size
	resetGame(10);
	
	//hide the game over div
	gameOver = document.getElementById("gameOver");
	gameOver.style.display="none";
	
	//reset score to zero
	scoreDiv.innerHTML = score;
}

//resizes the image
function blow() {
	
	//its another blow
	blownUpAttempts++;
	
	//you loose you have exceed the blows
	if(blownUpAttempts > maxBlows) {
		boomBallon();
	} else { //successful blow
		successfulBlow();
	}
}

function happyWithScore() {
	//display the score
	var result = document.getElementById("result");
	result.innerHTML="Well done, high score is: " + score;
	
	//show the widgets
	highScore.style.display = "block";
	logo.style.display = "none";
}

//boom you lost 
function boomBallon() {
	
	//show the boom
	boom.style.display="block";
	
	//hide the logo
	logo.style.display="none";
}

//good blow
function successfulBlow() {
	
	//get the current width
	var width = parseInt(logo.offsetWidth);
	
	//Set the width value + new size;
	width = width + increaseSizeBy;
	
	//increase the image size
	logo.style.width = width+"px";
		
	//increase the score
	score += increaseScoreBy;
	
	//display the score
	scoreDiv.innerHTML = score;
}

//stop blowing the baloon	
function tieTheBalloon() {

	if(livesRemaining > 0) {
		//if you have hit the jackpot
		if(blownUpAttempts == maxBlows) {
			moveToNextLevel();
		} else {
			lostLife();
		}
	} else {
		startGame();
	}
}
	

//You passed this level
function moveToNextLevel() {
	
	//increase the score by 100
	score += 100;
	scoreDiv.innerHTML = score;
	
	//reset game and increase the scoring
	resetGame(10);
}

//lost a life
function lostLife() {
	//lost life
	livesRemaining--;
	
	//set the score to zero
	score = 0;
	scoreDiv.innerHTML = score;
	
	//game over you lose
	if(livesRemaining == 0) {
		
		//end of life
		logo.style.display="none";	
		boom.style.display="none";
		gameOver.style.display="block";
		
		//set the lives left
		livesLeft.innerHTML = livesRemaining;
	} else { //lives remaining
		
		//end of life
		logo.style.display="none";	
		boom.style.display="block";
		
		//reset the game
		resetGame(0);
	}
	
}

