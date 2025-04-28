use yew::prelude::*;

#[derive(Properties, PartialEq, Default)]
pub struct SaludoSofisticado {
    pub nombre: AttrValue,
}

pub enum SaludoMessage {
    RecogerNombre,
    NoHacerNada,
    HacerAlgo,
    HacerOtroAlgo,
}

impl Component for SaludoSofisticado {
    type Message = SaludoMessage;
    type Properties = SaludoSofisticado;

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
        html! {
            <div class="enmarcado_dentro_de_una_caja">
                <p>{"Hola, "}{&self.nombre}{"."} </p>
            </div>
        }
    }
}
