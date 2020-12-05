var btn = document.querySelector('#item-1')
var btn2 = document.querySelector('#btn2')
var targett = document.querySelector("#search")

var more_menu_btn = document.querySelector('#menu-4')
var more_menu = document.querySelector('#more-menu')
var pro_menu = document.querySelector('#profile_menu')
var pro_menu_btn = document.querySelector('#item-3')

function Show_search() {
    targett.style.transform = 'scale(1)';
    btn2.setAttribute('onclick', 'Hide_search()')
    btn.style.display = 'none'
    targett.style.display = 'flex'

}

function Hide_search() {
    btn.style.display = 'block'
    targett.style.transform = 'scale(0)';
    targett.style.display = 'none'

    btn.setAttribute('onclick', 'Show_search()')

}



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













