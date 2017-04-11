var hash = "8ea2b240ea639774bcf38b3026550155aae577097f935a0048fd25a4175a4b57f9ba64ac121ed3ff2598a9c1dc6b883e356c6e9c178a83efba969f521eb00a66"


// var lang = new Lang();
// lang.dynamic('en', 'js/langpack/uk.json');
// lang.init({
// 	defaultLang: 'uk'
// });


$(document).ready(function() {


 $('#password').on('input', function() {
    // do something
    // console.log($(this).val())
    if (CryptoJS.SHA512($(this).val()).toString() == hash) {
    	console.log("site unlock");
    	$.cookie('password' , $(this).val() );
    	$.unblockUI();
    	$("#loginForm").css("display", "none");
    	
    }
});
 // $.unblockUI();
 
	/**
	* Scroll animation if click navbar menu
	**/
	$('a.navbar-brand, ul.navbar-nav > li > a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

	/**
	* Navbar collapse close if clicking menu on mobile
	**/
    if($(window).width() < 767){
    	$('ul.navbar-nav > li > a').on('click', function(){
    		$('.navbar-collapse').removeClass('in');
    		$('.navbar-collapse').attr('style', 'height: 1');
    	});
    }

	/**
	* Call tooltip & carousel bootstrap js
	**/
    $('[rel="tooltip"]').tooltip();
    $('#wedding-photo').carousel();

	/**
	* Call colorbox on wedding photo gallery
	**/
    if($(window).width() > 767){
		$(".gallery-images").colorbox({rel:'gallery-images', width:'auto', height: '85%'});
	}else{
		$(".gallery-images").colorbox({rel:'gallery-images', width:'85%', height: 'auto'});
	}



	/**
	* Display map in contact section using gmap 3
	**/
	// $("#maps").gmap3({
	// 	 map:{
	// 	    options:{
	// 	      center:[-7.867555,110.388502],
	// 	      zoom: 16,
	// 		  scrollwheel: false
	// 	    }
 // 		 },
 // 		 marker:{
 // 		 	values : [
 // 		 		{latLng:[-7.867555,110.388502],data:'<img src="https://dl.dropboxusercontent.com/u/29545616/Preview/ditinggalrabi.png">',  options:{icon: 'https://dl.dropboxusercontent.com/u/29545616/Preview/location.png'}}
 // 		 	],
 // 		 	events : {
 // 		 	 click: function(marker, event, context){
	// 	        var map = $(this).gmap3("get"),
	// 	          infowindow = $(this).gmap3({get:{name:"infowindow"}});
	// 	        if (infowindow){
	// 	          infowindow.open(map, marker);
	// 	          infowindow.setContent(context.data);
	// 	        } else {
	// 	          $(this).gmap3({
	// 	            infowindow:{
	// 	              anchor:marker, 
	// 	              options:{content: context.data}
	// 	            }
	// 	          });
	// 	        }
	// 	      }
 // 		 }
 // 		 }

	// });
	
});

