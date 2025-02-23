
# Jest

https://jestjs.io/


## Para empezar a trabajar

https://jestjs.io/docs/getting-started


Simplemente, agregar la plataforma Jest al proyecto:
```
npm install --save-dev jest
````

Si se desea una salida más detallada, añadir `-- verbose` al script en el archivo `package.json` del proyecto. 
```
    "scripts": {
        "test": "jest --verbose"
    },
```

Para ver que funciona, se puede hacer un "Hello word" rápido. Escribir y ejecutar tres sencillos test triviales: un test que pasa, un test que falla y un test que detecta una excepción. Luego, estos tres test de prueba se pueden borrar.

````
//Archivo index.js

function estaFuncionLanzaUnaExcepcion() {
    throw new Error("Esto es una prueba de lanzar una excepcion.");
}

export { estaFuncionLanzaUnaExcepcion };
````

````
//Archivo index.test.js

import { estaFuncionLanzaUnaExcepcion } from "./index.js";

test("este test pasa", () => {
    expect(true).toBeTruthy();
});

test("este test falla", () => {
    expect(true).toBeFalsy();
});

test("una funcion de pruebas provoca una excepcion", () => {
    expect(() => estaFuncionLanzaUnaExcepcion()).toThrow(Error);
});
````

````
PS C:\Users\xxxxx\Documents\aprendiendoTests_y_Jest\xxxxxxxx> npm test

> xxxxxxxx@1.0.0 test
> node --experimental-vm-modules node_modules/jest/bin/jest.js
(node:30580) ExperimentalWarning: VM Modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

 FAIL  ./index.test.js
  √ este test pasa (1 ms)                                                                                                                                                  
  × este test falla (1 ms)                                                                                                                                                 
  √ una funcion de pruebas provoca una excepcion (2 ms)                                                                                                                     
                                                                                                                                                                           
  ● este test falla                                                                                                                                                        
                                                                                                                                                                           
    expect(received).toBeFalsy()

    Received: true

       6 |
       7 | test("este test falla", () => {
    >  8 |     expect(true).toBeFalsy();
         |                  ^
       9 | });
      10 |

      at Object.<anonymous> (index.test.js:8:18)

Test Suites: 1 failed, 1 total                                                                                                                                             
Tests:       1 failed, 2 passed, 3 total                                                                                                                                   
Snapshots:   0 total
Time:        0.45 s, estimated 1 s
Ran all test suites.
````

### Tipos de comprobaciones se pueden realizar

[Using Matchers](https://jestjs.io/docs/using-matchers)

- Comprobaciones básicas: https://jestjs.io/docs/using-matchers#common-matchers
- Comprobar si algo es nulo, verdadero o falso: https://jestjs.io/docs/using-matchers#truthiness
- Comprobaciones numéricas: https://jestjs.io/docs/using-matchers#numbers
- Usar expresiones regulares sobre un texto: https://jestjs.io/docs/using-matchers#strings
- Ver de si una colección contiene o no cierto item: https://jestjs.io/docs/using-matchers#arrays-and-iterables
- Chequear de si se lanza o no una excepción bajo ciertas condiciones: https://jestjs.io/docs/using-matchers#exceptions
- ... https://jestjs.io/docs/expect

### Comprobaciones sobre código asíncrono

https://jestjs.io/docs/asynchronous

### nota: si se están usando módulos ES6

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

Jest aún no soporta completamente los modernos módulos ES6 (los que se usan con `import`). Solo soporta los antiguos módulos CommonJS (los que se usan con la función `require()`).

Pero puede trabajar con módulos ES6, si se incluye esto en el archivo `package.json` del proyecto:
```` 
../..

    "scripts": {
        "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js --verbose"
    },

../..

    "jest": {
        "transform": {}
    }

../..
````
Esta es una funcionalidad en pruebas, pero con el tiempo...

https://jestjs.io/docs/ecmascript-modules

https://stackoverflow.com/questions/49656706/test-es6-modules-with-jest

### nota: lanzar tests en modo "debug"

[How to debug Jest tests with VSCode (2021 Version)](https://mattmazzola.medium.com/how-to-debug-jest-tests-with-vscode-2021-version-36b52b089605)

## Preparar el entorno en cada test

> ¡importante!: 
>
> Cada test prepara el entorno adecuado para ejecutarse. Ninguno ha de depender, ni verse afectado, por otros que se ejecuten antes o después. Ni por factores externos (como por ejemplo, que un cierto servidor de base de datos o de APIs o de ERP, o... esté en un cierto estado conteniendo ciertos datos concretos)
>
> Cada test ha de crear, inicializar, cargar,... todos los elementos que necesite. Y los ha de preparar expresamente para que estén exactamente en el estado que necesite que estén, o para que contengan exactamente lo que necesite que contengan.

### Si algo se repite en muchos de los test

https://jestjs.io/docs/setup-teardown

### Si algo es muy costoso de preparar o de utilizar

https://jestjs.io/docs/mock-functions

https://jestjs.io/docs/manual-mocks

https://jestjs.io/docs/timer-mocks

https://jestjs.io/docs/es6-class-mocks


## Algunos enlaces de documentación




# apéndice: otras plataformas de testing para Javascript

Para cualquier lenguaje y plataforma de programación, existen multiples plataformas para correr tests. Javascript no es menos. La cuestión es mirar qué hay en el mercado, probar algunas, y escoger la que mejor cubra nuestras necesidades.

En estos momentos (2025), Jest es una de las más utilizadas ?. Seguida de Mocha o Jasmine ?. Pero los propios motores "off-browser" (Node, Deno,...) están empezando a incorporar sus propias plataformas de testing para test unitarios, integradas en ellos.

Además de la plataforma Jest, estas son algunas otras:

[native Test Runner in Deno.js](https://docs.deno.com/runtime/fundamentals/testing/)

[native Test Runner in Node.js](https://nodejs.org/api/test.html)

[Mocha](https://mochajs.org/)

[Jasmine](https://jasmine.github.io/)

https://node-tap.org/

https://vitest.dev/

https://japa.dev/docs/introduction

https://github.com/avajs/ava

https://github.com/lukeed/uvu

https://github.com/tape-testing/tape

https://qunitjs.com


nota: Aprovecho para citar también algunas plataformas de testing “end-to-end”:

https://playwright.dev/

https://www.selenium.dev/

https://www.cypress.io/

Simplemente por si hicera falta testear también el interfaz de usuario en casos completos de uso.

nota: un ejemplo ilustrativo de tests “end-to-end” en un [ejercicio para github copilot](https://docs.github.com/en/copilot/example-prompts-for-github-copilot-chat/testing-code/create-end-to-end-tests-for-a-webpage)

