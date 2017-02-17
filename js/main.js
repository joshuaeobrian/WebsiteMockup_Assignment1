var count = 0;

$('#buyNow').click(function function_name(argument) {
	count += 1;
	$('#buyNow').text('ADDING TO CART!');
	$('#buyNow').css('background-color','#FF5421').css('color','#fff');
	$('#count').text(count);

	setTimeout(function() {
		$('#buyNow').text("BUY NOW!")
		$('#buyNow').css('background-color','#fff').css('color','#FF5421');
	},2000);
});

$('#sizeFitLink').click(function(){
	// $('#productDetailPage').hide();
	$('#sizeFitPage').css('dvisibility','visible');
	
	// $('#ratingPage').hide();
});


$('.nav1 a, .nav2 a').click(function() {
		$('.nav1 .active, .nav2 .active').removeClass('active');
		$(this).addClass('active');
    	$(this).
	});
$('.contentNav a').click(function() {
		$('.contentNav .active').removeClass('active');
		$(this).addClass('active');
	});

