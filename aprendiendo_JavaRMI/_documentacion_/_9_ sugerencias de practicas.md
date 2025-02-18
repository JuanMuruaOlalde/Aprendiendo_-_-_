# Hello world.!

Lo primero es conseguir una triada funcional de servidor-registro-cliente

Para ello, la funcionalidad a servir ha de ser sencilla.
Con tan solo paso de parámetos y respuesta con tipos nativos.
Por ejemplo,

    String getTexto(String parte) {
        return "Texto fijo" + parte + " mas texto fijo.";
    }

    Double sumar(Double a, Double b) {
        return a + b;
    }

## Tareas a realizar:

- Escribir un interface con la funcionalidad y una clase que lo implemente.

- Escribir un servidor que registre dicho servicio.

- Escribir una utilidad que arranque el Registry. (O estudiar cómo arrancarlo manualmente.)

- Escribir un cliente que localice el servicio en el registro y lo use para hacer algo como, por ejemplo: pedir unos datos al usuario y llamar con ellos a las funciones del servicio para luego mostrar al usuario las respuestas.

# Trabajando con la serialización de objetos

Cuando los parámetros de llamada o de respuesta son de tipos básicos (número, texto, booleano, fecha,...). Normalmente es el framework RPC quien se encarga automáticamente de ellos.

Pero cuando son tipos elaborados (objetos). Suele ser necesario tener en cuenta su serialización en una parte y su deserialización en la otra parte.

## Tareas a realizar:

Hacer que alguno o algunos de los parámetros de llamada o respuesta sean:

- Un objeto POJO donde todas sus propiedades sean de tipos básicos.

- Un objeto POJO donde alguna de sus propiedades sea a su vez otro POJO.

Y luego, hacer que alguno de los parámetros de llamada, o de respuesta sea:

- Una lista o diccionario conteniendo objetos POJO.

- Un objeto POJO donde alguna de sus propiedades sea una lista o diccionario, bien de tipos básicos o bien de otro POJO.

# Monitorización remota en tiempo real

Nos imaginamos un escenario en que un equipo requiere información de otro u otros equipos. La información la requiere en el mismo momento en que se produce.

## Tareas a realizar

- Un servidor tiene una función de recibirNotificacion() y un interface de usuario donde va mostrando las informaciones que le van llegando.

- Varios clientes llaman a esa función del servidor para enviarle información. Para simular eventos, los clientes dispondrán de un temporizador que se vaya ejecutando a intervalos regulares. Para simular aleatoreidad, cada ejecución del temporizador comienza generando un número aleatorio y solo si ese número está en un cierto subrango envia información al servidor.

# Computación segura

Una de las formas más fiables de evitar errores al recuperar información (o al obtener un resultado) es que varios equipos contengan una misma información (o que calculen ese resultado). Luego se aplica un algoritmo de votación para, entre todos los equipos, decidir cual es la respuesta correcta.

Para ello se pueden usar algoritmos como (/TODO _pendiente_ buscar cuales pueden ser)

## Tareas a realizar:

- Un cliente solicita una operación a un nodo.

- Ese nodo se comunica con el resto de nodos del sistema y todos ellos realizan la operación. Cada uno por su cuenta.

- Los nodos comparan resultados entre ellos. Hasta llegar a un consenso.

- Ese consenso es la respuesta al cliente.

## Curiosidades, algunos casos reales computación segura

