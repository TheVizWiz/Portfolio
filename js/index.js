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




}); //starter function





