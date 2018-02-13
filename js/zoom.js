$('.item').on('click', function() {
    $(this).toggleClass('zoomed');
    $('body').toggleClass('stop-scroll');
});
