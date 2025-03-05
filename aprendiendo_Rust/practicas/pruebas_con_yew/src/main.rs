use yew::prelude::*;

struct HelloWorldComponent {}

enum HelloWorldMessage {
    NoHacerNada,
    HacerAlgo,
    HacerOtroAlgo,
}

impl Component for HelloWorldComponent {
    type Message = HelloWorldMessage;
    type Properties = ();

    fn create(ctx: &Context<Self>) -> Self {
        //por ahora no necesito hacer nada en el creador
        Self {}
    }

    fn update(&mut self, ctx: &Context<Self>, msg: Self::Message) -> bool {
        //esto es solo un updateador de prueba, realmente no sirve para nada todavia
        match msg {
            HelloWorldMessage::NoHacerNada => {
                println!("no voy a hacer nada");
                true
            }
            HelloWorldMessage::HacerAlgo => {
                println!("voy a hacer algo");
                true
            }
            HelloWorldMessage::HacerOtroAlgo => {
                println!("voy a hacer otro algo");
                true
            }
        }
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        html! {
            <div class="enmarcado_dentro_de_una_caja">
                <p>{"Hola, mundo."}</p>
                <button onclick={ctx.link().callback(|_| HelloWorldMessage::NoHacerNada)}>{"Este botón no hace nada"}</button>
            </div>
        }
    }
}

fn main() {
    yew::Renderer::<HelloWorldComponent>::new().render();
}
