use bevy::prelude::*;

const ROSA: bevy::prelude::Color = Color::oklch(0.7, 0.28, 330.0);
const TAMAÑO_BASE: f32 = 0.5;

#[derive(Resource)]
struct Marcador {
    pub forma: Handle<Mesh>,
    pub material: Handle<StandardMaterial>,
}

pub struct MarcadorOrientado;

impl Plugin for MarcadorOrientado {
    fn build(&self, app: &mut App) {
        app.add_systems(Startup, crear_recurso);
        app.add_observer(on_colocar_un_marcador_orientado);
    }
}

pub fn crear_recurso(
    mut commands: Commands,
    mut meshes: ResMut<Assets<Mesh>>,
    mut materials: ResMut<Assets<StandardMaterial>>,
) {
    let altura = TAMAÑO_BASE / 2.0;
    commands.insert_resource(Marcador {
        forma: meshes.add(Tetrahedron::new(
            Vec3::new(0.0, 0.0, 0.0),
            Vec3::new(TAMAÑO_BASE, 0.0, 0.0),
            Vec3::new(0.0, 0.0, TAMAÑO_BASE),
            Vec3::new(0.0, altura, 0.0),
        )),
        material: materials.add(ROSA),
    });
}

#[derive(Event)]
pub struct ColocarUnMarcadorOrientado {
    pub posicion: Vec3,
    pub orientacion: Quat,
}

fn on_colocar_un_marcador_orientado(
    solicitud: On<ColocarUnMarcadorOrientado>,
    marcador: Res<Marcador>,
    mut commands: Commands,
) {
    commands.spawn((
        Mesh3d(marcador.forma.clone()),
        MeshMaterial3d(marcador.material.clone()),
        Transform::from_translation(solicitud.posicion).with_rotation(solicitud.orientacion),
    ));
}
