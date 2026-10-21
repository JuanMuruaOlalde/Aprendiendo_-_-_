use bevy::prelude::*;

use crate::world::PosicionEn2D;

pub fn arrancar() {
    let mut el_mundo = World::new();

    let el_origen = el_mundo.spawn(PosicionEn2D {
        x: 0.0,
        y: 0.0,
        rotacion_en_xy: 0.0,
    });

    let mut la_aplicacion = App::new();

    la_aplicacion.add_systems(Update, saludar);

    la_aplicacion.run();
}

fn saludar() {
    println!("Hello, world!");
}
