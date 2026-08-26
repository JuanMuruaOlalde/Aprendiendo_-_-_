# Pruebas - Máquina de estados

Una máquina de estados es una entidad que tiene unos ciertos datos internos y un comportamiento que va variando según el estado en que esté en cada momento.

Los estados posibles se representan a base de objetos, con un comportamiento diferente según el estado que representa cada uno. Cada estado es responsable de su propio comportamiento y de cuándo/cómo puede transicionar hacia qué otro/s estado/s. Cada estado no sabe nada acerca de los demás estados posibles en el sistema, (excepto a cuales puede transicionar, claro está).

Para esta prueba, vamos a implementar un post de blog. El post puede estar en los estados de: `borrador`, `en_revisión` o `publicado`.
- Solo en el estado de `borrador`  puede modificarse su contenido.
- Solo en el estado de `publicado` puede devolver su contenido a código externo que lo use, evitando así que el post pueda verse desde fuera de él mismo cuando está en cualquiera de los otros estados.
