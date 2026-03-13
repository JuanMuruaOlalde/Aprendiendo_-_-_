mod aplicacion;
mod interface_de_usuario;
mod mensajes;
mod modelo;

use aplicacion::Aplicacion;

fn main() -> color_eyre::Result<()> {
    color_eyre::install()?;
    let mut terminal = ratatui::init();
    let result = Aplicacion::new().run(&mut terminal);
    ratatui::restore();
    println!();
    result
}
