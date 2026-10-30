mod un_mundo_sencillo;
mod un_personaje_sencillo;
mod utilidades;

use crate::un_mundo_sencillo::UnMundoSencillo;
use crate::un_personaje_sencillo::UnPersonajeSencillo;
use bevy::prelude::*;

fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .add_plugins(UnMundoSencillo {})
        .add_plugins(UnPersonajeSencillo {})
        .run();
}
