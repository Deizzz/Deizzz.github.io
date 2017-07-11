    jQuery(function($) {
	        $(window).scroll(function(){
	            if($(this).scrollTop()>50){
	                $('#nav').addClass('navbar-fixed-top');
	            }
	            else if ($(this).scrollTop()<50){
	                $('#nav').removeClass('navbar-fixed-top');
	            }
	        });
	    });