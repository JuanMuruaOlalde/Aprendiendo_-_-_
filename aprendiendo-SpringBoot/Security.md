# referencias oficiales
<https://spring.io/projects/spring-security>
<https://docs.spring.io/spring-security/reference/servlet/getting-started.html>
<https://docs.spring.io/spring-security/reference/getting-spring-security.html>
<https://docs.spring.io/spring-security/reference/servlet/index.html>
<https://docs.spring.io/spring-security/site/docs/5.0.0.RELEASE/reference/htmlsingle/#new>
<https://docs.spring.io/spring-security/site/docs/5.0.x/reference/html/crypto.html>


# tutoriales interesantes

Estos dos articulos tienen mucha publicidad insertada, pero hacen un buen resumen de la seguridad en Spring
Single user authentication <https://progressivecoder.com/spring-boot-security-basic-authentication/>
Multiple users authentication <https://progressivecoder.com/implementing-spring-boot-security-using-userdetailsservice/>

Estos videos lo van explicando de forma clara (y bastante amena :-)
<https://www.youtube.com/playlist?list=PLqq-6Pq4lTTYTEooakHchTGglSvkZAjnE>



# aviso: la forma de trabajar extendiendo WebSecurityConfigurerAdapter esta DEPRECATED ! desde la versión 5.7.1 de Spring  la 2.7.0 de Spring Boot

<https://spring.io/blog/2022/02/21/spring-security-without-the-websecurityconfigureradapter>

<https://www.springcloud.io/post/2022-02/spring-security-deprecate-websecurityconfigureradapter/#gsc.tab=0
<https://spring.io/blog/2022/02/21/spring-security-without-the-websecurityconfigureradapter
<https://spring.io/blog/2019/11/21/spring-security-lambda-dsl>
<https://youtu.be/7HQ-x9aoZx8


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled=true)
public class SecurityConfig {
...


# Entes basicos con los que tendremos que lidiar

## AUTENTIFICACION: validación de la entrada a la aplicación (login)

Authentication <https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/authentication/package-summary.html>
AuthenticationManager <https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/authentication/AuthenticationManager.html>
nota: La autentificacion (login) es automática, siempre y cuando el UserDetailsService devuelva los UserDetails adecuados.

### 'Principal': es "current User", el usuario que se ha "logineado" y "validado" (está autentificado) en esta sesión.

UserDetailsService  <https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/core/userdetails/UserDetailsService.html>
UserDetails (el interface) <https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/core/userdetails/UserDetails.html>
User (implementacion básica) <https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/core/userdetails/User.html>
<https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/core/userdetails/User.UserBuilder.html>


## ROLEs:  (por ejemplo ROLE_ADMINISTRADOR, ROLE_SUPERVISOR, ROLE_TRABAJADOR, ROLE_AUTOR, ROLE_...)

Los roles se suelen configurar para:
* autorización por página web (url) que se pretende acceder <https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/config/annotation/web/builders/HttpSecurity.html> 
* autorización por método que se pretende ejecutar <https://www.baeldung.com/spring-security-method-security>
* autorización por objeto de dominio que se pretende acceder <https://docs.spring.io/spring-security/reference/servlet/authorization/acls.html>
nota: A la hora de definirlo, se le ha de poner el prefijo (ROLE_XXXXXXX) , pero a la hora de usarlo ha de ir sin prefijo (XXXXXXX)

### authorities:

GrantedAuthority (el interface) <https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/core/GrantedAuthority.html>
SimpleGrantedAuthority (implementacion básica) <https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/core/authority/SimpleGrantedAuthority.html>
<https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/core/authority/SimpleGrantedAuthority.html>
<https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/ldap/userdetails/LdapAuthority.html>


## AUTORIZACION: validación de acceso a recursos concretos

### by web:

HttpSecurity <https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/config/annotation/web/builders/HttpSecurity.html>
<https://www.codejava.net/frameworks/spring-boot/spring-boot-security-role-based-authorization-tutorial>


### by method security:

@Secured annotation (Spring) or @RollesAllowed annotation (standard JSR250)
<https://www.baeldung.com/spring-security-method-security>
@PreAuthorize annotation
<https://stackoverflow.com/questions/43961625/rolesallowed-vs-preauthorize-vs-secured#:~:text=%40Secure%20and%20%40PreAuthorize%20will%20tie%20your%20code%20to,need%20to%20perform%20more%20powerful%20operations%2C%20use%20%40PreAuthorize.>
<https://www.baeldung.com/spring-security-check-user-role>


### by domain object:

AccessDecisionManager <https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/access/AccessDecisionManager.html>
AccessDecisionVoter <https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/access/AccessDecisionVoter.html>



# Uso práctico de la seguridad


## Cómo configurar el (único) usuario por defecto para autentificación, el que utiliza si no configuramos la seguridad.
spring.security.user.name=
spring.security.user.password=
spring.security.user.roles=
nota: este usuario es solo si se ha puesto la dependencia spring-boot-starter-security , y no se ha configurado nada nada más.


## Cómo configurar la seguridad (desactiva el usuario por defecto y nos permite gestionar nosotros los usuarios)
<https://stackoverflow.com/questions/44671457/what-is-the-use-of-enablewebsecurity-in-spring>
<https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/config/annotation/web/builders/HttpSecurity.html>

<https://websparrow.org/spring/spring-boot-security-remember-me-example>
<https://www.baeldung.com/spring-security-remember-me>
<https://www.baeldung.com/spring-security-persistent-remember-me>


## Roles y Permisos (GrantedAuthority)
<https://www.baeldung.com/spring-security-granted-authority-vs-role
<https://www.baeldung.com/role-and-privilege-for-spring-security-registration
<https://stackoverflow.com/questions/19525380/difference-between-role-and-grantedauthority-in-spring-security
   
   

## Cómo utilizar la información del "current User"
https://docs.spring.io/spring-security/site/apidocs/org/springframework/security/core/Authentication.html

