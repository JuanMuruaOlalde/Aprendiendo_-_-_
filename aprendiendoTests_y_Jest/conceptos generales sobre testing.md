# Conceptos generales sobre testing

Trabajar con test unitarios es tan sencillo como comenzar a escribir funciones cuyo cometido es comprobar que otras partes del código funcionan como se espera que lo hagan.

Esas funciones han de ser independientes unas de otras:

- Cada función comprueba un aspecto concreto. De hecho, se tiende a darles nombres largos que expresen de forma clara el aspecto que comprueban. 

- Cada función prepara el entorno adecuado para ejecutarse. Ninguna ha de depender, ni verse afectada, por otras que se ejecuten antes o después.

- El único resultado que devuelven es binario: o pasa o falla.


¡importante!: 

Como se ha dicho, cada test prepara el entorno adecuado para ejecutarse. Ninguno ha de depender, ni verse afectado, por otros que se ejecuten antes o después. Ni por factores externos (como por ejemplo, que un cierto servidor de base de datos o de APIs o de ERP, o... esté en un cierto estado conteniendo ciertos datos concretos)

Cada test ha de crear, inicializar, cargar,... todos los elementos que necesite. Y los ha de preparar expresamente para que estén exactamente en el estado que necesite que estén, o para que contengan exactamente lo que necesite que contengan. Antes de empezar a realizar las operaciones a comprobar y los chequeos de resultados.


## Plataforma de tests unitarios ("Test Harness" o "Test Runner")

Al poco de estar escribiendo ese tipo de funciones test, se va echando de menos algún sistema que:

- Diferencie el código de test del código funcional propiamente dicho.

- Permita ejecutar grupos de tests rápidamente. Mostrando resultados claros y concisos de cuales pasan y cuales fallan.

- Facilite la preparación del entorno base adecuado para ejecutar los tests. Sin necesidad de que cada función test repita expresamente ciertos pasos que se van viendo iguales en todas ellas. 

- Permita abstraer las partes complicadas o costosas de preparar. Suministrado sucedáneos simplificados ("mocs"). Sucedáneos que simplemente permiten comprobar que las llamadas y respuestas a esas partes se realizan correctamente. Pero sin necesidad de utilizar las partes reales.

Esos cuatro aspectos son los proporcionados por una plataforma de tests unitarios. Suele haber varias de dichas plataformas para cada lenguaje de programación y cada entorno de trabajo. Es cuestión de comparar y escoger la que más se adapte a nuestras necesidades o a nuestros gustos.

## Algunas recomendaciones prácticas de trabajo

### Lo que se ha de testear:

-  Los casos "*felices*": Comprobar que se obtienen los resultados esperados, en el uso habitual que se espera. Con una muestra dentro de los datos típicos con los que se va a trabajar. Probando todas las ramas de la lógica implementada.

-  Los casos "*límite*": Comprobar que se obtienen los resultados esperados, en los posibles usos extraños que puedan suceder. (Por ejemplo, una función para sumar una ristra de números recibe un solo número en lugar de una ristra; o, peor aún, recibe una ristra vacia; o recibe una ristra de textos; o...) Nota: En lugar de testear, si es posible, mejor evitar desde el principio que sucedan esos casos extraños. (Por ejemplo, usar la encapsulación de objetos y el tipado fuerte para evitar que ningún método reciba un tipo de parámetros que no debería recibir.)

- Los casos "*erroneos*": Comprobar que se dan las reacciones esperadas, ante fallos que se preve puedan tener los usuarios al utilizar la aplicación. (Nota: Dentro de esas reacciones de nuestro programa, es muy importante asegurarnos de mantener informado al usuario.)

- Los casos "*excepcionales*": Comprobar que se dan las reacciones esperadas, ante los errores y situaciones anómalas que se preve puedan darse en algún momento dado. (Por ejemplo: no existe un determinado archivo, la conexión con la base de datos esta caida,...)

### En qué momento escribir los test:

- Lo ideal es trabajar TDD (Test Driven Development). Es decir, escribir primero el código test y luego el código funcional.

