$(document).ready(function () {
    $('.more1').click(function () {
        $('.more-link1').slideToggle(500)
        if ($('.more').text()=='See') {
            $('.more').text('See')
        }
        else{
            $('.more').text('See')
        }
    });
    $('.more2').click(function () {
        $('.more-link2').slideToggle(500)
        if ($('.more').text()=='See') {
            $('.more').text('See')
        }
        else{
            $('.more').text('See')
        }
    });
    $('.more3').click(function () {
        $('.more-link3').slideToggle(500)
        if ($('.more').text()=='See') {
            $('.more').text('See')
        }
        else{
            $('.more').text('See')
        }
    });
    $('.more4').click(function () {
        $('.more-link4').slideToggle(500)
        if ($('.more').text()=='See') {
            $('.more').text('See')
        }
        else{
            $('.more').text('See')
        }
    });
    $('.more5').click(function () {
        $('.more-link5').slideToggle(500)
        if ($('.more').text()=='See') {
            $('.more').text('See')
        }
        else{
            $('.more').text('See')
        }
    });
    $('.more6').click(function () {
        $('.more-link6').slideToggle(500)
        if ($('.more').text()=='See') {
            $('.more').text('See')
        }
        else{
            $('.more').text('See')
        }
    });
    $('.more7').click(function () {
        $('.more-link7').slideToggle(500)
        if ($('.more').text()=='See') {
            $('.more').text('See')
        }
        else{
            $('.more').text('See')
        }
    });

    $(window).scroll(function(){
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
});