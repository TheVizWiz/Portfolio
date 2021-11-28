let topProject;

$(function () {
    let selectors = $(".titleJobs, .titleName");

    let time = 1000;
    let cursor = $(".cursor");


    cursor.css("animation-play-state", "paused")
    selectors.css("pointer-events", "none");
    // $(".titleName").fadeIn(time );
    for (let i = 1; i < 4; i++) {
        setTimeout(() => {
            $("#job" + i).hide().fadeIn(time);
        }, time / 3 + i * time / 5);
    }

    setTimeout(() => {
        selectors.css("transition-duration", ".1s").css("pointer-events", "all");
        $(".titleJobs").children().css("transition-duration", ".1s").css("pointer-events", "all");
        $(".cursor").css("animation-play-state", "running")
    }, time);


    let jobDescriptions = ["designer", "game dev", "artist", "coder", "student", "researcher", "teacher", "scientist"]
    let currentJob = Math.floor(Math.random() * jobDescriptions.length);
    console.log(currentJob);
    let currentNumLetters = 0;

    setTimeout(function addLetters() {
        cursor.css("animation-play-state", "paused");
        currentNumLetters++;
        $("#job3")[0].innerHTML = jobDescriptions[currentJob].substring(0, currentNumLetters);
        if (currentNumLetters == (jobDescriptions[currentJob].length + 1)) {
            $(".cursor").css("animation-play-state", "running");
            setTimeout(function removeLetters() {
                cursor.css("animation-play-state", "paused");

                currentNumLetters--;
                $("#job3")[0].innerHTML = jobDescriptions[currentJob].substring(0, currentNumLetters);
                if (currentNumLetters === 0) {
                    cursor.css("animation-play-state", "running");
                    let newJob = Math.floor(Math.random() * jobDescriptions.length);
                    while (newJob === currentJob) {
                        newJob = Math.floor(Math.random() * jobDescriptions.length);
                    }
                    currentJob = newJob;
                    setTimeout(addLetters, 2000);
                } else {
                    setTimeout(removeLetters, 100);
                }

            }, 2000)
        } else {
            setTimeout(addLetters, 150)
        }
    }, 3000);

    // topProject = $(".projectTitle")[0].boundingClientRect.top;
    topProject = document.querySelector(".projectTitle").getBoundingClientRect().top;
    zoomTopBar()
}); //starter function

addEventListener("resize", (e) => {
    topProject = document.querySelector(".projectTitle").getBoundingClientRect().top;
    zoomTopBar();
})

function zoomTopBar () {
    if (document.documentElement.scrollTop > topProject) {
        // $(".header").css("top", "-20px");
        $(".logo").css("max-width", "50%").css("max-height", "50%");
        $("#headerName").css("font-size", "3vmax")
    } else {
        // $(".header").css("top", "0");
        $(".logo").css("max-width", "").css("max-height", "");
        $("#headerName").css("font-size", "")

        if (document.documentElement.getBoundingClientRect().width > 600) {
            $(".header").css("padding", "")
        }
    }
}
// Element to move, time in ms to animate
function scrollToTop(duration) {
    console.log("scrolling")
    var e = document.documentElement;
    if (e.scrollTop === 0) {
        var t = e.scrollTop;
        ++e.scrollTop;
        e = t + 1 === e.scrollTop-- ? e : document.body;
    }
    scrollToC(e, e.scrollTop, 0, duration);
}

// Element to move, element or px from, element or px to, time in ms to animate
function scrollToC(element, from, to, duration) {
    if (duration <= 0) return;
    if (typeof from === "object") from = from.offsetTop;
    if (typeof to === "object") to = to.offsetTop;

    scrollToX(element, from, to, 0, 1 / duration, 20, easeOutCuaic);
}

function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
    if (t01 < 0 || t01 > 1 || speed <= 0) {
        element.scrollTop = xTo;
        return;
    }
    element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
    t01 += speed * step;

    setTimeout(function() {
        scrollToX(element, xFrom, xTo, t01, speed, step, motion);
    }, step);
}

function easeOutCuaic(t) {
    t--;
    return t * t * t + 1;
}

function rotateHeaderName() {
    var el = document.getElementById('headerName');
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null;
}








addEventListener("scroll", (e) => zoomTopBar())
