$(function(){
  // $("body").addClass("fixed");

	// start
	// tab
	$("#header .tab").click(function(e){
    console.log("tab!!");
		e.preventDefault();
		// $("body").toggleClass("fixed");
		$("#header").toggleClass("active")
		$(".menu").toggleClass("active");
		$(".tab").toggleClass("active");

		if($(".tab").hasClass("active") == false){
			$("#gnb ul ul").hide();
			$("#gnb > ul > li").removeClass("active");
		}
	});
	
	// gnb
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

	// slider
  var swiper=new Swiper(".main_slider .swiper-container", {
		pagination: {
			// el: "#header .swiper-pagination",
			type: "fraction"
		},
		on: {
			init: function(){
				setTimeout(function(){
					$(".title").addClass("active");
				}, 100);
			}
		}
	});


	var sub_swiper=new Swiper("#sub_slider .swiper-container", {
		slidesPerView: 1.5, // modified
		spaceBetween: 10, // modifed
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: { // added
			640: {
				slidesPerView: 3.5,
				spaceBetween: 10
			},
			920: {
				slidesPerView: 5,
				spaceBetween: 10
			}
		}
	});

	// var sub_swiper1=new Swiper("#sub_slider1 .swiper-container", {
	// 	effect: "flip",
	// 	grabCursor: true,
	// 	pagination: {
	// 		el: ".swiper-pagination",
	// 		clickable: true
	// 	},
	// 	navigation: {
	// 				nextEl: ".swiper-button-next",
	// 				prevEl: ".swiper-button-prev",
	// 			},
	// });
	

	// page1
	var sub_slider1=new Swiper("#sub_slider1 .swiper-container", {
		slidesPerView: 1.5, 
		spaceBetween: 10,
		pagination: {
			el: "#sub_slider1 .swiper-pagination",
			type: "progressbar"
		}, 
		navigation: {
			nextEl: ".button .swiper-button-next",
			prevEl: ".button .swiper-button-prev",
		},

		breakpoints: {
			640: { 
				slidesPerView: 3.5,
				spaceBetween: 10,
			},
			920: {
				slidesPerView: 5,
				spaceBetween: 10,
			},
		},
		on: {
			init: function(){
				var subLength=$("#sub_slider1 .swiper-slide").length; 
				$(".cunt .tot").text("/"+subLength); //
			},
			slideChange: function(){
				// console.log(sub_swiper.activeIndex); //현재값 받는다,
				var n=sub_slider1.activeIndex;
				n=n+1;
				$("#page1 .num").text(n);
			}
		}
	});


	// page3
	var sub_slider3=new Swiper("#sub_slider3 .swiper-container", {
		slidesPerView: 1.5, 
		spaceBetween: 10,
		pagination: {
			el: "#sub_slider3 .swiper-pagination",
			type: "progressbar"
		}, 
		navigation: {
			nextEl: ".button .swiper-button-next",
			prevEl: ".button .swiper-button-prev",
		},

		breakpoints: {
			640: { 
				slidesPerView: 3.5,
				spaceBetween: 10,
			},
			920: {
				slidesPerView: 5,
				spaceBetween: 10,
			},
		},
		on: {
			init: function(){
				var subLength=$("#sub_slider3 .swiper-slide").length; 
				$(".cunt .tot").text("/"+subLength);
			},
			slideChange: function(){
				var n=sub_slider3.activeIndex;
				n=n+1;
				$("#page3 .num").text(n);
			}
		}
	});

	
	// page4
	$(".box_content .box").click(function(){
		$(".box_content .box").removeClass("active");
		$(this).addClass("active");
	});
});
