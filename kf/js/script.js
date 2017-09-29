$(window).scroll(function() {
	var st = $(this).scrollTop();
	if ($(document).width() > 785) {
		if(st >= 100) {
			$("nav").addClass("fixed");
		}
		else {
			$("nav").removeClass("fixed");
		}
	}
});