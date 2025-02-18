import { describe, expect, test } from "@jest/globals";

import { unaPequeñaPruebaDeSumar } from "./main.js";

describe("La pequeña prueba suma correctamente", () => {
    test(" 2 + 2 es 4", () => {
        expect(unaPequeñaPruebaDeSumar(2, 2)).toBe(4);
    });
    test(" 5 + 0 es 5", () => {
        expect(unaPequeñaPruebaDeSumar(5, 0)).toBe(5);
    });
    test(" 838.576 + 193.874 es 1.032.450", () => {
        expect(unaPequeñaPruebaDeSumar(838576, 193874)).toBe(1032450);
    });
});
