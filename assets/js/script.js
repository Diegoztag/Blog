//:::::::::::::::::::Scripts para mobile::::::::::::::::::::::

//:::::::::::::::::::Scripts para web::::::::::::::::::::::

//:::::::::::::::::::Scripts generales::::::::::::::::::::::

//Script del loader--------------------------------------------------------
$(window).load(function(){
	setTimeout(function() {
		$(".loader").fadeOut(1000,function(){});	
	});
}); 

//Script del menu--------------------------------------------------------
$(document).ready(function() {

	var abrirMenu = $('.menu-content');
	var wrap = $('.wrap');
	var menuWrap = $('.menu-wrap__content');
	var mainContent = $('.main-content');
	var menuWidth = $('.menu-content').width();
	var flag = 1;

	$('.abrir-menu').on('click',function () {
		mainContent.animate({opacity: 0.7},200);
		if (flag == 1) {
			abrirMenu.animate({right: 0},300);
			menuWrap.animate({right: menuWidth},300);
			wrap.animate({right: menuWidth},300);

			$('.abrir-menu__linea2').animate({opacity :0})
			$('.abrir-menu__linea1').animate({borderSpacing: -47 },{step: function(now,fx) {
			      $(this).css({'transform':'rotate('+now+'deg)','top':'12px','left':'12px','width':'20px'});},duration:'fast'},'linear');
			$('.abrir-menu__linea3').animate({borderSpacing: 47 },{step: function(now,fx) {
			      $(this).css({'transform':'rotate('+now+'deg)','top':'12px','left':'12px','width':'20px'});},duration:'fast'},'linear');
			$('.abrir-menu__text').text('Cerrar');
			$('.abrir-menu__text').css({'right': 19})
			$('.menu-wrap__content').css({'transition': 'initial'});

			flag = flag + 1;
		}else{
			mainContent.animate({opacity: 1},200);
			abrirMenu.animate({right: - menuWidth},300);
			menuWrap.animate({right: 0},300);
			wrap.animate({right: 0},300);

			$('.abrir-menu__linea2').animate({opacity :1,'top':'12px'})
			$('.abrir-menu__linea1').animate({borderSpacing: 0 },{step: function(now,fx) {
			      $(this).css({'transform':'rotate('+now+'deg)','top':'6px','left':'15px','width':'22px'});},duration:'slow'},'linear');
			$('.abrir-menu__linea3').css({'transform':'rotate('+ 0+'deg)','top':'18px','left':'15px','width':'22px'});
			$('.abrir-menu__text').css({'right': 26});
			$('.abrir-menu__text').text('Menu');

			flag = 1;
		}	
	});
});

//Script para desplazamiento del menu en diferentes sections-----------------
$(document).ready(function () {
	$('.menu__porta').on('click',function () {
		$('html,body').animate({scrollTop: $(".porta").offset().top}, 1000);
	});

	$('.menu__contacto').on('click',function () {
		$('html,body').animate({scrollTop: $(".footer").offset().top}, 1000);
	});
});

//Script para menu-fixed------------------------------------------------------
// $(document).ready(function() {

// 	$(window).on('scroll',function(){

// 		var verficapantalla = window.matchMedia("(min-width: 768px)");
// 		var altoMenuFix = $('.menu-wrap').height();
// 		var altoHeader = $('header').height();

// 		if ($(window).scrollTop() < (altoHeader - altoMenuFix)) {
// 			$('.menu-wrap__false').slideUp(300);
// 		}else{
// 			$('.menu-wrap__false').slideDown(300);
// 		}

// 		if (verficapantalla.matches) {
// 			$(window).on('scroll',function(){

