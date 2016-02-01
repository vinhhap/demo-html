var cards = [];
var shuffledCards = [];
for(var i = 1; i <= 10; i++) {
	cards.push(i);
}
var randomIntFromInterval = function(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
};
var shuffleCards = function() {
	while(cards.length > 0) {
		shuffledCards.push(cards.splice(randomIntFromInterval(0, cards.length - 1), 1));
	}
};
var displayCards = function() {
	for(var i = 0; i < $('.card').length; i++) {
		console.log($('.card'));
		$('.card')[i].innerHTML = '<div class="front"><img src="img/' + shuffledCards[i] + '.png"></div><div class="back"><img src="img/back.png"></div>';
	}
};
jQuery.fn.rotateY = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotateY('+ degrees +'deg)',
                 '-moz-transform' : 'rotateY('+ degrees +'deg)',
                 '-ms-transform' : 'rotateY('+ degrees +'deg)',
                 'transform' : 'rotateY('+ degrees +'deg)'});
    return $(this);
};
$(document).ready(function() {
	shuffleCards();
	displayCards();
	$('.card').click(function() {
		$(this).children('.front').rotateY(180);
		$(this).children('.back').rotateY(0);
	});
});