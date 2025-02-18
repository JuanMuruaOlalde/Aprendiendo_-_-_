import { crearEdificio } from "./edificio.js";

window.addEventListener("load", function () {
    const PISO_MAS_BAJO = -2;
    const PISO_MAS_ALTO = 5;
    const CANTIDAD_DE_ASCENSORES = 4;

    let edificio = crearEdificio({
        piso_mas_bajo: PISO_MAS_BAJO,
        piso_mas_alto: PISO_MAS_ALTO,
        cantidad_de_ascensores: CANTIDAD_DE_ASCENSORES,
    });

    this.document.getElementById(
        "titulo_de_la_pagina"
    ).innerHTML = `Edificio de ${CANTIDAD_DE_ASCENSORES} ascensores y pisos del ${PISO_MAS_BAJO} al ${PISO_MAS_ALTO}`;

    this.document.getElementById("ascensor").setAttribute("min", 1);
    this.document
        .getElementById("ascensor")
        .setAttribute("max", CANTIDAD_DE_ASCENSORES);
    this.document
        .getElementById("piso_llamar")
        .setAttribute("min", PISO_MAS_BAJO);
    this.document
        .getElementById("piso_llamar")
        .setAttribute("max", PISO_MAS_ALTO);
    this.document
        .getElementById("piso_mover")
        .setAttribute("min", PISO_MAS_BAJO);
    this.document
        .getElementById("piso_mover")
        .setAttribute("max", PISO_MAS_ALTO);

    let formulario_llamar = this.document.getElementById("frmLlamarAlAscensor");
    formulario_llamar.addEventListener("submit", (event) => {
        event.preventDefault();
        let datos = new FormData(formulario_llamar);
        let piso = Number(datos.get("piso_llamar"));
        let ascensor_que_ha_acudido =
            edificio.pulsarBotonDeLlamadaAlAscensorEnPiso(piso);
        mostrarPosicionesDeLosAscensores(
            edificio,
            espacio_para_mostrar_ascensores
        );
        this.document.getElementById("ascensor").value =
            ascensor_que_ha_acudido;
    });

    let formulario_mover = this.document.getElementById("frmMoverUnAscensor");
    formulario_mover.addEventListener("submit", (event) => {
        event.preventDefault();
        let datos = new FormData(formulario_mover);
        let ascensor = Number(datos.get("ascensor"));
        let piso = Number(datos.get("piso_mover"));
        edificio.moverAscensorAPiso({ ascensor, piso });
        mostrarPosicionesDeLosAscensores(
            edificio,
            espacio_para_mostrar_ascensores
        );
    });

    let espacio_para_mostrar_ascensores = this.document.getElementById(
        "espacio_para_mostrar_los_ascensores"
    );
    mostrarPosicionesDeLosAscensores(edificio, espacio_para_mostrar_ascensores);
});

function mostrarPosicionesDeLosAscensores(
    edificio,
    espacio_para_mostrar_ascensores
) {
    espacio_para_mostrar_ascensores.innerHTML = "";
    let posiciones = edificio.getPosicionesDeLosAscensores();
    var texto = " : ";
    for (let posicion of posiciones) {
        texto = texto + posicion + " : ";
    }
    let lista = document.createElement("p");
    lista.innerHTML = texto;
    espacio_para_mostrar_ascensores.appendChild(lista);
}
