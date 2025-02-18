# Servicio de ejecución remota de tareas

Se trata de preparar un servidor al que los clientes puedan encargarle ejecutar tareas.

El interface de tarea es fijo, para que tanto cliente como servidor sepan a qué atenerse:

    public interface EjecutarTarea extends Remote {
        <T> T ejecutarTarea(Tarea<T> tarea) throws RemoteException
    }

<sub><sup>(nota: si no se conoce acerca de los "Generics" en Java, seria conveniente repasar ese tema; por ejemplo con este video https://www.youtube.com/watch?v=K1iu1kXkVoA)</sup></sub>

La tarea a ejecutar la define el propio cliente, quien pone a disposición del servidor el código ejecutable (.class) de la misma.

El tipo del resultado `<T>` lo define también el propio cliente, quien pone a disposición del servidor la clase (.class) correspondiente si este tipo es un objeto y no un tipo nativo de Java.

El cliente ha de depositar esos .class en un servidor web. Para que el servidor pueda acceder a ellos.

## Para lanzar cada parte por separado

### El registrador

Para arrancarlo, estando en la carpeta raiz correspondiente, lanzar el comando:

> "C:\Program Files\Eclipse Adoptium\jdk-17.0.2.8-hotspot\bin\java.exe" es.susosise.RealizarTareas.Registrador.RegistroDeServicios

<sub><sup>(nota: si se está fuera de la carpeta raiz correspondiente, usar el parámetro -cp para indicarla al arrancar la JVM)</sup></sub>

![el registrador arrancado y en funcionamiento](./zz-pantallazos/registrador_arrancado.png)

Necesita tener sus propios .class y los .class de los Interfaz que se usan en los servicios RMI del servidor.

![contenido en el registrador](./zz-pantallazos/contenido_en_el_registrador.png)

![contenido del servidor en el registrador](./zz-pantallazos/contenido_del_servidor_en_el_registrador.png)

### El servidor

Para arrancarlo, estando en la carpeta raiz correspondiente, lanzar el comando:

> "C:\Program Files\Eclipse Adoptium\jdk-17.0.2.8-hotspot\bin\java.exe" es.susosise.RealizarTareas.Servidor.Servidor

<sub><sup>(nota: si se está fuera de la carpeta raiz correspondiente, usar el parámetro -cp para indicarla al arrancar la JVM)</sup></sub>

![el servidor arrancado y en funcionamiento](./zz-pantallazos/servidor_arrancado.png)

Solo necesita tener sus propios .class (que incluyen los Interfaz)

![contenido en el servidor](./zz-pantallazos/contenido_en_el_servidor.png)

Mas los permisos correspondientes para el SecurityManager. Ya que en esta aplicación la JVM del servidor ha de cargar dinámicamente clases desde un servidor web externo a ella.
![contenido en el servidor - en la raiz](./zz-pantallazos/contenido_en_el_servidor_en_la_raiz.png)

¡IMPORTANTE!. Para ejecutar las tareas que le encomienda el cliente. Ha de tener acceso a los .class de las tareas que ese cliente ha definido. Bien sea porque los tiene directamente en su CLASSPATH; o bien sea porque los puede cargar de forma dinámica desde un servidor web.

![contenido en el site web](./zz-pantallazos/contenido_en_el_site_web.png)

### El cliente

Para arrancarlo, estando en la carpeta raiz correspondiente, lanzar el comando:

> "C:\Program Files\Eclipse Adoptium\jdk-17.0.2.8-hotspot\bin\java.exe" es.susosise.RealizarTareas.Cliente.App

<sub><sup>(nota: si se está fuera de la carpeta raiz correspondiente, usar el parámetro -cp para indicarla al arrancar la JVM)</sup></sub>

![el cliente arrancado y en funcionamiento](./zz-pantallazos/cliente_arrancado.png)

Necesita tener sus propios .class y los .class de los Interfaz que se usan en los servicios RMI del servidor.

![contenido en el cliente](./zz-pantallazos/contenido_en_el_cliente.png)

![contenido del servidor en el cliente](./zz-pantallazos/contenido_del_servidor_en_el_cliente.png)

¡IMPORTANTE!, si se va a usar carga dinámica, quien haya definido las clases ha de preocuparse de que los .class correspondientes estén disponibles en el site web.

![contenido en el site web](./zz-pantallazos/contenido_en_el_site_web.png)

### El site web

Es quien sirve los .class para quien los necesite cargarlos de forma dinámica

Vale con cualquier servidor web sencillo. Tan solo ha de servir archivos para descargarlos con peticiones GET. Para pruebas podemos utilizar algo como el servidor web de desarrollo de Python (https://docs.python.org/3/library/http.server.html).

Para arrancarlo, estando en la carpeta raiz correspondiente, lanzar el comando:

> python -m http.server 8080

![el servidor web arrancado y en funcionamiento](./zz-pantallazos/servidor_web_de_Python.png)
