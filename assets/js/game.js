
	//make an object for the collect.

	
		collect = {
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
		collect.goal = Math.floor(Math.random() * 120) + 19;  
		collect.score = 0;
		collect.red = Math.floor(Math.random() * 12) + 1;
		collect.yellow = Math.floor(Math.random() * 12) + 1;
		collect.green = Math.floor(Math.random() * 12) + 1;
		collect.blue = Math.floor(Math.random() * 12) + 1;

		statusDisplay.html("Start collecting!");
		goalDisplay.html(collect.goal);
		scoreDisplay.html(collect.score);
		winDisplay.html(wins);
		lossDisplay.html(losses);
	}

	render();

	//on click.
	$(".crystal").click(function(event) {
		var crystalID = event.target.id;
		console.log("you clicked the " + event.target.id + " crystal.");
		//i tried to use one click function for all of the crystals here using a commin class, but didn't know how to plug the ID into the collect object, so I used a IF statement.

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
			winDisplay.html("<span class='text-success'>" + wins + "</span>");
			//if you continue clicking during the reset timer, you can contiue to get losses.
			setTimeout(reset,3000);

		} else if(collect.score > collect.goal){
			statusDisplay.html("<span class='text-danger'>Busted! You went over " + collect.goal + "</span>");
			losses++;
			lossDisplay.html("<span class='text-danger'>" + losses + "</span>");
			//if you continue clicking during the reset timer, you can contiue to get losses.
			setTimeout(reset,3000);

		} else {
			if (collect.goal - collect.score < 20){
				statusDisplay.html("<span class='text-warning'>You are getting dangerously close to "+collect.goal + "...</span>");
			} else {
			statusDisplay.html("<span class='text-info'>You still have a ways to go to reach "+collect.goal + "</span>");
			}
		}
	});

