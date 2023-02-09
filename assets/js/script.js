const horas =  document.getElementById ('horas');
const minutos =  document.getElementById ('minutos');
const segundos =  document.getElementById ('segundos');

const relogio = setInterval (function time() {
    let dateToday = new Date ();
    let hora = dateToday.getHours();
    let minu = dateToday.getMinutes();
    let segun = dateToday.getSeconds();

    if ( horas < 10) hora = '0' + hora;
    if ( minutos < 10) hora = '0' + minu;
    if ( segundos < 10) hora = '0' + segun;


    horas.textContent = hora;
    minutos.textContent = minu;
    segundos.textContent = segun;

})