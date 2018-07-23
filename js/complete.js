// ----------------------------------------------------  CONTACT FORM
function submitForm(){
	"use strict";
	var msg;
	
	var contactFormInfo = $('#contactForm').serialize();
	//alert(contactFormInfo);
	
	/*var contactFormInfoArray = contactFormInfo.split("&");
        alert(contactFormInfoArray);*/

        var name = $('#contactForm #yourname').val();
        var email = $('#contactForm #email').val();
        var subject = $('#contactForm #tele').val();
        var message = $('#contactForm #message').val();

        var contactFormInfoArray = Array(name, email, subject, message);
        //alert (contactFormInfoArray.length);

        var count = 0;

        for(var i=0;i<4;i++)
        {
                if(contactFormInfoArray[i]=="")
                {
                    count++;   
                }
        }

	if(count>0)
        {
                alert("please fill out all the boxes")
        }
        else
        {
				ajaxRequest(JSON.stringify( contactFormInfoArray ));
                //alert(JSON.stringify( contactFormInfoArray ));
        }
	
	//$.post('plugin/sendmail.html',$('#contactForm').serialize(), function(msg) {
	//	$(".alertMessage").html(msg);
	//});

         $('#contactForm').trigger('reset');
}

var ajaxRequest = function(jsonData)
{
   if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                //document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
                //alert(xmlhttp.responseText);
				var returnedMessage = xmlhttp.responseText;
				$("#alertMessage").append(returnedMessage);
				//alert("test");
            }
        };
        xmlhttp.open("GET","js/php/sendMessage.php?jsonData="+jsonData,true);
        xmlhttp.send();
}

$(function($){
	"use strict";
	/* :::::::::::::: SUPER SIZED SLIDER ::::::::::::: */	
	$.supersized({
		slide_interval:5000,// Length between transitions
		transition:1,// 0-None,1-Fade,2-Slide-Top,3-Slide-Right,4-Slide-Bottom,5-Slide-Left,6-Carousel-Right,7-Carousel Left
		transition_speed:800,									   						
		slide_links:'false',//Individual links for each slide (Options: false, 'num', 'name', 'blank')
		slides:[{image:'img/homebg/1.jpg'},
				{image:'img/homebg/2.jpg'},
				{image:'img/homebg/3.jpg'},  
				{image:'img/homebg/4.jpg'}]	
	});
});