    private void ejemplosDeComoAccederAlCurrentUser() {
        
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) {
            
            String nombreDelUsuarioLogeado = auth.getName();
            
            // para usarlo donde deseemos, por ejemplo:
            if (nombreDelUsuarioLogeado.equals("Zutanito")) {
                //hacer algo que le corresponde a Zutanito...
            } else {
                //hacer algo que le corresponde a cualquier otro usuario...
            }
            
            
            ArrayList<GrantedAuthority> rolesDelUsuarioLogeado = (ArrayList<GrantedAuthority>) auth.getAuthorities();
            
            // para usarlo donde deseemos, por ejemplo:
            if (rolesDelUsuarioLogeado.contains(new SimpleGrantedAuthority("ROLE_CLIENTE"))) {
                //hacer algo que le corresponde a un cliente
            } else {
                //hacer algo que le corresponde a cualquier otro usuario que no sea cliente...
            }
            
        }
    }




## referencias varias

<https://www.dineshonjava.com/spring-security-tutorial-using-spring-boot/
<https://snyk.io/blog/spring-boot-security-best-practices/
<https://developer.okta.com/blog/2018/07/30/10-ways-to-secure-spring-boot>
<https://developer.okta.com/blog/2017/12/18/spring-security-5-oidc>
<https://developer.okta.com/blog/2017/06/21/what-the-heck-is-oauth>



<https://www.codejava.net/frameworks/spring-boot/spring-boot-security-role-based-authorization-tutorial>

<https://springhow.com/spring-boot-security-form-login/
<https://springhow.com/custom-form-login-in-spring-security/
<https://medium.com/@devquora/login-registration-example-with-spring-boot-f5f76459c59d
<https://www.codejava.net/frameworks/spring-boot/user-registration-and-login-tutorial
<https://www.javadevjournal.com/spring-security/spring-security-logout/
https://www.baeldung.com/spring-security-authentication-with-a-database

<http://mvpjava.com/spring-boot-security-httpfirewall/>


   
   
# Seguridad en las conexiones: HTTPS y certificados SSL
Se requieren dos pasos: generar un certificado SSL e instalarlo en el servidor web
<https://www.thomasvitale.com/https-spring-boot-ssl-certificate/>

## Paso 1: generar un certificado SSL.

### Usando la herramienta que trae el propio Java 
(certificado autofirmado por nosotros mismos, con nuestra clavePrivada; del par clavePrivada/clavePública que se genera junto con el certificado)

