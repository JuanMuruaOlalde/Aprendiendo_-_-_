use wasm_bindgen::JsCast;
use web_sys::{EventTarget, HtmlInputElement};
use yew::prelude::*;

mod saludo_sofisticado;
use saludo_sofisticado::SaludoSofisticado;

fn main() {
    yew::Renderer::<App>::new().render();
}

#[function_component(App)]
fn app() -> Html {
    html! {
    <body>
        <header>
            <h1>{"Haciendo pruebas con Yew"}</h1>
        </header>

        <nav></nav>

        <main>
            < Saludo />
        </main>

        <footer>
            <p><a href="https://yew.rs/">{"Yew main website"}</a></p>
        </footer>
    </body>
    }
}

#[function_component(Saludo)]
fn saludo() -> Html {
    let nombre_handle = use_state(|| String::from("mundo"));
    let nombre = (*nombre_handle).clone();
    let obtener_nombre = {
        let nombre_handle = nombre_handle.clone();
        Callback::from({
            move |evento: InputEvent| {
                let target: Option<EventTarget> = evento.target();
                let entrada = target.and_then(|t| t.dyn_into::<HtmlInputElement>().ok());
                if let Some(entrada) = entrada {
                    nombre_handle.set(entrada.value());
                }
            }
        })
    };
    html! {
        <div >
            <label for="nombre">{"Nombre:"}</label>
            <input type="text" id="nombre" oninput={obtener_nombre} value={nombre.clone()} />
            <div class="enmarcado_dentro_de_una_caja">
                <p>{"Hola, "}{nombre}{"."} </p>
            </div>
         </div>
    }
}
