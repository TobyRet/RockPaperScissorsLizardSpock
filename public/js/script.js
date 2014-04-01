$(document).ready(function(){
    var p1 = new Player('Human');
    var p2 = new Player('Computer');
   	var game = new Game(p1, p2);

   	$('.select_option').on('click', function(){

   		var options = ['spock', 'lizard', 'scissors', 'rock', 'paper',];
   		var rand = options[Math.floor(Math.random() * options.length)];
   		p1.picks($(this).data('pick'));
   		p2.picks(rand);
   		
   		game.determineWinner();

   		var latestResult = $('<li>' + game.message() + '</li>');
   		latestResult.fadeIn(1000).prependTo('#results');

   		$('#results li:nth-child(2)').hide(function(){
   			$(this).remove();
   		});

   		var conclusion = game.conclusion();
   		$('#conclusion').html(conclusion).fadeIn(4000);
   	});
});