
$(document).ready(function(){
	//make an object for the collect.
	var collect = {
			goal: Math.floor(Math.random() * 120) + 19,  
			red: Math.floor(Math.random() * 12) + 1,
			yellow: Math.floor(Math.random() * 12) + 1,
			green: Math.floor(Math.random() * 12) + 1,
			blue: Math.floor(Math.random() * 12) + 1,
			score:0
		};	
		wins = 0;
		losses = 0;
		//set variables to direct each item to the proper DOM element.
		statusDisplay = document.getElementById("#status");
		winDisplay = document.getElementById("#wins");
		lossDisplay = document.getElementById("#losses");
		scoreDisplay = document.getElementById("#score");
		goalDisplay = document.getElementById("#goal");
		
		that = $(this);
		
	function render() {
		//show value of goal in #goal.

		// var collect = {
		// 		goal: Math.floor(Math.random() * 120) + 19,  
		// 		red: Math.floor(Math.random() * 12) + 1,
		// 		yellow: Math.floor(Math.random() * 12) + 1,
		// 		green: Math.floor(Math.random() * 12) + 1,
		// 		blue: Math.floor(Math.random() * 12) + 1,
		// 	};

		goalDisplay.html(collect.goal);
		scoreDisplay.html(collect.score);
		winDisplay.html(wins);
		lossDisplay.html(losses);
	};

	//on click.

	$(".crystal").click(function(event) {
		var crystalID = event.target.id;
		console.log("you clicked the " + crystalID + " crystal.");
		collect.score+=collect.crystalID;
		scoreDisplay.html(collect.score);

		if(collect.score == collect.goal){
		//WIN
			statusDisplay.html("<span class='alert alert-success'>You got it! " + collect.goal + " is correct.</span>");
			setTimeou(render,5000);

		} else if(collect.score > collect.goal){
			statusDisplay.html("<span class='alert alert-danger'>Busted! You went over " + collect.goal + "</span>");
			setTimeou(render,5000);


		} else {

		}
	});

	
		//restart function - generate new random values for the goal and gems. Also reset the score and zero all divs
});