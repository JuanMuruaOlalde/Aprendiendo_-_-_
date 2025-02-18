import { useState } from 'react';

import '../views/MiAplicacion.css';
import fotoDeUnGato from '../assets/gato.jpg';
import { Albaranes } from '../views/Albaranes';
import { getUltimosAlbaranes, getAlbaran } from '../services/manejoDeAlbaranes';

export function MiAplicacion() {
    const NAV = Object.freeze({
        PANTALLA_INICIAL: "PantallaInicial",
        ULTIMOS_ALBARANES: "UltimosAlbaranes",
        UN_ALBARAN: "UnAlbaran"
    })
    const [navegacion, setNavegacion] = useState(NAV.PANTALLA_INICIAL);

    const [albaranesAMostrar, setAlbaranesAMostrar] = useState([]);
    const [numeroDeAlbaranSeleccionado, setNumeroDeAlbaranSeleccionado] = useState("");
    const [errorEnNumeroDeAlbaranSeleccionado, setErrorEnNumeroDeAlbaranSeleccionado] = useState("");

    function mostrarUltimosAlbaranes() {
        getUltimosAlbaranes()
            .then((datos) => {
                setAlbaranesAMostrar(datos);
                setNavegacion(NAV.ULTIMOS_ALBARANES);
            })
            .catch((error) => {
                alert("Error al recuperar los ultimos albaranes: " + error);
                setAlbaranesAMostrar([]);
                setNavegacion(NAV.PANTALLA_INICIAL);
            });
    }

    function mostrarUnAlbaran() {
        if(!numeroDeAlbaranSeleccionado || numeroDeAlbaranSeleccionado === "") {
            setErrorEnNumeroDeAlbaranSeleccionado("No se puede buscar un albaran sin indicar su número.");
        } else {
            getAlbaran(numeroDeAlbaranSeleccionado)
                .then((albaran) => {
                    if(albaran.length > 0){
                        setAlbaranesAMostrar(albaran);
                        setNavegacion(NAV.UN_ALBARAN);
                    } else {
                        setErrorEnNumeroDeAlbaranSeleccionado("No se ha encontrado el albaran " + numeroDeAlbaranSeleccionado);
                    }
                })
                .catch((error) => {
                    alert("Error al recuperar el albarán " + numeroDeAlbaranSeleccionado + ": " + error);
                    setAlbaranesAMostrar([]);
                    setNavegacion(NAV.PANTALLA_INICIAL);
                });
        }
    }

    function gestionarCambiosEnNumeroDeAlbaran(evento) {
        setNumeroDeAlbaranSeleccionado(evento.target.value);
    }


    return (
        <>
        {navegacion === NAV.PANTALLA_INICIAL &&
            <>
            <nav>
                <button onClick={mostrarUltimosAlbaranes}>Mostrar los últimos albaranes</button>
            </nav>
            <form className="enmarcado_dentro_de_una_caja" onSubmit={mostrarUnAlbaran}>
                <fieldset>
                <label htmlFor="numeroDeAlbaranSeleccionado">
                    Numero de albarán: 
                    <input type="text"
                           id="numeroDeAlbaranSeleccionado" 
                           value={numeroDeAlbaranSeleccionado} 
                           onChange={gestionarCambiosEnNumeroDeAlbaran}
                    />
                </label>
                </fieldset>
                <button type="button" onClick={mostrarUnAlbaran}>Mostrar el albarán</button>
                {errorEnNumeroDeAlbaranSeleccionado !== "" &&
                    <label className="error">{errorEnNumeroDeAlbaranSeleccionado}</label>
                }
            </form>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
            <img src={fotoDeUnGato} alt='un gato con fondo otoñal' width={90} height={120}/>
            <p>
                <small>By Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01.jpg: Hisashi from Japanderivative work: Caspian blue - Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01.jpg, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=8313371</small>
            </p>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/800px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg' alt='un gato con fondo otoñal' width={90} height={120}/>
            </>
        }
        {navegacion === NAV.ULTIMOS_ALBARANES &&
            <>
            <nav>
                <button onClick={()=>setNavegacion(NAV.PANTALLA_INICIAL)}>Volver a pantalla inicial</button>
            </nav>
            <p>Los últimos albaranes son: </p>
            <Albaranes albaranes={albaranesAMostrar}/>
            </>
        }
        {navegacion === NAV.UN_ALBARAN &&
            <>
            <nav>
                <button onClick={()=>setNavegacion(NAV.PANTALLA_INICIAL)}>Volver a pantalla inicial</button>
            </nav>
            <Albaranes albaranes={albaranesAMostrar}/>
            </>
        }
        </>
    )
}