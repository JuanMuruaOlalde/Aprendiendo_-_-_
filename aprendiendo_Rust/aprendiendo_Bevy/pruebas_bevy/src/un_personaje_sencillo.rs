use bevy::prelude::*;

const GRIS: bevy::prelude::Color = Color::oklch(0.55, 0.0, 0.0);
const VELOCIDAD: f32 = 1.0;

pub struct UnPersonajeSencillo;

#[derive(Component)]
pub struct Movimiento {}

impl Plugin for UnPersonajeSencillo {
    fn build(&self, app: &mut App) {
        app.add_systems(Startup, crear_personaje);
        app.add_systems(Update, mover_personaje);
    }
}

fn crear_personaje(
    mut commands: Commands,
    mut meshes: ResMut<Assets<Mesh>>,
    mut materials: ResMut<Assets<StandardMaterial>>,
) {
    commands.spawn((
        Mesh3d(meshes.add(Sphere::new(0.3))),
        MeshMaterial3d(materials.add(GRIS)),
        Movimiento {},
    ));
}

fn mover_personaje(
    entrada_teclado: Res<ButtonInput<KeyCode>>,
    tiempo: Res<Time>,
    mut query: Query<&mut Transform, With<Movimiento>>,
) {
    for mut transform in &mut query {
        let mut direccion = Vec3::ZERO;
        if entrada_teclado.pressed(KeyCode::KeyX) {
            direccion.x += 1.0
        }
        if entrada_teclado.pressed(KeyCode::KeyY) {
            direccion.y += 1.0
        }
        if entrada_teclado.pressed(KeyCode::KeyZ) {
            direccion.z += 1.0
        }
        if entrada_teclado.pressed(KeyCode::KeyA) {
            direccion.x -= 1.0
        }
        if entrada_teclado.pressed(KeyCode::KeyB) {
            direccion.y -= 1.0
        }
        if entrada_teclado.pressed(KeyCode::KeyC) {
            direccion.z -= 1.0
        }
        transform.translation += direccion.normalize_or_zero() * VELOCIDAD * tiempo.delta_secs();
    }
}
