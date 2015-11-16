$(document).ready(function(){

	$('.everywhere').click(function(){
		$('.letter').css({width: parseInt($('.letter').css('width'), 10) + 15 + 'px'});
	});

});