function crearUnAscensor(piso_mas_bajo, piso_mas_alto) {
    let piso_en_que_esta = 0;

    return {
        irAlPiso(piso) {
            if (piso >= piso_mas_bajo && piso <= piso_mas_alto) {
                piso_en_que_esta = piso;
            } else {
                throw new Error(
                    `No se puede ir al piso ${piso}. El ascensor solo va desde ${piso_mas_bajo} al ${piso_mas_alto}.`
                );
            }
        },

        getPisoEnQueEsta() {
            return piso_en_que_esta;
        },
    };
}

export { crearUnAscensor };
