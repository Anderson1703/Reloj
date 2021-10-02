let cajaHora = document.querySelector("#horas");
let cajaMinuto = document.querySelector("#minutos");
let cajaSegundo = document.querySelector("#segundos");

const actualizarDatos = () => {
    let reloj = new Date();
    let hora = reloj.getHours();
    let minutos = reloj.getMinutes();
    let segundos = reloj.getSeconds();

    if (hora > 12) {
        hora -= 12;
    }

    cajaHora.textContent = hora;
    cajaMinuto.textContent = minutos;
    cajaSegundo.textContent = segundos;
}

setInterval(() => {
    actualizarDatos()
}, 1000);