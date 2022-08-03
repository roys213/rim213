	$(function(){
		// tab
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
		$("#gnb > ul > li").hover(
			function(){
				$(".top").addClass("over");
			},
			function(){
				$(".top").removeClass("over");
			}
			
			// if($(this).hasClass("active") == false){
			// 	$("#gnb > ul > li").removeClass("active");
			// 	$(this).addClass("active");
			// 	$("#gnb ul ul").slideUp(300);
			// 	$(this).find("ul").slideDown(300);
			// }
			// else {
			// 	$(this).removeClass("active");
			// 	$(this).find("ul").slideUp(300);
			
		);
		// menu
		var w;
		$(".tab").click(function(e){
			e.preventDefault();
			$(".menu").addClass("active");
		});
		$(window).resize(function(){
			w=$(window).width();
	
			if(w > 600){
				if($("#mobile").hasClass("active")){
					$("#mobile").removeClass("active");
					$(".dim").removeClass("active");
				}
			}
		});
	})