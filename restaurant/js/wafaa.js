// JavaScript Document
//Scroll Menu
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>100 ){
			$('#wafaa_bar').addClass('bar_opecity');
		} else {
			$('#wafaa_bar').removeClass('bar_opecity');
		}
	});