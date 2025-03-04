use definir_tipos_especificos::calcular_precio_del_helado;
use definir_tipos_especificos::componer_saludo_formal;
use definir_tipos_especificos::componer_saludo_informal;
use definir_tipos_especificos::Dinero;
use definir_tipos_especificos::Moneda;
use definir_tipos_especificos::Nombre_de_persona;
use definir_tipos_especificos::Temperatura;
use definir_tipos_especificos::UnidadParaMedirTemperatura;

mod archivo_de_texto_plano;
mod definir_tipos_especificos;
mod definir_tipos_especificos_usuario;
mod divisiones;

fn main() {
    let resultado = 5 as f32 + 2.3;

    println!(
        "{}",
        calcular_precio_del_helado(
            &Dinero {
                cantidad: 75.0,
                moneda: Moneda::EUR
            },
            &Temperatura {
                cantidad: 22.4,
                unidad_de_medida: UnidadParaMedirTemperatura::Celsius
            }
        )
        .cantidad
    );

    let persona = Nombre_de_persona {
        nombre: "Benzirpi".to_string(),
        apellido1: "Mirvento".to_string(),
        apellido2: "Liurvine".to_string(),
        tratamiento_formal: "Mr.".to_string(),
        saludo_favorito: "querido".to_string(),
        apodo_cariñoso: "griunquy".to_string(),
    };

    println!("{}", componer_saludo_formal(&persona));
    println!("{}", componer_saludo_informal(&persona));

    // println!("{}", componer_saludo_formal("Mr.", "Mirvento", "Liurve"));
    // println!(
    //     "{}",
    //     componer_saludo_informal("querido", "Benzirpi", "qriunquy")
    // );

    // println!(
    //     "{}",
    //     componer_saludo_formal(
    //         &persona.tratamiento_formal,
    //         &persona.apellido1,
    //         &persona.apellido2
    //     )
    // );
    // println!(
    //     "{}",
    //     componer_saludo_informal(
    //         &persona.saludo_favorito,
    //         &persona.nombre,
    //         &persona.apodo_cariñoso
    //     )
    // );

    //================================================================================================
    //================================================================================================

    // definir_tipos_especificos_usuario::intentar_dejar_a_un_usuario_sin_contraseña();

    //================================================================================================
    //================================================================================================

    // println!();
    // println!("==============================================================================");

    // let path_archivo = String::from("./resources/archivo_para_pruebas.txt");
    // let personas = archivo_de_texto_plano::leer_datos_del_archivo(&path_archivo);

    // println!("==============================================================================");
    // println!("Las personas que se han leido son:");
    // println!("----------------------------------");
    // for persona in personas {
    //     println!("{}", persona);
    //     println!("--------------------------------------");
    // }
    // println!("==============================================================================");
}
