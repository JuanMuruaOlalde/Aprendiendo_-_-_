import { crearEdificio } from "./edificio.js";

test("acude un ascensor al piso cuando se pulsa el boton de llamada", () => {
    let edificio = crearEdificio({
        piso_mas_bajo: -2,
        piso_mas_alto: 5,
        cantidad_de_ascensores: 4,
    });

    let posicionesAntes = edificio.getPosicionesDeLosAscensores();
    expect(posicionesAntes).not.toContain(3);

    edificio.pulsarBotonDeLlamadaAlAscensorEnPiso(3);

    let posicionesDespues = edificio.getPosicionesDeLosAscensores();
    expect(posicionesDespues).toContain(3);
});

test("acude el ascensor mas cercano al piso cuando se pulsa el boton de llamada", () => {
    let edificio = crearEdificio({
        piso_mas_bajo: -2,
        piso_mas_alto: 5,
        cantidad_de_ascensores: 4,
    });

    edificio.moverAscensorAPiso({ ascensor: 1, piso: -2 });
    edificio.moverAscensorAPiso({ ascensor: 2, piso: -2 });
    edificio.moverAscensorAPiso({ ascensor: 3, piso: -2 });
    edificio.moverAscensorAPiso({ ascensor: 4, piso: 1 });

    let posicionesAntesBB = edificio.getPosicionesDeLosAscensores();
    expect(posicionesAntesBB).not.toContain(3);
    edificio.pulsarBotonDeLlamadaAlAscensorEnPiso(3);
    let posicionesDespuesBB = edificio.getPosicionesDeLosAscensores();
    //nosotros compensamos para que los ascensores sean 1, 2, 3 y 4
    //pero el array javascript sigue teniendo índices 0, 1, 2 y 3
    //por tanto, el ascensor 4 es el índice .at(3)
    expect(posicionesDespuesBB.at(3)).toBe(3);

    edificio.moverAscensorAPiso({ ascensor: 1, piso: 5 });
    edificio.moverAscensorAPiso({ ascensor: 2, piso: 5 });
    edificio.moverAscensorAPiso({ ascensor: 3, piso: 2 });
    edificio.moverAscensorAPiso({ ascensor: 4, piso: 5 });

    let posicionesAntesBC = edificio.getPosicionesDeLosAscensores();
    expect(posicionesAntesBC).not.toContain(-1);
    edificio.pulsarBotonDeLlamadaAlAscensorEnPiso(-1);
    let posicionesDespuesBC = edificio.getPosicionesDeLosAscensores();
    //¡ojo! al indexado de arrays, como se ha comentado antes; el ascensor 3 es el índice 2
    expect(posicionesDespuesBC.at(2)).toBe(-1);
});

test("un ascensor se mueve al piso indicado cuando se pulsa su botonera", () => {
    let edificio = crearEdificio({
        piso_mas_bajo: -2,
        piso_mas_alto: 5,
        cantidad_de_ascensores: 4,
    });
    let posicionesBB = edificio.getPosicionesDeLosAscensores();

    expect(posicionesBB).not.toContain(-2);
    edificio.moverAscensorAPiso({ ascensor: 1, piso: -2 });
    let posicionesBC = edificio.getPosicionesDeLosAscensores();
    expect(posicionesBC).toContain(-2);

    expect(posicionesBC).not.toContain(5);
    edificio.moverAscensorAPiso({ ascensor: 2, piso: 5 });
    let posicionesBD = edificio.getPosicionesDeLosAscensores();
    expect(posicionesBD).toContain(5);

    expect(posicionesBD).not.toContain(3);
    edificio.moverAscensorAPiso({ ascensor: 3, piso: 3 });
    let posicionesBF = edificio.getPosicionesDeLosAscensores();
    expect(posicionesBF).toContain(3);

    expect(posicionesBF).not.toContain(1);
    edificio.moverAscensorAPiso({ ascensor: 1, piso: 1 });
    let posicionesBG = edificio.getPosicionesDeLosAscensores();
    expect(posicionesBG).toContain(1);

    expect(posicionesBG).not.toContain(-1);
    edificio.moverAscensorAPiso({ ascensor: 2, piso: -1 });
    let posicionesBH = edificio.getPosicionesDeLosAscensores();
    expect(posicionesBH).toContain(-1);
});

test("el edificio se queja si se intenta mover un ascensor inexistente", () => {
    let edificio = crearEdificio({
        piso_mas_bajo: -2,
        piso_mas_alto: 5,
        cantidad_de_ascensores: 4,
    });
    //Asumiendo que el array de ascensores es 1,2,3,4
    //probar los dos extremos
    expect(() => edificio.moverAscensorAPiso({ ascensor: 5, piso: 1 })).toThrow(
        Error
    );
    expect(() => edificio.moverAscensorAPiso({ ascensor: 0, piso: 1 })).toThrow(
        Error
    );
    //y probar dos más lejos a ambos lados
    expect(() =>
        edificio.moverAscensorAPiso({ ascensor: 42, piso: 1 })
    ).toThrow(Error);
    expect(() =>
        edificio.moverAscensorAPiso({ ascensor: -42, piso: 1 })
    ).toThrow(Error);
});
