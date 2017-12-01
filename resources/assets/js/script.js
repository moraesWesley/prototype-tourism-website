$('document').ready(function(){
    $('.slider').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 20000,
        fade: true,
        prevArrow:"<img class='a-left control-c prev slick-prev' src='../icon/icon-img/before_white.png'>",
      nextArrow:"<img class='a-right control-c next slick-next' src='../icon/icon-img/next_white.png'>"
    });

    $('.slider-parterns').slick({
        dots: true,
        infinity: true,
        arrows: true,
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 15000,
        fade: true,
        prevArrow:"<img class='a-left control-c prev slick-prev' src='../icon/icon-img/Arrow-Left-icon.png'>",
      nextArrow:"<img class='a-right control-c next slick-next' src='../icon/icon-img/Arrow-Right-icon.png'>"
    });

    var $doc = $('html, body');
    $('content-main-menu ul a').click(function() {
        $doc.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });

});

//$(function () {
//    alert('Jquery');
//  $('.slider').slick();
//});
