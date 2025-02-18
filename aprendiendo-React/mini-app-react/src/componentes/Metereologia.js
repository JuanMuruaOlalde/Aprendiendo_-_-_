import { useState } from "react";

function getDatosMetereologicos(poblacion, codigoPais) {
    return getDatos(
        "http://localhost:3001/api/metereologia" +
            "?poblacion=" +
            poblacion +
            "&pais=" +
            codigoPais
    );
}
function getDatosMetereologicosDePrueba() {
    return getDatos(
        "http://192.168.251.18:3001/api/metereologia/datosParaPruebas"
    );
}

async function getDatos(urlDeLaApi) {
    try {
        const response = await fetch(urlDeLaApi);
        if (response.ok) {
            const jsonData = await response.json();
            // console.log(
            //     "Respuesta del servicio de metereologia " +
            //         JSON.stringify(jsonData)
            // );
            const temperaturaActual = jsonData["temperaturaActual"];
            const humedadActual = jsonData["humedadActual"];
            const vientoVelocidad = jsonData["vientoVelocidad"];
            const vientoDireccion = jsonData["vientoDireccion"];
            return {
                temperaturaActual,
                humedadActual,
                vientoVelocidad,
                vientoDireccion,
            };
        } else {
            return (
                "No se han podido obtener datos metereologicos." +
                " La respuesta del servicio ha sido:\n" +
                response.status +
                " " +
                response.statusText
            );
        }
    } catch (error) {
        return (
            "Se ha producido un error al consultar al servicio de metereologia:\n" +
            error.message
        );
    }
}

