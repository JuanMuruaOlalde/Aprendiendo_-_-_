# Prueba simple de RMI

Se trata de ilustrar los tres participantes:

- La parte servidora, la que ejecuta realmente el trabajo.
- La parte de registro, la que lleva cuenta de los servicios/servidores disponibles; permitiendo que los clientes puedan encontrarlos.
- La parte cliente, la que utiliza los servicios.

## Forma de arrancar

Cada una de las partes participantes puede estar en una máquina diferente.

### Registro

java.exe -cp C:\Users\xxxx\pruebas_rmi\target\classes es.susosise.PruebaSimple.Registrador.RegistroDeServicios

### Servidor

java.exe -cp C:\Users\xxxx\pruebas_rmi\target\classes es.susosise.PruebaSimple.Servidor.Servidor

### Cliente

java.exe -cp C:\Users\xxxx\pruebas_rmi\target\classes es.susosise.PruebaSimple.Cliente.App
