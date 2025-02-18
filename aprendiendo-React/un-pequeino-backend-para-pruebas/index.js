import express from "express";

import {
    getUltimosAlbaranes,
    getAlbaran,
} from "./albaranes/manejoDeAlbaranes.js";
import {
    getCoordenadas,
    getMetereologia,
    getMetereologiaParaPruebas,
} from "./metereologia/manejoDeConsultasMetereologicas.js";

const app = express();
const port = 3001;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get("/", (req, res) => {
    res.send(
        "<p>Esto es solo un servidor de datos y servicios, prueba con la url <big><code>/api</code></big></p>"
    );
});

app.get("/api", (req, res) => {
    res.send(
        "<p> Aquí deberia ir algo explicando las APIs disponibles: endpoints, datos a enviar a cada enpoint,...</p>" +
            "<br/>" +
            "<p> Por ahora, pondré simplemente una lista de los endpoints disponibles:</p>" +
            "<ul>" +
            "  <li>GET /api/albaranes : da los últimos albaranes introducidos al sistema.</li>" +
            "  <li>GET /api/albaranes/numeroDeAlbaran : da el albarán solicitado.</li>" +
            "  <li>GET /api/metereologia?poblacion=XXXXXX&pais=YY : da la situación metereologica actual en la zona indicada.</li>" +
            "  <li>GET /api/metereologia/datosParaPruebas: da una situación metereologica, simulando la respuesta del servicio.</li>" +
            "</ul>" +
            "<br/><br/><br/>" +
            "<p> Y una lista de los que aún no están disponibles, pero que es posible que en un futuro estén:</p>" +
            "<ul>" +
            "  <li>POST /api/albaranes : crea un nuevo albarán.</li>" +
            "  <li>PUT /api/albaranes/numeroDeAlbaran : guarda el albarán indicado (es decir, lo sustituye con (nuevos)datos).</li>" +
            "  <li>PATCH /api/albaranes/numeroDeAlbaran : añade una linea al albarán indicado.</li>" +
            "  <li>DELETE /api/albaranes/numeroDeAlbaran : elimina el albarán indicado.</li>" +
            "</ul>"
    );
});

app.get("/api/albaranes", (req, res) => {
    res.json(getUltimosAlbaranes());
});

app.get("/api/albaranes/:numeroDeAlbaran", (req, res) => {
    res.json(getAlbaran(req.params["numeroDeAlbaran"]));
});

app.post("/api/albaranes", (req, res) => {
    res.send(
        "<p>La opción de crear un nuevo albarán, no está disponible todavia...</p>"
    );
});

app.patch("/api/albaranes/:numeroDeAlbaran", (req, res) => {
    res.send(
        "<p>La opción de añadir una linea a un albarán existente, no está disponible todavia...</p>"
    );
});

app.put("/api/albaranes/:numeroDeAlbaran", (req, res) => {
    res.send(
        "<p>La opción de reemplazar un albarán con nuevos datos (es decir, modificar un albarán existente), no está disponible todavia...</p>"
    );
});

app.delete("/api/albaranes/:numeroDeAlbaran", (req, res) => {
    res.send(
        "<p>La opción de eliminar un albarán, no está disponible todavia...</p>"
    );
});

app.get("/api/metereologia", (req, res) => {
    getCoordenadas(req.query.poblacion, req.query.pais)
        .then((coordenadas) => {
            let { latitud, longitud } = coordenadas;
            getMetereologia(latitud, longitud)
                .then((datosMetereologicos) => {
                    res.json(JSON.stringify(datosMetereologicos));
                })
                .catch((error) => {
                    res.send("ERROR en metereologia: " + error);
                });
        })
        .catch((error) => {
            res.send("ERROR en coordenadas: " + error);
        });
});

app.get("/api/metereologia/datosParaPruebas", function (req, res, next) {
    res.json(getMetereologiaParaPruebas());
});

app.listen(port, () => {
    console.log(
        `Se ha arrancado el pequeino-backend-para-pruebas . Está disponible en el puerto ${port}/`
    );
});
