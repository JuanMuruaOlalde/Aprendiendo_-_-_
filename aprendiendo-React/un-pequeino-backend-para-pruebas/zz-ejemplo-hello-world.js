const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hola, mundo");
})

app.listen(port, () => {
    console.log(`Se ha arrancado la aplicación web. Está disponible en el puerto ${port}/`);
})


/*
 Eso mismo haciendolo directamente desde Javascript seria:
*/
// const http = require("http");
// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hola, mundo");
// });

// server.listen(port, hostname, () => {
//     console.log(`Se ha arrancado el servidor. Está disponible en http://${hostname}:${port}/`);
// });