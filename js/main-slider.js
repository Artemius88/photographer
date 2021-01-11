$(function() {

var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var translateWidth = 0;
var slideInterval = 2500;
var navBtnId = 0;
var currentButton = $('.slide-nav-btn').index(slideNow);

function nextSlide() {
	   if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('.slide').animate({'transform': 'scale(1.5)'}, 1500);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
        $('.slide-nav-btn').eq(slideNow - 1).css('background-color', 'pink').siblings().not(this).css('background-color', 'transparent');
        
    }

}


function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
         $('.slide-nav-btn').eq(slideNow - 1).css('background-color', 'pink').siblings().not(this).css('background-color', 'transparent');
        
        
    }
}
	




$(document).ready(function () {
    var switchInterval = setInterval(nextSlide, slideInterval);   
   $('.slide-nav-btn').eq(0).css('background-color', 'pink');

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });
    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
	});
    
    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();
        $(this).css('background-color', 'pink');
        $(this).siblings().not(this).css('background-color', 'transparent');
        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',

            });
            slideNow = navBtnId + 1;
        }
});
});




})	