// Funcao Play  ->  Contagem Regressiva
var time = new Number();
var nC = parseInt(document.getElementById('Tcounter').textContent);
console.log('Contador:' + parseInt(nC));
var st;
var btControl = true;
var info = $('#timer').html();
// Tempo em segundos
time = 1500;  //25 min 
function startTimer() {
    if (time == 0) {
        alert('Pressione RESET para resetar o timer!')
    }
    if (btControl) {
        countdown();
        console.log(btControl);
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
        console.log(st);
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
        ans = confirm('Tem certeza que deseja zerar o cronometro?');
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
    ans = confirm('Tem certeza que deseja resetar o cronometro?');
    console.log(ans);
    if (ans) {
        clearTimeout(st);
        setTimeout(r(), 1);
        btControl = true;
    }
}
function r() {
    $('#timer').html('25:00');
    time = 1500;
    $('#timer').attr('style', 'color:black');
}
//----------------------------------------------------------
//Funcao Adicionar Contador Task 
function addTaskCount() {
    if (time = 1500) {
        nC++;
        $('#Tcounter').html(nC);
    }
}

//Funcao Resetar Contador Task
function resetTaskCount(){
    $('#Tcounter').html(0);
    nC = 0;
}
