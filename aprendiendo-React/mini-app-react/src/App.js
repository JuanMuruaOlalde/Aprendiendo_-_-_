import { useState } from 'react'

import { ContenidoPorDefecto } from './componentes/ContenidoPorDefecto'
import { ContenidoDeGatos } from './componentes/ContenidoDeGatos'
import { ContenidoDeJirafas } from './componentes/ContenidoDeJirafas'
import { Paralelepipedos } from './componentes/Paralelepipedos'
import { Pizzas } from './componentes/Pizzas'
import { Metereologia } from './componentes/Metereologia'
import { PieDePaginaConEnlacesDeUtilidad } from './componentes/PieDePagina'

import imagenDeUnaCasita from './recursos/icons8-home-page-64.png'

export default function App() {

    const [paginaAMostrar, setPaginaAMostrar] = useState("primerapagina");

    function BotonIrAPaginaPrincipal() {
        return (
            <button type="button" onClick={() => setPaginaAMostrar("primerapagina")}>
                <img
                    src={imagenDeUnaCasita}
                    alt="Home icon, icono de casita"
                    width="32"
                    height="32"
                />
            </button>
        )
    }
    function BotonPonerContenidoDeGatos() {
        return (
            <button type="button" onClick={() => setPaginaAMostrar("gatos")}>Gatos</button>
        )
    }
    function BotonPonerContenidoDeJirafas() {
        return (
            <button type="button" onClick={() => setPaginaAMostrar("jirafas")}>Jirafas</button>
        )
    }
    function BotonIrAOtraPagina() {
        return (
            <button type="button" onClick={() => setPaginaAMostrar("paralelepipedos")}>Otra página</button>
        )
    }
    function BotonParalelepipedos() {
        const estaDesactivado = (paginaAMostrar=="paralelepipedos");
        return (
            <button type="button" onClick={() => setPaginaAMostrar("paralelepipedos")} disabled={estaDesactivado}>Paralelepipedos</button>
        )
    }
    function BotonPizzas() {
        const estaDesactivado = (paginaAMostrar=="pizzas");
        return (
            <button type="button" onClick={() => setPaginaAMostrar("pizzas")} disabled={estaDesactivado}>Pizzas</button>
        )
    }
    function BotonMetereologia() {
        const estaDesactivado = (paginaAMostrar=="metereologia");
        return (
            <button type="button" onClick={() => setPaginaAMostrar("metereologia")} disabled={estaDesactivado}>Metereologia</button>
        )
    }
    function Navegacion() {
        return (
            <nav>
                <p>Aquí van enlaces o botones para la navegación, para moverse dentro de esta web.</p>
                <ul>
                    <li><BotonIrAPaginaPrincipal/></li>
                    {["primerapagina", "jirafas"].includes(paginaAMostrar) &&
                        <li><BotonPonerContenidoDeGatos/></li>
                    }
                    {["primerapagina", "gatos"].includes(paginaAMostrar) &&
                        <li><BotonPonerContenidoDeJirafas/></li>
                    }
                    {["primerapagina", "gatos", "jirafas"].includes(paginaAMostrar) &&
                        <li><BotonIrAOtraPagina/></li>
                    }
                    {["paralelepipedos", "pizzas", "metereologia"].includes(paginaAMostrar) &&
                        <>
                            <li><BotonParalelepipedos/></li>
                            <li><BotonPizzas/></li>
                            <li><BotonMetereologia/></li>
                        </>
                    }
                </ul>
            </nav>
        )
    }

    return (
        <>
            {["primerapagina", "gatos", "jirafas"].includes(paginaAMostrar) &&
                <header>
                <h1>Página Principal [{paginaAMostrar}]</h1>
                </header>
            }
            {["paralelepipedos", "pizzas", "metereologia"].includes(paginaAMostrar) &&
                <header>
                    <h1>Esta es otra página</h1>
                </header>
            }

            <Navegacion/>

            {paginaAMostrar=="primerapagina" &&
                <ContenidoPorDefecto/>
            }
            {paginaAMostrar=="gatos" &&
                <ContenidoDeGatos/>
            }
            {paginaAMostrar=="jirafas" &&
                <ContenidoDeJirafas/>
            }
            {paginaAMostrar=="paralelepipedos" &&
                <Paralelepipedos/>
            }
            {paginaAMostrar=="pizzas" &&
                <Pizzas/>
            }
            {paginaAMostrar=="metereologia" &&
                <Metereologia/>
            }

            <PieDePaginaConEnlacesDeUtilidad/>
        </>
    )
    
}
