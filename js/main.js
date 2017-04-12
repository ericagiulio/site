var hash = "8ea2b240ea639774bcf38b3026550155aae577097f935a0048fd25a4175a4b57f9ba64ac121ed3ff2598a9c1dc6b883e356c6e9c178a83efba969f521eb00a66"



$(function() {

  var t = {
    "Cerimonia": {
     en : "Ceremony"
    },
    "Chi Siamo": {
     en : "About"
    },
    "Storia": {
     en : "Story"
    },
    "Auguri": {
     en : "Wishes"
    },
    "Regali": {
     en : "Presents"
    },
    "si sposano": {
     en : "get married"
    },
    "...finalmente!": {
     en : "...finally!"
    },
    "Vi aspettiamo": {
     en : "The Ceremony"
    },
    "26 Agosto 2017": {
     en : "August, 26 2017"
    },
    "Settembre, 17 2006": {
     en : "September, 17 2006"
    },
    "Novembre (forse Ottobre) 2007": {
     en : "November (maybe October) 2007"
    },
    "Giornate qualunque": {
     en : "Ordinary days"
    },
    "Settembre 2011": {
     en : "September 2011"
    },
    "Agosto 2014": {
     en : "August 2014"
    },
    "Agosto, 26 2017": {
     en : "August, 26 2017"
    },

    "~ Ore 16:00 ~": {
     en : "~ At 16:00 ~"
    },
    "Galleria Fotografica": {
     en : "Photo Gallery"
    },
    "Finchè un giorno...": {
     en : "Until one day..."
    },
    "Intestato a": {
     en : "Recipient"
    }
  };

  var rx = {
      "^causale": {
        en : "reference/message:  Calzolari Pescio Lista Nozze + what do you want! "
      },
      "^Ed inaspettatamente": {
        en : "And finally, we are now getting married. :')"
      },
      "^...anche Giulio": {
        en : "...Giulio joins Erica in the core of Bavaria. Time flies with friends, challenging tasks at work and worldwide travels."
      },
      "^...che cambia solo": {
        en : "...that scales only when Erica moves to Munich"
      },
      "^...cosí comincia la": {
        en : "...so begins our wandering story..."
      },
      "^Normale uscita": {
        en : "Regular cinema night with friends. The movie is so boring that Giulio starts flirting with Erica (under the unknowing eyes of the poor Stefano Delucchi)"
      },
      "^Prima lezione di": {
        en : "First lesson of \"Electromagnetic Fields\" at the University: Erica and Giulio bump into each other."
      },
      "^Aula": {
        en : "Classroom E2 :>"
      },
      "^- tanto per": {
        en : "just for fun"
      },
      "^Genovese di nascita,": {
        en : "Born in Genoa, exports his joy when defeats the grip of the couch. He loves discovering different cultures, focusing mostly on the gastronomic aspects. A night with friends, a walk in a (not too) sunny day, afternoons with his BFF: the laptop. Nerd? In his best days. ;)"
      },
      "^Cresciuta a": {
        en : "Grown up in Savona, Albisola, Vado... well, it's still unclear...since the beginning her parents taught her to travel by caravan as well as camping with tent and backpack. In spite of the travels, she keeps alive her passions: Volleyball, Sea and Friends! According to her, best days end with a beach volley among friends."
      },
      "^La vita è": {
        en : "Life is but a Journey, to travel is to live twice"
      }

   };

  if ($.cookie('lang') == "en" ){
  	$(".lang_selector").eq(0).addClass("hidden");
  	$(".lang_selector").eq(1).removeClass("hidden");
  	var _t = $('body').translate({lang: "en", t: t, rx: rx});
  } else {
  	$.cookie('lang' , "it");
  	var _t = $('body').translate({lang: "it", t: t, rx: rx});
  }

  var str = _t.g("translate");
  // console.log($.cookie('lang'));


  $(".lang_selector").click(function(ev) {
    var lang = $(this).attr("data-value");

    $(".lang_selector").removeClass("hidden");
    $(this).addClass("hidden");

    _t.lang(lang);
    $.cookie('lang' , lang);
    // console.log(lang);
    ev.preventDefault();
  });



});

$(document).ready(function() {


 $('#password').on('input', function() {
    // do something
    // console.log($(this).val())
    if (CryptoJS.SHA512($(this).val()).toString() == hash) {
    	console.log("site unlock");
    	$.cookie('password' , $(this).val() );
    	$.unblockUI();
    	$("#loginForm").addClass("hidden");

    }
});
 // $.unblockUI();

	/**
	* Scroll animation if click navbar menu
	**/
	$('a.navbar-brand, ul.navbar-nav > li > a').not('.lang_selector').bind('click', function(event) {
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


/*
* This is the plugin
*/
(function(a){a.createModal=function(b){defaults={title:"",message:"Your Message Goes Here!",closeButton:true,scrollable:false};var b=a.extend({},defaults,b);var c=(b.scrollable===true)?'style="max-height: 420px;overflow-y: auto;"':"";html='<div class="modal fade" id="myModal">';html+='<div class="modal-dialog">';html+='<div class="modal-content">';html+='<div class="modal-header">';html+='<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';if(b.title.length>0){html+='<h4 class="modal-title">'+b.title+"</h4>"}html+="</div>";html+='<div class="modal-body" '+c+">";html+=b.message;html+="</div>";html+='<div class="modal-footer">';if(b.closeButton===true){html+='<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>'}html+="</div>";html+="</div>";html+="</div>";html+="</div>";a("body").prepend(html);a("#myModal").modal().on("hidden.bs.modal",function(){a(this).remove()})}})(jQuery);

/*
* Here is how you use it
*/
$(function(){
    $('.view-pdf').on('click',function(){
        var pdf_link = $(this).attr('href');
        //var iframe = '<div class="iframe-container"><iframe src="'+pdf_link+'"></iframe></div>'
        //var iframe = '<object data="'+pdf_link+'" type="application/pdf"><embed src="'+pdf_link+'" type="application/pdf" /></object>'
        var iframe = '<object type="application/pdf" data="'+pdf_link+'" width="100%" height="500">No Support</object>'
        $.createModal({
            title:'Liguria Survival Kit',
            message: iframe,
            closeButton:true,
            scrollable:false
        });
        return false;
    });
})
