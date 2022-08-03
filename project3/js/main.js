$(function(){
	//1) page 이동관련 : scroll이벤트 관련
	var t=0; //윈도우 상단 변수
	var n=0; //가장 중요한 카테고리 변수!!! 주인공~
	//모든 인터렉션은 번호로 되어있다.

	$(window).scroll(function(){
		t=$(window).scrollTop();
		// console.log(t);


		//if($(window).scrollTop() < $("#page1").offset().top){
			// t < 700(1page높이) 가 안되는 이유, 리사이즈시 높이가 변하니까!!!!
			// n=0;
			//n은 카테고리 번호
			// 0 일때 헤더 활성화.

		//}
		if(t < $("#page1").offset().top-winHalf){
			n=0;
		}
		else if(t < $("#page2").offset().top-winHalf){
			n=1;
		}
		else if(t < $("#page3").offset().top-winHalf){
			n=2;
		}
		else if(t < $("#page4").offset().top-winHalf){
			n=3;
		}
		else if(t < $("#page5").offset().top-winHalf){
			n=4;
		}
		else{
			n=5;
		}
		console.log(n);

		$("#gnb li a").removeClass("on");
		$("#gnb li").eq(n).find("a").addClass("on");

		if(t > 100){
			$(".menu_zone").addClass("active")
			$(".btn_top").addClass("active");
		}
		else{
			$(".menu_zone").removeClass("active")
			$(".btn_top").removeClass("active");

		}

		if(n == 0){
			$("#header").addClass("active");
		}
		else{
			$("#page"+n).addClass("active");
		}
	});
	
	//2) 화면크기 조정관련 : resize 관련
	//반만 내려와도 다음페이지 다 활성화되도록!
	var winHalf;
	
	$(window).resize(function(){
		winHalf=$(window).height()/2;
	});
	$(window).trigger("resize");
	$(window).trigger("scroll");


	//3) 탭 이동 관련 : click 이벤트
	$(".tab").click(function(e){
		e.preventDefault();
		$("body").toggleClass("static"); //화면작을시, 텝메뉴옆에 스크롤바나오는거 방지
		$(".mobile").toggleClass("active");
		$(".tab").toggleClass("active");
		$(".dim").toggleClass("active");
	});
	$(".dim").click(function(){
		$("body").removeClass("static");
		$(".mobile").removeClass("active");
		$(".tab").removeClass("active");
		$(".dim").removeClass("active");
	});

	// 4) 메뉴 클릭 이동 관련:
	// pcmenu
	var topArea; //카테고리 id이름
	var topPos; //카테고리 위치

	$("#gnb li").click(function(e){
		e.preventDefault();
		topArea=$(this).find("a").attr("href"); //<a href="#header">
		// console.log(topArea); //"#header"

		topPos=$(topArea).offset().top; // $("#header").offset().top
		// console.log(topPos);

		$("html").animate({scrollTop : topPos}, 400);
	});

	//바일 gnb복사하는 것
	$("#m_gnb li").click(function(e){
		e.preventDefault();
		$("body").removeClass("static");
		$(".mobile").removeClass("active");
		$(".tab").removeClass("active");
		$(".dim").removeClass("active");

		topArea=$(this).find("a").attr("href");
		topPos=$(topArea).offset().top;
		$("html").delay(500).animate({scrollTop : topPos}, 400);
	});
})













// $(function(){
// 	// 1) ������ �̵� ����
// 	var t=0;
// 	var n=0;
// 	var w;
// 	var winHalf;
// 	var topPos=0;
// 	var categoryFlag=false;

// 	$("#gnb li").eq(n).find("a").addClass("on");

// 	$(window).scroll(function(){
// 		t=$(window).scrollTop();

// 		if(t < $("#page1").offset().top-winHalf){
// 			n=0;
// 		}
// 		else if(t < $("#page2").offset().top-winHalf){
// 				n=1;
// 		}
// 		else if(t < $("#page3").offset().top-winHalf){
// 			n=2;
// 		}
// 		else if(t < $("#page4").offset().top-winHalf){
// 			n=3;
// 		}
// 		else if(t < $("#page5").offset().top-winHalf){
// 			n=4;
// 		}
// 		else{
// 			n=5;
// 		}

// 		if(t > 100){
// 			$(".btn_top").addClass("active");
// 			$(".menu_zone").addClass("active");
// 		}
// 		else{
// 			$(".btn_top").removeClass("active");
// 			$(".menu_zone").removeClass("active");
// 		}

// 		$("#gnb li a").removeClass("on");
// 		$("#gnb li").eq(n).find("a").addClass("on");

// 		if(categoryFlag){
// 			return;
// 		}
// 		else{
// 			if(n == 0){
// 				$("#header").addClass("active");
// 			}
// 			else{
// 				$("#page"+n).addClass("active");

// 				if(n == 5){
// 					categoryFlag=true;
// 				}
// 			}
// 		}
// 	});

// 	// 2) ȭ�� ũ�� ���� ����
// 	$(window).resize(function(){
// 		// w=$(window).width();
// 		w=window.innerWidth;
// 		winHalf=$(window).height()/2;

// 		if(w > 720){
// 			if($(".mobile").hasClass("active")){
// 				$(".dim").trigger("click");
// 			}
// 		}

// 		$(window).trigger("scroll");
// 	});
// 	$(window).trigger("resize");

// 	// 3) �� �̵� ����
// 	$(".tab").click(function(e){
// 		e.preventDefault();
// 		$("body").toggleClass("static");
// 		$(".mobile").toggleClass("active");
// 		$(".tab").toggleClass("active");
// 		$(".dim").toggleClass("active");
// 	});
// 	$(".dim").click(function(){
// 		$("body").removeClass("static");
// 		$(".mobile").removeClass("active");
// 		$(".tab").removeClass("active");
// 		$(".dim").removeClass("active");
// 	});

// 	// 3) �޴� Ŭ�� �̵� ����
// 	$("#gnb li").click(function(e){
// 		e.preventDefault();
// 		topPos=$(this).find("a").attr("href");
// 		topPos=$(topPos).offset().top;
// 		$("html").animate({scrollTop:topPos}, 400);
// 	});
// 	$("#m_gnb li").click(function(e){
// 		e.preventDefault();
// 		$(".dim").trigger("click");
// 		topPos=$(this).find("a").attr("href");
// 		topPos=$(topPos).offset().top;
// 		$("html").delay(400).animate({scrollTop:topPos}, 400);
// 	});

// 	// 4) ��� �̵� ����
// 	$(".btn_top").click(function(e){
// 		e.preventDefault();
// 		$("html").animate({scrollTop:0}, 400);
// 	});
// });