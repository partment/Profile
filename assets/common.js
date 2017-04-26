$(window).load(function () {
    setTimeout(function() {
        $(".loading").stop().fadeOut(700);
        $(".wrap").stop().fadeIn(700);
    }, 200);
});
$(function () {
    setlang("tw");
    $(".lang").click(function () {
        if( $(this).data("region") === "tw") {
            setlang("us");
        }else {
            setlang("tw");
        }
    })
});
function setlang (region) {
    $(".title").html(lang[region+'-title']);
    $(".lang").html(lang[region+'-lang']).data("region", region);
    $(".info-description").html(lang[region+'-description']);
}