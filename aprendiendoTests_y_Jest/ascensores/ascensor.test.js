import { crearUnAscensor } from "./ascensor.js";

test("el ascensor puede ir a un piso válido", () => {
    let ascensor = crearUnAscensor(-2, 5);
    ascensor.irAlPiso(-2);
    expect(ascensor.getPisoEnQueEsta()).toBe(-2);
    ascensor.irAlPiso(5);
    expect(ascensor.getPisoEnQueEsta()).toBe(5);
    ascensor.irAlPiso(0);
    expect(ascensor.getPisoEnQueEsta()).toBe(0);
    ascensor.irAlPiso(-1);
    expect(ascensor.getPisoEnQueEsta()).toBe(-1);
    ascensor.irAlPiso(3);
    expect(ascensor.getPisoEnQueEsta()).toBe(3);
});

test("el ascensor se queda quieto donde este si se indica un piso invalido", () => {
    let ascensor = crearUnAscensor(-2, 5);
    ascensor.irAlPiso(0);
    expect(ascensor.getPisoEnQueEsta()).toBe(0);
    expect(() => ascensor.irAlPiso(-4)).toThrow(Error);
    expect(ascensor.getPisoEnQueEsta()).toBe(0);
    expect(() => ascensor.irAlPiso(7)).toThrow(Error);
    expect(ascensor.getPisoEnQueEsta()).toBe(0);
});

test("el ascensor se queja si se indica un piso invalido", () => {
    let ascensor = crearUnAscensor(-2, 5);
    expect(() => ascensor.irAlPiso(-4)).toThrow(Error);
    expect(() => ascensor.irAlPiso(7)).toThrow(Error);
});
