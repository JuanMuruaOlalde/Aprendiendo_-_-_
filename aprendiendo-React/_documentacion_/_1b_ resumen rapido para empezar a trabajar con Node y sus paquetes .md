# Resumen rápido para empezar a trabajar con Node.js

### Introducción

Todos los navegadores web traen un motor para ejecutar código Javascript. Pero si se quiere ejecutar Javascript fuera del navegador, por ejemplo para usar herramientas en un IDE o código JS en un backend. Se puede recurrir al motor de ejecución Node.js

Este motor se ha de instalar en el equipo donde se quiera utilizar. El instalador se puede descargar desde <https://nodejs.org/es/download>.

Una vez instalado Node.js en el equipo, se suele trabajar con él desde la línea de comandos. (Por ejemplo, en Visual Studio Code, usar el menú 'Ver' 'Terminal' o pulsar las teclas [ctrl][`])

Uno de los puntos fuertes de Node.js es su gestor de paquetes (npm) y la amplia biblioteca que lo respalda: <https://www.npmjs.com/> (nota: Para hojear en la biblioteca, es necesario crearse una cuenta.)

![pantallazo biblioteca npm](./imagenes/pantallazo%20biblioteca%20npm.png)

nota:  `npm` es el acrónimo de "node package manager"

### Inicializar un proyecto para usar Node

Para inicializar una carpeta de proyecto para trabajar con Node. Situarse sobre esa carpeta y lanzar el comando:

```
npm init
```

Este comando hace una serie de preguntas y termina creando un archivo `package.json` en la carpeta.

```
PS C:\Users\zzz\Documents\aprendiendo-node\zz-pruebasYexperimentos> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (zz-pruebasyexperimentos)
version: (1.0.0)
description: Esto es simplemente para hacer pruebas...
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC) MIT
About to write to C:\Users\zzz\Documents\aprendiendo-node\zz-pruebasYexperimentos\package.json:

{
  "name": "zz-pruebasyexperimentos",
  "version": "1.0.0",
  "description": "Esto es simplemente para hacer pruebas...",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "MIT"
}

Is this OK? (yes)
PS C:\Users\zzz\Documents\aprendiendo-node\zz-pruebasYexperimentos>
```

nota: Las preguntas se pueden omitir (y se usarán valores por defecto al crear `package.json`). Añadir el parámetro -yes al comand: `npm init -yes`

### Instalar paquetes adiccionales

A partir de aquí, Node permite ir instalando paquetes en el proyecto. Para ello, se utiliza el comando `npm install  nombredelpaquete`. Cada paquete instalado queda registrado en el archivo `package.json`.

Una copia local de ese paquete (más de sus dependencias) queda en la carpeta `node-modules` dentro del proyecto.

El contenido de esa carpeta `node-modules` no se debe subir al repositorio Git. Es decir, se ha de excluir en `.gitignore`. Se puede recuperar automáticamente. Lanzando el comando `npm install`, sin ningún parámetro. Node volverá a (re)crear toda la carpeta `node-modules` para ese proyecto, con todos los módulos citados en su archivo `package.json`.

nota: Si el paquete se va a usar solo en desarrollo pero no en producción, instalarlo con el parámetro --save-dev: `npm install --save-dev  nombredelpaquete`. Así se podrá utilizar cuando se está trabajando en el proyecto; pero no se incluirá en la imagen final para desplegar en producción.

nota: Si el paquete se va a usar habitualmente en cualquier línea de comandos o cualquier IDE, instalarlo con el parámetro --global: `npm install --global  nombredelpaquete`. Así quedará disponible globalmente en el equipo, en cualquier terminal o línea de comandos; y no solamente en un proyecto concreto.

### Aviso

Los paquetes citados de aquí en adelante son algunos de los más utilizados a día de hoy (2023).

Pero el universo Javascript es muy rico y existen multitud de paquetes para realizar una determinada tarea. Hay mucho donde escoger, cada cual puede utilizar los que le parezcan más adecuados para su proyecto en cada momento.

Además es un universo muy dinámico, donde las cosas cambian mucho en cuestión de unos pocos años (o meses !). Así que es imprescindible participar en la comunidad y estar al tanto de lo que se está cociendo.

## Un paquete imprescindible: empaquetador (bundler)

Un empaquetador, entre otras tareas, se encarga de:

- Gestionar (y convertir) los paths de acceso a los paquetes contenidos en `node-modules`. En nuestro código podemos referirnos a ellos solo con el nombre del paquete.

- Gestionar (y convertir, si es necesario) los distintos tipos de archivos usados en un proyecto: html, css, js, jsx, scss, ts, png, svg,...

- Procurar un servidor web de desarrollo, para pruebas. Normalmente suele ser un servidor "live reloader", que refresca automáticamente lo servido al cliente según se modifica/guarda algo en el proyecto.

- Compilar y generar una imagen compactada, minimizada y optimizada de todo el proyecto, para desplegar la aplicación en un servidor de producción. De esta forma, se sirve a los clientes finales una versión con menos archivos a descargarse.

Algunos de los paquetes empaquetadores más populares son: webpack, parcel o esbuild

nota: En los scripts dentro de `package.json`, el comando `npm start`, adecuadamente configurado, se utiliza para  servir la aplicación en desarrollo/pruebas.

nota: En los scripts dentro de `package.json`, el comando `npm run build`, adecuadamente configurado, se utiliza para compactar/minimizar/optimizar todo y generar una carpeta con la aplicación, para desplegarla en un servidor web de producción.

nota: A partir del archivo inicial (por ejemplo, index.html) el empaquetador suele ir descubriendo por sí mismo toda la estructura de la aplicación y lo que esta realmente utiliza. Para ello se vale de las etiquetas `<link>, <script>,...`, de las sentencias `require, import,...`, etc.

### esbuild

<https://esbuild.github.io/getting-started/#install-esbuild>

<https://esbuild.github.io/>

<https://github.com/evanw/esbuild>

<https://www.npmjs.com/package/esbuild>

Se instala con el comando:

```
npm install --save-dev esbuild
```

y luego en el archivo package.json, añadir:

```
    "scripts": {
        "start": "esbuild src/index.js --bundle --servedir=public/ --outdir=public/js --loader:.js=jsx --loader:.png=dataurl --loader:.jpg=dataurl",
        "build": "esbuild src/index.js --bundle --minify --outdir=build --loader:.js=jsx --loader:.png=dataurl --loader:.jpg=dataurl",


    },
```

nota: Con la configuración indicada. El archivo index.html y el resto de contenido estático irá en una carpeta `public` dentro del proyecto. El contenido dinámico y nuestro código irá en una carpeta `src`.

aviso: El servidor web integrado en esbuild no tiene "live reloader". Cada vez que se guardan cambios en el código hay que parar el servidor (pulsando las teclas [ctrl][c]) y rearrancarlo de nuevo (volviendo a lanzar `npm start`).

### Parcel

<https://parceljs.org/getting-started/webapp/>

<https://parceljs.org/>

<https://www.npmjs.com/package/parcel>

Se instala con el comando:

```
npm install --save-dev parcel
```

y luego en el archivo package.json,

quitar:

```
  "main": "index.js",
```

añadir:

```
    "source": "src/index.html",
    "scripts": {
        "start": "parcel",
        "build": "parcel build --dist-dir build",


    },
```

### Webpack

<https://webpack.js.org/>

<https://www.npmjs.com/package/webpack>

Se instala con el comando:

```
npm install --save-dev webpack webpack-cli
```

y luego en el archivo package.json,

quitar:

```
  "main": "index.js",
```

añadir:

```
  "private": true,
  "scripts": {
      "start": "webpack-dev-server --mode development --open --hot",
      "build": "webpack --mode production",


  },
```

-pendiente- comprobar que eso es así y que funciona.

### nota: si se está trabajando con React

React necesita contar con un transpilador para procesar el código JSX y convertirlo en código JS. Esta es una tarea que también desempeñan los empaquetadores. Por ejemplo,

- esbuild soporta JSX directamente.

    <https://esbuild.github.io/content-types/#jsx>

- Parcel soporta JSX directamente (apoyandose en Babel)

    <https://parceljs.org/recipes/react/>

- Webpack trabaja conjuntamente con Babel

    <https://webpack.js.org/configuration/configuration-languages/#babel-and-jsx>

nota:  Babel es un transpilador Javascript que realiza muchas otras tareas además de lidiar con JSX.

<https://babeljs.io/>

<https://www.npmjs.com/package/@babel/core>   -   <https://www.npmjs.com/package/babel-cli>

## Un paquete muy útil: comprobador estático (linter)

Un linter se encarga de revisar el código y nos avisa sobre las partes de código con errores o que podrian ser problematicas.

### eslint

<https://eslint.org/>

<https://www.npmjs.com/package/eslint>

Se instala y se configura con el comando:

```
npm init @eslint/config
```

Irá haciendo una serie de preguntas, a la par que instalando los paquetes necesarios.

```
√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No 
√ Where does your code run? · browser
√ What format do you want your config file to be in? · JavaScript
Local ESLint installation not found.
The config that you've selected requires the following dependencies:
eslint@latest
√ Would you like to install them now? · Yes
√ Which package manager do you want to use? · npm
Installing eslint@latest
added 83 packages, and audited 291 packages in 1m
Successfully created .eslintrc.js file in C:\Users\xxxxx\Documents\pruebasYexperimentos
```

Una vez instalado,

- Se puede utilizar desde la línea de comandos.

  Por ejemplo, para revisar todos los archivos en la carpeta src:

  ```
  npx eslint src/**
  ```

- O se puede configurar el IDE para usarlo según escribimos código.

  Por ejemplo, en Visual Studio Code se suele instalar la extensión <https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>

## Un paquete muy conveniente: formateador

Un formateador nos evita discusiones sobre normas de estilo. Reescribe nuestros archivos para homogeneizar su estilo y que la apariencia de todos los ellos sea según esté configurada en el formateador.

Siempre queda la discusión sobre cómo configurar el formateador... ;-) Pero eso se puede arreglar aceptando tal cual la configuración que trae de fábrica...

### Prettier

<https://prettier.io/>

<https://www.npmjs.com/package/prettier>

Se instala con el comando:

```
npm install --save-dev prettier
```

Una vez instalado,

- Se puede utilizar desde la línea de comandos.

  ```
  npx prettier . --write
  ```

- O se puede configurar el IDE para usarlo.

  Por ejemplo, en Visual Studio Code se suele instalar la extensión <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>

  Además se ha de indicar a VSCode que utilice Prettier como formateador por defecto: ir al menú 'File' 'Preferences' 'Settings'  (o pulsar las teclas [ctrl][,]) ; escribir "format" en 'search settings' ; y ajustar las opciones 'Editor: Default Formatter' , 'Editor: Format On Save' , etc.

El comportamiento de Prettier se puede modificar creando dos archivos en la raiz de la carpeta de proyecto:

- `.prettierrc` para configurar. (<https://prettier.io/docs/en/configuration>)

- `.prettierignore` para indicar archivos que no se deben formatear.

nota: En lugar de usar el archivo específico `.prettierrc`. También se puede escribir la configuración directamente  dentro del archivo `package.json` , usando la clave "prettier": { }

## Otro paquete imprescindible: marco de ejecución de tests

Los test son la red de seguridad que nos permite avanzar con confianza. Avisandonos de elementos que hayamos podido estropear cuando estamos añadiendo la siguiente funcionalidad para ampliar el código o cuando estamos refactorizando lo ya hecho para mantener el código limpio.

### Jest

<https://jestjs.io/>

Se instala con el comando:

```
npm install --save-dev jest
```

y luego en el archivo package.json, modificar:

```
    "scripts": {
        "test": "jest"


    },
```

Tal cual, Jest permite escribir **tests unitarios** (comprobar cada función o pequeña funcionalidad concreta dentro del código). <https://jestjs.io/docs/getting-started>

Pero, para escribir **tests end-to-end** (comprobar funcionalidades completas, incluyendo la interacción con el interfaz gráfica de usuario), suele ser conveniente añadir algún que otro paquete específico para ello. Como por ejemplo: <https://github.com/argos-ci/jest-puppeteer>

nota: configuración adicional: Para usar módulos ES6 (sentencias `import`) en los test, es necesario que Babel ayude a Jest.

Lanzar el comando:

```
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

Crear un archivo `babel.config.js` que contenga:

```
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

### nota: si se está trabajando con React

<https://jestjs.io/docs/tutorial-react>

<https://enzymejs.github.io/enzyme/>

## Más paquetes

Lo dicho, la comunidad Javascript es muy vasta y dinámica. Unos botones de muestra:

![pantallazo biblioteca npm](./imagenes/pantallazo%20biblioteca%20npm.png)

<https://www.npmjs.com/search?q=bundler>

<https://www.npmjs.com/search?q=linter>

<https://www.npmjs.com/search?q=formatter>

<https://www.npmjs.com/search?q=test>

<https://www.npmjs.com/search?q=testing>

<https://www.npmjs.com/search?q=responsive>

<https://www.npmjs.com/search?q=db>

<https://www.npmjs.com/search?q=math>

<https://www.npmjs.com/search?q=iot>

<https://www.npmjs.com/search?q=image>

<https://www.npmjs.com/search?q=video>

<https://www.npmjs.com/search?q=sound>

<https://www.npmjs.com/search?q=3d>

<https://github.com/topics/javascript>

etc, etc.
