jQuery(document).ready(function(){
	jQuery(".code").hover(function() {
	var width = jQuery("div", this).width();
	var pad = width + 5;
	if (width > 590) {
		jQuery(this)
			.stop(true, false)
			.css({
				zIndex: "100",
				position: "relative"
			})
			.animate({
				width: pad + "px"
			});
		}
	}, function() {
			jQuery(this).stop(true, false).animate({
				width: 590
		});
	});
});