
//get the random number where the balloon will below
var maxBlows=0;

//the score value
var score = 0;

//blown up attempts
var blownUpAttempts = 0;

//increase the size
var increaseSizeBy = 50;

//this will be our image
var logo;

//boom div
var boom;

//score div
var scoreDiv;

//reset the game
function resetGame() {

	//get random number between 0-10
	maxBlows = Math.floor(Math.random()*11);
	
	//you starting a new balloon here
	blownUpAttempts = 0;
	
	//hide the boom
	boom = document.getElementById("boom");
	boom.style.display="none";
	
	//score div
	scoreDiv = document.getElementById("score");
	
	//reset the size
	logo.style.width="150px";
}

//starts the game
function startGame() {
	
	//get the image
	logo = document.getElementById("logoDiv");
	
	//resets the max baloon size
	resetGame();
	
	//resets the values
	score = 0;
}

//resizes the image
function blow() {
	
	//its another blow
	blownUpAttempts++;
	
	if(blownUpAttempts > maxBlows) {
		logo.style.display="none";	
		boom.style.display="block";
		
		//set the score to zero
		scoreDiv.innerHTML = '0';
	} else {
		//get the current width
		var width = parseInt(logo.offsetWidth);
	
		//Set the width value + new size;
		width = width + increaseSizeBy;
	
		//increase the image size
		logo.style.width = width+"px";
		
		//increase the score to 10
		score += 10;
		
		scoreDiv.innerHTML = score;
	}
}

//stop blowing the baloon	
function stop() {
	
	if(blownUpAttempts == maxBlows) {
		//increase the score to 100
		score += 100;
		scoreDiv.innerHTML = score;
	} else {
		scoreDiv.innerHTML = 0;
		resetGame();
	}
}

