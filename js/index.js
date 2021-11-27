

$(function() {
    let selectors = $(".titleJobs, .titleName");

    let time = 1000;

    selectors.css("pointer-events", "none");
    $(".titleName").fadeIn(time);

    for (let i = 1; i < 4; i++) {
        setTimeout(() => {
            $("#job" + i).hide().fadeIn(time);
        } , time / 3 + i * time/5);
    }

    setTimeout(() => {
        selectors.css("transition-duration", ".1s").css("pointer-events", "all");
        $(".titleJobs").children().css("transition-duration", ".1s").css("pointer-events", "all");
    },time );


}); //starter function



addEventListener("click", (e) => {

    console.log(document.getElementById("job3").innerHTML);
    document.getElementById("job3").innerHTML = document.getElementById("job3").innerHTML.replace("d", "e");
} )