// -----------------------------------------------------  HOVER EFFECT	
$(function() {
	"use strict";
	$(' #gallery-list > li ').each( function() { 
		$(this).hoverdir({
			hoverDelay : 75
		}); 
	});
	$(' #project-list > li ').each( function() { 
		$(this).hoverdir({
			hoverDelay : 75
		}); 
	});
	$(' #project2-list > li ').each( function() { 
		$(this).hoverdir({
			hoverDelay : 75
		}); 
	});
});	
	
	
$(document).ready(function($){
		
	"use strict";
// -----------------------------------------------------  UI ELEMENTS
	$( "#accordion" ).accordion({
		heightStyle: "content"
	});
	
	$( "#tabs" ).tabs();
	
	$("#tooltip").tooltip({
		position:{
			my: "center bottom-5",
			at: "center top"	
		}	
	});

// -----------------------------------------------------  PROGRESS BAR
	$('.percent p').fadeOut(400);
	function diagram(){
		$('.progress:in-viewport').each(function(){
			var progressBar = $(this),
			progressValue = progressBar.find('.percent').attr('data-value');
			if (!progressBar.hasClass('animated')) {
				progressBar.addClass('animated');
				progressBar.find('.percent').delay(500).animate({
					width: progressValue + "%"
				}, 1200, function() {
					progressBar.find('.percent p').fadeIn(400);
				});
			}
		});	
	}
	diagram();
	$(window).scroll(function() {
		diagram();
	});
// -----------------------------------------------------  CONTENT ANIMATIONS

	$('.sidebar').animate({right:-100+"px", opacity:0}, 1, function(){
		$('.sidebar').animate({right:0+"px", opacity:1}, 1400, "easeInOutBack");	
	});
	$('.main').animate({left:-100+"px", opacity:0}, 1, function(){
		$('.main').animate({left:0+"px", opacity:1}, 1400, "easeInOutBack");	
	});
	$('.contactcircle').animate({top:-100+"px", opacity:0}, 1, function(){
		$('.contactcircle').animate({top:0+"px", opacity:1}, 1400, "easeInOutBack");	
	});
	
	
	
// -----------------------------------------------------  NOTIFICATIONS CLOSER
	$('span.closer').click(function(e){
		e.preventDefault();
		$(this).parent('.notifications').stop().slideToggle(500);
	});

// -----------------------------------------------------  SCROLL TO TOP
	$("a[href='#top']").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

// -----------------------------------------------------  DEVICE MENU TOGGLE
	$('.menu-toggle a').click(function(e){
		e.preventDefault();
		$('.menu-device').stop().slideToggle(500);
	});
	
	$('.menu-device ul li a').bind('click',function(){
		$('.menu-device').stop().slideToggle(500);
	});

// -----------------------------------------------------  NAV SUB MENU(SUPERFISH)
	$('#nav ul.sf-menu').superfish({
		delay: 250,
		animation: {opacity:'show', height:'show'},
		speed: 'slow',
		autoArrows: true,
		dropShadows: false
	});

// -----------------------------------------------------  FANCYBOX	
	$('.fancybox').fancybox({
		resizeOnWindowResize: false	
	});
	
// -----------------------------------------------------  GALLERY ISOTOPE
	// Needed variables
	var $container = $("#gallery-list");
	var $filter = $("#gallery-filter");
		
	// Run Isotope  
	$container.isotope({
		filter				: '*',
		layoutMode   		: 'masonry',
		animationOptions	: {
		duration			: 750,
		easing				: 'linear'
	   }
	});	
	
	// Isotope Filter 
	$filter.find('a').click(function(){
	  var selector = $(this).attr('data-filter');
		$container.isotope({ 
		filter				: selector,
		animationOptions	: {
		duration			: 750,
		easing				: 'linear',
		queue				: false}
	  });
	  return false;
	});	
	
	// Copy categories to item classes
	$filter.find('a').click(function() {
		$filter.find('a').removeClass('current');
		$(this).addClass('current');
	});
	
// -----------------------------------------------------  NICE SCROLL
	$("html").niceScroll({cursorborder:"",cursorcolor:"#353535"});

// -----------------------------------------------------  FLICKR FEED
	$('#basicuse').jflickrfeed({
		limit: 10,
		qstrings: {
			id: '121909049@N03'
		},
		itemTemplate: 
		'<li>' +
			'<a href="{{link}}" target="_blank"><img src="{{image_s}}" alt="{{title}}"  /></a>' +
		'</li>'
	});	

// -----------------------------------------------------  TWITTER FEED
	$('#tweets').jtwt({
		username: '@cnn',
		count: 3,
		image_size: 50
	});
	
// -----------------------------------------------------  TESTIMONIAL	
	$('.testimonial-wrapper').cycle({
		fx: 'fade',
		timeout:5000 
	});

// -----------------------------------------------------  TOGGLE WIDGET	
	$("div.dropdown").hide();
	$("div.titbox").click(function(){
		$(this).toggleClass("active").next("div.dropdown").slideToggle("slow");
		return true;
	});
	
	

// -----------------------------------------------------  GOOGLE MAP		
	var myLatlng = new google.maps.LatLng(5.538792, 5.739423);
	var myOptions = {
	  center:myLatlng,
	  zoom:15,
	  scrollwheel: false,
    	  navigationControl: false,
   	  mapTypeControl: false
	  //mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map"),  myOptions);
	var marker = new google.maps.Marker({
	  position: myLatlng,
	  map: map,
	  title:"Edjeba, Warri"
	});
	
	var infowindow = new google.maps.InfoWindow({});
	
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent("Edjeba, Warri"); //sets the content of your global infowindow to string "Tests: "
		infowindow.open(map,marker); //then opens the infowindow at the marker
	});
	marker.setMap(map);
	
	
});