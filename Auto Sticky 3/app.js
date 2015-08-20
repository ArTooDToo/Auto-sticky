var main = function(){
	
	
	/*ustawianie wysokosci okna, blocku kolumny lewej*/
	function setHeight() {
    windowHeight = $(window).innerHeight();
		$('.kolumna').css('min-height', windowHeight);
		$('.block').css('min-height', windowHeight);
		$('.block2').css('min-height', windowHeight);
		/*pobieranie wysokosci okna*/
		var elmnt = $('.kolumna')[0].scrollHeight;
		var txt = "Wysokosc " + elmnt + "   px";
		/*wyswietlenie wysokosci okna*/
		document.getElementById('demo').innerHTML = txt;
		/*ustawnie wys kolumny prawej*/
		if($(window).innerHeight() > 1700){
			$('.kolumna2').css('min-height', windowHeight);
			$('.kolumna').removeClass('fixed');
		}
		
		$(window).bind('scroll', function() {
			
			if($(window).scrollTop() >= $('.kolumna2').offset().top + $('.kolumna2').outerHeight() - window.innerHeight) {
				$('.kolumna').removeClass('fixed');
				$('.kolumna').css('margin-top', ($('.kolumna2').outerHeight() - window.innerHeight)+"px");
			}
			if($(window).scrollTop() < $('.kolumna2').offset().top + $('.kolumna2').outerHeight() - window.innerHeight){
				$('.kolumna').addClass('fixed');
				$('.kolumna').css('margin-top', "0px");
			}
			if($(window).scrollTop() < $('.kolumna2').offset().top){
				$('.kolumna').removeClass('fixed');
			}
		});
		/*nie działa umieszczenie kolum w środku, działa tylko na górze*/
	
	};
	
	
	
	
	setHeight();
		$(window).resize(function() {
		setHeight();
	});
	
  
};

$(document).ready(main);




