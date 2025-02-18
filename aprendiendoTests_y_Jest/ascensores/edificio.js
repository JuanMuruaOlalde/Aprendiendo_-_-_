import { crearUnAscensor } from "./ascensor.js";

function crearEdificio({
    piso_mas_bajo,
    piso_mas_alto,
    cantidad_de_ascensores,
}) {
    let ascensores = [];
    for (let i = 0; i < cantidad_de_ascensores; i++) {
        ascensores.push(crearUnAscensor(piso_mas_bajo, piso_mas_alto));
    }

    return {
        pulsarBotonDeLlamadaAlAscensorEnPiso(piso) {
            var distancia_mas_pequeina = Number.MAX_SAFE_INTEGER;
            var ascensor_mas_cercano = 0;
            for (let i = 0; i < ascensores.length; i++) {
                if (
                    Math.abs(piso - ascensores.at(i).getPisoEnQueEsta()) <
                    distancia_mas_pequeina
                ) {
                    distancia_mas_pequeina = Math.abs(
                        piso - ascensores.at(i).getPisoEnQueEsta()
                    );
                    ascensor_mas_cercano = i;
                }
            }
            try {
                ascensores.at(ascensor_mas_cercano).irAlPiso(piso);
            } catch (error) {
                console.error(error);
            }
            return ascensor_mas_cercano + 1;
        },
        getPosicionesDeLosAscensores() {
            return ascensores.map((x) => x.getPisoEnQueEsta());
        },
        moverAscensorAPiso({ ascensor, piso }) {
            //El indexado de los array javascript empieza en 0 , (por ejemplo 4 ascensores serian el 0, el 1, el 2 y el 3)
            //Pero para humanos es más claro que el primer ascensor sea el 1, (por ejemplo 4 ascensores serian el 1, el 2, el 3 y el 4)
            if (ascensor >= 1 && ascensor <= ascensores.length) {
                ascensores.at(ascensor - 1).irAlPiso(piso);
            } else {
                throw new Error(
                    `El edificio solo tiene ${ascensores.length} ascensores. No se puede mover el ascensor ${ascensor}.`
                );
            }
        },
    };
}

export { crearEdificio };
