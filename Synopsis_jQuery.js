$(document).ready(function() { 
	
	$("span.spoiler").hide();
	
	 $('<a class="reveal">Reveal Spoiler &gt;&gt;</a> ').insertBefore('.spoiler');

	$("a.reveal").click(function(){
		$(this).parents("p").children("span.spoiler").fadeIn(2500);
		$(this).parents("p").children("a.reveal").fadeOut(600);
	});

}); 