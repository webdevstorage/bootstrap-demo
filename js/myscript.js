
$('.carousel').carousel({
    interval: false
});

$(window).scroll(function() {
    var nav = $('#nav');
    var top = 200;
    if ($(window).scrollTop() >= top) {
        nav.addClass('inbody');
    } else {
        nav.removeClass('inbody');
    }
});
