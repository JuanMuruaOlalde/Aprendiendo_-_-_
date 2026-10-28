use bevy::prelude::*;
use rand::prelude::*;

fn un_vector_aleatorio() -> Vec3 {
    let mut generador = rand::rng();
    Vec3::new(
        generador.random_range(-1.0..1.0),
        0.0,
        generador.random_range(-1.0..1.0),
    )
    .normalize_or_zero()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn los_vectores_aleatorios_son_distintos() {
        let un_vector = un_vector_aleatorio();
        let otro_vector = un_vector_aleatorio();
        assert_ne!(un_vector, otro_vector);
        println!("un vector {} y otro {}", un_vector, otro_vector);
    }
}
