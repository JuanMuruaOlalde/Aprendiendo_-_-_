use ratatui::DefaultTerminal;

use crate::interface_de_usuario::InterfaceTextualRatatui;
use crate::mensajes::Mensaje;
use crate::modelo::Modelo;

pub struct Aplicacion {
    seguir_trabajando: bool,
    modelo: Modelo,
    interface: InterfaceTextualRatatui,
}

impl Default for Aplicacion {
    fn default() -> Self {
        Self {
            seguir_trabajando: true,
            modelo: Modelo {
                nombre: String::from("world"),
                cantidad: Modelo::CANTIDAD_MIN,
            },
            interface: InterfaceTextualRatatui {},
        }
    }
}

impl Aplicacion {
    pub fn new() -> Self {
        Aplicacion::default()
    }
    pub fn run(&mut self, terminal: &mut DefaultTerminal) -> color_eyre::Result<()> {
        while self.seguir_trabajando {
            let mensajes_a_procesar = self.interface.handle_events();
            self.update(mensajes_a_procesar);
            terminal.draw(|frame| self.interface.render(frame, &self.modelo))?;
        }
        Ok(())
    }

    fn update(&mut self, mensajes_a_procesar: Vec<Mensaje>) {
        for mensaje in mensajes_a_procesar {
            match mensaje {
                Mensaje::CambiarNombre(nuevo_nombre) => {
                    self.modelo.nombre = nuevo_nombre.to_string()
                }

                Mensaje::IncrementarCantidad => {
                    if self.modelo.cantidad < Modelo::CANTIDAD_MAX {
                        self.modelo.cantidad += 1;
                    }
                }

                Mensaje::DecrementarCantidad => {
                    if self.modelo.cantidad > Modelo::CANTIDAD_MIN {
                        self.modelo.cantidad -= 1;
                    }
                }

                Mensaje::SalirDeLaAplicacion => {
                    self.seguir_trabajando = false;
                }
            }
        }
    }
}
