//the main javaScript
$(document).ready(function(){
    $("<img>", {
		"appendTo": ".nav",
		"class": "imgportrait",
		"src": "images/tabletedited.jpg",
		"size": "1400w",
		/*"srcset": "tablet-791051.jpg 600w" + "tablet-791051.jpg 100w",*/
    });
    $("<div/>", {
		"appendTo": ".nav",
		"class": "navbar",
		"html": "<div/><div/><nav><div/><div/><div/></nav>",
	});
	$(".navbar").find("nav").eq(0).attr({
		"class": "{{c0}}",
	});
	$(".navbar").find("div").eq(1).html("<i class='material-icons'>&#xE5D2;</i>").attr({
		"class": "{{c3}} navbar_link-toogle",
	});
	$(".navbar").find("div").eq(0).html("<a href='{{hN0}}'>{{dN0}}</a>").attr({
		"class": "{{c3}} navbar_link-brand",
	});
	$(".navbar").find("div").eq(2).html("<a href='{{hN1}}'>{{dN1}}</a>").attr({
		"class": "{{c3}} scroll1",
	});
	$(".navbar").find("div").eq(3).html("<a href='{{hN2}}'>{{dN2}}</a>").attr({
		"class": "{{c3}}",
	});
	$(".navbar").find("div").eq(4).html("<a href='{{hN3}}'>{{dN3}}</a>").attr({
		"class": "{{c3}}",
	});
	$("<img>", {
		"appendTo": ".nav",
		"class": "imglogocenter",
		"src": "images/logo.png",
    });
    //class in array
	var classes = ['navbar_items', 'navbar_link', 'navbar_link-toggle', 'navbar_link', 'navbar_link-toogle', 'scroll1'];
	//STORAGE AND VUE ELEMENTS
	var navDes = ['Введение в цифровую культуру', 'Технологии Интернета и WEB', 'Технологии программирования', 'Цифровая этика'];
	var iconM = "&#xE5D2;";
	//LINKS EN EL ORDEN QUE APARECEN
	var linksNav = ['https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DIGCUL+summer_2018/info', 'https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DIGCUL+summer_2018/courseware/c40a48c6d822423a8f04a1ee68df02db/4267d2efea484ba797a66280f0236800/', 'https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DIGCUL+summer_2018/courseware/73362e65a3af43cd942b1b0dfc9953d8/88bfbd1ca83e46a8bb00cc92258d2c32/', 'https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DIGCUL+summer_2018/courseware/8774d6e7531d416697bcee8866149cc8/e4aaddaa34c742f38834a719447a4fed/'];
	//VUE IN ACTION
	new Vue({
		el: '.nav',
		data: {
			c0: classes[0],
			c3: classes[3],
			icon: iconM,
			hN0: linksNav[0],
			hN1: linksNav[1],
			hN2: linksNav[2],
			hN3: linksNav[3],
			dN0: navDes[0],
			dN1: navDes[1],
			dN2: navDes[2],
			dN3: navDes[3],
		}
	});

	/*
	FUCTION RESPONSIVE NAV 
	*/

	$(".navbar_link-toogle").click(function(){
		$(".navbar_items").slideToggle( 800 );
	});
	$(".navbar_items").click(function() {
		console.log('show nothing for this project!');
    });
    $("<div>",{
        "appendTo": ".curso",
        "class": "row",
    });
    $("<div>",{
        "appendTo": ".row",
        "class": "cursoTitle cT",
        html: "<h1>",
    });
    $(".cT").find("h1").eq(0).html("Все лекции курса").attr({
        "class": "cursoTitle_h1",
    });

    /*
	First container
	*/
	$("<div>",{
		"appendTo": ".ctr1p",
		"class": "row",
	});
	$("<div>",{
		"appendTo": ".row",
		"class": "container1",
	});
	$("<div>",{
		"appendTo": ".container1",
		"class": "inline1",
		//
	});
	$("<div>",{
		"appendTo": ".inline1",
		"class": "post1-l a1 margin_600",
		html: "<a><img><p/><h2/><ul><li/><li/><li/><li/><li/></ul><div/></a>",
	});
	$(".a1").find("img").eq(0).attr({
		"src": "images/web500.png",
		"class": "imgpost1-l",
	});
	$(".a1").find("p").eq(0).html("цифровой культуре - курса").attr({
		"class": "pf1",
	});
	$(".a1").find("h2").eq(0).html("Fundamental").attr({
		"class": "hf1",
	});
	$(".a1").find("li").eq(0).html("Технологии интернета и Web.").attr({
		"class": "pf2",
    });
    $(".a1").find("li").eq(1).html("Архитектура ЭВМ и ОС.").attr({
		"class": "pf2",
    });
    $(".a1").find("li").eq(2).html("Технологии программирования.").attr({
		"class": "pf2",
    });
    $(".a1").find("li").eq(3).html("Сетевые технологии.").attr({
		"class": "pf2",
    });
    $(".a1").find("li").eq(4).html("Высокопроизводительные вычисления.").attr({
		"class": "pf2",
	});
	$(".a1").find("div").html("Перый курсе").attr({
		"class": "btn mtop More",
		"title": "Let's go to the first course!",
	});
	$(".a1").find("a").eq(0).attr({
		href: "pages/first.html",
		
	});
    //Second COntainer

	$("<div>",{
		"appendTo": ".inline1",
		"class": "post1-l a2 margin_600",
		html: "<a><img><p/><h2/><ul><li/><li/><li/><li/><li/></ul><div/></a>",
	});
	$(".a2").find("img").eq(0).attr({
		"src": "images/web2500.png",
		"class": "imgpost1-l",
	});
	$(".a2").find("p").eq(0).html("цифровой культуре - курса").attr({
		"class": "pf1",
	});
	$(".a2").find("h2").eq(0).html("Service").attr({
		"class": "hf1",
	});
	$(".a2").find("li").eq(0).html("Цифровое образование.").attr({
		"class": "pf2",
    });
    $(".a2").find("li").eq(1).html("Open Science.").attr({
		"class": "pf2",
    });
    $(".a2").find("li").eq(2).html("Современные технологии научной коллаборации.").attr({
		"class": "pf2",
    });
    $(".a2").find("li").eq(3).html("Блокчейн-сервисы: цифровая валюта, умные контракты.").attr({
		"class": "pf2",
    });
    $(".a2").find("li").eq(4).html("Цифровые гуманитарные науки (Digital Humanities) в культуре и искусстве.").attr({
		"class": "pf2",
    });
	$(".a2").find("div").html("Второй курсе").attr({
		"class": "btn mtop",
		"title": "Let's go to the Second course!",
	});
	$(".a2").find("a").eq(0).attr({
		href: "pages/first.html",
		
	});

	//Third Container 

	$("<div>",{
		"appendTo": ".inline1",
		"class": "post1-l a3 margin_600",
		html: "<a><img><p/><h2/><ul><li/><li/><li/><li/><li/></ul><div/></a>",
	});
	$(".a3").find("img").eq(0).attr({
		"src": "images/web3500.png",
		"class": "imgpost1-l",
	});
    $(".a3").find("p").eq(0).html("цифровой культуре - курса").attr({
		"class": "pf1",
	});
	$(".a3").find("h2").eq(0).html("Personal").attr({
		"class": "hf1",
	});
	$(".a3").find("li").eq(0).html("Цифровая этика.").attr({
		"class": "pf2",
    });
    $(".a3").find("li").eq(1).html("Умные вещи или/и безопасная жизнь.").attr({
		"class": "pf2",
    });
    $(".a3").find("li").eq(2).html("Интернет-экономика.").attr({
		"class": "pf2",
    });
    $(".a3").find("li").eq(3).html("Культура Интернет-коммуникаций.").attr({
		"class": "pf2",
    });
    $(".a3").find("li").eq(4).html("Основы персональной информационной безопасности.").attr({
		"class": "pf2",
	});
	$(".a3").find("div").html("Тритий курсе").attr({
		"class": "btn mtop MoreT",
		"title": "Let's go to the Third course!",
	});
	$(".a3").find("a").eq(0).attr({
		href: "pages/first.html",
    });
    
    //FOOTER
    
    $("<div>",{
		"appendTo": ".footer",
		"class": "footerS",
	});
	$("<div>",{
		"appendTo": ".footerS",
		"class": "footerContainer",
    });
    $("<div/>",{
        "appendTo": ".footerContainer",
        "class": "containerFooter cf1",
        html:"<hr><h1/><a><h4/></a><img>",
    });
    $(".cf1").find("h1").eq(0).html("Санкт-Петербург, Университет ИТМО, 2018").attr({
        "class": "footerH1",
    });
    $(".cf1").find("h4").eq(0).html("Конспект курса от: Хорхе Мартинес [JorgeAML]").attr({
        "class": "footerH2",
    });
    $(".cf1").find("a").eq(0).attr({
        "class": "linkF",
        href: "https://codepen.io/JorgeAML/project/editor/ABjvRb",
    });
    $(".cf1").find("img").eq(0).attr({
        "class": "footerImg",
        "src": "images/slogan.png",
    });
});
