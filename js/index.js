

$(function() {
    let selectors = $(".titleJobs, .titleName, .titleSeparator");

    let time = 1000;

    selectors.css("pointer-events", "none");
    $(".titleName").fadeIn(time);
    setTimeout(() => {
        $(".titleSeparator").fadeIn(time);
    }, time/3);

    for (let i = 1; i < 4; i++) {
        setTimeout(() => {
            $("#job" + i).hide().fadeIn(time);
        } , time * 2 / 3 + i * 200);
    }

    setTimeout(() => {
        selectors.css("transition-duration", ".1s").css("pointer-events", "all");
        $(".titleJobs").children().css("transition-duration", ".1s").css("pointer-events", "all");
    },2*time);


});


