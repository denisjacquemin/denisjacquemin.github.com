jQuery(document).ready(function(){
	jQuery(".code").hover(function() {
	    jQuery(this)
	    .stop(true, false)
	    .css({
	        zIndex: "100",
	        
	    })
    });
	
	//jQuery(".code").hover(function() {
	//var width = jQuery("code", this).width();
	//var pad = width + 30;
	//if (width > 748) {
	//	jQuery(this)
	//		.stop(true, false)
	//		.css({
	//			zIndex: "100",
	//			position: "relative"
	//		})
	//		.animate({
	//			width: pad + "px"
	//		});
	//	}
	//}, function() {
	//		jQuery(this).stop(true, false).animate({
	//			class: 'sixteen columns'
	//	});
	//});
});






















