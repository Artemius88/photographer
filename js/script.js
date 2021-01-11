$(function() {
// $('.portfolio-section').css('opacity', '0');
	// HEADER HIDE-SHOW
var currentId;
var currentOffset = 0;

$('.nav-menu a').on('click', (event) => {
	$('.header').slideUp(300);
	currentId = $(event.currentTarget).attr('href');
	currentOffset = $(currentId).offset().top;
	console.log('current section offset' + ' ' + currentOffset);
	console.log('window scroll offset' + ' ' + $(window).scrollTop())
	})

function headerSlide () {
	$(window).on('scroll', () => {
	
		if($(window).scrollTop() !== $(currentOffset)) {
		$('.header').slideDown(300);
		// console.log('current offset' + $(window).scrollTop());
	}
})
}
setTimeout(function() {headerSlide()}, 3000);




		// BURGER
$('.burger').on('click', () => {
	$('.burger').toggleClass('burger-active');
	$('.burger-menu').toggleClass('hidden');
})
$('.mouse-viewport').hover(function() {
	$('.header').slideUp(300);
})

		// ANIMATE-SLIDE-UP ELEMENTS
// var animatedPortfolio = $('.portfolio-section');
// $(window).on('scroll', (event) => {
// 	var viewportBottom = $(window).scrollTop() + $(window).height();
// 	if (viewportBottom > $('.portfolio-section').offset().top) {
// 		// $('.portfolio-section').fadeIn(2000);
// 		$('.portfolio-section').animate({'opacity': '1', 'position': 'absolute', 'top': '-30px'}, 1000);
		
// 		console.log('event work');
// 	}
// });
		

})