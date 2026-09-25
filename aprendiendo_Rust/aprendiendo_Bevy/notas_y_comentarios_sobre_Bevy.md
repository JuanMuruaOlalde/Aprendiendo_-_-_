# Bevy

A refreshingly simple data-driven game engine built in Rust

[Learn Bevy](https://bevy.org/learn/)

[Github site](https://github.com/bevyengine)

# Introducción

Bevy aplica la arquitectura [ECS (Entity Component System)](https://en.wikipedia.org/wiki/Entity_component_system):

- Los **componentes** son simples estructuras Rust.
> ```
> #[derive(Component)]
> struct Position {
>    x: f32,
>    y: f32,
>}
> ```
- Los **sistemas** son simples funciones Rust que actuan sobre los componentes de las entidades.
> ```
>fn print_position_system(query: Query<&Position>) {
>    for position in &query {
>        println!("position: {} {}", position.x, position.y);
>    }
>}
> ```
- Las **entidades** son simples contenedores con un número en su interior (su ID); más los pertinentes componentes asociados (a ese ID).
> ```
> struct Entity(u64);
> ```

Además de entidades y componentes, también podemos tener **recursos**. Una especie de componentes globalmente únicos en el programa.

Siguiendo con temas arquitecturales. Comentar que Bevy implementa sus funcionalidades de una manera modular, a base de **plugins**:

- Algunos plugins vienen ya incorporados de serie: `DefaultPlugins` (todos los habituales en cualquier juego) o `MinimalPlugins`(los mínimos imprescindibles)

- Otros plugins (y recursos) son aportados por la comunidad: [https://bevy.org/assets/](https://bevy.org/assets/)


# Para empezar

nota: Si la compilación se vuelve muy lenta (debido a la complejidad del proyecto), cambiar las optimizaciones del compilador en modo desarrollo. Poniendo esto en `Cargo.toml`:
```
# Enable a small amount of optimization in the dev profile.
[profile.dev]
opt-level = 1

# Enable a large amount of optimization in the dev profile for dependencies.
[profile.dev.package."*"]
opt-level = 3
```

nota: Para empezar, lo habitual, el comando:  `cargo add bevy`

Un pequeño programa mínimo.

main.rs
```
use bevy::prelude::*;

mod saludar;

fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .add_plugins(saludar::Saludos)
        .run();
}
```

saludar.rs
```
use bevy::prelude::*;

pub struct Saludos;

impl Plugin for Saludos {
    fn build(&self, app: &mut App) {
        app.insert_resource(CronometroDeSaludos(Timer::from_seconds(
            2.0,
            TimerMode::Repeating,
        )));
        app.add_systems(Update, saludar_al_mundo);
    }
}

#[derive(Resource)]
struct CronometroDeSaludos(Timer);

fn saludar_al_mundo(tiempo_transcurrido: Res<Time>, mut cronometro: ResMut<CronometroDeSaludos>) {
    if cronometro
        .0
        .tick(tiempo_transcurrido.delta())
        .just_finished()
    {
        println!("Hello, world! {:?}", tiempo_transcurrido.elapsed_secs());
    }
}
```

Un ejemplo más completo: [Breakout.rs](https://github.com/bevyengine/bevy/blob/latest/examples/showcase/breakout.rs)

