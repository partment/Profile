$(window).load(function () {
    setTimeout(function() {
        $(".loading").stop().fadeOut(700);
        $(".wrap").stop().fadeIn(700);
        $(".lang").stop().fadeIn(700);
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
    });
    $("*").contextmenu(function () {
        return false;
    });
    if(is.mobile()) {
        $(".wrap").css({"width":"100%","min-width":"100%","height":"450px"});
        $(".info").css("height","350px");
        $(".info-icon").css({"width":"150px","height":"150px","background-size":"120px 120px"});
        $(".info-description").css({"font-size":"14px","height":"200px"});
    }
});
function setlang (region) {
    $(".title").html(lang[region+'-title']);
    $(".lang").html(lang[region+'-lang']).data("region", region);
    $(".info-description-content").html(lang[region+'-description']);
    return;
}