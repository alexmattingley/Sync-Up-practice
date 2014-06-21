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
		
		$("#owl-demo").owlCarousel({
	      navigation : true, // Show next and prev buttons
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      singleItem: true
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