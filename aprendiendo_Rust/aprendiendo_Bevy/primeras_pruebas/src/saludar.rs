use bevy::prelude::*;

pub struct Saludos;

impl Plugin for Saludos {
    fn build(&self, app: &mut App) {
        app.insert_resource(CronometroDeSaludos(Timer::from_seconds(
            2.0,
            TimerMode::Repeating,
        )));
        app.add_systems(Update, saludar_al_mundo);
    }
}

#[derive(Resource)]
struct CronometroDeSaludos(Timer);

fn saludar_al_mundo(tiempo_transcurrido: Res<Time>, mut cronometro: ResMut<CronometroDeSaludos>) {
    if cronometro
        .0
        .tick(tiempo_transcurrido.delta())
        .just_finished()
    {
        println!("Hello, world! {:?}", tiempo_transcurrido.elapsed_secs());
    }
}
