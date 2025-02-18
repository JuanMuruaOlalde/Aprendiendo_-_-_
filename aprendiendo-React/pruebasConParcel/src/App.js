import { useState } from "react";

import { Saludo } from "./components/ComponentesDePrueba";
//nota: Las variables que se pasan al componente es lo que se denomina "propiedades" ("props")

import fotoDeUnGato from "./assets/gato.jpg";

export function HolaMundo() {
    return <p>Hola, mundo.</p>;
}

export function AdiosMundo() {
    return <p>Adios, mundo.</p>;
}

export function App() {
    // Estas dos variables es lo que se denomina "variables de estado" (state)
    const [unaVariable, setUnaVariable] = useState(5);
    const [otraVariable, setOtraVariable] = useState("algo");

    return (
        <>
            <p>Aquí va el contenido de la pagina</p>
            <p>
                Se escribe con una mezcla entre código HTML y código Javascript.
                Es decir, se escribe en JSX
            </p>
            <div>
                <p>
                    Por ejemplo {otraVariable} mezclado con {unaVariable}
                </p>
                <p>
                    O esta imagen de un gato{" "}
                    <img
                        alt="un gato marrón listado con un fondo otoñal de hojas secas"
                        src={fotoDeUnGato}
                        width="60"
                        height="80"
                    />
                </p>
            </div>
            <div>
                <p>
                    Tambien podemos organizar la pagina usando componentes
                    React. Por ejemplo:
                </p>
                <Saludo nombre="Benzirpi" apellido="Mirvento" />
            </div>
            <div>
                <p>
                    Se pueden utizar condicionales, para que unas partes
                    aparezcan y otras no...
                </p>
                {unaVariable > 7 && <HolaMundo />}
                {otraVariable === "algo" && <AdiosMundo />}
            </div>
        </>
    );
}
