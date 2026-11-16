use bevy::{
    camera_controller::free_camera::{
        FreeCamera, FreeCameraPlugin, FreeCameraState, VerticalMovementAxis,
    },
    input::mouse::AccumulatedMouseMotion,
    prelude::*,
};
use std::f32::consts::FRAC_PI_2;

const NARANJA_TIERRA: bevy::prelude::Color = Color::oklch(0.7, 0.15, 55.2);
const AZUL_VERDOSO: bevy::prelude::Color = Color::oklch(0.58, 0.10, 173.6);
// const VELOCIDAD_GIÑADA: f32 = 0.003; // yaw
// const VELOCIDAD_CABECEO: f32 = 0.003; // pitch
// const VELOCIDAD_ALABEO: f32 = 0.003; // roll
// const DISTANCIA_DE_ORBITA: f32 = 10.0;

pub struct UnMundoSencillo;

impl Plugin for UnMundoSencillo {
    fn build(&self, app: &mut App) {
        app.add_systems(Startup, paisaje_base);
        app.add_systems(Startup, iluminacion_base_y_camara_principal);
        // app.add_systems(Update, orbitar_la_camara_simple);
        app.add_plugins(FreeCameraPlugin);
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
    // commands.spawn((
    //     Name::new("CamaraPrincipalSimple"),
    //     Camera3d::default(),
    //     Transform::from_xyz(4.0, 4.0, 6.0).looking_at(Vec3::ZERO, Vec3::Y),
    // ));
    commands.spawn((
        Name::new("CamaraPrincipalLibre"),
        Camera3d::default(),
        Transform::from_xyz(-8.0, 2.0, 3.0).looking_to(Vec3::X, Vec3::Y),
        FreeCamera {
            sensitivity: 0.2,
            friction: 25.0,
            walk_speed: 3.0,
            run_speed: 9.0,
            ..default()
        },
    ));
    commands.spawn((
        Name::new("FocoDireccionalSobreElSuelo"),
        DirectionalLight {
            shadow_maps_enabled: true,
            ..default()
        },
        Transform::from_xyz(-5.0, 8.0, -5.0).looking_at(Vec3::ZERO, Vec3::Y),
    ));
    commands.spawn((
        Name::new("FocoDireccionalDebajoDelSuelo"),
        DirectionalLight {
            shadow_maps_enabled: true,
            ..default()
        },
        Transform::from_xyz(-5.0, -8.0, -5.0).looking_at(Vec3::ZERO, Vec3::Y),
    ));
}

// fn orbitar_la_camara_simple(
//     mut camara: Single<&mut Transform, With<Camera>>,
//     botones_del_raton: Res<ButtonInput<MouseButton>>,
//     movimiento_del_raton: Res<AccumulatedMouseMotion>,
//     tiempo: Res<Time>,
// ) {
//     let cambio = movimiento_del_raton.delta;
//     let cambio_giñada = cambio.x * VELOCIDAD_GIÑADA;
//     let cambio_cabeceo = cambio.y * VELOCIDAD_CABECEO;
//     let mut cambio_alabeo = 1.0;
//     if botones_del_raton.pressed(MouseButton::Left) {
//         cambio_alabeo -= 1.0;
//     }
//     if botones_del_raton.pressed(MouseButton::Right) {
//         cambio_alabeo += 1.0;
//     }
//     cambio_alabeo *= VELOCIDAD_ALABEO * tiempo.delta_secs();

//     let (giñada, cabeceo, alabeo) = camara.rotation.to_euler(EulerRot::YXZ);
//     let limite = FRAC_PI_2 - 0.01;
//     let giñada = giñada + cambio_giñada;
//     let cabeceo = (cabeceo + cambio_cabeceo).clamp(-limite, limite);
//     let alabeo = alabeo + cambio_alabeo;
//     camara.rotation = Quat::from_euler(EulerRot::YXZ, giñada, cabeceo, alabeo);
//     let target = Vec3::ZERO;
//     camara.translation = target - camara.forward() * DISTANCIA_DE_ORBITA;
// }

// La camara libre (free_camera) tiene estos controles por defecto
//
// ## Default Controls
//
// This controller has a simple 6-axis control scheme, and mouse controls for camera orientation. There are also
// bindings for capturing the mouse, both while holding the button and toggle, a run feature that increases the
// max speed, and scrolling changes the movement speed. All keybinds can be changed by editing the [`FreeCamera`]
// component.
//
// | Default Key Binding | Action                 |
// |:--------------------|:-----------------------|
// | Mouse               | Look around            |
// | Right click         | Capture mouse (hold)   |
// | M                   | Capture mouse (toggle) |
// | WASD                | Horizontal movement    |
// | QE                  | Vertical movement      |
// | Left shift          | Run                    |
// | Scroll wheel        | Change movement speed  |
// | Numpad1             | Snap to front          |
// | `LCtrl` + Numpad1   | Snap to back           |
// | Numpad3             | Snap to right          |
// | `LCtrl` + Numpad3   | Snap to left           |
// | Numpad7             | Snap to top            |
// | `LCtrl` + Numpad7   | Snap to bottom         |
//
// https://github.com/bevyengine/bevy/blob/latest/examples/camera/free_camera_controller.rs
