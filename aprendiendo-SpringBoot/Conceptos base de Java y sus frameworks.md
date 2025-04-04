# Conceptos base de Java y sus frameworks

En estos momentos Java es una tecnologia propietaria de Oracle
https://www.oracle.com/es/java/

Pero SUN Microsystems la concibió como plataforma abierta...
https://en.wikipedia.org/wiki/Java_(programming_language)#History

...y, por tanto, Oracle mantiene también una versión Open
https://openjdk.org/

...y también la comunidad y otras empresas mantienen sus propias versiones Open
https://adoptium.net/es/  ==> es la versión de Eclipse
https://en.wikipedia.org/wiki/OpenJDK#OpenJDK_builds


### Variantes de Java

J2SE https://en.wikipedia.org/wiki/Java_Platform,_Standard_Edition

J2EE https://en.wikipedia.org/wiki/Jakarta_EE  ==> extensiones para aplicaciones empresariales "serias"

J2ME https://en.wikipedia.org/wiki/Java_Platform,_Micro_Edition ==> versión reducida para sistemas embebidos
https://en.wikipedia.org/wiki/Java_Card  ==> versión reducida especial, para tarjetas "con chip" (smart cards)

JRE ==> runtime edition, solo la JVM (https://en.wikipedia.org/wiki/Java_virtual_machine), para ejecutar programas ya compilados a bytecode (.class)

JDK ==> developer kit, herramietnas para desarrollar software en lenguaje Java (.java)

nota: Aplicaciones web necesitan de su propio servidor web para ser "ejecutadas" (por ejemplo: Tomcat, Jetty,...)

nota: Aplicaciones EE necesitan su propio servidor para ser "ejecutadas" (por ejemplo: GlassFish, WebLogic, JBoss, WebSphere,...)

### Formatos para entregar una aplicación Java

JAR https://en.wikipedia.org/wiki/JAR_(file_format)

WAR https://en.wikipedia.org/wiki/WAR_(file_format)



## ======= Interacción con el usuario  ========


### Interfaces gráficos de usuario (GUI)

https://en.wikipedia.org/wiki/Swing_(Java)  ==> desktop

https://en.wikipedia.org/wiki/JavaFX  ==> desktop y medio web

https://en.wikipedia.org/wiki/Jakarta_Server_Pages   ==> web


### Páginas web dinámicas

https://en.wikipedia.org/wiki/Dynamic_web_page

https://en.wikipedia.org/wiki/Web_template_system

JSP https://en.wikipedia.org/wiki/Jakarta_Server_Pages

https://en.wikipedia.org/wiki/Jakarta_Servlet

https://en.wikipedia.org/wiki/Thymeleaf


### Servidores web más populares para servir aplicaciones Java

Apache Tomcat https://tomcat.apache.org/

Jetty https://www.eclipse.org/jetty/

Undertow https://github.com/undertow-io/undertow

Reactor Netty https://github.com/reactor/reactor-netty





## ======= Manejo de datos  ========


### Manejo de los datos de una entidad 'de dominio'

POJO https://en.wikipedia.org/wiki/Plain_old_Java_object

### Manejo de los datos y servicios de un componente 'empresarial'

BEAN https://en.wikipedia.org/wiki/Jakarta_Enterprise_Beans

### Persistencia en base de datos

ORM https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping ==> conversión POJO o BEAN a/desde tablas relacionales

JDBC https://en.wikipedia.org/wiki/Java_Database_Connectivity

JPA https://en.wikipedia.org/wiki/Jakarta_Persistence
https://en.wikipedia.org/wiki/Hibernate_(framework) ==> es una de las plataformas ORM más usadas



### Bases de datos más populares

https://mariadb.org/ ==> para aplicaciones un poco "de andar por casa"

nota: MySQL es ahora propietario de Oracle, MariaDB es la continuación de la versión libre.

https://www.postgresql.org/ ==> para aplicaciones "serias"

https://h2database.com/html/main.html ==> ligera, trabaja en memoria, muy rápida



### Formatos textuales más populares para serializar/deserializar, transmitir o guardar datos

JSON
https://en.wikipedia.org/wiki/JSON
https://www.json.org/json-es.html

Jackson https://github.com/FasterXML/jackson
GSON https://github.com/google/gson


XML
https://en.wikipedia.org/wiki/XML
https://en.wikipedia.org/wiki/List_of_types_of_XML_schemas
https://en.wikipedia.org/wiki/List_of_XML_markup_languages

JAXB https://en.wikipedia.org/wiki/Jakarta_XML_Binding
java.xml https://docs.oracle.com/en/java/javase/17/docs/api/java.xml/module-summary.html
org.xml.sax https://docs.oracle.com/en/java/javase/17/docs/api/java.xml/org/xml/sax/package-summary.html
javax.xml https://docs.oracle.com/en/java/javase/17/docs/api/java.xml/javax/xml/package-summary.html
org.jdom2 http://jdom.org/
org.dom4j https://dom4j.github.io/

