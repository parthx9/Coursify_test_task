jQuery(function ($) {
    'use strict'
 
    $('.owl-carousel').owlCarousel({
		items: 1,
		loop: true,
		margin: 15,
		singleItem: true,
		nav: false,
		dots: true,
		animateOut: 'fadeOut',
		smartSpeed: 1000,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
    });
  });
window.onload = (e) => {
    
  };