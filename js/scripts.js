$(document).ready(function(){
	$("#screen").load('home-screen.html');
	
  $(".open-looky").click(function(){
    $("#screen").load('looky-home.html');
  });

	$("#home-button").click(function(){
		$("#screen").load('home-screen.html');
	});

});