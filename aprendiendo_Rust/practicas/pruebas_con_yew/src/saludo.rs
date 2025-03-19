use yew::prelude::*;

#[derive(Properties, PartialEq, Default)]
pub struct Saludo {
    pub nombre: AttrValue,
}

pub enum SaludoMessage {
    RecogerNombre,
    NoHacerNada,
    HacerAlgo,
    HacerOtroAlgo,
}

impl Component for Saludo {
    type Message = SaludoMessage;
    type Properties = Saludo;

    fn create(_ctx: &Context<Self>) -> Self {
        Self {
            nombre: AttrValue::from("mundo"),
        }
    }

    fn update(&mut self, _ctx: &Context<Self>, msg: Self::Message) -> bool {
        match msg {
            SaludoMessage::RecogerNombre => {
                //"todavia no se me ha ocurrido como recoger el nombre");
                true
            }
            SaludoMessage::NoHacerNada => {
                //"no voy a hacer nada");
                true
            }
            SaludoMessage::HacerAlgo => {
                //"voy a hacer algo");
                true
            }
            SaludoMessage::HacerOtroAlgo => {
                //"voy a hacer otro algo");
                true
            }
        }
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        // let valor_nombre = use_state(|| String::new());
        // let recoger_entrada_nombre = Callback::from({
        // let valor_nombre = valor_nombre.clone();
        // move |ev: Event| {
        //     let input = ev.target_dyn_into::<web_sys::HtmlInputElement>();
        //     if let Some(input) = input {
        //         valor_nombre.set(input.value());
        //     }
        // }
        // });
        html! {
            <div >
                <label for="nombre">{"Nombre:"}</label>
                <input type="text" name="nombre" id="nombre"
                    value={&self.nombre}
                />
                <div class="enmarcado_dentro_de_una_caja">
                    <p>{"Hola, "}{&self.nombre}{"."} </p>
                </div>
             </div>
        }
    }
}
