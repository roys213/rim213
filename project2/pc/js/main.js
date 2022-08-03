$(function(){
	$("#gnb > ul > li").hover(
		function(){
			$(".menu").addClass("active")
			$(".menu").removeClass("active");
		}
	);
	$("#gnb > ul > li:first-child > a").focusin(function(){
		$(".menu").addClass("active");
	});
	$("#gnb li:last-child li:last-child a").focusout(function(){
		$(".menu").removeClass("active");
	});
	$("#gnb > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");
	});
	$("#gnb li li:last-child a").focusout(function(){
		$(this).parent().parent().parent().removeClass("active");
	});

	// swiper
	var swiper=new Swiper(".mainSwiper", {
		speed: 1200,
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		// loop: true, // modified
		autoplay: {
			delay: 5000,
		},

		pagination: {
			el: ".swiper-pagination",
		},
	});

	// notice
	var descN=0;

	$(".notice .title li").eq(descN).addClass("active");
	$(".notice .desc div").eq(descN).addClass("active");

	$(".notice .title li").click(function(){
		descN=$(this).index();
		$(".notice .title li").removeClass("active");
		$(".notice .title li").eq(descN).addClass("active");
		$(".notice .desc div").removeClass("active");
		$(".notice .desc div").eq(descN).addClass("active");
	});


	var familyPos=0;
	var bannerWidth=164;

	$(".prev").click(function(e){
		e.preventDefault();
		rightMoving();
	});
	$(".next").click(function(e){
		e.preventDefault();
		leftMoving();
	});
	function leftMoving(){
		familyPos-=bannerWidth;
		$(".site_wrapper ul").animate({left:familyPos}, 500, function(){
			$(this).append($(".site_wrapper ul li:first-child"));
			familyPos+=bannerWidth;
			$(this).css({left:familyPos});
		});
	}
	function rightMoving(){
		$(".site_wrapper ul").prepend($(".site_wrapper ul li:last-child"));
		familyPos-=bannerWidth;
		$(".site_wrapper ul").css({left:familyPos});
		familyPos+=bannerWidth;
		$(".site_wrapper ul").animate({left:familyPos}, 500);
	}
});
