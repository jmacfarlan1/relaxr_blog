// SIGNUPS - NO SIGNUPS
function displayNoSignUps() {
		alert("We are not currently taking sign ups");
		$('#button3').html("No Sign Ups!");
	}

$('#button3').on("click", displayNoSignUps);

// BLOG - READMORE
$('#readmore1').on("click", function(){
		$("#extra1").slideDown();
		$('#readmore1').hide();  
		$('#readless1').show();  
	});

$('#readless1').on("click", function(){
		$("#extra1").slideUp();
		$('#readless1').hide();
		$('#readmore1').show();    
});

$('#readmore2').on("click", function(){
		$("#extra2").slideDown();
		$('#readmore2').hide();  
		$('#readless2').show();  
	});

$('#readless2').on("click", function(){
		$("#extra2").slideUp();
		$('#readless2').hide();
		$('#readmore2').show();    
	});

// SIDEBAR - LEARN MORE

$('#learnmore1').on("click", function(){
		$("#extra3").slideDown();
		$('#learnmore1').hide();   
	});