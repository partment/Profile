$(window).load(function () {
    setTimeout(function() {
        $(".loading").stop().fadeOut(700);
        $(".wrap").stop().fadeIn(700);
    }, 200);
});
$(function () {
    setlang();
});
function setlang () {
    $(".lang").html(lang['tw-lang']);
    $(".info-description").html(lang['tw-description']);
}