export function llamarALaAPIdeAlbaranesParaRecuperarDatos(url) {
    return new Promise ((resolve, reject) => {
        fetch(url,
        {
            headers: {
                "accepts": "application/json"
            }
        })
        .then((response) => {
            if(response.ok) {
                return response.json();
            } else {
                reject(response);
            }
        })
        .then((jsonData) => {
            const datos = [];
            for(const dato in jsonData) {
                datos.push(jsonData[dato]);
            }
            resolve(datos);
        });
     });
}

export function getUltimosAlbaranes() {
    return llamarALaAPIdeAlbaranesParaRecuperarDatos("/api/albaranes");
}

export function getAlbaran(numeroDeAlbaran) {
    if(!numeroDeAlbaran || numeroDeAlbaran === "") {
        throw(new Error("No se puede buscar un albaran sin indicar su número."));
    } else {
        return llamarALaAPIdeAlbaranesParaRecuperarDatos("/api/albaranes/" + numeroDeAlbaran);
    }
}