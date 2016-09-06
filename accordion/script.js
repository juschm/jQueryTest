$(document).ready(function (){

	$('.accordion li .title').click(function (){
		$(this).siblings().slideToggle(300, 'linear');
		$(this).children().html('-');

		var isOpen = $(this).parents('li').data('isOpen');
		

		if (isOpen) {
			$(this).children().html('+');
		} else {
			$(this).children().html('-');
		}

		$(this).parents('li').data('isOpen', !isOpen);

		console.log('isOpen',isOpen);

		$(this).parent().siblings().find('.content').slideUp(300, 'linear');
		$(this).parent().siblings().find('.title span').html('+');

		$(this).parent().siblings().data('isOpen',false);
	});



});