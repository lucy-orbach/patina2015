// ********  F  U  N  C  T  I  O  N  :  scrollToAnchor ****************
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

function hideMenu(){
	$('.navbar-nav').click( function(){
		$('.collapse').addClass("collapsing").removeClass("in");
		});
};
hideMenu()

// ***** OPEN FOOTER MENU MOBILE ****
$('footer').click ( function(){
	$('footer').toggleClass('open');
});
$('.contact').click ( function(){
	$('footer').toggleClass('open');
});
 // ****** CAROUSEL   ****************

$('.carousel').carousel({
  interval: 15000
})


// ******** SIDE MENU *********

function loadCases (){
	$('.case-opt').click( function(e){
		e.preventDefault();
		var myCase = $(this);
		var otherCases = myCase.siblings();

		otherCases.removeClass('selected');
		myCase.addClass( 'selected' );
		$('.caseMenu').removeClass('open show');

		var container = ( $('#display') );

		switch( myCase.attr('id') ) {
			case 'thGirl':
				container.load('cases/peasantGirl.html').hide().fadeIn('4800');
				break;
				case 'thElephant':
				container.load('cases/indianChess.html').hide().fadeIn('4800');
				break;
				case 'thStreet':
				container.load('cases/germanStreet.html').hide().fadeIn('4800');
				break;
				case 'thLandscape':
				container.load('cases/dutchLandscape.html').hide().fadeIn('4800');
				break;
				case 'thBird':
				container.load('cases/femaleBird.html').hide().fadeIn('4800');
				break;
				case 'thPitt':
				container.load('cases/mrsPitt.html').hide().fadeIn('4800');
				break;
				case 'thVirgin':
				container.load('cases/virginMary.html').hide().fadeIn('4800');
				break;
				case 'thLilacs':
				container.load('cases/lilacs.html').hide().fadeIn('4800');
				break;
				case 'thWoman':
				container.load('cases/portraitWoman.html').hide().fadeIn('4800');
				break;
				case 'thSaints':
				container.load('cases/saintsSamon.html').hide().fadeIn('4800');
				break;
				case 'thMan':
				container.load('cases/earlyAmericanPortrait.html').hide().fadeIn('4800');
				break;
		}

	})

		
};
loadCases()


$('.case-link').click ( function() {
	var parm = $(this).attr('data-parm');
	console.log ( parm );
	console.log ('hello' );
	var url = "cases.html?name=" + parm;
          window.location.href = url;
});


var myParam = [];

function getUrlParameter() {
   var myPageURL = window.location.href; 
    console.log( myPageURL );
   var myURLparam = myPageURL.split('?');
   console.log('myURLparam:');
   console.log(myURLparam);

   var myParam = myURLparam[1].split('=');
   console.log(myParam);
   var myCaseName = myParam[1];
   console.log(myCaseName);

   var container = ( $('#display') );

		switch( myCaseName ) {
			case 'thGirl':
				container.load('cases/peasantGirl.html').hide().fadeIn('4800');
				break;
				case 'thElephant':
				container.load('cases/indianChess.html').hide().fadeIn('4800');
				break;
				case 'thStreet':
				container.load('cases/germanStreet.html').hide().fadeIn('4800');
				break;
				case 'thLandscape':
				container.load('cases/dutchLandscape.html').hide().fadeIn('4800');
				break;
				case 'thBird':
				container.load('cases/femaleBird.html').hide().fadeIn('4800');
				break;
				case 'thPitt':
				container.load('cases/mrsPitt.html').hide().fadeIn('4800');
				break;
				case 'thVirgin':
				container.load('cases/virginMary.html').hide().fadeIn('4800');
				break;
				case 'thLilacs':
				container.load('cases/lilacs.html').hide().fadeIn('4800');
				break;
				case 'thWoman':
				container.load('cases/portraitWoman.html').hide().fadeIn('4800');
				break;
				case 'thSaints':
				container.load('cases/saintsSamon.html').hide().fadeIn('4800');
				break;
				case 'thMan':
				container.load('cases/earlyAmericanPortrait.html').hide().fadeIn('4800');
				break;
		}

};  
getUrlParameter()


//***** toggle Case Studies menu ****

$('#toggleMenu').click ( function(){
	$('.caseMenu').toggleClass('open');
});

$('#caseTab').mouseover ( function(){
	$('.caseMenu').addClass('show');
});
$('.caseContent').click (function(){
	$('.caseMenu').removeClass('show');
});


