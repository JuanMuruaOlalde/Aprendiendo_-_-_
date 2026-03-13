pub struct Modelo {
    pub nombre: String,
    pub cantidad: u16,
}

impl Default for Modelo {
    fn default() -> Self {
        Self {
            nombre: String::from(""),
            cantidad: Modelo::CANTIDAD_MIN,
        }
    }
}

impl Modelo {
    pub const CANTIDAD_MAX: u16 = 100;
    pub const CANTIDAD_MIN: u16 = 1;
}
