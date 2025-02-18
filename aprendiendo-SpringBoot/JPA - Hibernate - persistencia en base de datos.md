# JPA 
(javax.persistence hasta JEE 8,
 jakarta.persistence a partir de esa versión) 

<https://jakarta.ee/specifications/persistence/> 

Es un estandar de Java EE (Enterprise Edition)
<https://en.wikipedia.org/wiki/Jakarta_EE>
<https://en.wikipedia.org/wiki/Jakarta_Persistence>



## su implementación en Spring
Spring usa su propia implementación de JPA, a través de Hibernate.

<https://en.wikipedia.org/wiki/Hibernate_(framework)>
<https://www.baeldung.com/spring-data-repositories>
<https://stackoverflow.com/questions/14014086/what-is-difference-between-crudrepository-and-jparepository-interfaces-in-spring>

Spring tiene varias clases para trabajar con ello:
* JpaRepository <https://docs.spring.io/spring-data/data-jpa/docs/current/api/org/springframework/data/jpa/repository/JpaRepository.html>
nota: JpaRepository combina en uno toda la funcionalidad de CrudRepository y de PagingAndSortingRepository.
* PagingAndSortingRepository <https://docs.spring.io/spring-data/data-commons/docs/current/api/org/springframework/data/repository/PagingAndSortingRepository.html>
* CrudRepository <https://docs.spring.io/spring-data/data-commons/docs/current/api/org/springframework/data/repository/CrudRepository.html>


### nota: Acerca de las capacidades de autogestión/autocreación/autolimpieza de la estructura de la base de datos.
  La propiedad spring.jpa.generate-ddl=off (or on)
  La propiedad spring.jpa.hibernate.ddl-auto=none (or create or update or create-drop or validate)
<https://stackoverflow.com/questions/42135114/how-does-spring-jpa-hibernate-ddl-auto-property-exactly-work-in-spring>
<https://springhow.com/spring-boot-database-initialization/>


### nota: Acerca del método .save()
  Cuando guardamos un item sin Id o con un Id que no existe en la base de datos, se crea un nuevo registro.
  Cuando guardamos un item con Id ya existente en la base de datos, se actualizan los datos de ese registro.
  
  Pero, ¡ojo!, no es necesario llamar expresamente a .save() si el item lo hemos recuperado con .findById()
  Si lo hemos obtenido así, todo cambio realizado en las propiedades del item se guarda automáticamente en la base de datos; 
  nada más ejecutar el método .setXXXX() que realiza el cambio. 
  (Y se ha de tener en cuenta que Spring llama a los .setXXXX() automaticamente, internamente, en muchas de las situaciones de uso.)
<https://www.baeldung.com/spring-data-crud-repository-save>


# Cómo hacer consultas

## JPA query methods 

<https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods>


## métodos .findAll(---) y .findOne(---) de JPARepository

<https://docs.spring.io/spring-data/jpa/docs/current/api/org/springframework/data/jpa/repository/support/SimpleJpaRepository.html#findOne-org.springframework.data.domain.Example->
<https://docs.spring.io/spring-data/jpa/docs/current/api/org/springframework/data/jpa/repository/support/SimpleJpaRepository.html#findOne-org.springframework.data.jpa.domain.Specification->
* Pueden funcionar "by example" <https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/domain/Example.html?is-external=true>
* o "by Specification" <https://docs.spring.io/spring-data/jpa/docs/current/api/org/springframework/data/jpa/domain/Specification.html>

<https://reflectoring.io/spring-data-specifications/>


# Cómo gestionar los índices y las referencias cruzadas

Multiplicity in Entity Relationships <https://docs.oracle.com/cd/E19316-01/819-3669/bnbqh/index.html>
table relationships <https://support.microsoft.com/en-us/office/database-design-basics-eb2159cf-1e30-401a-8084-bd4f9c9ca1f5#bmtablerelationships>

@ManyToOne   @OneToMany  @ManyToMany @OneToOne
<https://jakarta.ee/specifications/persistence/3.0/apidocs/jakarta.persistence/jakarta/persistence/manytoone>
<https://jakarta.ee/specifications/persistence/3.0/apidocs/jakarta.persistence/jakarta/persistence/onetomany>
<https://jakarta.ee/specifications/persistence/3.0/apidocs/jakarta.persistence/jakarta/persistence/manytomany>
<https://jakarta.ee/specifications/persistence/3.0/apidocs/jakarta.persistence/jakarta/persistence/onetoone>
@JoinColumn
<https://jakarta.ee/specifications/persistence/3.0/apidocs/jakarta.persistence/jakarta/persistence/joincolumn>




# Cómo gestionar manualmente la estructura e inicialización de la base de datos
Archivos  schema.sql  y   data.sql    ??

nota: acordarse de desactivar la gestión automática
spring.jpa.generate-ddl=off
spring.jpa.hibernate.ddl-auto=none


# Cómo insertar datos de ejemplo en la base de datos

<https://stackoverflow.com/questions/44749286/spring-boot-insert-sample-data-into-database-upon-startup>


# Un poco de teoria general de ORMs
<https://medium.com/oceanize-geeks/the-active-record-and-data-mappers-of-orm-pattern-eefb8262b7bb#:~:text=So%20simply%20we%20can%20say%20that%20ORM%20%28Object,tied%20to%20a%20single%20row%20in%20the%20table.>

