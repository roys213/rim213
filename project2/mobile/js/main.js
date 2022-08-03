// start
$(function(){
	$("#header .tab").click(function(e){
		e.preventDefault();
		$("body").toggleClass("fixed");
		$(".menu").toggleClass("active");
		$(".tab").toggleClass("active");

		if($(".tab").hasClass("active") == false){
			$("#gnb ul ul").hide();
			$("#gnb > ul > li").removeClass("active");
		}
	});

	$("#gnb > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false){
			$("#gnb > ul > li").removeClass("active");
			$(this).addClass("active");
			$("#gnb ul ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
		else {
			$(this).removeClass("active");
			$(this).find("ul").slideUp(300);
		}
	});
  
  var swiper=new Swiper("#start .swiper-container", {
		pagination: {
			el: "#start .swiper-pagination",
			type: "fraction"
		},
		navigation: {
			nextEl: "#main .swiper-button-next",
			prevEl: "#main .swiper-button-prev"
		},
		on: { // added
			init: function () {
				setTimeout(function(){
					$(".main_text").addClass("active");
				}, 1000);
			}
		}
	});

// page1
	var sub_swiper=new Swiper("#sub_slider .swiper-container", {
		slidesPerView: 1.5,
		spaceBetween: 10,
		pagination: {
			el: ".swiper-pagination",
			// clickable: true, // deleted
			type: "progressbar"
		},
		navigation: { // added
			nextEl: "#sub_slider .swiper-button-next",
			prevEl: "#sub_slider .swiper-button-prev"
		},
		breakpoints: {
			640: {
				slidesPerView: 3.5,
				spaceBetween: 10
			},
			920: {
				slidesPerView: 5,
				spaceBetween: 10
			}
		},
		on: { // added
			init: function(){
				var subSliderLength=$("#sub_slider .swiper-slide").length;
				$("#sub_slider .tot").text("/ "+subSliderLength);
			},
			slideChange: function(){
				var currentSlider=sub_swiper.activeIndex;
				currentSlider+=1;
				$("#sub_slider .num").text(currentSlider);
			}
		}
	});


	// 	page3
	var sub_swiper=new Swiper("#sub_slider2 .swiper-container", {
		slidesPerView: 1.5,
		spaceBetween: 10,
		pagination: {
			el: ".swiper-pagination",
			// clickable: true, // deleted
			type: "progressbar"
		},
		navigation: { // added
			nextEl: "#sub_slider2 .swiper-button-next",
			prevEl: "#sub_slider2 .swiper-button-prev"
		},
		breakpoints: {
			640: {
				slidesPerView: 3.5,
				spaceBetween: 10
			},
			920: {
				slidesPerView: 5,
				spaceBetween: 10
			}
		},
		on: { // added
			init: function(){
				var subSliderLength=$("#sub_slider2 .swiper-slide").length;
				$("#sub_slider2 .tot").text("/ "+subSliderLength);
			},
			slideChange: function(){
				var currentSlider=sub_swiper.activeIndex;
				currentSlider+=1;
				$("#sub_slider2 .num").text(currentSlider);
			}
		}
	});
});
