import config from "config";
let WEATHERAPIKEY = config.get("weatherAPIkey");

import { metereologiaParaPruebas } from "./metereologiaParaPruebas.js";

export function getMetereologiaParaPruebas() {
    const jsonData = metereologiaParaPruebas;
    const temperaturaActual = jsonData["main"]["temp"];
    const humedadActual = jsonData["main"]["humidity"];
    const vientoVelocidad = jsonData["wind"]["speed"];
    const vientoDireccion = jsonData["wind"]["deg"];
    return {
        temperaturaActual,
        humedadActual,
        vientoVelocidad,
        vientoDireccion,
    };
}

export function getCoordenadas(poblacion, codigoPais) {
    return new Promise((resolve, reject) => {
        const urlParaGeocodificacion =
            "http://api.openweathermap.org/geo/1.0/direct" +
            "?q=" +
            poblacion +
            "," +
            codigoPais +
            "&appid=" +
            WEATHERAPIKEY;
        fetch(urlParaGeocodificacion)
            .then((response) => {
                if (!response.ok) {
                    reject(
                        "No se ha podido obtener datos de la API de geolocalización:\n" +
                            response.status +
                            " " +
                            response.statusText
                    );
                }
                return response.json();
            })
            .then((jsonData) => {
                // const timestamp = new Date(Date.now());
                // console.log(timestamp.toISOString(), "Se ha geolocalizado ", JSON.stringify(jsonData));
                if (jsonData.length === 1) {
                    const latitud = jsonData[0]["lat"];
                    const longitud = jsonData[0]["lon"];
                    resolve({ latitud, longitud });
                } else {
                    resolve(jsonData);
                }
            })
            .catch((error) =>
                reject(
                    "Se ha producido un error en la API de geolocalización:\n" +
                        error.message
                )
            );
    });
}

export function getMetereologia(latitud, longitud) {
    return new Promise((resolve, reject) => {
        const urlParaMetereologia =
            "https://api.openweathermap.org/data/2.5/weather" +
            "?lat=" +
            latitud +
            "&lon=" +
            longitud +
            "&units=metric" +
            "&lang=es" +
            "&appid=" +
            WEATHERAPIKEY;
        console.log(urlParaMetereologia);
        fetch(urlParaMetereologia)
            .then((response) => {
                if (!response.ok) {
                    reject(
                        "No se ha podido obtener datos de la API metereologica:\n" +
                            response.status +
                            " " +
                            response.statusText
                    );
                }
                return response.json();
            })
            .then((jsonData) => {
                // const timestamp = new Date(Date.now());
                // console.log(timestamp.toISOString(), "Se ha obtenido metereologia ", JSON.stringify(jsonData));
                const temperaturaActual = jsonData["main"]["temp"];
                const humedadActual = jsonData["main"]["humidity"];
                const vientoVelocidad = jsonData["wind"]["speed"];
                const vientoDireccion = jsonData["wind"]["deg"];
                resolve({
                    temperaturaActual,
                    humedadActual,
                    vientoVelocidad,
                    vientoDireccion,
                });
            })
            .catch((error) =>
                reject(
                    "Se ha producido un error en la API metereologica:\n" +
                        error.message
                )
            );
    });
}
