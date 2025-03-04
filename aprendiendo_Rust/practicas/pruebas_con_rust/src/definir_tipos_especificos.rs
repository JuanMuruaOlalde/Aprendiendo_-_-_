pub struct Temperatura {
    pub cantidad: f32,
    pub unidad_de_medida: UnidadParaMedirTemperatura,
}

#[derive(Copy, Clone)]
pub enum UnidadParaMedirTemperatura {
    Celsius,
    Farenheit,
}

pub struct Dinero {
    pub cantidad: f32,
    pub moneda: Moneda,
}

#[derive(Copy, Clone)]
pub enum Moneda {
    EUR,
    USD,
    CAD,
    GPB,
    JPY,
    RUB,
    RMB,
}

pub fn calcular_precio_del_helado(precio_base: &Dinero, temperatura: &Temperatura) -> Dinero {
    Dinero {
        cantidad: ((precio_base.cantidad + temperatura.cantidad * 0.02) * 100.0).round() / 100.0,
        moneda: precio_base.moneda,
    }
}

// pub fn calcular_precio_del_helado(precio_base: f32, temperatura: f32) -> f32 {
//     ((precio_base + temperatura * 0.02) * 100.0).round() / 100.0
// }

pub struct Nombre_de_persona {
    pub nombre: String,
    pub apellido1: String,
    pub apellido2: String,
    pub tratamiento_formal: String,
    pub saludo_favorito: String,
    pub apodo_cariñoso: String,
}

pub fn componer_saludo_formal(persona: &Nombre_de_persona) -> String {
    String::from(format!(
        "Espero que tenga un buen dia, {} {}, honorable descendiente de {}.",
        persona.tratamiento_formal, persona.apellido1, persona.apellido2
    ))
}

pub fn componer_saludo_informal(persona: &Nombre_de_persona) -> String {
    String::from(format!(
        "Mucha mierda, {} {} el {}!.",
        persona.saludo_favorito, persona.nombre, persona.apodo_cariñoso
    ))
}

// pub fn componer_saludo_formal(tratamiento: &str, apellido1: &str, apellido2: &str) -> String {
//     String::from(format!(
//         "Espero que tenga un buen dia, {tratamiento} {apellido1}, honorable descendiente de {apellido2}."))
// }

// pub fn componer_saludo_informal(
//     saludo_favorito: &str,
//     apodo_cariñoso: &str,
//     nombre: &str,
// ) -> String {
//     String::from(format!(
//         "Mucha mierda, {saludo_favorito} {nombre} el {apodo_cariñoso}!."
//     ))
// }
