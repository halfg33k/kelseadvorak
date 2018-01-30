$('.item').on('click', function() {
    $(this).children('.item--image').last().toggleClass('zoomed');
    $(this).children().last().toggleClass('zoomed-bg');
    $('body').toggleClass('stop-scroll');
});
