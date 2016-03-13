var arr = [6,7,8,9,10,11,12,13,14];
var sum = 0;
var flag = false;
var current = 0

$('.leftbar').mousedown(function(){
	event.preventDefault();
	$('.leftbar').toggleClass('leftshow');
});
$('.rightbar').mousedown(function(){
	event.preventDefault();
	$('.rightbar').toggleClass('rightshow');
});
$('.cardback').mousedown(function(){
	var rand = Math.floor( Math.random() * arr.length );
	if (arr.length < 1 ) {
		if (confirm('Игра окончена!Сыграть заново ?'))
			location.reload();
	}  
	$('.last').remove();  
	$('.card').removeClass('new').addClass('last');
	$('span').removeClass('newtext').addClass('last');
	$('.last').animate({top: '450px'}, "slow");
	$('.last').fadeOut(); 
	$(".cardback").append("<div class=\"card new\"><span class=\"left newtext\"></span><span class=\"right newtext\"></span></div>");
	switch (arr[rand]) {
		case 6:
		$('.newtext').text("6");
		current = 6;
		break;
		case 7:
		$('.newtext').text("7");
		current = 7;
		break;
		case 8:
		$('.newtext').text("8");
		current = 8;
		break;
		case 9:
		$('.newtext').text("9");
		current = 9;
		break;
		case 10:
		$('.newtext').text("10");
		current = 10;
		break;
		case 11:
		$('.newtext').text("J");
		current = 11;
		break;
		case 12:
		$('.newtext').text("Q");
		current = 12;
		break;
		case 13:
		$('.newtext').text("K");
		current = 13;
		break;
		case 14:
		$('.newtext').text("A");
		current = 14;
		break;
	}
	arr.splice(rand, 1);
	sum = sum + 1;
	console.log(sum);
});
$(window).load(function(){
        $('.bs-example-modal-md').modal('show');
        $('.loader').fadeOut(); // will first fade out the loading animation
            $('.loader_inner').delay(1000).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(1000).css({'overflow':'visible'});
    });