export function Metereologia() {
    const [formData, setFormData] = useState({
        poblacion: "",
        codigoPais: "ES",
    });

    const [coordenadas, setCoordenadas] = useState({
        latitud: "",
        longitud: "",
    });

    const [metereologia, setMetereologia] = useState({
        temperaturaActual: 0,
        humedadActual: 0,
        vientoVelocidad: 0,
        vientoDireccion: 0,
    });
    const [geolocalizacionMultiple, setGeolocalizacionMultiple] = useState("");

    function gestionarCambiosEnAlgunCampoDelFormulario(evento) {
        const { name, value } = evento.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    async function buscarDatosMetereologicos() {
        getDatosMetereologicos(formData.poblacion, formData.codigoPais)
            .then((metereologiaObtenida) => {
                //console.log("Tengo metereologia!!", metereologiaObtenida);
                setMetereologia(metereologiaObtenida);
            })
            .catch((error) =>
                alert(
                    "Se ha producido un error al buscar los datos metereologicos:\n" +
                        error.message
                )
            );
    }

    function PresentarGeolocalizacionYMetereologia() {
        const timestamp = new Date(Date.now());
        return (
            <>
                <p>
                    Geolocalización: latitud {coordenadas.latitud}, longitud{" "}
                    {coordenadas.longitud}
                </p>
                <p> Temperatura: {metereologia.temperaturaActual}°C </p>
                <p> Humedad: {metereologia.humedadActual}% </p>
                <p>
                    {" "}
                    Viento: {metereologia.vientoVelocidad} m/s , soplando desde{" "}
                    {metereologia.vientoDireccion}°
                </p>
                <p>
                    <small>
                        Consulta realizada el {timestamp.toLocaleString()}
                    </small>
                </p>
            </>
        );
    }

    return (
        <>
            <h2>Interacción con APIs externas</h2>
            <p>Este es un frontend para utilizar un par de servicios:</p>
            <ul>
                <li>
                    <a
                        href="https://openweathermap.org/api/geocoding-api"
                        target="_blank"
                    >
                        https://openweathermap.org/api/geocoding-api
                    </a>
                </li>
                <li>
                    <a
                        href="https://openweathermap.org/current"
                        target="_blank"
                    >
                        https://openweathermap.org/current
                    </a>
                </li>
            </ul>
            <form className="enmarcado_dentro_de_una_caja">
                <p>
                    <label htmlFor="poblacion">
                        Población:
                        <input
                            type="text"
                            value={formData.poblacion}
                            onChange={gestionarCambiosEnAlgunCampoDelFormulario}
                            id="poblacion"
                            name="poblacion"
                            required
                        />
                    </label>
                </p>
                <p>
                    <label htmlFor="codigoPais">
                        Código de pais:
                        <input
                            type="text"
                            pattern="[a-zA-Z][a-zA-Z]"
                            value={formData.codigoPais}
                            onChange={gestionarCambiosEnAlgunCampoDelFormulario}
                            id="codigoPais"
                            name="codigoPais"
                            size="2"
                            required
                        />
                        <small>(2 letras)</small>
                    </label>
                    <br />
                    <a
                        href="https://es.wikipedia.org/wiki/ISO_3166-1#C%C3%B3digos_oficialmente_asignados"
                        target="_blank"
                    >
                        <small>(consultar los códigos oficiales)</small>
                    </a>
                </p>
                <p>
                    <button type="button" onClick={buscarDatosMetereologicos}>
                        Obtener coordenadas y metereologia"
                    </button>
                </p>
            </form>
            {coordenadas.latitud != "" && (
                <PresentarGeolocalizacionYMetereologia
                    coordenadas={coordenadas}
                    metereologia={metereologia}
                />
            )}
        </>
    );
}

// ¡IMPORTANTE! En los frontends que se ejecutan en la parte cliente no es posible guardar secretos.
//              El usuario no tiene más que ir a "Inspeccionar" en su browser para ver el código que se ejecuta.
//              Es decir, es imposible ocultarle las llamadas que se hagan a cualquier API externa.
//
// Si se desea mantener claves o tokens en secreto, es necesario que las llamadas con secretos se hagan
// desde un servidor que controlemos nosotros. Es decir: el cliente hace una petición a nuestro servidor;
// nuestro servidor hace la llamada a la API externa; y devuelve al cliente el resultado de esta.
//
// La forma de trabajar que se ve en este código comentado solo es válida en un ejercicio de práctica...
// No usar nunca en producción con nada que involucre secretos...
//
// let CONFIGURACION;
// fetch("./configuracion.json")
//     .then((response) => {
//         if (!response.ok) {
//             alert("No se ha podido leer la configuracion:\n" + response.status + " " + response.statusText);
//         }
//         return response.json();
//     })
//     .then((jsonData) => {
//         CONFIGURACION = jsonData;
//     })
//     .catch((error) => alert("Se ha producido un error al procesar la configuracion:\n" + error.message));
//
// function getCoordenadas(poblacion, codigoPais) {
//     return new Promise((resolve) => {
//         const urlParaGeocodificacion =
//             "http://api.openweathermap.org/geo/1.0/direct" +
//             "?q=" +
//             poblacion +
//             "," +
//             codigoPais +
//             "&appid=" +
//             CONFIGURACION["weatherAPIkey"];
//         fetch(urlParaGeocodificacion)
//             .then((response) => {
//                 if (!response.ok) {
//                     alert(
//                         "No se ha podido obtener datos de la API de geolocalización:\n" +
//                             response.status +
//                             " " +
//                             response.statusText
//                     );
//                 }
//                 return response.json();
//             })
//             .then((jsonData) => {
//                 //const timestamp = new Date(Date.now());
//                 //console.log(timestamp.toISOString(), "Se ha geolocalizado ", JSON.stringify(jsonData));
//                 if (jsonData.length === 1) {
//                     const latitud = jsonData[0]["lat"];
//                     const longitud = jsonData[0]["lon"];
//                     resolve({latitud, longitud});
//                 } else {
//                     resolve(jsonData);
//                 }
//             })
//             .catch((error) => alert("Se ha producido un error en la API de geolocalización:\n" + error.message));
//     });
// }
//
// function getMetereologia(latitud, longitud) {
//     return new Promise((resolve) => {
//         const urlParaMetereologia =
//             "https://api.openweathermap.org/data/2.5/weather?lat=" +
//             latitud +
//             "&lon=" +
//             longitud +
//             "&units=metric" +
//             "&lang=es" +
//             "&appid=" +
//             CONFIGURACION["weatherAPIkey"];
//         fetch(urlParaMetereologia)
//             .then((response) => {
//                 if (!response.ok) {
//                     alert("No se ha podido obtener datos de la API metereologica:\n" + response.status + " " + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then((jsonData) => {
//                 //const timestamp = new Date(Date.now());
//                 //console.log(timestamp.toISOString(), "Se ha obtenido metereologia ", JSON.stringify(jsonData));
//                 const temperaturaActual = jsonData["main"]["temp"];
//                 const humedadActual = jsonData["main"]["humidity"];
//                 const vientoVelocidad = jsonData["wind"]["speed"];
//                 const vientoDireccion = jsonData["wind"]["deg"];
//                 const salidaDelSol = new Date(jsonData["sys"]["sunrise"]);
//                 const puestaDelSol = new Date(jsonData["sys"]["sunset"]);
//                 //Me salian valores raros en las horas de salida y puesta del Sol, asi es que no las uso.
//                 resolve({temperaturaActual, humedadActual, vientoVelocidad, vientoDireccion});
//             })
//             .catch((error) => alert("Se ha producido un error en la API metereologica:\n" + error.message));
//     });
// }
//
// async function buscarDatosMetereologicos() {
//     getCoordenadas(formData.poblacion, formData.codigoPais)
//     .then((coordenadasObtenidas) => {
//         //console.log("Tengo coordenadas!!", coordenadasObtenidas);
//         setCoordenadas(coordenadasObtenidas);
//         getMetereologia(coordenadasObtenidas.latitud, coordenadasObtenidas.longitud)
//         .then((metereologiaObtenida) => {
//             //console.log("Tengo metereologia!!", metereologiaObtenida)
//             setMetereologia(metereologiaObtenida);
//         })
//     })
//     .catch((error) => alert("Se ha producido un error al buscar metereologia:\n" + error.message));
// }
