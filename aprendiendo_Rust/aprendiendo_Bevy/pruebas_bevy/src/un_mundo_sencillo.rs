use bevy::prelude::*;

const NARANJA_TIERRA: bevy::prelude::Color = Color::oklch(0.7, 0.15, 55.2);
const AZUL_VERDOSO: bevy::prelude::Color = Color::oklch(0.58, 0.10, 173.6);

pub struct UnMundoSencillo;

impl Plugin for UnMundoSencillo {
    fn build(&self, app: &mut App) {
        app.add_systems(Startup, iluminacion_base_y_camara_principal);
        app.add_systems(Startup, paisaje_base);
    }
}

fn paisaje_base(
    mut commands: Commands,
    mut meshes: ResMut<Assets<Mesh>>,
    mut materials: ResMut<Assets<StandardMaterial>>,
) {
    let _suelo = commands
        .spawn((
            Mesh3d(meshes.add(Plane3d::default().mesh().size(15.0, 15.0))),
            MeshMaterial3d(materials.add(NARANJA_TIERRA)),
        ))
        .id();
    let _un_cubo_azul = commands
        .spawn((
            Mesh3d(meshes.add(Cuboid::new(1.0, 1.0, 1.0))),
            MeshMaterial3d(materials.add(AZUL_VERDOSO)),
            Transform::from_xyz(3.0, 0.5, 0.0),
        ))
        .id();
    let _otro_cubo_azul = commands
        .spawn((
            Mesh3d(meshes.add(Cuboid::new(1.0, 1.0, 1.0))),
            MeshMaterial3d(materials.add(AZUL_VERDOSO)),
            Transform::from_xyz(0.0, 0.5, 3.0),
        ))
        .id();
}

fn iluminacion_base_y_camara_principal(mut commands: Commands) {
    let _camara_principal = commands.spawn((
        Camera3d::default(),
        Transform::from_xyz(4.0, 4.0, 6.0).looking_at(Vec3::ZERO, Vec3::Y),
    ));
    let _un_foco = commands
        .spawn((
            DirectionalLight {
                shadows_enabled: true,
                ..default()
            },
            Transform::from_xyz(4.0, 8.0, 4.0).looking_at(Vec3::ZERO, Vec3::Y),
        ))
        .id();
}
