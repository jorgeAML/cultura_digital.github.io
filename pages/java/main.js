//This file should made a request for the first koncpekt!
$("document").ready(function(){
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
	var navDes = ['Введение в цифровую культуру', 'Технологии Интернета и WEB', 'Github', 'Blog'];
	var iconM = "&#xE5D2;";
	//LINKS EN EL ORDEN QUE APARECEN
	var linksNav = ['https://jorgeaml.github.io/cultura_digital.github.io/', 'https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DIGCUL+summer_2018/courseware/c40a48c6d822423a8f04a1ee68df02db/4267d2efea484ba797a66280f0236800/', 'https://github.com/jorgeAML', 'https://jorgeaml.github.io/medicinaresourcesblog.github.io/posts/2018-1-28-ads_en_medicinaresources.html'];
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

    //POSTS

    	//POSTS

	$("<div/>", {
		"appendTo": ".post",
		"insertAfter": ".nav",
		"class": "row",
	});
	$("<div/>", {
		"appendTo": ".row",
		"class": "column",
	});
	$("<div/>", {
		"appendTo": ".column",
		"class": "hojapost",
	});
	$("<p/>", {
		"appendTo": ".hojapost",
		"class": "circle-parrafo",
		html: "26 декабря 2018 / Введение в цифровую культуру",
	});
	$("<h1/>", {
		"appendTo": ".hojapost",
		"class": "title-principal-x4",
		html: "Технологии Интернета и WEB",
	});
	$("<img>", {
		"appendTo": ".hojapost",
		"class": "imgpost1",
		"src": "images/plans-1867745_1920.jpg",
	});
	$("<h1/>", {
		"appendTo": ".hojapost",
		"class": "title-principal",
		html: "HTML CSS и JavaScript",
	});
	$("<p/>", {
		"appendTo":".hojapost",
		"class": "parafo-prin",
		html: "Язык гипертекстовой разметки (HyperText Markup Language — HTML), основной строительный блок веб-страниц, используется для создания и визуального представления веб-страниц. Он определяет содержание страницы, но не её функциональность.",
	});
	$("<p/>", {
		"appendTo": ".hojapost",
		"class": "parafo-prin",
		html: "HTML добавляет разметку в обычный текст. Гипертекст содержит ссылки, которыми веб-страницы связываются друг с другом, делая Всемирную паутину тем, чем она является сегодня. Создавая и публикуя веб-страницы в сети Интернет, вы становитесь активным участником Всемирной паутины. HTML поддерживает как изображения, так и другой медиаконтент. С помощью HTML каждый может создать статический, а также динамический сайт. HTML является языком, описывающим структуру и семантику содержимого веб-документа. Контент веб-страницы размечен с помощью тегов, представляющих HTML-элементы. Примерами таких элементов являются <img>, <title>, <p>, <div>, <picture> и так далее. Эти элементы формируют строительные блоки для любого веб-сайта.",
	});
	$("<p/>", {
		"appendTo": ".hojapost",
		"class": "parafo-prin",
		html: "Cascading Style Sheets (CSS) — это язык иерархических правил (таблиц стилей), используемый для представления внешнего вида документа, написанного на HTML или XML (включая различные языки XML, такие как SVG и XHTML). CSS описывает, каким образом элемент должен отображаться на экране, на бумаге, голосом или с использованием других медиа средств.",
	});
	$("<p/>", {
		"appendTo": ".hojapost",
		"class": "parafo-prin linkpost1",
		html: "JavaScript® (часто просто JS) — это легковесный, интерпретируемый или JIT-компилируемый, объектно-ориентированный язык с функциями первого класса. Наиболее широкое применение находит как язык сценариев веб-страниц, но также используется и в других программных продуктах, например, node.js или Apache CouchDB. JavaScript это прототипно-ориентированный, мультипарадигменный язык с динамической типизацией, который поддерживает объектно-ориентированный, императивный и декларативный (например, функциональное программирование) стили программирования. Подробнее о JavaScript.",
    });
    $("<p/>",{
        "appendTo": ".hojapost",
        "class": "parafo-prin",
        html: "Эта часть сайта посвящена самому языку JavaScript, и она не затрагивает тонкостей, связанных с веб-страницами или окружением, в котором исполняется JavaScript. Информация об API, относящихся к веб-страницам, находится в разделах, посвященных Веб-API и DOM.",
    });
    $("<p/>",{
        "appendTo": ".hojapost",
        "class": "parafo-prin",
        html: "Стандартом языка JavaScript является ECMAScript. По состоянию на 2012, все современные браузеры полностью поддерживают ECMAScript 5.1. Старые версии браузеров поддерживают по крайней мере - ECMAScript 3. 17 июня 2015 года состоялся выпуск шестой версии ECMAScript. Эта версия официально называется ECMAScript 2015, которую чаще всего называют ECMAScript 2015 или просто ES2015. С недавнего времени стандарты ECMAScript выпускаются ежегодно. Эта документация относится к последней версии черновика, которой является ECMAScript 2018.",
    });
    $("<p/>", {
        "appendTo": ".hojapost",
        "class": "parafo-prin last",
        html: "Не следует путать JavaScript c языком программирования Java. И 'Java', и 'JavaScript' являются торговыми марками или зарегистрированными торговыми марками Oracle в США и других странах. Однако, у обоих языков различный синтаксис, семантика и применение.",
    });
	$("<div/>", {
		"appendTo": ".hojapost",
		"insertAfter": ".last",
		"class": "circle-jorge",
	});
	$("<p/>", {
		"appendTo": ".hojapost",
		"class": "title-mrn",
		html: "Конспект курса от: Хорхе Мартинес [JorgeAML]",
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
