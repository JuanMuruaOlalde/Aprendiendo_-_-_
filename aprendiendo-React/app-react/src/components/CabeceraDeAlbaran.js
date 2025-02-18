import { useState } from "react";

import { LineaDeAlbaran } from "./LineaDeAlbaran";

export function CabeceraDeAlbaran(props) {
    const albaran = props.datos;

    const [verLineas, setVerLineas] = useState(false);

    function mostrarLineasDelAlbaranSeleccionado() {
        setVerLineas(true);
    }

    return (
        <tr>
            <td>{albaran.numeroDeAlbaran}</td>
            <td>{albaran.cliente.nombre}</td>
            <td>{albaran.destino.poblacion}</td>
            <td><button onClick={mostrarLineasDelAlbaranSeleccionado}>ver detalles</button></td>
            {verLineas &&
                <td>
                    <table>
                        <thead>
                            <tr>
                                <th>cantidad</th>
                                <th>articulo</th>
                                <th>descripcion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {albaran.lineas.map( (linea) => (
                                <LineaDeAlbaran key={linea.articulo.codigoDeArticulo} datos={linea}/>
                                )
                            )}
                        </tbody>
                    </table>
                </td>
            }
        </tr>
    )
}