var arr = [6,7,8,9,10,"J","Q","K","A",6,7,8,9,10,"J","Q","K","A",6,7,8,9,10,"J","Q","K","A",6,7,8,9,10,"J","Q","K","A"];
var sum = 0;
var flag = false;

$('header').click(function(){


	$( ".bckg:hidden" ).show( "slow" );
   $('.bckg').css("background","rgba(0,0,0,0.8) url('img/bckg.png') no-repeat 50% 50%");

   $('.bckg').css("visibility", "visible");
   flag = true;
   });
   
   $('.bckg').click(function(){
   if (flag == true){
   $( ".bckg:hidden" ).show( "slow" );
   $('.bckg').css("background","rgba(0,0,0,0.1) url('img/bckg.png') no-repeat 50% 50%");

   $('.bckg').css("visibility", "hidden");}
   });



var main = function() {

	 $('.draw').click(function(){
	 	var rand = Math.floor( Math.random() * arr.length );    






           
         
          

             
          
             if (arr.length < 1 ) {
             	if (confirm('Игра окончена!Сыграть заново ?'))
                  location.reload();


             }
         if (sum == 0) {

            if (arr[rand] === 6 ){
            $('.cards1').css("background","transparent url('img/6.jpg')");
            $('.rightbar').text("Прислоняешь палец к лицу");  
            $('<li>').text('Six').prependTo('.posts');
            }
             if (arr[rand] === 7 ){
            $('.cards1').css("background","transparent url('img/7.jpg')");
            $('.startcard').css("background","url('img/7.jpg')","100%");
            $('.rightbar').text("Счет,когда 7,кратное семи и что делится на 7 надо хлопнуть.");  
            $('<li>').text('Seven').prependTo('.posts');
            }
            if (arr[rand] === 8 ){
            $('.cards1').css("background","transparent url('img/8.jpg')");
            $('.startcard').css("background","url('img/8.jpg')","100%");
            $('.rightbar').text("Тот кто достаёт её имеет права встать на 2 минуты");
            $('<li>').text('Eight').prependTo('.posts');
            }
            if (arr[rand] === 9 ){
            $('.cards1').css("background","transparent url('img/9.jpg')");
            $('.startcard').css("background","url('img/9.jpg')","100%");
            $('.rightbar').text("Вопрос,у кого 9 и тот задает любой вопрос,кто на него ответил тот пьет.");
            $('<li>').text('Nine').prependTo('.posts');
            }
            if (arr[rand] === 10 ){
            $('.cards1').css("background","transparent url('img/10.jpg')");
            $('.startcard').css("background","url('img/10.jpg')","100%");
            $('.rightbar').text("Пьют все!");
            $('<li>').text('Ten').prependTo('.posts');
            }
            if (arr[rand] === "J" ){
            $('.cards1').css("background","transparent url('img/11.jpg')");
            $('.startcard').css("background","url('img/11.jpg')","100%");
            $('.rightbar').text("Берется колода карт,человеку,которому это выпало говорит сверху/снизу больше/меньше и так три раза,если не совпало то он пьет,если выпал валет это приравнивается к пьет");
            $('<li>').text('Jack').prependTo('.posts');
            }
            if (arr[rand] === "Q" ){
            $('.cards1').css("background","transparent url('img/12.jpg')");
            $('.startcard').css("background","url('img/12.jpg')","100%");
            $('.rightbar').text("В порт пришел корабль и привез собой,надо говорить слово,и следующий будет повторять предыдущие и добавлять свое.");
            $('<li>').text('Queen').prependTo('.posts');
            }
            if (arr[rand] === "K" ){
            $('.cards1').css("background","transparent url('img/13.jpg')");
            $('.startcard').css("background","url('img/13.jpg')","100%");
            $('.rightbar').text("Король - король алкогольная карта,т.е достаётся король кому - либо,и все присутсвующие тупо пьют");
            $('<li>').text('King').prependTo('.posts');
            }
            if (arr[rand] === "A" ){
            $('.cards1').css("background","transparent url('img/14.jpg')"); 
            $('.startcard').css("background","url('img/14.jpg')","100%");
            $('.rightbar').text("Придумывается слово и перед тем как вытянуть карту,надо будет его говорить.Если не сказал кто-то и просто вытянул,то он пьет,а карта его аннулируется и уже ничего не значит.");
            $('<li>').text('Ace').prependTo('.posts');
            }

          $('.startcard').css("z-index", "10");
             $('.startcard').animate({
          left: "-285px"
         }, 500);
            $('.startcard').css("background", "url('img/back.jpg') "); 
         }


   		 if (sum >= 1 && (sum % 2 ) !== 0) {

         if (arr[rand] === 6 ){
            $('.cards2').css("background","transparent url('img/6.jpg')");
            $('.rightbar').text("Прислоняешь палец к лицу");  
            $('<li>').text('Six').prependTo('.posts');
            }
             if (arr[rand] === 7 ){
            $('.cards2').css("background","transparent url('img/7.jpg')");
            $('.startcard').css("background","url('img/7.jpg')","100%");
            $('.rightbar').text("Счет,когда 7,кратное семи и что делится на 7 надо хлопнуть.");  
            $('<li>').text('Seven').prependTo('.posts');
            }
            if (arr[rand] === 8 ){
            $('.cards2').css("background","transparent url('img/8.jpg')");
            $('.startcard').css("background","url('img/8.jpg')","100%");
            $('.rightbar').text("Тот кто достаёт её имеет права встать на 2 минуты");
            $('<li>').text('Eight').prependTo('.posts');
            }
            if (arr[rand] === 9 ){
            $('.cards2').css("background","transparent url('img/9.jpg')");
            $('.startcard').css("background","url('img/9.jpg')","100%");
            $('.rightbar').text("Вопрос,у кого 9 и тот задает любой вопрос,кто на него ответил тот пьет.");
            $('<li>').text('Nine').prependTo('.posts');
            }
            if (arr[rand] === 10 ){
            $('.cards2').css("background","transparent url('img/10.jpg')");
            $('.startcard').css("background","url('img/10.jpg')","100%");
            $('.rightbar').text("Пьют все!");
            $('<li>').text('Ten').prependTo('.posts');
            }
            if (arr[rand] === "J" ){
            $('.cards2').css("background","transparent url('img/11.jpg')");
            $('.startcard').css("background","url('img/11.jpg')","100%");
            $('.rightbar').text("Берется колода карт,человеку,которому это выпало говорит сверху/снизу больше/меньше и так три раза,если не совпало то он пьет,если выпал валет это приравнивается к пьет");
            $('<li>').text('Jack').prependTo('.posts');
            }
            if (arr[rand] === "Q" ){
            $('.cards2').css("background","transparent url('img/12.jpg')");
            $('.startcard').css("background","url('img/12.jpg')","100%");
            $('.rightbar').text("В порт пришел корабль и привез собой,надо говорить слово,и следующий будет повторять предыдущие и добавлять свое.");
            $('<li>').text('Queen').prependTo('.posts');
            }
            if (arr[rand] === "K" ){
            $('.cards2').css("background","transparent url('img/13.jpg')");
            $('.startcard').css("background","url('img/13.jpg')","100%");
            $('.rightbar').text("Король - король алкогольная карта,т.е достаётся король кому - либо,и все присутсвующие тупо пьют");
            $('<li>').text('King').prependTo('.posts');
            }
            if (arr[rand] === "A" ){
            $('.cards2').css("background","transparent url('img/14.jpg')"); 
            $('.startcard').css("background","url('img/14.jpg')","100%");
            $('.rightbar').text("Придумывается слово и перед тем как вытянуть карту,надо будет его говорить.Если не сказал кто-то и просто вытянул,то он пьет,а карта его аннулируется и уже ничего не значит.");
            $('<li>').text('Ace').prependTo('.posts');
            }

         $('.cards2').animate({
         left: "0"
         }, -100);
         $('.cards2').css("z-index", "2");
   		 $('.cards1').animate({
      	 left: "-285px"
   		 }, 500);
         $('.cards1').css("z-index", "10");
         $('.startcard').css("z-index", "2");
          
   			 
   		
   			 
             }
         else if (sum >= 1 && (sum % 2) === 0 && sum !== 0) {

          if (arr[rand] === 6 ){
            $('.cards1').css("background","transparent url('img/6.jpg')");
            $('.rightbar').text("Прислоняешь палец к лицу");  
            $('<li>').text('Six').prependTo('.posts');
            }
             if (arr[rand] === 7 ){
            $('.cards1').css("background","transparent url('img/7.jpg')");
            $('.startcard').css("background","url('img/7.jpg')","100%");
            $('.rightbar').text("Счет,когда 7,кратное семи и что делится на 7 надо хлопнуть.");  
            $('<li>').text('Seven').prependTo('.posts');
            }
            if (arr[rand] === 8 ){
            $('.cards1').css("background","transparent url('img/8.jpg')");
            $('.startcard').css("background","url('img/8.jpg')","100%");
            $('.rightbar').text("Тот кто достаёт её имеет права встать на 2 минуты");
            $('<li>').text('Eight').prependTo('.posts');
            }
            if (arr[rand] === 9 ){
            $('.cards1').css("background","transparent url('img/9.jpg')");
            $('.startcard').css("background","url('img/9.jpg')","100%");
            $('.rightbar').text("Вопрос,у кого 9 и тот задает любой вопрос,кто на него ответил тот пьет.");
            $('<li>').text('Nine').prependTo('.posts');
            }
            if (arr[rand] === 10 ){
            $('.cards1').css("background","transparent url('img/10.jpg')");
            $('.startcard').css("background","url('img/10.jpg')","100%");
            $('.rightbar').text("Пьют все!");
            $('<li>').text('Ten').prependTo('.posts');
            }
            if (arr[rand] === "J" ){
            $('.cards1').css("background","transparent url('img/11.jpg')");
            $('.startcard').css("background","url('img/11.jpg')","100%");
            $('.rightbar').text("Берется колода карт,человеку,которому это выпало говорит сверху/снизу больше/меньше и так три раза,если не совпало то он пьет,если выпал валет это приравнивается к пьет");
            $('<li>').text('Jack').prependTo('.posts');
            }
            if (arr[rand] === "Q" ){
            $('.cards1').css("background","transparent url('img/12.jpg')");
            $('.startcard').css("background","url('img/12.jpg')","100%");
            $('.rightbar').text("В порт пришел корабль и привез собой,надо говорить слово,и следующий будет повторять предыдущие и добавлять свое.");
            $('<li>').text('Queen').prependTo('.posts');
            }
            if (arr[rand] === "K" ){
            $('.cards1').css("background","transparent url('img/13.jpg')");
            $('.startcard').css("background","url('img/13.jpg')","100%");
            $('.rightbar').text("Король - король алкогольная карта,т.е достаётся король кому - либо,и все присутсвующие тупо пьют");
            $('<li>').text('King').prependTo('.posts');
            }
            if (arr[rand] === "A" ){
            $('.cards1').css("background","transparent url('img/14.jpg')"); 
            $('.startcard').css("background","url('img/14.jpg')","100%");
            $('.rightbar').text("Придумывается слово и перед тем как вытянуть карту,надо будет его говорить.Если не сказал кто-то и просто вытянул,то он пьет,а карта его аннулируется и уже ничего не значит.");
            $('<li>').text('Ace').prependTo('.posts');
            }
         $('.cards1').animate({
         left: "0"
         }, -100);
         $('.cards1').css("z-index", "2");
         $('.cards2').animate({
         left: "-285px"
         }, 500); 
         $('.cards2').css("z-index", "10");
         $('.startcard').css("z-index", "2");
         } 
   			 
            

            arr.splice(rand, 1);
   			sum = sum + 1;
        console.log(sum);


});


}

$(document).ready(main);