LOCKSS
(https://www.lockss.org/about/preservation-principles)
(https://www.lockss.org/about/frequently-asked-questions#how-many-copies-keep-stuff-safe)

NASA's Shutle's redundant computer
(https://history.nasa.gov/computers/Ch4-4.html_)
(https://people.cs.rutgers.edu/~uli/cs673/papers/RedundancyManagementSpaceShuttleIBM76.pdf)

# Sistema de monitorización de incendios

Imaginar un edificio que cuenta con un sistema distribuido de control de incendios. Cada zona/habitación dispone de su propio nodo de control que consta de:

- Un sensor que mide la temperatura.
- Un sensor que detecta la presencia/ausencia de humo (gases de combustión).
- Un rociador de agua que moja toda la zona o habitación.
- Unos actuadores que permiten abrir/cerrar las ventanas en esa zona o habitación.
- Unos actuadores que permiten abrir/cerrar las puertas en esa zona o habitación.

Los nodos de control pueden comunicarse con sus vecinos.

Hay una consola central para manejar todos los nodos.

## Tareas a realizar:

- Implementar la parte base del nodo:

  - El nodo coge su nombre y su puerto desde sendas líneas en un archivo _MiNombreDeNodo.txt_. Registra sus servicios en el Registry con ese nombre y ese puerto.
  - Simular un sensor de temperatura con un temporizador que cada 5 segundos vaya generando un valor aleatório comprendido entre 20 y 25 grados Celsius; pero que cada ? valores devuelva un valor aleatório superior a 60 grados Celsius.
  - Simular un sensor de humo (se activa cuando el temporizador anterior da el valor superior a 60 y se desactiva ?)
  - El nodo ha de tener una lista con los nombres de los nodos vecinos. Esta lista la leerá desde un archivo _NodosVecinos.txt_, un nombre por línea. Siendo la primera línea el literal "BEGIN" y la ultima linea el literal "END".

- Implementar la parte servidor del nodo. Ha de tener funciones para:

  - Consultar la temperatura. (que casi siempre devuelva un valor aleatório comprendido entre 20 y 25 grados Celsius; pero que de vez en cuando devuelva un valor aleatório superior a 60 grados Celsius)
  - Consultar el estado de la zona/habitación. (que devuelve cuatro booleanos: presenciaDeHumo, rociadorActivo, ventanasAbiertas, puertasAbiertas)
  - Cambiar el estado del rociador de agua; es decir, activarlo o desactivarlo.
  - Cambiar el estado de las ventanas; es decir, abrirlas o cerrarlas.
  - Cambiar el estado de las puertas; es decir, abrirlas o cerrarlas.

- Implementar la parte cliente del nodo para que cuando detecta un incendio (es decir, su "sensor" de temperatura mida más de 60 o su "detector" de humos se active) realice las siguiente acciones:

  - Poner en marcha su propio rociador de agua y los de sus nodos vecinos.
  - Abrir sus ventanas y cerrar las de sus nodos vecinos.
  - Cerrar sus puertas y las de sus nodos vecinos.
  - Avisar a la consola central.

- Implementar la consola central para poder monitorizar en tiempo real el estado de todos los nodos del sistema.

# Chat en tiempo real

Se trata de que un nodo central suministre una lista de mensajes compartida.

Y que unos cuantos nodos secundarios la usen simultáneamente para charlar entre ellos.

Es decir: cuando uno cualquiera de los nodos secundarios envia un mensaje al nodo central (a la lista compartida), todos los demás reciben ese mensaje en sus listas locales.

Para que sea más sencillo, habrá una sola conversación en curso en cada momento.

Para evitar acumular demasiados mensajes, al recibirse un mensaje con la frase clave _!?!BORRARTODO!?!_ la lista se vaciará. Igualmente, la lista comienza vacia cada vez que se arranca el nodo central.

Para que un nodo secundario pueda entrar en la conversación sin perder el hilo. La función de entrarALaConversación() del nodo central devolverá una copia de los contenidos de la lista compartida hasta ese momento, para que ese nodo secundario inicialice su lista local con ellos.

## Tareas opcionales

Marcar cada mensaje con un "timestamp" para saber cuándo se ha recibido en el nodo central.

# Pizarra o tablero de juego compartida

Se trata de que un nodo central mantenga una pizarra compartida.

Y que unos cuantos nodos cliente usen esa pizarra.

Es decir: cualquier nodo secundario puede ir escribiendo (los nodos secundarios dan órdenes al nodo central para alterar el contenido de la pizarra) y todos ellos han de recibir las actualizaciones en tiempo real (el nodo central da ordenes a los nodos secundarios para refrescar lo que muestran).

La pizarra es única y todos los clientes han de estar viendo lo mismo en todo momento. Para que sea más sencillo, en un principio la tarea de refresco trabajará actualizando toda la pizarra en cada refresco. Pero cuidado con la concurrencia y el "lag".

Para que sea más sencillo, la pizarra puede ser una simple rejilla con casillas que los nodos secundarios van clicando o desclicando.

## Tareas opcionales

Preparar algún modo de hacer actualizaciones parciales. Para mejorar los tiempos de respuesta de la tarea de refresco.
