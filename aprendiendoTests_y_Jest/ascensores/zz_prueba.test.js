import { estaFuncionDePruebasLanzaUnaExcepcion } from "./zz_prueba.js";

test("este test pasa", () => {
    expect(true).toBeTruthy();
});

test.skip("este test falla", () => {
    expect(true).toBeFalsy();
});

test("una funcion de pruebas provoca una excepcion", () => {
    expect(() => estaFuncionDePruebasLanzaUnaExcepcion()).toThrow(Error);
});
