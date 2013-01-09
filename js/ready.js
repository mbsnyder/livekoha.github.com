$(document).ready(function () {

	$("#testimonials li").click(function(){
		// $(this).parents().find("blockquote.active").removeClass("active");
		$(this).find("blockquote.full").toggleClass("active");
	});
	
	$("#screenshot").addClass("animate");

// END ON READY
});