keytool -genkey -alias NOMBREDELCERTIFICADO -storetype PKCS12 -keyalg RSA -keysize 2048 -keystore NOMBREDELARCHIVOALMACEN.p12 -validity 3650
Enter keystore password:
   Re-enter new password:
   What is your first and last name?
   [Unknown]:
   What is the name of your organizational unit?
   [Unknown]:
   What is the name of your organization?
   [Unknown]:
   What is the name of your City or Locality?
   [Unknown]:
   What is the name of your State or Province?
   [Unknown]:
   What is the two-letter country code for this unit?
   [Unknown]:
   Is CN = Unknown, OU=Unknown, O = Unknown, L = Unknown, ST = Unknown, C = Unknown correct?
   [no]: yes

C:\Users\jmurua\Documents\eclipse-workspace\_keystore_>keytool -genkey -alias CertificadoDePruebas -storetype PKCS12 -keyalg RSA -keysize 2048 -keystore AlmacenDeCertificadosDePruebas.p12 -validity 3650
Introduzca la contraseña del almacén de claves:
Volver a escribir la contraseña nueva:
No coinciden. Inténtelo de nuevo
Introduzca la contraseña del almacén de claves:
Volver a escribir la contraseña nueva:
¿Cuáles son su nombre y su apellido?
  [Unknown]:  Benzirpi Mirvento
¿Cuál es el nombre de su unidad de organización?
  [Unknown]:  Informatica
¿Cuál es el nombre de su organización?
  [Unknown]:  susosise
¿Cuál es el nombre de su ciudad o localidad?
  [Unknown]:  Bilbao
¿Cuál es el nombre de su estado o provincia?
  [Unknown]:  Bizkaia
¿Cuál es el código de país de dos letras de la unidad?
  [Unknown]:  ES
¿Es correcto CN=Benzirpi Mirvento, OU=Informatica, O=susosise, L=Bilbao, ST=Bizkaia, C=ES?
  [no]:  si

Generando par de claves RSA de 2.048 bits para certificado autofirmado (SHA256withRSA) con una validez de 3.650 días
        para: CN=Benzirpi Mirvento, OU=Informatica, O=susosise, L=Bilbao, ST=Bizkaia, C=ES

C:\Users\jmurua\Documents\eclipse-workspace\_keystore_>

C:\Users\jmurua\Documents\eclipse-workspace\_keystore_>keytool -list -v -keystore AlmacenDeCertificadosDePruebas.p12
Introduzca la contraseña del almacén de claves:
error de herramienta de claves: java.io.IOException: keystore password was incorrect
java.io.IOException: keystore password was incorrect
        at java.base/sun.security.pkcs12.PKCS12KeyStore.engineLoad(PKCS12KeyStore.java:2159)
        at java.base/sun.security.util.KeyStoreDelegator.engineLoad(KeyStoreDelegator.java:221)
        at java.base/java.security.KeyStore.load(KeyStore.java:1473)
        at java.base/sun.security.tools.keytool.Main.doCommands(Main.java:1100)
        at java.base/sun.security.tools.keytool.Main.run(Main.java:415)
        at java.base/sun.security.tools.keytool.Main.main(Main.java:408)
Caused by: java.security.UnrecoverableKeyException: failed to decrypt safe contents entry: javax.crypto.BadPaddingException: Given final block not properly padded. Such issues can arise if a bad key is used during decryption.
        ... 6 more

C:\Users\jmurua\Documents\eclipse-workspace\_keystore_>keytool -list -v -keystore AlmacenDeCertificadosDePruebas.p12
Introduzca la contraseña del almacén de claves:
Tipo de Almacén de Claves: PKCS12
Proveedor de Almacén de Claves: SUN

Su almacén de claves contiene 1 entrada

