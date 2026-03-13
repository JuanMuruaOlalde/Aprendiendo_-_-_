use ratatui::{
    DefaultTerminal, Frame,
    crossterm::event::{self, Event, KeyCode, KeyEventKind},
    layout::{Constraint, Direction, Layout},
    style::{Color, Modifier, Style},
    text::Span,
};

fn main() -> color_eyre::Result<()> {
    color_eyre::install()?;
    let mut terminal = ratatui::init();
    let result = App::new().run(&mut terminal);
    ratatui::restore();
    println!();
    result
}

struct App {
    nombre: String,
    cantidad: u16,
}

impl App {
    const CANTIDAD_MAX: u16 = 100;

    fn new() -> Self {
        Self {
            nombre: String::from("world"),
            cantidad: 1,
        }
    }

    fn run(&mut self, terminal: &mut DefaultTerminal) -> color_eyre::Result<()> {
        loop {
            terminal.draw(|frame| self.user_interface(frame))?;
            let events_result = self.handle_events();
            match events_result {
                Ok(should_quit) => {
                    if should_quit {
                        break Ok(());
                    }
                }
                Err(_) => todo!(),
            };
        }
    }

    fn user_interface(&self, frame: &mut Frame) {
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
            Span::styled("->  ", Style::default().fg(Color::Blue)),
            Span::raw("  Decrement "),
            Span::styled("<-  ", Style::default().fg(Color::Blue)),
            Span::raw("  Quit "),
            Span::styled(
                "<q> or <Q>  ",
                Style::default()
                    .fg(Color::Blue)
                    .add_modifier(Modifier::BOLD),
            ),
        ]);
        let container = ratatui::widgets::Block::bordered()
            .title("Pruebas Ratatui")
            .title_bottom(instructions.centered());
        frame.render_widget(container, frame.area());

        let hello = ratatui::widgets::Paragraph::new(format!("Hello {0}.", self.nombre)).centered();
        frame.render_widget(hello, layout[1]);

        let gauge = ratatui::widgets::Gauge::default()
            .label("cantidad")
            .percent(self.cantidad);
        frame.render_widget(gauge, layout[2]);
    }

    fn handle_events(&mut self) -> std::io::Result<bool> {
        if let Event::Key(key) = event::read()? {
            if key.kind == KeyEventKind::Press {
                match key.code {
                    KeyCode::Left => self.cantidad_down(),
                    KeyCode::Right => self.cantidad_up(),
                    KeyCode::Char('q') => return Ok(true),
                    _ => (),
                }
            }
        }
        Ok(false)
    }

    fn cantidad_up(&mut self) {
        if self.cantidad < App::CANTIDAD_MAX {
            self.cantidad += 1;
        }
    }
    fn cantidad_down(&mut self) {
        if self.cantidad > 1 {
            self.cantidad -= 1;
        }
    }
}
