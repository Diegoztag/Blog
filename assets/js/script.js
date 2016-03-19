//:::::::::::::::::::Scripts para mobile::::::::::::::::::::::

//Script para mostrar el menu mobile
$(document).ready(function() {

	$('.abrir-menu').on('click',function(e){
		e.preventDefault();

		$('.abrir-menu').css('visibility','hidden');

		var abrirMenu = $('.menu-content');
		var menuAncho = $('.menu-content').width();
		
			abrirMenu.animate({
					left: 0
			});
		
	$(abrirMenu).on('mouseleave',function(e){
		e.preventDefault();

		$('.abrir-menu').css('visibility','visible');

			abrirMenu.animate({
				left: -250
			});
		});	
	});
});

//:::::::::::::::::::Scripts para web::::::::::::::::::::::

//Script para menu-fixed
$(document).ready(function() {

	$(window).on('scroll',function(){
		if ($(window).scrollTop() < $(window).height()) {
			$('.menu-content').removeClass('menu-fixed');
		}else{
			$('.menu-content').addClass('menu-fixed');
		}		
	});
});

//:::::::::::::::::::Scripts generales::::::::::::::::::::::

//Script para recargar al saltar mediaquery--------------------------------
$(document).ready(function() {
	var mobile = matchMedia('only screen and (max-width: 1023px)');

	mobile.addListener(function(mql) {
		window.location.reload(); 
	});
});

//Script del loader--------------------------------------------------------
$(window).load(function(){
	setTimeout(function() {
		$(".loader").fadeOut(1000,function(){});	
	},1000);
}); 

//Script del slider-------------------------------------------------------
$(document).ready(function() {
	
	$("#owl-example").owlCarousel({

	// Most important owl features
	items : 1,
	singleItem : true,
	itemsScaleUp : true,
	//Basic Speeds
	slideSpeed : 200,
	paginationSpeed : 800,
	rewindSpeed : 1000,
	//Autoplay
	autoPlay : 8000,
	// Navigation
	rewindNav : true,
	//Pagination
	pagination : true,
	// Responsive 
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
	// CSS Styles
	baseClass : "owl-carousel",
	theme : "owl-theme",
	//Lazy load
	lazyLoad : true,
	lazyFollow : true,
	lazyEffect : "fade",
	//Transitions
	transitionStyle : "goUp",
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
	$("#search,#search2").on("click",function() {

		$('.buscar,.buscar2').css('visibility','hidden');

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

		$('.buscar,.buscar2').css('visibility','visible');

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
// $(document).ready(function(){
//     $('.btn-email').click(function () {
//         var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    
//         var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
//         s1.async=true;
//         s1.src='https://embed.tawk.to/564a6a54c42b1eac50a62139/default';
//         s1.charset='UTF-8';
//         s1.setAttribute('crossorigin','*');
//         s0.parentNode.insertBefore(s1,s0);
//     })
	
// })

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
	window.sr = ScrollReveal({ reset: true });

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