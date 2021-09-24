$(function () {
    $(".navbar-toggler").blur(function () {
        if (window.innerWidth < 992) {
            $(".navbar-collapse").collapse('hide');
        }
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        var height = $('.intro-bg').height();
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= height - 50) {
            $('.navbar').addClass('solid-nav');
        } else {
            $('.navbar').removeClass('solid-nav');
        }
    });
});