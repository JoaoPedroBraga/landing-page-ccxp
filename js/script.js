const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const lancamento = '30 november 2023';

function coutDown(){
    const dataLanc = new Date(lancamento);
    const dataAtual = new Date();

    const segTotal = (dataLanc - dataAtual) / 1000; // mil serve para transformar milisegundos em segundos

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24 ;
    const finalMinutos = Math.floor(segTotal / 60) % 60 ;
    const finalSegundos = Math.floor(segTotal) % 60 ;

    dias.innerHTML = formatoTempo(finalDias);
    horas.innerHTML = formatoTempo(finalHoras);
    minutos.innerHTML = formatoTempo(finalMinutos);
    segundos.innerHTML = formatoTempo(finalSegundos);
}

function formatoTempo(tempo){
    return tempo < 10 ?`0${tempo}` : tempo;
}
coutDown();
setInterval(coutDown, 1000);


// Efeito mouseover and mouseout

function highlightCard(selector){
    let element = document.querySelector(selector);
    element.classList.toggle("card-highlight") ;
}