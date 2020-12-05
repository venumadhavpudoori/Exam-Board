
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = 0 + ":" + minutes  + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


window.addEventListener("load",function () {
   var FortyfiveMinutes = 60 * 45,
        display = document.querySelector('#timer');
    startTimer(FortyfiveMinutes, display);
}, false);

function examTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = 0 + ":" + minutes  + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
window.addEventListener("load",function () {
    var FortyfiveMinutes = 60 * 45,
        display = document.querySelector('.timer');
    examTimer(FortyfiveMinutes, display);
}, false);









