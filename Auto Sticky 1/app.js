var main = function(){
		$(window).scroll(function(){
		if($(window).scrollTop() > 500){
			$('.left').addClass('fixed');
		}
		if($(window).scrollTop() < 500){
			$('.left').removeClass('fixed');
		}
		if($(window).scrollTop() >800){	/*usunac addClass re 
										i dodac olbiczeniea*/
			$('.left').removeClass('fixed');
			$('.left').addClass('re');
		}
		if($(window).scrollTop() < 800){
			$('.left').addClass('fixed');
			$('.left').removeClass('re');
		}
		if($(window).scrollTop() < 500){
			$('.left').removeClass('fixed');
		}
		});
};
$(document).ready(main);