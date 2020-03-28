// Funcao Play  ->  Contagem Regressiva
var time = new Number();
var nC = parseInt(document.getElementById('Tcounter').textContent);
var st;
var btControl = true;
var info = $('#timer').html();
var shortBreakCounter = -1;
var timeSec = 1; //Config Set -- 1 = Tests
// Tempo em segundos
//time = 1500;  //25 min 
time = timeSec;  //25 min 

function startTimer() {
    if (time == 0) {
        //alert('Pressione RESET para resetar o timer!')
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
        //ans = confirm('Tem certeza que deseja zerar o cronometro?');
        ans = true;
        if (ans) {
            time = 0;
            btControl = true;
        }
    } else {
        alert('O timer marca 25:00')
    }
}
//----------------------------------------------------------
//Funcao RESET
function resetTimer() {
    //ans = confirm('Tem certeza que deseja resetar o cronometro?');
    ans = true;
    if (ans) {
        clearTimeout(st);
        setTimeout(r(), 1);
        btControl = true;
    }
}
function r() {
    $('#timer').html('25:00');
    time = timeSec;
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
            time = 1;
            $('#Tcounter').html(nC);
            $('#pBreak').html("Short Break");
            $('#pBreak').css("color", "green");
            $('#pBreak').css("display", "block");
        } else {
            if (shortBreakCounter == 11) {

                nC--;
                confirm("10 Tasks in a row... Take a Long break");
                time = 2;
                shortBreakCounter = -1;
                $('#Tcounter').html(nC);
                $('#pBreak').html("Long Break");
                $('#pBreak').css("color", "cyan");
                $('#pBreak').css("display", "block");
            }else{

            }
        }
    }
}

//Funcao Resetar Contador Task
function resetTaskCount() {
    $('#Tcounter').html(0);
    nC = 0;
}