- Pero, en la práctica, sobre todo al comienzo, es muy posible que sigamos escribiendo primero el código que implementa una o varias funcionalidades; que sigamos probándolo de forma manual durante dicha escritura; y, cuando el código funcional esté ya funcionando, pensemos en los test. Una buena sugerencia es que, justo mientras tenemos fresco el trabajo que hemos hecho, usemos las pruebas manuales que hemos ido haciendo como inspiración para escribir esos test.

De todas formas, como se comenta más adelante, si perseveramos en el tema de test, tarde o temprano es muy posible que acabemos llegando al TDD. A medida que vemos que los test ayudan a las pruebas manuales durante la escritura  del código funcional; es muy posible que vayamos tendiendo de forma natural a escribir primero test y luego funcional.

### La falacia de la "cobertura"

Un aviso importante: no obsesionarse con la "cobertura". Es una métrica perjudicial que lleva a escribir tests meramente para cubrir la exigencia del x% de cobertura requerido. 

Los test no se escriben para intentar cubrir todos los casos posibles (cosa que es imposible). 

Los test han de escribirse porque se ven útiles para comprobar de que el código funcional hace lo que se supone que ha de hacer. 


## Tests "end-to-end"

No confundir los tests unitarios con los test "end-to-end".

Las plataformas de test "end-to-end" son aquellas que permiten utilizar el programa completo, como si lo hiciera un usuario final. Para comprobar su comportamiento en ciertas operaciones o trabajos reales completos.

Existen algunas que incluso llegan a intentar cubrir automáticamente toda la casuística de interacción posible. Por ejemplo, detectan cuales son los campos editables o clicables de cada pantalla y van realizando el máximo de combinaciones de acciones posibles sobre ellas. Reportando los posibles errores que surjan.

Pero este tipo de test "end-to-end" tienden a ser frágiles y pesados. 

Solo son efectivos en programas con funcionalidades e interfaces muy estables.

Son útiles como comprobación completa de un sistema, con todos sus componentes reales. Pero es muy fácil que dejen de mantenerse y de utilizarse por resultar demasiado farragosos e inestables.


## TDD (Test Driven Development)

Trabajar TDD se resume en RED-GREEN-REFACTOR: 

1.	Pensar en un pequeño paso, en una pequeña parte de la funcionalidad a implementar.

2.	Escribir un test que compruebe que el programa haría bien ese paso.

3.	Escribir el código de programa mínimo para que el test compile (si, vale con solo definir las clases o funciones... aunque estén vacias...)

4.	Comprobar que el test falla  (ejecutar el código y ver como ese test falla) (RED).

5.	Escribir el código de funcinalidad mínimo para que el test pase (ejecutar el código y ver que todos los test pasan) (GREEN).

6.	Volver sobre nuestros pasos y (re)pensar en el diseño del programa, en su arquitectura. Ver si conviene refactorizar algo para que encaje de forma más coherente en el diseño del programa. (REFACTOR).

7.	Ir al punto 1 y ¡a por el siguiente paso!.

nota: En el punto 6 (refactorización), es impagable el paraguas que ofrecen todos los test ya escritos. En el momento en que metamos la pata al refactorizar y rompamos algo, es muy posible que casque algún test y nos avise de lo que hemos roto. Por otro lado, trabajando TDD, como avanzamos en pequeños pasos, con frecuentes ejecuciones de los test existentes, no suele costar mucho darnos cuenta de lo que hemos roto.


TDD es algo que puede sonar un poco “alien” en un primer momento. Y, definitivamente, “se hace muy raro” las primeras veces que lo pruebas tal cual. (Creo que es muy conveniente practicar las primeras veces junto a alguien experimentado en el tema.) 

Pero cabe destacar que se acaba llegando a ello de forma natural: 

- Cuando se empieza a trabajar con tests, se tiende a escribir los test después de escribir el código funcional. 

- Al poco de estar escribiendo tests de forma regular, se va viendo que es más difícil escribirlos cuanto más se haya avanzado con las funcionalidades.

- Si en ese momento no se renuncia a escribir tests y se persevera. Poco a poco, se va tendiendo a escribir trozos más pequeños de código funcional; junto con sus respectivos test unitarios. 