// 				if ($(window).scrollTop() < (altoHeader - altoMenuFix)){
// 					$('.menu-wrap__content').css({'top':0,'transition': 'all 200ms linear'});
// 				}else{
// 					$('.menu-wrap__content').css({'top':-41,'transition': 'all 200ms linear'});
// 				}		
// 			});
// 		}		
// 	});
// });
// 
$(document).ready(function() {

	$(window).on('scroll',function(){

		var verficapantalla = window.matchMedia("(min-width: 768px)");
		var altoMenuFix = $('.menu-wrap').height();
		var altoHeader = $('header').height();

		if ($(window).scrollTop() < (altoHeader - altoMenuFix)) {
			$('.menu-wrap__false').slideUp(300);
		}else{
			$('.menu-wrap__false').slideDown(300);
		}

		if (verficapantalla.matches) {
			$(window).on('scroll',function(){

				if ($(window).scrollTop() < (altoHeader - altoMenuFix)){
					$('.menu-wrap').css({'top':41,'transition': 'all 200ms linear'});
				}else{
					$('.menu-wrap').css({'top':0,'transition': 'all 200ms linear'});
				}		
			});
		}		
	});
});


//Script para buscar ---------------------------------------------------
$(document).ready(function() {
	$("#search-field").ghostHunter({
	    results         : "#results",
	    onKeyUp         : true 
	});
});

//Script para ventana modal----------------------------------------------
$(document).ready(function() {
	$("#search").on("click",function() {

		$(".form-search").each(function() {
			displaying = $(this).css("display");
			if (displaying == "none") {
				$(this).fadeIn("fast",function () {
					$(this).css("display","flex")
				});
			}		
		})	
	});

	$(".cerrar-search").on("click",function() {

		$(".form-search").each(function() {
		displaying = $(this).css("display");
		if (displaying == "flex") {
				$(this).fadeOut("fast",function () {
					$(this).css("display","none")
				});
			}		
		})
	});
});

//Script boton ir arriba------------------------------------------------
$(document).ready(function() {

	$('#btn-subir').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 1000);
	});
 
	$(window).scroll(function(){
		if( $(window).scrollTop() > 300 ){
			$('#btn-subir').slideDown(500);
		} else {
			$('#btn-subir').slideUp(500);
		}
	});
});

// //Script para el chat-------------------------------------------------
$(document).ready(function(){

	var flag = 1;

    $('.menu__chat').click(function () {

		var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();

	    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
	    s1.async=true;
	    s1.src='https://embed.tawk.to/564a6a54c42b1eac50a62139/default';
	    s1.charset='UTF-8';
	    s1.setAttribute('crossorigin','*');
	    s0.parentNode.insertBefore(s1,s0);

    	if (flag == 1) {

    		$('#tawkchat-iframe-container').animate({'opacity': 1},400);

		    flag = flag + 1;
    		
    	}else{

    		$('#tawkchat-iframe-container').animate({'opacity': 0},400);

    		flag = 1;
    	}
    })
	
})

//Script del LightBox y agrupador ----------------------------------------------------
$(document).ready(function() {

    $('.porta__work-proyect').magnificPopup({
        type: 'image',
         mainClass: 'mfp-with-zoom', // this class is for CSS animation below
         gallery: { enabled: true},
         zoom: {
            enabled: true, // By default it's false, so don't forget to enable it
            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            opener: function(openerElement) {
              // openerElement is the element on which popup was initialized, in this case its <a> tag
              // you don't need to add "opener" option if this code matches your needs, it's defailt one.
              return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
});

$(function(){

	$('#Container').mixItUp();

	$('.porta__menu-btn').click(function() {
		$('.porta__menu-btn').removeClass('porta__menu-active');
		$(this).addClass('porta__menu-active');
	});

});

//Script animaciones scroll------------------------------------------------
$(document).ready(function  () {
	window.sr = ScrollReveal({ reset: false, mobile: false });

	// Customizing a reveal set
	sr.reveal('.sobremi__content',{delay:600,distance:'90px',easing:'ease-in-out'},400);

	sr.reveal('.habilidades__wrap__icono',{delay:600,distance:'90px',easing:'ease-in-out',scale:2.1},400); 
	sr.reveal('.habilidades__wrap__star',{delay: 200, easing:'ease-out'});
	sr.reveal('.habilidades__wrap__ul',{delay: 200, easing:'ease-out'});
	
	sr.reveal('.formacion__icono',{delay:500,easing:'ease-in',scale:0.5},500); 
	sr.reveal('.formacion__content-item',{delay:500,easing:'ease-in-out'},300);

	sr.reveal('.porta__galeria',{delay:500,easing:'ease-in'});
	sr.reveal('.social__item',{delay: 700},400); 
});
