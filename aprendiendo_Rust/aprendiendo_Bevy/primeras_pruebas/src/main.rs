use bevy::prelude::*;

mod saludar;

fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .add_plugins(saludar::Saludos)
        .run();
}
