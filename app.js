var min = 0;
var sec = 0;
var milisec = 0;
var displaymin = document.getElementById("min");
var displaysec = document.getElementById("sec");
var displaymilisec = document.getElementById("milisec");
var stop;
var interval;

function timer() {
    milisec ++ 
    displaymilisec.innerHTML = milisec;
    if(milisec == 100) {
        sec ++
        displaysec.innerHTML = sec
        milisec = 0;
    }
    else if (sec == 60) {
        min ++ 
        displaymin.innerHTML = min
        sec = 0;
    }
}


function start() {
   interval = setInterval(timer , 10)

}
function stop() {
    clearInterval(interval)
}

function reset() {
    var min = 0;
    var sec = 0;
    var milisec = 0;
    displaysec.innerHTML = 0;
    displaymin.innerHTML = 0;
    displaymilisec.innerHTML = 0;
    stop();
}

