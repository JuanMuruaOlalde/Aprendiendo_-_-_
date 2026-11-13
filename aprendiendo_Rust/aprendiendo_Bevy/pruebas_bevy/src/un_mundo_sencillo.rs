use bevy::{input::mouse::AccumulatedMouseMotion, prelude::*};
use std::f32::consts::FRAC_PI_2;

const NARANJA_TIERRA: bevy::prelude::Color = Color::oklch(0.7, 0.15, 55.2);
const AZUL_VERDOSO: bevy::prelude::Color = Color::oklch(0.58, 0.10, 173.6);
const VELOCIDAD_CABECEO: f32 = 0.003; // pitch
const VELOCIDAD_ALABEO: f32 = 0.003; // roll
const VELOCIDAD_GIÑADA: f32 = 0.003; // yaw
const DISTANCIA_DE_ORBITA: f32 = 10.0;

pub struct UnMundoSencillo;

impl Plugin for UnMundoSencillo {
    fn build(&self, app: &mut App) {
        app.add_systems(Startup, iluminacion_base_y_camara_principal);
        app.add_systems(Update, orbitar_la_camara);
        app.add_systems(Startup, paisaje_base);
    }
}

fn paisaje_base(
    mut commands: Commands,
    mut meshes: ResMut<Assets<Mesh>>,
    mut materials: ResMut<Assets<StandardMaterial>>,
) {
    commands.spawn((
        Name::new("Suelo"),
        Mesh3d(meshes.add(Plane3d::default().mesh().size(15.0, 15.0))),
        MeshMaterial3d(materials.add(NARANJA_TIERRA)),
    ));
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
    commands.spawn((
        Name::new("CamaraPrincipal"),
        Camera3d::default(),
        Transform::from_xyz(4.0, 4.0, 6.0).looking_at(Vec3::ZERO, Vec3::Y),
    ));
    commands.spawn((
        Name::new("FocoDireccional"),
        DirectionalLight {
            shadows_enabled: true,
            ..default()
        },
        Transform::from_xyz(4.0, 8.0, 4.0).looking_at(Vec3::ZERO, Vec3::Y),
    ));
}

fn orbitar_la_camara(
    mut camara: Single<&mut Transform, With<Camera>>,
    botones_del_raton: Res<ButtonInput<MouseButton>>,
    movimiento_del_raton: Res<AccumulatedMouseMotion>,
    tiempo: Res<Time>,
) {
    let cambio = movimiento_del_raton.delta;
    let cambio_cabeceo = cambio.y * VELOCIDAD_CABECEO;
    let cambio_giñada = cambio.x * VELOCIDAD_GIÑADA;

    let mut cambio_alabeo = 1.0;
    if botones_del_raton.pressed(MouseButton::Left) {
        cambio_alabeo -= 1.0;
    }
    if botones_del_raton.pressed(MouseButton::Right) {
        cambio_alabeo += 1.0;
    }
    cambio_alabeo *= VELOCIDAD_ALABEO * tiempo.delta_secs();

    let (cabeceo, alabeo, giñada) = camara.rotation.to_euler(EulerRot::XZY);
    let limite = FRAC_PI_2 - 0.01;
    let cabeceo = (cabeceo + cambio_cabeceo).clamp(-limite, limite);
    let alabeo = alabeo + cambio_alabeo;
    let giñada = giñada + cambio_giñada;
    camara.rotation = Quat::from_euler(EulerRot::XZY, cabeceo, alabeo, giñada);
    let target = Vec3::ZERO;
    camara.translation = target - camara.forward() * DISTANCIA_DE_ORBITA;
}
