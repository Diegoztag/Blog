//Script del loader--------------------------------------------------------
$(window).load(function(){
	setTimeout(function() {
		$(".loader").fadeOut(1000,function(){});	
	});
}); 

//script animacion del menu-----------------------------------------------
$(document).ready(function(){
	$('.abrir-menu').click(function(){
		$('.abrir-menu').toggleClass('open');
	});

	$('.site-overlay').click(function(){
		$('.abrir-menu').toggleClass('open');
	});
});

// Script para el indicador del chat----------------------------------------
$(document).ready(function () {

	var flag = 1;

	$('.menu__chat').on('click',function () {
		if (flag == 1) {
			$('.menu__chat').addClass('chat-active');
			flag = flag + 1;
		}else{
			$('.menu__chat').removeClass('chat-active');
			flag = 1;
		}
	});
});

//Script para desplazamiento del menu en diferentes sections-----------------
$(document).ready(function () {
	$('.bajar').on('click',function () {
		$('html,body').animate({scrollTop: $(".wrap-post").offset().top}, 1000);
	});

	$('.menu__porta').on('click',function () {
		$('html,body').animate({scrollTop: $(".porta").offset().top}, 1000);
	});

	$('.menu__contacto').on('click',function () {
		$('html,body').animate({scrollTop: $(".footer").offset().top}, 1000);
	});
});

//Script para menu-fixed------------------------------------------------------
$(document).ready(function() {

	$(window).on('scroll',function(){

		var verficapantalla = window.matchMedia("(min-width: 768px)");
		var altoHeader = $('header').height();

		if ($(window).scrollTop() < (altoHeader - 20)) {
			$('.menu-fix').slideUp(300);

		}else{
			$('.menu-fix').slideDown(300);
			$('.menu-fix').css({display: 'flex'});
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


