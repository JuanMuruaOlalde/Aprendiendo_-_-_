import { albaranesParaPruebas } from "./albaranesParaPruebas.js";

export function getUltimosAlbaranes() {
    //como por ahora hay pocos, devuelvo todos los que hay
    return albaranesParaPruebas;
}

export function getAlbaran(numeroDeAlbaran) {
    return albaranesParaPruebas.filter(
        (x) => x["numeroDeAlbaran"] == numeroDeAlbaran
    );
}

//TODO -pendiente- de incorporar las funciones guardarAlbaran(), añadirLineaAAlbaran() y eliminarAlbaran()
