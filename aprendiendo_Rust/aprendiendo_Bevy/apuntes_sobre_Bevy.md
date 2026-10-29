# Bevy Engine

[https://bevy.org/](https://bevy.org/)

[https://crates.io/crates/bevy](https://crates.io/crates/bevy)

Algunos crates auxiliares interesantes:
- [bevy-inspector-egui](https://crates.io/crates/bevy-inspector-egui)
- [bevy_picking](https://crates.io/crates/bevy_picking)
- [transform-gizmo-bevy](https://crates.io/crates/transform-gizmo-bevy)

Prácticamente todo Bevy se implementa de forma modular, usando [plugins](https://bevy.org/learn/quick-start/getting-started/plugins/). Así se tiene la flexibilidad de usar o no cada módulo (plugin); aprovechando la ventaja de incorporar (o no) múltiples elementos de golpe.

nota: A la hora de comenzar un nuevo proyecto Bevy, tener en cuenta ciertos factores de optimización que pueden afectar al tiempo que tarda en compilarse: [Compile with Performance Optimizations](https://bevy.org/learn/quick-start/getting-started/setup/#compile-with-performance-optimizations)


# ECS (Entity - Component - System)

Bevy sigue el [paradigma ECS](https://en.wikipedia.org/wiki/Entity_component_system). Dividiendo el programa entre:

- Las **entidades** representan objetos o personajes del juego.
  
  Son estructuras que solo contienen un único dato, su ID (un número `u64`). Cada entidad puede tener asociados ciertos componentes (el resto de datos necesarios).
  ```
  let the_amazing_main_rock = world
      .spawn((Position { x: 0.0, y: 0.0 }))
      .id();
  ```
  [bevy_ecs::entity](https://docs.rs/bevy_ecs/0.18.1/bevy_ecs/entity/struct.Entity.html)


- Los **componentes** representan propiedades que tienen las entidades.

  Son estructuras puras de datos. Cada componente soporta un cierto tipo de comportamiento.
  ```
  #[derive(Component)]
  struct Position { x: f32, y: f32 }
  ```
  [bevy_ecs::component](https://docs.rs/bevy_ecs/0.18.1/bevy_ecs/component/trait.Component.html)


- Los **sistemas** actuan sobre los componentes de las entidades.

  Son funciones que recorren todas las entidades que tengan un cierto tipo de componente asignado y, en cada una, hacen algo sobre ese componente de esa entidad.
  ```
  fn print_position(query: Query<(Entity, &Position)>) {
      for (entity_id, position) in &query {
          println!("Entity {} is at position: x {}, y {}", entity_id, position.x, position.y);
      }
  }
  ```
  [bevy_ecs::system](https://docs.rs/bevy_ecs/0.18.1/bevy_ecs/system/trait.System.html)


Es decir, en ECS:
- la *información* reside en los componentes 
- y el *comportamiento* reside en los sistemas. 

Con esta clara separación entre ambas cosas, se obtiene una gran flexibilidad y se facilita trabajar en paralelo.

Otros elementos:
- Los **mensajes** [`Message`](https://docs.rs/bevy/latest/bevy/prelude/trait.Message.html) ofrecen canales de comunicación entre sistemas.
- Los **eventos** [`Event`](https://docs.rs/bevy/latest/bevy/prelude/trait.Event.html), ofrecen una vía reactiva para ejecutar sistemas a través de los [`Observer`](https://docs.rs/bevy/latest/bevy/prelude/struct.Observer.html)
- 

Para más información sobre la implementación de ECS en Bevy:
- [Getting Started - ECS](https://bevy.org/learn/quick-start/getting-started/ecs/)
- [crate ecs - Bevy ECS](https://docs.rs/bevy/latest/bevy/ecs/index.html)

# `App`, la aplicación

La parte de *aplicación* (`App`) de un programa Bevy es la que implementa:

- El mundo [`World`](https://docs.rs/bevy/latest/bevy/ecs/prelude/struct.World.html) que conforma el juego. Este mundo se puede inicializar manualmente y/o usando sistemas de un solo uso ("startup systems").

- La lógica del bucle exterior que gobierna el juego. Las estratégias de ejecución (`Schedule`) de los distintos sistemas.

## Estrategias de ejecución de los sistemas: schedules

`App` añade sistemas a diversos `Schedule`, para que sean ejecutados según diversas estratégias:
  - `Startup`: ejecutar una sola vez, cuando arranca la app.
  - `FixedMain`: ejecutar de forma retardada, después de que haya pasado un cierto intervalo de tiempo.
  - `FixedUpdate`: ejecutar cada cierto tiempo, a intervalos regulares.
  - `Update`: ejecutar en cada frame, antes de mostrar ese frame en pantalla.
  - Otras estratégias predefinidas en Bevy: `PreStartup`, `PostStartup`, `PreUpdate`, `PostUpdate`, `First`, `Last`, etc.
  - Otras estratégias definidas por nosotros.

Para más información sobre estratégias de ejecución:
- [Main ScheduleLabel](https://docs.rs/bevy/latest/bevy/prelude/struct.Main.html)

> nota: Los `Schedule` disponen de un *parallel executor* capaz de analizar las dependencias entre sistemas y ejecutar en paralelo tantos sistemas como sea posible.

## Organizar la aplicación: plugins

Suele ser conveniente estructurar la aplicación en `Plugin`s. Cada plugin es un trozo que se puede (o no) activar cargandolo (o no) en la aplicación con la expresión `.add_plugins()`.

Hay una serie de Plugins predefinidos dentro de Bevy:
- [DefaultPlugins](https://docs.rs/bevy/latest/bevy/struct.DefaultPlugins.html)
- [MinimalPlugins](https://docs.rs/bevy/latest/bevy/struct.MinimalPlugins.html)
- [DefaultPanOrbitCameraPlugins](https://docs.rs/bevy/latest/bevy/camera_controller/pan_orbit_camera/struct.DefaultPanOrbitCameraPlugins.html)
- [DefaultPickingPlugins](https://docs.rs/bevy/latest/bevy/picking/struct.DefaultPickingPlugins.html)
- [UiWidgetsPlugins](https://docs.rs/bevy/latest/bevy/ui_widgets/struct.UiWidgetsPlugins.html)
- [FeathersPlugins](https://docs.rs/bevy/latest/bevy/feathers/struct.FeathersPlugins.html)
- etc.

Aparte de los predefinidos, se pueden definir tantos plugins como sean necesarios. Cada plugin suele escribirse en su propio módulo (xxxxxxxxx.rs) y ha de implementar una función `build`.
```
fn build(&self, app: &mut App){
    app.add_systems(......);
    app.add.......;
}
```

## Leer entrada del usuario

Teclado

Ratón

Joystick o gamepad





# `World`, el mundo

La parte del *mundo* (`World`) de un programa Bevy es un contenedor especializado para:
- Entidades: cada elemento único que participa en el juego. Cada una tiene su ID.
- Componentes: aportan propiedades a las entidades.
- Sistemas: realizan operaciones sobre las entidades (sobre sus propiedades).
- y Recursos: una forma especial de componente. No suelen ir asociados a ninguna entidad. Aportan cosas tales como: imágenes, visualizadores, servicios de audio, temporizadores,...

El mundo como tal, [`World`](https://docs.rs/bevy/latest/bevy/ecs/prelude/struct.World.html), no se suele manejar directamente. (Salvo en casos como el de ejecutar tests "headless"; donde, por ejemplo, [`world.run_system_once(...)`](https://docs.rs/bevy/latest/bevy/ecs/system/trait.RunSystemOnce.html) permite trabajar sin ventana ni render.)

La forma de interactuar con el mundo son los **comandos** [`Commands`](https://docs.rs/bevy/latest/bevy/prelude/struct.Commands.html). Los comandos no son inmediatos, Bevy se encarga de que actuen en el momento en que sea seguro modificar el estado que pretenden modificar.

> Por ejemplo, las entidades y componentes se asocian con [`Commands::spawn`](https://docs.rs/bevy/latest/bevy/prelude/struct.Commands.html#method.spawn) en el momento de crearlas.

El mundo tiene **consultas** [`Query`](https://docs.rs/bevy/latest/bevy/ecs/prelude/struct.Query.html) para buscar y acceder a determinados componentes. Los sistemas usan consultas para recuperar la información que van a tratar.

### Coordenadas (transform)

El sistema de coordenadas de Bevy es el mismo para 2D y para 3D:
- Eje X: de izquierda (-) a derecha (-).
- Eje Y: de abajo (-) arriba (+).
- Eje Z: de lejos (-) a cerca (+).
Proyectado sobre una pantalla:
- +X apunta hacia la derecha de la pantalla.
- +Y apunta hacia arriba de la pantalla.
- +Z sale de la pantalla hacia tí.

La posición, rotación y escala de una entidad vienen definidas en su `Transform`.

Bevy trae predefinidos conjuntos de propiedades útiles para representar entidades dentro del mundo. Por ejemplo `SpatialBundle` incluye visibilidad (`Visibility`, `ComputedVisibility`) y posicionamiento global (`GlobalTransform`), además de soporte para el movimiento (`Transform`).

nota: Se suele suponer que una unidad corresponde a 1 metro.

### Tiempo (time)

Por defecto `Update` ocurre en cada **frame**, típicamente 60 fps. 
```
fn update_position(mut query: Query<(&Velocity, &mut Transform)>) {
    for (velocity, mut transform) in query.iter_mut() {
        transform.translation.x += velocity.value.x;
        transform.translation.y += velocity.value.y;
        transform.translation.z += velocity.value.z;
    }
}
```

Si deseamos un control más estable, tenemos que usar un **reloj** de tiempo real ([`Time`](https://docs.rs/bevy/latest/bevy/prelude/struct.Time.html)).
```
fn update_position(mut query: Query<(&Velocity, &mut Transform)>, time: Res<Time>) {
    for (velocity, mut transform) in query.iter_mut() {
        transform.translation += velocity.value * time.delta_seconds();
    }
}
```

También tenemos **cronómetros** ([`Timer`](https://docs.rs/bevy/latest/bevy/prelude/struct.Timer.html)) para controlar temporizaciones determinadas.


### Cámaras y luces

Una cámara ([`Camera`](https://docs.rs/bevy/latest/bevy/camera/struct.Camera.html)) nos permite "ver" (hacer asomar a la pantalla) una parte del mundo.

Una luz nos permite "iluminar" una parte del mundo. (Sin iluminación, el mundo suele estar muy oscuro y no se ve ;-)
- [AmbientLight](https://docs.rs/bevy/latest/bevy/light/struct.AmbientLight.html)
- [SpotLight](https://docs.rs/bevy/latest/bevy/light/struct.SpotLight.html)
- [PointLight](https://docs.rs/bevy/latest/bevy/light/struct.PointLight.html)
- [RectLight](https://docs.rs/bevy/latest/bevy/light/struct.RectLight.html)
- etc.

### Geometria (mesh)

[`Mesh`](https://docs.rs/bevy/latest/bevy/prelude/struct.Mesh.html)

La geometria
- Puede representarse en 2D: [`Mesh2d`](https://docs.rs/bevy/latest/bevy/mesh/struct.Mesh2d.html).
- O representarse en 3D: [`Mesh3d`](https://docs.rs/bevy/latest/bevy/mesh/struct.Mesh3d.html)

La geometria
- Puede generarse manualmente en el código. Por ejemplo [Bevy_mesh/src/primitives](https://github.com/bevyengine/bevy/tree/main/crates/bevy_mesh/src/primitives).
- O puede cargarse desde modelos en formato glTF creados en programas de diseño como, por ejemplo, el [módulo de modelado en Blender](https://docs.blender.org/manual/en/latest/modeling/meshes/introduction.html).

### Recursos (assets)

En general, los recursos se cargan al [`AssetServer`](https://docs.rs/bevy/latest/bevy/prelude/struct.AssetServer.html). Con la función [asset_server.load(pathtotheasset)](https://docs.rs/bevy/latest/bevy/prelude/struct.AssetServer.html#method.load).

Hay variados tipos de recursos. por ejemplo, echar un vistazo a [Bevy 3rd party assets](https://bevy.org/assets/#assets)

#### Objetos físicos

La manera más práctica de incorporar objetos físicos es  cargarlos desde modelos en formato glTF:
- La geometria (**mesh**) del modelo se carga al `AssetServer`.
- Un manejador (**handle**) a una instancia de un modelo se puede clonar para tener varias instancias de ese modelo.

Los modelos en formato glTF pueden crearse en programas de diseño como, por ejemplo, el [módulo de modelado en Blender](https://docs.blender.org/manual/en/latest/modeling/meshes/introduction.html).

[soporte glTF en Bevy](https://docs.rs/bevy/latest/bevy/gltf/struct.Gltf.html)

[soporte glTF en Blender](https://docs.blender.org/manual/en/latest/addons/scene_gltf2.html)



# apéndice: documentación varia

[bevy.org - Learn Bevy](https://bevy.org/learn/)

Los [ejemplos oficiales para desktop](https://github.com/bevyengine/bevy/tree/latest/examples#examples)

Los [ejemplos oficiales para web (WebGL2)](https://bevy.org/examples/)

 El tutorial de Zymartu Games -Bevy 0.12 Beginner Tutorial-, ([Youtube videos](https://www.youtube.com/playlist?list=PL2wAo2qwCxGDp9fzBOTy_kpUTSwM1iWWd)) , ([Github repository](https://github.com/marcelchampagne/bevy-basics)), explica muy bien los conceptos básicos. Pero sus ejemplos de código están un tanto desfasados: por ejemplo, en la versión 0.16 de Bevy se cambió la API para utilizar tuplas directas de [`Mesh3d`](https://docs.rs/bevy/latest/bevy/mesh/struct.Mesh3d.html) y [`MeshMaterial3D`](https://docs.rs/bevy/latest/bevy/pbr/struct.MeshMaterial3d.html) o [`Camera3d`](https://docs.rs/bevy/latest/bevy/camera/struct.Camera3d.html) y [`Transform`](https://docs.rs/bevy/latest/bevy/prelude/struct.Transform.html) en lugar de usar bundles explícitos tales como [`PbrBundle`](https://docs.rs/bevy/0.12/bevy/pbr/prelude/type.PbrBundle.html) o [`Camera3dBundle`](https://docs.rs/bevy/0.12/bevy/prelude/struct.Camera3dBundle.html).


# apéndice: recursos varios

[Some templates](https://bevy.org/assets/#templates) to start a Bevy app.

A collection of [third-party Bevy assets, plugins, learning resources, and apps](https://bevy.org/assets/)  made by the community

[Avian](https://github.com/avianphysics/avian), an ECS-driven 2D and 3D physics engine

[Avian Pickup](https://github.com/janhohenheim/avian_pickup), a plugin for implementing picking up dynamic rigid bodies

[Poly Pizza](https://poly.pizza/), a collection of low-poly objects.

