# Algunas herramientas para desarrollo web

(Septiembre 2023)

## Node.js

Para poder ejecutar código Javascript directamente en el PC o en el servidor, fuera del navegador web. (Ya que muchas de las herramientas de desarrollo que se utilizan en el desarrollo de aplicaciones web están ellas mismas escritas en Javascript.)

<https://nodejs.org/>

Para tener el gestor de paquetes **npm** (viene incluido en la instalación de Node.js)

<https://www.npmjs.com/>

  notas:

  Solo es necesario instalar Node en nuestra máquina. A partir de tener instalado Node y npm, se lanzan comandos npm para instalar el resto de herramientas y módulos.

  Las instalaciones con `npm install` pueden ser globales, o solo para el proyecto donde estemos lanzando el comando (queda registrado en su package.json)

nota: Para facilitar la creación rápida de aplicaciones web, podemos utilizar framework ligero **Express**. Útil, por ejemplo, para servir una pequeña API o para servir una pequeña SPA (Single Page Application).

<https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs>

<https://expressjs.com/>

## Empaquetadores

Para disponer de un servidor web de desarrollo. Un servidor con capacidad de recargar en caliente, para usarlo durante durante el trabajo de escribir/depurar código.

Para construir (build) un paquete compacto con nuestro código mas sus dependencias y los recursos necesarios. Un paquete que sea eficiente de distribuir y de servir desde un servidor web de producción. Por ejemplo, empaquetando solo aquellas partes que realmente se usan en nuestra aplicación; reduciendo el peso de los archivos a descargar (quitar saltos de línea, renombrar variables con nombres largos, consolidar varios archivos.js en uno solo, rehacer imagenes a las resoluciones mínimas adecuadas,...);...

Algunos de los más usados son:

<https://webpack.js.org>

<https://parceljs.org>

<https://esbuild.github.io/>

etc.

## Linters y formateadores

Para verificar que el código es "correcto" y para que el código quede "bonito". Es decir, para ayudarnos a que el código esté "bien escrito".

Algunos de los más usados son:

<https://eslint.org/>

<https://prettier.io/>

etc.

## Plataformas para test

Suelen venir en dos "sabores":

- Para tests unitarios.

- Para tests de integración o de validación, también conocidos como tests "extremo a extremo" (end-to-end).

Algunos de los más usados son:

<https://jestjs.io/>

<https://www.cypress.io/>

<https://www.selenium.dev/documentation/test_practices/overview/>

<https://pptr.dev/>

etc.

## Otras utilidades

Babel: un compilador/transpilador Javascript, para garantizar que el código funcione en diferentes navegadores o en navegadores antiguos.

<https://babeljs.io/>

nota: También se usa para transpilar variantes de Javascript (por ejemplo [JSX](https://en.wikipedia.org/wiki/JSX_(JavaScript)) o [Typescript](https://en.wikipedia.org/wiki/TypeScript)) y convertirlas a Javascript.

## Herramientas para diseñar interfaces y experiencias de usuario

Algunas de las más usadas son:

<https://storybook.js.org/>

<https://www.figma.com/>

etc.

## Herramientas para documentar y comprobar APIs

Algunas de las más usadas son:

<https://swagger.io/tools/>

<https://www.postman.com/product/tools/>

etc.
