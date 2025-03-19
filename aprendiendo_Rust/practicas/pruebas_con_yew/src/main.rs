use yew::prelude::*;

mod saludo;
use saludo::Saludo;

fn main() {
    yew::Renderer::<App>::new().render();
}

#[function_component(App)]
fn app(Saludo { nombre }: &Saludo) -> Html {
    html! {
    <body>
        <header>
            <h1>{"Haciendo pruebas con Yew"}</h1>
        </header>

        <nav></nav>

        <main>
            < Saludo nombre={nombre}/>
        </main>

        <footer>
            <p><a href="https://yew.rs/">{"Yew main website"}</a></p>
        </footer>
    </body>
    }
}