Nombre de Alias: certificadodepruebas
Fecha de Creación: 28 jul 2022
Tipo de Entrada: PrivateKeyEntry
Longitud de la Cadena de Certificado: 1
Certificado[1]:
Propietario: CN=Benzirpi Mirvento, OU=Informatica, O=susosise, L=Bilbao, ST=Bizkaia, C=ES
Emisor: CN=Benzirpi Mirvento, OU=Informatica, O=susosise, L=Bilbao, ST=Bizkaia, C=ES
Número de serie: 64668e46dd84d7a4
Válido desde: Thu Jul 28 14:29:56 CEST 2022 hasta: Sun Jul 25 14:29:56 CEST 2032
Huellas digitales del certificado:
         SHA1: 54:28:7E:1C:D8:CF:C5:E5:06:3B:04:C4:56:05:3A:89:09:17:71:EC
         SHA256: F3:91:00:7B:53:4B:12:0F:B2:8F:8C:37:F3:72:96:6B:3B:F3:93:97:61:73:AB:F4:6D:FF:E7:23:E4:67:7B:F1
Nombre del algoritmo de firma: SHA256withRSA
Algoritmo de clave pública de asunto: Clave RSA de 2048 bits
Versión: 3

Extensiones:

#1: ObjectId: 2.5.29.14 Criticality=false
SubjectKeyIdentifier [
KeyIdentifier [
0000: E4 E1 19 B3 EB C0 37 83   1F F9 BB 78 86 06 40 D9  ......7....x..@.
0010: C7 DC 7A 85                                        ..z.
]
]


*******************************************
*******************************************

C:\Users\jmurua\Documents\eclipse-workspace\_keystore_>

C:\Users\jmurua\Documents\eclipse-workspace\_keystore_>keytool -certreq -alias CertificadoDePruebas -keystore AlmacenDeCertificadosDePruebas.p12
Introduzca la contraseña del almacén de claves:
-----BEGIN NEW CERTIFICATE REQUEST-----
MIIC6jCCAdICAQAwdTELMAkGA1UEBhMCRVMxEDAOBgNVBAgTB0JpemthaWExDzAN
BgNVBAcTBkJpbGJhbzERMA8GA1UEChMIc3Vzb3Npc2UxFDASBgNVBAsTC0luZm9y
bWF0aWNhMRowGAYDVQQDExFCZW56aXJwaSBNaXJ2ZW50bzCCASIwDQYJKoZIhvcN
AQEBBQADggEPADCCAQoCggEBAKrG8kjdaya1Gc+v+8eqlz3mW9vdbYuhhRRamqRy
6CP6kTMTNVgKXBQkUYTNXNgGpP1xVtEHi7hKVyQNA6mRaaQKrp1LoWUHguRGG7Hn
6lmBny2b9PJ0VDxacqw2IP585Ug+3soyZFNxR7vTDM+AuYI6HUP7G523fk6Ab2GB
qc/nmUc4oxmlbhQZvdvmL3AnqJ6OcZ1yPkk52HIi9OsGGORPn4x0DETh4GW+H0d3
we7tU1n/1LYpnLYFVvvWTK/1D6sa0MStC9nsP4t6h+WgU13Jl+UGGp0ZSn14KFjg
VRcEasN8RArGjmnvReikp0t8PeqYAcu6X3PH6oth9GceagcCAwEAAaAwMC4GCSqG
SIb3DQEJDjEhMB8wHQYDVR0OBBYEFOThGbPrwDeDH/m7eIYGQNnH3HqFMA0GCSqG
SIb3DQEBCwUAA4IBAQCjt6gd0dWSIf6/HHJoAc52Ln7D1Y+oM/iz/cqVAUuYqMXQ
69PR3k5x7RBBeEQpcZI/9yOAhOt+vs61DLBjcwayeteU/QhBIqStbKriKThHt2z1
jWfEppUmIRNxqhrgow6vk5q4PGoo2vPikrl72I+lL4+S9o8nUKdlQVKC5lldbo8O
o4XwPa2v4YShFl5d8RXSGOjiEJ7tlbNAGIA1JRMq7eWrEc3pIIVaGXhQpUwSzf5G
H9J8NPgJUffbusxKFggD1e2CcE3P8L4o0CX93rPuhB+h366DOSkrXfuuAtOKBE3F
b21V9idOXhCCg/w/aCG2pTq4z4tIJHJvIbAcUFEC
-----END NEW CERTIFICATE REQUEST-----

   
### Usando OpenSSL
Con OpenSSL podemos hacer de todo, incluso crearnos nuestra propia Autoridad de Certificación (CA)
<https://www.openssl.org/>   
(pero seguimos limitados a certificados autofirmados por nosotros mismos)
   
