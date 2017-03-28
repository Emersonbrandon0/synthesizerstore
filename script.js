$(document).ready(function(){
	var button=$('.button');
	var wrapper2=$('.wrapper2');

	$(button).click(function(){
		$('.subline').slideUp();
		$('.tagline').delay(500).slideUp();
		$(button).delay(1000).hide(500);
		$(wrapper2).css("display","inline");
	});
	$('.button2').click(function(){
		$('.tagline2').slideUp();
		$('.imgRow').slideUp();
		$('.button2').hide(500);
		$('.wrapper3').css("display","inline");
	});
	$('.button3').click(function(){
		$('.tagline3').slideUp();
		$('.video1').slideUp();
		$('.headbob').slideUp();
		$('.button3').hide(500);
		$('.wrapper4').css("display","inline");
		$('body').css('background-attachment',"fixed");
		$('body').css('background-repeat',"no-repeat");
		$('body').css('background-size',"100% 100%");
		$('.tagline4').delay(500).fadeOut(500).fadeIn(250).delay(500).fadeOut(500).fadeIn(250).delay(500).fadeOut(500).fadeIn(250).delay(500).fadeOut(500,function(){
			$('.wrapper5').slideDown(750);
		});


	});
});