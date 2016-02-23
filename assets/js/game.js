
	//make an object for the collect.
	var collect = {
			goal: Math.floor(Math.random() * 120) + 19,  
			red: Math.floor(Math.random() * 12) + 1,
			yellow: Math.floor(Math.random() * 12) + 1,
			green: Math.floor(Math.random() * 12) + 1,
			blue: Math.floor(Math.random() * 12) + 1,
			score: 0
		};
		wins = 0;
		losses = 0;
		//set variables to direct each item to the proper DOM element.
		statusDisplay = $("#status");
		winDisplay = $("#wins");
		lossDisplay = $("#losses");
		scoreDisplay = $("#score");
		goalDisplay = $("#goal");
		that = $(this);
		

	function render() {

		statusDisplay.html("Start collecting!");
		goalDisplay.html(collect.goal);
		scoreDisplay.html(collect.score);
		winDisplay.html(wins);
		lossDisplay.html(losses);
	};

	function reset(){
		var collect = {
			goal: Math.floor(Math.random() * 120) + 19,  
			red: Math.floor(Math.random() * 12) + 1,
			yellow: Math.floor(Math.random() * 12) + 1,
			green: Math.floor(Math.random() * 12) + 1,
			blue: Math.floor(Math.random() * 12) + 1,
			score: 0
		};
		statusDisplay.html("Start collecting!");
		goalDisplay.html(collect.goal);
		scoreDisplay.html(collect.score);
		winDisplay.html(wins);
		lossDisplay.html(losses);
	}

	//on click.
	render();

	$(".crystal").click(function(event) {
		var crystalID = event.target.id;
		console.log("you clicked the " + event.target.id + " crystal.");

		if(event.target.id == "red"){
			collect.score+=collect.red;
		} else if(event.target.id == "yellow"){
			collect.score+=collect.yellow;
		} else if(event.target.id == "green"){
			collect.score+=collect.green;
		} else if(event.target.id == "blue"){
			collect.score+=collect.blue;
		};

		scoreDisplay.html(collect.score);

		if(collect.score == collect.goal){
		//WIN
			statusDisplay.html("<span class='text-success'>You got it! " + collect.goal + " is correct.</span>");
			wins++;
			winDisplay.html(wins);
			setTimeout(reset,3000);
			game.score = 0;


		} else if(collect.score > collect.goal){
			statusDisplay.html("<span class='text-danger'>Busted! You went over " + collect.goal + "</span>");
			losses++;
			lossDisplay.html(losses);
			setTimeout(reset,3000);
			game.score = 0;
		} else {
			if (collect.goal - collect.score < 20){
				statusDisplay.html("<span class='text-warning'>You are getting dangerously close to "+collect.goal + "...</span>");
			} else {
			statusDisplay.html("<span class='text-info'>You still have a ways to go to reach "+collect.goal + "</span>");
			}
		}
	});

