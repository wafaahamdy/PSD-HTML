jQuery(function($) {

	//Preloader
	$(window).load(function(){
		adjust_imgs () ;
		if ($( window ).width() < 768)
  {
  	
		adjust_animation()}
	});

	
////adjust the position of images 
	$(window).resize(function(){
	
	adjust_imgs () ;
	
	});
	
	
	function adjust_imgs ()
	{
	
	var hh = $('#himg0').height();
    var ww = $('#himg0').width();
	
	$('#himg1').css('top',0.18*hh);
	$('#himg1').css('left',0.7*ww);
    $('#himg1').css('width',0.18*ww);
	
	$('#himg2').css('top',0.57*hh);
	$('#himg2').css('left',0.04*ww);
    $('#himg2').css('width',0.2*ww);
	
	$('#himg3').css('top',0.5*hh);
	$('#himg3').css('left',0.7*ww);
    $('#himg3').css('width',0.18*ww);
	
	$('#himg4').css('top',0.7*hh);
	$('#himg4').css('left',0.35*ww);
    $('#himg4').css('width',0.22*ww);
		
		}


function adjust_animation()
{
	
	$('.flipInY').attr ("data-wow-delay" ,"1s") ;
	}
	
});

