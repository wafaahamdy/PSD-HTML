// JavaScript Document




$(function() {
   
 if ($( window ).width() > 991)
  	  $('#sideNav').collapse('show');
	    
  if ($( window ).width() < 575)
  {
  	  $('#sec2imgs').removeClass("d-flex");
	  $('#simg1').addClass("d-flex");
	   $('#simg2').addClass("d-flex");
	    $('#simg3').addClass("d-flex");
  }
	  
	  
$(window).resize(function(){
  
  if ($( window ).width() > 991)
  	  $('#sideNav').collapse('show');
	  
	  if ($( window ).width() < 575)
  {
  	  $('#sec2imgs').removeClass("d-flex");
	  $('#simg1').addClass("d-flex");
	   $('#simg2').addClass("d-flex");
	    $('#simg3').addClass("d-flex");
		
  }
  else
  {
	  $('#sec2imgs').addClass("d-flex");
	  $('#simg1').removeClass("d-flex");
	   $('#simg2').removeClass("d-flex");
	    $('#simg3').removeClass("d-flex");
	  }
	
});
  
   
   
});


