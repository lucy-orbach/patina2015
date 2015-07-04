function fadePage(){
	$('html').hide().fadeIn(800);
}
fadePage();


// ********  F  U  N  C  T  I  O  N  :  scrollToAnchor **
//performs an slow motion scroll to Anchor
var linkToAnchor = [];
var myAnchor = [];

function scrollToAnchor (linkToAnchor,myAnchor) {
	linkToAnchor.click( function(){
		 $('html,body').animate( {scrollTop: myAnchor.offset().top} , 1000 );
	});

};

scrollToAnchor ( $('.navbar-brand'), $('#branding') )
scrollToAnchor ( $('#goServices'), $('#services') )
scrollToAnchor ( $('#goAbout'), $('#about') )
scrollToAnchor ( $('#goContact'), $('#contact') )
scrollToAnchor ( $('#goWall'), $('#caseWall') )

//********* FUNCTION hide collapse menu ********

$(function hideMenu(){
	
		$('.navbar-toggle').click( function(){
			
			
				$('#headNav').slideToggle();
			
		});
});

// ***** OPEN FOOTER MENU MOBILE ****

$('footer').click ( function(){
	$('footer').toggleClass('openUp');
});

//****** CAROUSEL   ****************

$('.carousel').carousel({
  interval: 15000
})



// //***** toggle Case Studies menu ****

// $('#toggleMenu').click ( function(){
// 	$('.caseMenu').toggleClass('open');
// });

// $('#caseTab').mouseover ( function(){
// 	$('.caseMenu').addClass('show');
// });
// $('.caseContent').click (function(){
// 	$('.caseMenu').removeClass('show');
// });


