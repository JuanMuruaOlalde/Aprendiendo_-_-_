# Propiedades configurables en `application.properties`

https://docs.spring.io/spring-boot/docs/1.0.2.RELEASE/reference/html/common-application-properties.html

https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html#appendix.application-properties

https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#appendix.application-properties


### Para fijar si mostrar o no la traza completa de la exception en la pagina error.html

server.error.include-stacktrace=always   # o puede ser 'never'


### Para fijar que hacer con la base de datos cada vez que se inicia la aplicación

spring.jpa.hibernate.ddl-auto=
- =create (borra todo y crea nuevas tablas vacias al empezar la ejecución de la aplicación)
- =update (respeta todo lo que hay y va creando lo nuevo que necesite)
- =create-drop (se usa para test, al empezar la ejecución crea nuevas tablas vacias y al finalizala las borra todas)
- =validate (solo comprueba que esté todo lo que necesita, si falta algo lanza una excepción)
- =none 

El comportamiento por  defecto es ponerlo a `create-drop` si no se detecta ningún "schema manager""; y a `none` si se encuentra alguno.

Para desconectar la creacion o reinicialización automática, también se puede usar esta línea:
```
spring.jpa.generate-ddl=false
```

Para que, aun estando activa la creacion o reinicialización automática, se pueda utilizar los archivos `schema.sql` y `data.sql`
```
spring.jpa.defer-datasource-initialization=true
```



### Para fijar la url 'raiz' y el puerto de la aplicacion

```
server.port=12378
--antes de Spring Boot 2.0--
server.contextPath=/nombredemiapp
--después de Spring Boot 2.0--
server.servlet.context-path=/nombredemiapp
```




### Para fijar la conexión con la base de datos

```
spring.datasource.url=jdbc:mariadb://localhost:3306/nombredemibd
spring.datasource.username=
spring.datasource.password=
spring.datasource.driver-class-name=org.mariadb.jdbc.Driver
spring.jpa.hibernate.ddl-auto=create-drop
```


### Para fijar encriptación SSL  (https://)

```
server.port=8443
server.ssl.key-store=classpath:keystore.jks
server.ssl.key-store-password=
server.ssl.key-password=
```


### Para fijar el usuario y contraseña por defecto

para cuando usamos spring-boot-starter-security y no configuramos ningún SecurityConfiguration


## Cómo configurar el usuario por defecto para autentificación

```
spring.security.user.name=
spring.security.user.password=
spring.security.user.roles=
```

nota: este usuario es solo si se ha puesto spring-boot-starter-security y no se ha configurado nada más.

nota: si no configuramos SecurityConfiguration ni ponemos estas dos lineas en application.properties Spring Boot genera él mismo una contraseña para el usuario 'user' y la muestra en la consola al arrancar la aplicación.