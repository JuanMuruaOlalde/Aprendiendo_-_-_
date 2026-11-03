use bevy::prelude::*;

const ROSA: bevy::prelude::Color = Color::oklch(0.7, 0.28, 330.0);

pub struct MarcadorOrientado;

impl Plugin for MarcadorOrientado {
    fn build(&self, app: &mut App) {
        app.add_systems(Startup, crear_marcador);
    }
}

fn crear_marcador(
    mut commands: Commands,
    mut meshes: ResMut<Assets<Mesh>>,
    mut materials: ResMut<Assets<StandardMaterial>>,
) {
    commands.spawn((
        Mesh3d(meshes.add(Tetrahedron::new(
            Vec3 {
                x: -0.3,
                y: 0.5,
                z: -0.3,
            },
            Vec3 {
                x: -0.3,
                y: 0.5,
                z: 0.3,
            },
            Vec3 {
                x: 0.3,
                y: 0.5,
                z: 0.3,
            },
            Vec3 {
                x: 0.3,
                y: 0.5,
                z: -0.3,
            },
        ))),
        MeshMaterial3d(materials.add(ROSA)),
    ));
}
