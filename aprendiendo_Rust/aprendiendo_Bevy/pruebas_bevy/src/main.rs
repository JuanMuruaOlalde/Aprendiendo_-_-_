mod un_mundo_sencillo;
mod utilidades;

use crate::un_mundo_sencillo::UnMundoSencillo;
use bevy::prelude::*;

fn main() {
    let mut el_mundo = World::new();

    App::new()
        .add_plugins(DefaultPlugins)
        .add_plugins(UnMundoSencillo {})
        .run();
}
