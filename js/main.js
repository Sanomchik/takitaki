var arr = [6,7,8,9,10,11,12,13,14,6,7,8,9,10,11,12,13,14,6,7,8,9,10,11,12,13,14,6,7,8,9,10,11,12,13,14];
var sum = 0;
var flag = false;
var current = 0

$('.leftbar').click(function(){
	event.returnValue = false;
	$('.leftbar').toggleClass('leftshow');
});
$('.rightbar').click(function(){
	event.returnValue = false;
	$('.rightbar').toggleClass('rightshow');
});
$('.cardback').click(function(){
	var rand = Math.floor( Math.random() * arr.length );
	if (arr.length < 1 ) {
		if (confirm('Игра окончена!Сыграть заново ?'))
			location.reload();
	}  
	$('.last').remove();  
	$('.card').removeClass('new').addClass('last');
	$('span').removeClass('newtext').addClass('last');
	$('.last').animate({top: '550px'}, "slow");
	$('.last').fadeOut(); 
	$(".cardback").append("<div class=\"card new\"><span class=\"left newtext\"></span><span class=\"right newtext\"></span></div>");
	switch (arr[rand]) {
		case 6:
		current = 6;
		$('.rightbartext').text('Прислоняешь палец к лицу.Кто последний прислонил - пьёт');
		break;
		case 7:
		current = 7;
		$('.rightbartext').text('Счет,когда 7,кратное семи и что делится на 7 надо хлопнуть.');
		break;
		case 8:
		current = 8;
		$('.rightbartext').text('Тот кто достаёт её имеет права встать на 2 минуты');
		break;
		case 9:
		current = 9;
		$('.rightbartext').text('У кого 9 и тот задает любой вопрос любому на протяжении всей игры или до следующей 9,кто на него ответил тот пьет.');
		break;
		case 10:
		current = 10;
		$('.rightbartext').text('Пьют все!');
		break;
		case 11:
		current = 'J';
		$('.rightbartext').text('Берется колода карт,человеку,которому это выпало говорит сверху/снизу больше/меньше и так три раза,если не совпало то он пьет,если выпал валет это приравнивается к пьет');
		break;
		case 12:
		current = 'Q';
		$('.rightbartext').text('В порт пришел корабль и привез собой,надо говорить слово,и следующий будет повторять предыдущие и добавлять свое.');
		break;
		case 13:
		current = 'K';
		$('.rightbartext').text('Король - король алкогольная карта,т.е достаётся король кому - либо,и все присутсвующие тупо пьют');
		break;
		case 14:
		current = 'A';
		$('.rightbartext').text('Придумывается слово и перед тем как вытянуть карту,надо будет его говорить.Если не сказал кто-то и просто вытянул,то он пьет,а карта его аннулируется и уже ничего не значит.');
		break;
	}
	$('.newtext').text(current);
	arr.splice(rand, 1);
	sum = sum + 1;
	console.log(sum);
	$('<li class="postsli">').text(current).prependTo('.posts');
});
$(window).load(function(){
        $('.bs-example-modal-md').modal('show');
        $('.loader').fadeOut(); // will first fade out the loading animation
            $('.loader_inner').delay(1000).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(1000).css({'overflow':'visible'});
    });
