use ratatui::{
    Frame,
    crossterm::event::{self, Event, KeyCode, KeyEventKind},
    layout::{Constraint, Direction, Layout},
    style::{Color, Modifier, Style},
    text::Span,
};

use crate::{mensajes::Mensaje, modelo::Modelo};

pub struct InterfaceTextualRatatui {}

impl InterfaceTextualRatatui {
    pub fn render(&self, frame: &mut Frame, modelo: &Modelo) {
        let layout = Layout::default()
            .direction(Direction::Vertical)
            .constraints([
                Constraint::Length(1),
                Constraint::Fill(1),
                Constraint::Fill(2),
                Constraint::Length(1),
            ])
            .split(frame.area());

        let instructions = ratatui::text::Line::from(vec![
            Span::raw("  Increment "),
            Span::styled(
                "->  ",
                Style::default()
                    .fg(Color::Blue)
                    .add_modifier(Modifier::BOLD),
            ),
            Span::raw("  Decrement "),
            Span::styled(
                "<-  ",
                Style::default()
                    .fg(Color::Blue)
                    .add_modifier(Modifier::BOLD),
            ),
            Span::raw("  Quit "),
            Span::styled(
                "<q>  ",
                Style::default()
                    .fg(Color::Blue)
                    .add_modifier(Modifier::BOLD),
            ),
        ]);
        let container = ratatui::widgets::Block::bordered()
            .title("Pruebas Ratatui")
            .title_bottom(instructions.centered());
        frame.render_widget(container, frame.area());

        let hello =
            ratatui::widgets::Paragraph::new(format!("Hello {0}.", modelo.nombre)).centered();
        frame.render_widget(hello, layout[1]);

        let gauge = ratatui::widgets::Gauge::default()
            .label("cantidad")
            .percent(modelo.cantidad);
        frame.render_widget(gauge, layout[2]);
    }

    pub fn handle_events(&self) -> Vec<Mensaje> {
        let mut mensajes: Vec<Mensaje> = Vec::new();
        if let Ok(Event::Key(key)) = event::read() {
            if key.kind == KeyEventKind::Press {
                match key.code {
                    KeyCode::Left => mensajes.push(Mensaje::DecrementarCantidad),
                    KeyCode::Right => mensajes.push(Mensaje::IncrementarCantidad),
                    KeyCode::Char('q') => mensajes.push(Mensaje::SalirDeLaAplicacion),
                    _ => (),
                }
            }
        }
        mensajes
    }
}
