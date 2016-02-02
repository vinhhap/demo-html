var cards = ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5'], current = null;
Array.prototype.shuffle_items = function() {
	var i = this.length, j, temp;
  while(--i > 0){
    j = Math.floor(Math.random() * (i+1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  }
}
var displayCards = function() {
	cards.shuffle_items();
	for(var i = 0; i < cards.length; i++) {
		if(i == 0) {
			$('#content').append('<div class="row"></div>');
			$('.row')[0].innerHTML += '<div class="card" id="card-' + cards[i] + '"><div class="front"><img src="img/' + cards[i] + '.png"></div><div class="back"><img src="img/back.png"></div></div>';
		} else if(i == 5) {
			$('#content').append('<div class="clear"></div><div class="row"></div>');
			$('.row')[1].innerHTML += '<div class="card" id="card-' + cards[i] + '"><div class="front"><img src="img/' + cards[i] + '.png"></div><div class="back"><img src="img/back.png"></div></div>';
		} else {
			if(i <= 4) {
				$('.row')[0].innerHTML += '<div class="card" id="card-' + cards[i] + '"><div class="front"><img src="img/' + cards[i] + '.png"></div><div class="back"><img src="img/back.png"></div></div>';
			} else {
				$('.row')[1].innerHTML += '<div class="card" id="card-' + cards[i] + '"><div class="front"><img src="img/' + cards[i] + '.png"></div><div class="back"><img src="img/back.png"></div></div>';
			}
		}
	}
};
$(document).ready(function() {
	displayCards();
	$('.card').click(function() {
		if(!$(this).hasClass('flipped')) {
			$(this).toggleClass('flipped');
			if(!current) {
				current = $(this);
			} else {
				if(current.attr('id') != $(this).attr('id')){
					console.log('Khac nhau');
					document.getElementById('wrong-music').play();
					setTimeout(function() {
						$('.flipped').each(function() {
							$(this).toggleClass('flipped');
							current = null;
						});
					}, 500);
					
				} else {
					console.log('Giong nhau');
					document.getElementById('correct-music').play();
					$('.flipped').each(function() {
						$(this).css({'transform' : 'rotate(20deg)'});
					});
					setTimeout(function() {
						$('.flipped').each(function() {
							$(this).css({'opacity' : 0});
							$(this).toggleClass('flipped');
							current = null;
						});
					}, 500);
					
				}
			}
		}
		
	});

});