- Para acabar llegando a ese punto donde surge la duda de si merece o no la pena escribir primero los tests (la intención de lo que se desea conseguir) y luego el código funcional (el trabajo que lo consigue).


nota: Como se explica en la introducción de este video [Test Driven DESIGN - Step by Step - YouTube](https://www.youtube.com/watch?v=-f_HgWbomCI). La parte más difícil del TDD es 
- dejar de pensar en LA SOLUCIÓN a implementar y en cómo la vamos a implementar;
- para pensar primero en EL PROBLEMA (la funcionalidad) a resolver y en cómo lo vamos a resolver.

nota: Para ponerle "cara y ojos" a esto del TDD, ver [ejercicio 'ascensores' resuelto siguiendo proceso TDD](https://github.com/JuanMuruaOlalde/sugerencias-para-practicar-programacion/tree/main/Ascensores/muestras_de_posibles_soluciones/javascript-TDD)


## Un poco de filosofía y algunos consejos prácticos

Lo primero y más importante: interiorizar profundamente que **los test son parte del código**. Es igual de importante escribir código de test que escribir código funcional.

Suele ser conveniente pensar en los test como:

- Una documentación ejecutable: leyendo los test relacionados con una determinada funcionalidad, suele quedar bastante claro qué se pretendía hacer y qué partes del programa lo hacen.

- Una red de seguridad para detectar roturas y regresiones rápidamente. Una red que nos permite trabajar con más confianza, sobre todo a la hora de refactorizar o de modificar cosas.


También se ha de tener claro que desarrollar software es un proceso incremental e iterativo. Cada paso va añadiendo algo al programa, bien sea más funcionalidad o simplemente más estabilidad. De esta forma el programa va evolucionando y aumentando (o, por lo menos, manteniendo) su utilidad a medida que pasa el tiempo.

Conviene **trabajar en pequeños e incrementales pasos**. Pequeño significa algo que se pueda completar completamente en una mañana o una tarde de trabajo, a lo sumo.

Al escoger cada paso, conviene pensar en:

- "Si esto fuera lo último que se añade al programa antes de cerrar el proceso y desplegarlo al cliente final, ¿qué funcionalidad, de entre todas las pendientes, le aportaría más valor a esos clientes finales que van a usarlo?". 

- Y, "dentro de esa funcionalidad, ¿cual es el paso que más valor aporta en este momento de su desarrollo?"

Es muy importante **dejar completamente terminado cada paso antes de comenzar con el siguiente**.

Completamente terminado significa:

- Hay suficientes test como para comprobar que el código hace lo que se quería que hiciera. 

- Obviamente, todos los nuevos test y los ya existentes pasan (GREEN).

- El programa en general, queda en un estado tal que se puede ejecutar. Es más, es conveniente que quede en un estado tal que, aunque esté incompleto aún, se podría desplegar tal cual a los clientes finales y estos podrían hacer algo, aunque incompleto, con él. (CI, Continous Integration)
 
Un consejo: Si durante el trabajo en un paso concreto vemos alguna otra cosa que nos gustaría cambiar o corregir en el resto del código. O si se nos ocurre una nueva funcionalidad, o se nos ocurre algo que podríamos añadir, o algo que podríamos mejorar en otro punto. NO DISTRAERNOS => apuntarlo rápidamente en la lista de tareas pendientes, y seguir con lo que estábamos haciendo. CONCENTRARNOS en el pequeño e incremental paso en el que estamos trabajando.

notas:

La forma de trabajar en  pequeños e incrementales pasos, también se adquiere de forma natural cuando se utiliza un sistema de control de versiones (por ejemplo, Git). 

Trabajando con uno de esos sistemas, sobre todo trabajando en un equipo donde varias personas comparten repositorio, pronto se ve la necesidad de hacer commits de nuestro trabajo y de recoger los commits de los demás cada poco tiempo (como mínimo cada día o cada dos días).
 
Además, al no poder hacer ningún commit conteniendo código que falle o no esté bien probado, cada commit tiende a llevar poco cambio dentro de él. Es decir, la tendencia es a centrarse en una sola (pequeña e incremental) funcionalidad concreta para cada commit.
 
En ese sentido, tests y control de versiones van de la mano.

