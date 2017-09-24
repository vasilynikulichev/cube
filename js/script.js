$(function() {
	$(document).mousemove(function(evt){
		$('#cube').css({'transform':'rotateX('+evt.pageY+'deg) rotateY('+evt.pageX+'deg)'});
	});
});