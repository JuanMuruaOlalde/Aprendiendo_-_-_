# Thymeleaf

https://www.thymeleaf.org/documentation.html

https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.html


Un ejemplo práctico:

[Mostrar una tabla con la lista de usuarios en la base de datos](https://youtu.be/_thI-4AF7M8?t=23843)

[Añadir un nuevo usuario](https://youtu.be/_thI-4AF7M8?t=24924)

[Actualizar los datos de un usuario](https://youtu.be/_thI-4AF7M8?t=26144)

[Borrar un usuario existente](https://youtu.be/_thI-4AF7M8?t=26950)

https://www.baeldung.com/thymeleaf-in-spring-mvc

https://www.baeldung.com/spring-thymeleaf-request-parameters

Con @Controller se ha de usar @RequestMapping y luego el correspondiente method = RequestMethod.XXXXX

Con @RestController se ha de usar @GetMapping, @PostMapping, @DeleteMapping, @PutMapping, @PatchMapping

nota: @RestController no es mas que una anotación de conveniencia que equivale a @Controller + @ResponseBody

@RequestParam para recoger los parámetros que vienen a través de la url (los que vienen separados con ?)

@ModelAttribute y @PathVariable (en los parámetros de las funciones) para recoger variables de la vista al controlador.

model.addAttibute (en el cuerpo de las funciones) para pasar variables del controlador a la vista,

```
th:text
th:each
th:if
```

```
th:href
```

```
th:action
th:object
th:field
```

```
${---}  variable expressions
@{---}  link (url) expressions
*{---}  selection expressions, same as ${---} excepted it will be executed on a previously selected object only
#{---}  internationalized (i18n) message expressions, loaded from external resources
~{---}  fragment expressions
```


## Errores generales, tratamiento de excepciones

https://www.logicbig.com/tutorials/spring-framework/spring-boot/custom-thymeleaf-error-page.html


## Formularios

https://www.codejava.net/frameworks/spring-boot/spring-boot-thymeleaf-form-handling-tutorial

https://frontbackend.com/thymeleaf/working-with-forms-in-thymeleaf

https://www.baeldung.com/spring-thymeleaf-error-messages

https://www.baeldung.com/thymeleaf-list


## Validación de campos

https://www.educba.com/spring-boot-validation/

https://reflectoring.io/bean-validation-with-spring-boot/

https://www.baeldung.com/spring-boot-bean-validation

https://hibernate.org/validator/


## Mostrar los errores de validación

https://www.baeldung.com/spring-thymeleaf-error-messages

https://stackabuse.com/spring-boot-thymeleaf-form-data-validation-with-bean-validator/


## Recursos estáticos

https://memorynotfound.com/adding-static-resources-css-javascript-images-thymeleaf/

https://www.thymeleaf.org/doc/articles/standardurlsyntax.html


## Fragmentos, partes que se repiten en múltiples páginas

https://frontbackend.com/thymeleaf/how-to-work-with-fragments-in-thymeleaf

