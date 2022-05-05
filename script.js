function mover_reloj(){
    horaActual = new Date()

    hora = horaActual.getHours();
    minutos = horaActual.getMinutes();
    segundos = horaActual.getSeconds();

    str_segundos = new String(segundos)
    if (str_segundos.length == 1){
        segundos = "0" + segundos
    }

    str_minutos = new String(minutos)
    if (str_minutos.length == 1){
        minutos = "0" + minutos
    }

    str_hora = new String(hora)
    if (str_hora.length == 1){
        hora = "0" + hora
    }

    var horaImprimir = hora + ":" + minutos + ":" + segundos;

    document.ElReloj.reloj.value = horaImprimir
}

setInterval("mover_reloj()", 1000);