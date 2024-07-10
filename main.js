$(window).on("scroll", function() {
    var scrollTop = $(this).scrollTop();
    $(".hero-background img").css('transform', 'translateY(' + -(scrollTop * 0.5) + 'px)');
});
