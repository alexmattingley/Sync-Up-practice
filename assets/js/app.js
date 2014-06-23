(function($){

	/* jshint devel:true */
	'use strict';

	window.syncUp = {};

	var SCU = window.syncUp;

	var $window = $(window);

	SCU.init = function(){
		SCU.setElements();
		SCU.basics();
		SCU.vertAlign();
	};

	SCU.setElements = function(){
		SCU.elems				= {};
	};

	SCU.basics = function(){

		// jQuery Lazyload
		$('img.lazy').lazyload({
			threshold   : 200,
			effect      : 'fadeIn',
		});
		// usage: <img class="lazy" data-original="" src="gray.png" alt="" />

		// Fastclick.js - Polyfill to remove click delays on browsers with touch UIs
		$(function() {
			window.FastClick.attach(document.body);
		});

		// SimpleAnchors
		$.simpleAnchors({
			offset: 79, // 80-1, header height on scroll
			easing: 'easeInOutCubic'
		});
		var nav = responsiveNav(".nav-collapse");
		
		// $("#owl-demo").owlCarousel({
	 //      navigation : true, // Show next and prev buttons
	 //      slideSpeed : 300,
	 //      paginationSpeed : 400,
	 //      singleItem: true
	 //  	});
		// var owl = $("#owl-demo");
 
		//   owl.owlCarousel({
		//       items : 2, //10 items above 1000px browser width
		//       itemsDesktop : [1000,2], //5 items between 1000px and 901px
		//       itemsDesktopSmall : [900,2], // betweem 900px and 601px
		//       itemsTablet: [600,2], //2 items between 600 and 0
		//       itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
		//   });
		 
		//   // Custom Navigation Events
		//   $(".next").click(function(){
		//     owl.trigger('owl.next');
		//   })
		//   $(".prev").click(function(){
		//     owl.trigger('owl.prev');
		//   })
		//   $(".play").click(function(){
		//     owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
		//   })
		//   $(".stop").click(function(){
		//     owl.trigger('owl.stop');
		//   })
		var owl = $("#owl-demo");
 
  		owl.owlCarousel({
     
	      itemsCustom : [
	        [0, 1],
	        // [450, 1],
	        // [600, 1],
	        // [700, 2],
	        // [1000, 2],
	        // [1200, 2],
	        // [1400, 2],
	        [1600, 1]
	      ],
	      navigation : true
	 
	  		});
	};

	SCU.vertAlign = function() {
		// Vertical Align
		var vertAlign = function() {
			$('.valign').each(function() {
				var newHeight = $(this).parent().height();
				$(this).parent().height(newHeight);
			});
		};
		vertAlign();
	};

	$(document).ready(function(){

		SCU.init();

	});//close document ready

})(window.jQuery);