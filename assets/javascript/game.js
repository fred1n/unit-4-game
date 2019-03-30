$(document).ready(function() {
	// array to hold random computer variable
	var rand = [];
	// For loop to store random #'s starting at 17
	for (var i = 17; i < 121; i++) {
		rand.push(i);
		console.log('rand.push(i) ' + rand.push(i));
	}

	// marvel numbers array
	var marvels = [];
	// For loop to store random #'s starting at 1
	for (var c = 1; c < 13; c++) {
		marvels.push(c);
		console.log('marvels.push(c) ' + marvels.push(c));
	}

	// Variables
	// random variables selected by computer
	var randNumber; // number to match
	var marvelNumbers = []; // for array of random marvel values

	var c1; // Array variables
	var c2;
	var c3;
	var c4;

	var totalScore = 0; // user's score

	var winsCount = 0; // tracks wins
	var lossCount = 0; // tracks lossCount

	// Function
	// passes an argument to generate a random # using the Math.Floor method
	function pickRandomNumber(arr) {
		var x = arr[Math.floor(Math.random() * arr.length)];
		randNumber = x;
		$('#randomNumber').html(randNumber);

		console.log('random number: ' + randNumber);
	} // end of pickRandomNumber function

	// Function
	// generates a random # for the marvel characters
	function pickRandommarvels(arr) {
		for (var y = 0; y < 4; y++) {
			// using math floor method, generate random #
			var a = arr[Math.floor(Math.random() * arr.length)];
			// push # to array
			marvelNumbers.push(a);
		}
		// using console display what #'s have been picked
		console.log('marvel numbers: ' + marvelNumbers);
	} // end of pickRandommarvels function

	// Function
	// generates a random # for the marvel characters
	function marvelValues(arr) {
		// changes value of each marvel button based on array
		for (i = 0; i < arr.length; i++) {
			$('#button-' + (i + 1)).attr('value', arr[i]);
			console.log(this);
		}
		c1 = arr[0]; // set # to button
		c2 = arr[1];
		c3 = arr[2];
		c4 = arr[3];
	} // end of marvelValues function

	// Function
	// resets the game
	function gameReset(x) {
		marvelNumbers = []; // clears marvel number values
		// calls funtion for computer generated random #
		pickRandomNumber(rand);
		// calls funtion for button generated random #
		pickRandommarvels(marvels);
		// calls funtion to assign random # to buttons
		marvelValues(marvelNumbers);
		// set total score to zero
		totalScore = 0;
		// display back on page
		$('#totalNumber').html(totalScore);
		// display alert on page
		alert(x);
	} // end of gameReset function

	// Set game settings at start up
	//
	pickRandomNumber(rand); // random number to match
	pickRandommarvels(marvels); // array of random marvel values
	marvelValues(marvelNumbers); // sets random #'s to buttons

	// marvel button functions
	$('#button-1').on('click', function() {
		//keep track of score
		totalScore += c1;
		$('#totalNumber').html(totalScore);
	});

	$('#button-2').on('click', function() {
		//keep track of score
		totalScore += c2;
		$('#totalNumber').html(totalScore);
	});

	$('#button-3').on('click', function() {
		//keep track of score
		totalScore += c3;
		$('#totalNumber').html(totalScore);
	});

	$('#button-4').on('click', function() {
		//keep track of score
		totalScore += c4;
		$('#totalNumber').html(totalScore);
	});
	// using the onclick event based on the button selected
	$('button').on('click', function() {
		// if totalscore equals the random #, winner
		if (totalScore == randNumber) {
			// increment win counter
			winsCount++;
			console.log(totalScore);
			// display on page total number and # of wins
			$('#totalNumber').html(totalScore);
			$('#wins').html('Wins: ' + winsCount);
			// timer for winner
			setTimeout(function() {
				gameReset('WINNER!!');
			}, 200);
		} else if (totalScore > randNumber) {
			// else if score is greater then #
			lossCount++; // increment loss counter
			$('#totalNumber').html(totalScore); // display on page
			$('#losses').html('Losses: ' + lossCount);
			// set time for loss
			setTimeout(function() {
				gameReset('YOU LOSE...Better next time!!');
			}, 200);
		}
	});
}); // end of script
