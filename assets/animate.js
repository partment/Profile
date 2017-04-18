$(window).load(function () {
    setTimeout(function() {
        $(".loading").stop().fadeOut(700);
        $(".wrap").stop().fadeIn(700);
    }, 200);
});