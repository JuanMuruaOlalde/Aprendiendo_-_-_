# Bevy Engine

[https://bevy.org/](https://bevy.org/)

Prácticamente todo el Bevy se implementa de forma modular, usando [plugins](https://bevy.org/learn/quick-start/getting-started/plugins/). Así se tiene la flexibilidad de usar o no cada módulo (plugin); aprovechando la ventaja de incorporar (o no) múltiples elementos de golpe.

nota: A la hora de comenzar un nuevo proyecto Bevy, tener en cuenta ciertos factores de optimización que pueden afectar al tiempo que tarda en compilarse: [Compile with Performance Optimizations](https://bevy.org/learn/quick-start/getting-started/setup/#compile-with-performance-optimizations)


# ECS (Entity Component System)

Bevy sigue el [paradigma ECS](https://en.wikipedia.org/wiki/Entity_component_system). Dividiendo el programa entre:
- Entidades: estructuras unicas con un solo dato: su ID (un número `u64`); cada entidad puede tener asignados ciertos componentes.
- Componentes: estructuras puras de datos; cada componente soporta un cierto tipo de comportamiento.
- Sistemas: funciones que recorren todas las entidades que tengan un cierto componente asignado y hacen algo sobre ese componente.

Las **entidades** representan objetos o personajes del juego.
```
let the_amazing_main_rock = world
    .spawn((Position { x: 0.0, y: 0.0 }))
    .id();
```

Los **componentes** representan propiedades que tienen las entidades.
```
#[derive(Component)]
struct Position { x: f32, y: f32 }
```

Los **sistemas** actuan sobre los componentes de las entidades.
```
fn print_position(query: Query<(Entity, &Position)>) {
    for (entity_id, position) in &query {
        println!("Entity {} is at position: x {}, y {}", entity_id, position.x, position.y);
    }
}
```

Es decir, en ECS la información (los datos) reside en los componentes y el comportamiento reside en los sistemas. Con una clara separación entre ambas cosas. Lo que da mucha flexibilidad y permite trabajar en paralelo.

Otros elementos:
- Los **mensajes** (`Message`) ofrecen canales de comunicación entre sistemas.
- Los **eventos** (`Event`), ofrecen una vía reactiva para ejecutar sistemas.
- 

Para más información sobre la implementación de ECS en Bevy:
- [Getting Started - ECS](https://bevy.org/learn/quick-start/getting-started/ecs/)
- [crate ecs - Bevy ECS](https://docs.rs/bevy/latest/bevy/ecs/index.html)


# `App`, la aplicación

La parte de *aplicación* (`App`) de un programa Bevy es la que implementa:
- el mundo (`World`) que conforma el juego 
- y la lógica del bucle exterior que gobierna el juego.

`App` se usa para montar la estructura general:

- Inicializa `World` para llenarlo de entidades. Manualmente y/o usando sistemas de un solo uso ("startup systems").

- Añade sistemas a diversos `Schedule`, para que sean ejecutados según diversas estratégias:
  - `Startup`: ejecutar una sola vez, cuando arranca la app.
  - `FixedMain`: ejecutar de forma retardada, después de que haya pasado un cierto intervalo de tiempo.
  - `FixedUpdate`: ejecutar cada cierto tiempo, a intervalos regulares.
  - `Update`: ejecutar en cada frame, antes de mostrar ese frame en pantalla.
  - Otras estratégias predefinidas en Bevy.
  - Otras estratégias definidas por nosotros.

Para más información sobre estratégias de ejecución:
- [Main ScheduleLabel](https://docs.rs/bevy/latest/bevy/prelude/struct.Main.html)

> nota: Los `Schedule` disponen de un *parallel executor* capaz de analizar las dependencias entre sistemas y ejecutar en paralelo tantos sistemas como sea posible.


# `World`, el mundo

La parte del *mundo* (`World`) de un programa Bevy es un contenedor especializado para:
- Entidades: cada elemento único que participa en el juego. Cada una tiene su ID.
- Componentes: aportan propiedades a las entidades.
- Sistemas: realizan operaciones sobre las entidades (sobre sus propiedades).
- y Recursos: una forma especial de componente. No suelen ir asociados a ninguna entidad. Aportan cosas tales como: imágenes, visualizadores, servicios de audio, temporizadores,...

Tiene **comandos** (`Command`) para modificar el estado del mundo. Los comandos no son inmediatos, Bevy se encarga de que actuen en el momento en que sea seguro modificar el estado que pretenden modificar.

Tiene **consultas** (`Query`) para buscar y acceder a determinados componentes. Los sistemas usan consultas para recuperar la información que van a tratar.

### coordenadas

El sistema de coordenadas de Bevy es el mismo para 2D y para 3D:
- Eje X: de izquierda (-) a derecha (-).
- Eje Y: de abajo (-) arriba (+).
- Eje Z: de lejos (-) a cerca (+).
Proyectado sobre una pantalla:
- +X apunta hacia la derecha de la pantalla.
- +Y apunta hacia arriba de la pantalla.
- +Z sale de la pantalla hacia tí.



# apéndice: documentación varia

[bevy.org - Learn Bevy](https://bevy.org/learn/)

[los ejemplos oficiales](https://github.com/bevyengine/bevy/tree/latest/examples#examples)

[los ejemplos oficiales para web (WebGL2)](https://bevy.org/examples/)

[Zymartu Games - Bevy 0,12 Beginner Tutorial](https://www.youtube.com/playlist?list=PL2wAo2qwCxGDp9fzBOTy_kpUTSwM1iWWd)

# apéndice: recursos varios

[A collection of third-party Bevy assets, plugins, learning resources, and apps made by the community](https://bevy.org/assets/)

[Avian, an ECS-driven 2D and 3D physics engine](https://github.com/avianphysics/avian)

[Avian Pickup, a plugin for implementing picking up dynamic rigid bodies](https://github.com/janhohenheim/avian_pickup)

