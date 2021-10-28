$(document).ready(function () {
    $('.more1').click(function () {
        $('.more-link1').slideToggle(200)
        if ($('.more1').text() == 'See More ...') {
            $('.more1').text('... See Less')
        }
        else {
            $('.more1').text('See More ...')
        }
    });
    $('.more2').click(function () {
        $('.more-link2').slideToggle(200)
        if ($('.more2').text() == 'See More ...') {
            $('.more2').text('... See Less')
        }
        else {
            $('.more2').text('See More ...')
        }
    });
    $('.more3').click(function () {
        $('.more-link3').slideToggle(200)
        if ($('.more3').text() == 'See More ...') {
            $('.more3').text('... See Less')
        }
        else {
            $('.more3').text('See More ...')
        }
    });
    $('.more4').click(function () {
        $('.more-link4').slideToggle(200)
        if ($('.more4').text() == 'See More ...') {
            $('.more4').text('... See Less')
        }
        else {
            $('.more4').text('See More ...')
        }
    });
    $('.more5').click(function () {
        $('.more-link5').slideToggle(200)
        if ($('.more5').text() == 'See More ...') {
            $('.more5').text('... See Less')
        }
        else {
            $('.more5').text('See More ...')
        }
    });
    $('.more6').click(function () {
        $('.more-link6').slideToggle(200)
        if ($('.more6').text() == 'See More ...') {
            $('.more6').text('... See Less')
        }
        else {
            $('.more6').text('See More ...')
        }
    });
    $('.more7').click(function () {
        $('.more-link7').slideToggle(200)
        if ($('.more7').text() == 'See More ...') {
            $('.more7').text('... See Less')
        }
        else {
            $('.more7').text('See More ...')
        }
    });

    // scroll-up button show/hide script
    $(window).scroll(function () {
        if (this.scrollY > 150) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
        if (this.scrollY > 50) {
            $('.social').addClass("show");
        } else {
            $('.social').removeClass("show");
        }
        if (this.scrollY > 0) {
            $('.header').addClass("fixed");
        } else {
            $('.header').removeClass("fixed");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });
});