### A través de una Autoridad de Certificación (CA) reconocida 
<https://www.verisign.com/en_US/website-presence/online/ssl-certificates/index.xhtml>
<https://www.thawte.com/>
<https://www.digicert.com/es>
<https://www.comodoca.com/>
<https://www.godaddy.com/es-es/seguridad-web/certificado-ssl>

<https://letsencrypt.org/>
<https://letsencrypt.org/es/how-it-works/>
<https://certbot.eff.org/instructions?ws=other&os=windows>

Pasos a seguir:
[1] Generar una petición CSR (Certificate Signing Request) firmada con nuestra clavePrivada y enviarsela a la CA que elijamos. 
keytool -certreq -alias NOMBREDELCERTIFICADO -file csr.txt -keystore NOMBREDELARCHIVOALMACEN.p12
[2] La CA validará que tenemos control del dominio que pretendemos securizar (por ejemplo, nos pedirá que pongamos un cierto archivo (.txt) en un cierto path (URL) de nuestro servidor web)
[3] La CA validará que tenemos la clavePrivada correspondiente a la clavePública implicita en la petición CSR (por ejemplo, nos pedirá firmar algo con nuestra clavePrivada)
[4] Una vez la CA nos ha validado, nos remitirá un certificado SSL firmado por ella; avalando así nuestra clavePública.
[5] Instalar y configurar dicho certificado en el servidor web.

nota: Las CA comerciales suelen tener agentes o asistentes que facilitan el proceso para los servidores web habituales.
nota: Los proveedores de alojamiento web comerciales suelen ofrecer herramientas o servicios para facilitar el proceso en los servidores web alojados en ellos.


### Para ver las CA de confianza que tiene Windows registradas
Buscar "manage user certificates" en el menu de inicio Windows para acceder a la consola 'certmgr' del panel de control.
O buscar "certificados" en la configuración del navegador web para acceder a la administración de certificados.
Mirar en la carpeta o pestaña 'Entidades de certificación raiz de confianza'.


## Paso 2: configurar Spring Boot para usar SSL

En el archivo 'application.properties', poner estas propiedades:
server.port=8443
server.ssl.key-store=NOMBREDELARCHIVOALMACEN.p12   
server.ssl.key-store-password=
server.ssl.keyStoreType=PKCS12
server.ssl.keyAlias=NOMBREDELCERTIFICADO

nota: El archivo .p12 ha de estar en ‘Resources’, o sino hemos de indicar expresamente de donde cogerlo.
  Por ejemplo:   classpath:keystore/NOMBREDELARCHIVO.p12   o   file:///C:/Temp/config/NOMBREDELARCHIVO.p12   o...

nota: Realmente, lo que estamos configurando es el servidor de aplicaciones web embebido (Apache Tomcat) levantado por Spring Boot.
      Si lo quisieramos hacer manualmente en un servidor Tomcat standalone: <https://tomcat.apache.org/tomcat-7.0-doc/ssl-howto.html>


## notas varias
httpsecurity.requiresChannel().requiresSecure()
PKCS12 certificate, .p12 file
<https://www.tutorialspoint.com/spring_boot/spring_boot_enabling_https.htm>
<https://www.javadevjournal.com/spring-boot/spring-boot-ssl/>
<https://www.javadevjournal.com/spring-boot/how-to-enable-http-https-in-spring-boot/>



# Autorización delegada: JWT y Oauth

What is OAuth <https://www.youtube.com/watch?v=t4-416mg6iU&list=PLqq-6Pq4lTTYTEooakHchTGglSvkZAjnE&index=13>
What is JWT <https://youtu.be/_XbXkVdoG_0?list=PLqq-6Pq4lTTYTEooakHchTGglSvkZAjnE>
Oauth workflows <https://www.youtube.com/watch?v=3pZ3Nh8tgTE&list=PLqq-6Pq4lTTYTEooakHchTGglSvkZAjnE&index=14>

## Cómo configurar Sprint Boot para usar JWT

