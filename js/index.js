$(document).ready(function(){
  // $("p").click(function(){
  //   $(this).hide();
  // });
   $(".like").click(function(){
      $('.like').css({"color":"#0284FE"})
      $('.dislike').css({"color":"#AEAEAE"})
   });

   $(".dislike").click(function(){
          $('.dislike').css({"color":"#0284FE"})
          $('.like').css({"color":"#AEAEAE"})
	   });
 //   	$('.mySelector').funnyText({
	// 	speed: 700,
	// 	borderColor: 'black',
	// 	activeColor: 'white',
	// 	color: 'black',
	// 	fontSize: '7em',
	// 	direction: 'both'
	// });
  $('.mySelector').funnyText();

});