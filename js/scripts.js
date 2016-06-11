$(document).ready(function(){

	$("#passion").animate({
		"font-size":"1.63em",
		"opacity":"1.0"
	},3000);

	$("header").mouseover(function(){
		$("#name").css("color","orange");
		$("#pic_me").css("border", "4px solid orange");
		$("#passion").animate({
			left: "+10%",
			opacity: "0.6"
		});
		$("#shattered").animate({
			left: "+2%",
			opacity: "0.8"
		});
	});

	$("#facebookIcon").mouseenter(function(){
		$(this).addClass("fa fa-facebook-official fa-2x");
	}).mouseleave(function(){
		$(this).removeClass("fa fa-facebook-official fa-2x");
		$(this).addClass("fa fa-facebook-official fa-lg");
	})

	$("#githubIcon").mouseenter(function(){
		$(this).addClass("fa fa-github fa-2x");
	}).mouseleave(function(){
		$(this).removeClass("fa fa-github fa-2x");
		$(this).addClass("fa fa-github fa-lg");
	})

	$("#linkedinIcon").mouseenter(function(){
		$(this).addClass("fa fa-linkedin-square fa-2x");
	}).mouseleave(function(){
		$(this).removeClass("fa fa-linkedin-square fa-2x");
		$(this).addClass("fa fa-linkedin-square fa-lg");
	})

	$("#youtubeIcon").mouseenter(function(){
		$(this).addClass("fa fa-youtube fa-2x");
	}).mouseleave(function(){
		$(this).removeClass("fa fa-youtube fa-2x");
		$(this).addClass("fa fa-youtube fa-lg");
	})

	$("#twitterIcon").mouseenter(function(){
		$(this).addClass("fa fa-twitter fa-2x");
	}).mouseleave(function(){
		$(this).removeClass("fa fa-twitter fa-2x");
		$(this).addClass("fa fa-twitter fa-lg");
	})

	$("#instgramIcon").mouseenter(function(){
		$(this).addClass("fa fa-instagram fa-2x");
	}).mouseleave(function(){
		$(this).removeClass("fa fa-instagram fa-2x");
		$(this).addClass("fa fa-instagram fa-lg");
	})

	  $(".animsition").animsition({
		    inClass: 'flip-in-y-fr',
		    outClass: 'flip-out-y-fr',
		    inDuration: 1500,
		    outDuration: 800,
		    linkElement: '.animsition-link',
		    // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
		    loading: true,
		    loadingParentElement: 'body', //animsition wrapper element
		    loadingClass: 'animsition-loading',
		    unSupportCss: [
		      'animation-duration',
		      '-webkit-animation-duration',
		      '-o-animation-duration'
		    ],
		    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
		    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
		    overlay : false,
		    overlayClass : 'animsition-overlay-slide',
		    overlayParentElement : 'body'
  	});


})