import { useState } from "react";

export function Pizzas() {
    const [pastaFina, setPastaFina] = useState(false);
    const [pastaNormal, setPastaNormal] = useState(true);
    const [conBordeQueso, setConBordeQueso] = useState(false);
    const [jamonYork, setJamonYork] = useState(false);
    const [bacon, setBacon] = useState(false);
    const [peperoni, setPeperoni] = useState(false);
    const [champinon, setChampinon] = useState(false);
    const [aceituna, setAceituna] = useState(false);
    const [respuesta, setRespuesta] = useState("");

    function ProcesarPizza() {
        var componerRespuesta = [];
        componerRespuesta.push("Se va a enviar una pizza");
        if (pastaFina) {
            componerRespuesta.push(" de pasta fina.");
        }
        if (pastaNormal) {
            componerRespuesta.push(" de pasta normal.");
        }
        if (conBordeQueso) {
            componerRespuesta.push(
                " de pasta normal con bordes rellenos de queso."
            );
        }
        var ingredientes = [];
        if (jamonYork) {
            ingredientes.push("jamón york");
        }
        if (bacon) {
            ingredientes.push("bacon crujiente");
        }
        if (peperoni) {
            ingredientes.push("peperoni");
        }
        if (champinon) {
            ingredientes.push("champiñones");
        }
        if (aceituna) {
            ingredientes.push("aceitunas");
        }
        if (ingredientes.length > 0) {
            componerRespuesta.push("\nCon los siguientes ingredientes:");
            for (const ingrediente of ingredientes) {
                componerRespuesta.push("\n  : " + ingrediente);
            }
        }
        setRespuesta(componerRespuesta.join(""));
    }

    function gestionarCambioPastaFina() {
        setPastaFina(true);
        setPastaNormal(false);
        setConBordeQueso(false);
    }
    function gestionarCambioPastaNormal() {
        setPastaFina(false);
        setPastaNormal(true);
        setConBordeQueso(false);
    }
    function gestionarCambioConBordeQueso() {
        setPastaFina(false);
        setPastaNormal(false);
        setConBordeQueso(true);
    }
    function gestionarCambioJamonYork() {
        setJamonYork(!jamonYork);
    }
    function gestionarCambioBacon() {
        setBacon(!bacon);
    }
    function gestionarCambioPeperoni() {
        setPeperoni(!peperoni);
    }
    function gestionarCambioChampinon() {
        setChampinon(!champinon);
    }
    function gestionarCambioAceituna() {
        setAceituna(!aceituna);
    }

    return (
        <>
            <h3>Pizzas:</h3>
            <form className="enmarcado_dentro_de_una_caja">
                <fieldset>
                    <legend>Elegir base:</legend>
                    <p>
                        <label htmlFor="pastaFina">
                            <input
                                type="radio"
                                onChange={gestionarCambioPastaFina}
                                checked={pastaFina}
                            />
                            Pasta fina
                        </label>
                    </p>
                    <p>
                        <label htmlFor="pastaNormal">
                            <input
                                type="radio"
                                onChange={gestionarCambioPastaNormal}
                                checked={pastaNormal}
                            />
                            Pasta normal
                        </label>
                    </p>
                    <p>
                        <label htmlFor="conBordeQueso">
                            <input
                                type="radio"
                                onChange={gestionarCambioConBordeQueso}
                                checked={conBordeQueso}
                            />
                            Pasta normal con borde relleno de queso
                        </label>
                    </p>
                </fieldset>
                <br />
                <fieldset>
                    <legend>Ingredientes:</legend>
                    <p>
                        Todas llevan una capa base de tomate y queso. Además
                        puedes añadir:
                    </p>
                    <p>
                        <label htmlFor="jamonYork">
                            <input
                                type="checkbox"
                                onChange={gestionarCambioJamonYork}
                                checked={jamonYork}
                            />
                            Jamón York
                        </label>
                    </p>
                    <p>
                        <label htmlFor="bacon">
                            <input
                                type="checkbox"
                                onChange={gestionarCambioBacon}
                                checked={bacon}
                            />
                            Bacon crujiente
                        </label>
                    </p>
                    <p>
                        <label htmlFor="peperoni">
                            <input
                                type="checkbox"
                                onChange={gestionarCambioPeperoni}
                                checked={peperoni}
                            />
                            Peperoni
                        </label>
                    </p>
                    <p>
                        <label htmlFor="champinon">
                            <input
                                type="checkbox"
                                onChange={gestionarCambioChampinon}
                                checked={champinon}
                            />
                            Champiñones
                        </label>
                    </p>
                    <p>
                        <label htmlFor="aceituna">
                            <input
                                type="checkbox"
                                onChange={gestionarCambioAceituna}
                                checked={aceituna}
                            />
                            Aceitunas
                        </label>
                    </p>
                </fieldset>
                <br />
                <button type="button" onClick={ProcesarPizza}>
                    Procesar Pizza
                </button>
                <p>
                    <textarea
                        value={respuesta}
                        className="contenedor_de_una_respuesta"
                        readOnly
                    ></textarea>
                </p>
            </form>
        </>
    );
}
