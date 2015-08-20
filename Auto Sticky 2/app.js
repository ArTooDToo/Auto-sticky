var main = function(){
	var navOffset = $(".info").offset().top;
	var article = $("#2").offset().top;
	var article2 = $("#koniec").offset().top;
	$(window).scroll(function() {
		
		scrollPos = jQuery(window).scrollTop();
		
		if (scrollPos > article) {  /*z początkiem drugiego artykulu dostajes fix'a*/
			$(".info").addClass("fixed");
		} else{
			$(".info").removeClass("fixed");
		}
		if(scrollPos > article2){
			$(".info").removeClass("fixed");
		}
	});
	
	
	
	
	
};
$(document).ready(main);