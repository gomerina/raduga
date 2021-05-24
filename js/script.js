$(document).ready(function() {
	$('.header__slider').slick({
		arrows:true,
		dots:false,
		adaptiveHeight:true,
		slidesToShow:1,
		slidesToScroll:1,
		speed:300,
		easing:'ease',
		infinite:false,
		autoplay:false,
		autoplaySpeed:0,
		draggable:false,
	});
});
$(document).ready(function() {
	$('.news__slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:2,
		slidesToScroll:1,
		speed:300,
		easing:'ease',
		infinite:false,
		autoplay:false,
		autoplaySpeed:0,
		draggable:false,
		  responsive: [
	    {
	      breakpoint: 1520,
	      settings: {
	        slidesToShow: 1.7,
	      }
	    },
	    {
	      breakpoint: 1201,
	      settings: {
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 661,
	      settings: {
	        slidesToShow: 1.3
	      }
	    }
	  ]
	});
});
$(document).ready(function() {
  $(".menuToggle").click(function() {
    $(this).toggleClass("active");
    $('.menu').slideToggle(300, function(){
      if($(this).css('display') === "none"){
        $(this).removeAttr('style');
      }
    });
  });
});

