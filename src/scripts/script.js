// Funcao Play  ->  Contagem Regressiva
var time = new Number();
var nC = parseInt(document.getElementById('Tcounter').textContent);
var st;
var btControl = true;
var info = $('#timer').html();
var shortBreakCounter = -1;
var shortBreakTime = 300;
var longBreakTime = 1800;
var initTime = 1500;
var time = 1500;
function startTimer() {
    if (time == 0) {

    }
    if (btControl) {
        countdown();
        addTaskCount();
    }
}
function countdown() {
    btControl = false;
    // Se o tempo não for 0
    if ((time - 1) >= 0) {
        // Pega a parte inteira dos minutos
        var min = parseInt(time / 60);
        // Calcula os segundos restantes
        var sec = time % 60;
        // Formata o número menor que dez, ex: 08, 07, ...
        if (min < 10) {
            min = "0" + min;
            min = min.substr(0, 2);
        }
        if (sec <= 9) {
            sec = "0" + sec;
        }
        // Cria a variável para formatar no estilo cronômetro
        printTime = min + ':' + sec;
        //JQuery pra setar o valor - id = timer
        $("#timer").html(printTime);
        // Define que a função será executada novamente em 1000ms = 1 segundo
        st = setTimeout('countdown()', 1000);
        // diminui o tempo
        time--;
        // Quando o contador chegar a zero
    } else {
        btControl = true;
        $("#timer").html('00:00');
        playSoundTimer();
        $("#timer").attr('style', 'color:red');

    }
}
//-------------------------------------------------------
//Funcao PAUSE
function pauseTimer() {
    clearTimeout(st);
    btControl = true;
}
//------------------------------------------------------
//Funcao STOP
function stopTimer() {
    info = $('#timer').html();
    if (info != '25:00') {        
        ans = true;
        if (ans) {
            time = 0;
            btControl = true;
        }
    } else {
        alert('Timer = 25:00')
    }
}
//----------------------------------------------------------
//Funcao RESET
function resetTimer() {       
    ans = true;
    if (ans) {
        clearTimeout(st);
        setTimeout(r(), 1);
        btControl = true;
    }
}
function r() {
    $('#timer').html('25:00');
    time = initTime;
    $('#timer').attr('style', 'color:black');
}
//----------------------------------------------------------
//Funcao Adicionar Contador Task 
function addTaskCount() {
    $('#pBreak').css("display", "none");
    nC++;
    ++shortBreakCounter;
    $('#Tcounter').html(nC);
    console.log("NC - " + nC);
    console.log("BREAK - " + shortBreakCounter);

    if (shortBreakCounter != 10 || shortBreakCounter != 0) {

        if (shortBreakCounter == 5) {
            nC--;
            confirm("5 Tasks in a row... Take a short break");
            playSoundCongrats();
            time = shortBreakTime;
            $('#Tcounter').html(nC);
            $('#pBreak').html("Short Break");
            $('#pBreak').css("color", "green");
            $('#pBreak').css("display", "block");
        } else {
            if (shortBreakCounter == 11) {
                nC--;
                confirm("10 Tasks in a row... Take a Long break");
                playSoundCongrats();
                time = longBreakTime;
                shortBreakCounter = -1;
                $('#Tcounter').html(nC);
                $('#pBreak').html("Long Break");
                $('#pBreak').css("color", "orange");
                $('#pBreak').css("display", "block");
            } else {

            }
        }
    }
}

//Funcao Resetar Contador Task
function resetTaskCount() {
    $('#Tcounter').html(0);
    nC = 0;
}

//Audios
function playSoundTimer() {
    var audio = document.getElementById("audioBeep");
    audio.muted = false;
    audio.currentTime = 0;
    audio.play();
}

function playSoundCongrats() {
    var audio = document.getElementById("audioCongrats");
    audio.muted = false;
    audio.currentTime = 0;
    audio.play();
}