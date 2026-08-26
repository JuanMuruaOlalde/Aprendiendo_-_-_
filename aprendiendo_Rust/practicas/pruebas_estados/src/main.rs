mod post_con_un_solo_tipo;
mod post_con_varios_tipos;

use post_con_un_solo_tipo::Post;

use post_con_varios_tipos::PostBorrador;

fn main() {
    println!();
    println!("Trabajando con la versión de un solo tipo (lleva dentro la información del estado en que está)");
    println!("==============================================================================================");
    let mut post = Post::new();
    println!(
        "Se ha creado un post. Su estado es [{:?}] y su contenido es [{}]",
        post.get_estado(),
        post.get_contenido()
    );

    post.set_contenido(String::from("Esto es un texto que hemos escrito."));
    post.solicitar_revision();
    println!("Se ha escrito algo y se ha solicitado revisión. El estado del post es [{:?}] y su contenido es [{}]", post.get_estado(), post.get_contenido());

    post.aprobar_revision();
    println!(
        "Se ha aprobado el post. Su estado es [{:?}] y su contenido es [{}]",
        post.get_estado(),
        post.get_contenido()
    );

    println!();
    println!("Trabajando con la versión de varios tipos (un tipo para cada estado)");
    println!("====================================================================");
    let mut post = PostBorrador::new();
    println!("Se ha creado un post en estado `Borrador`. No se puede ver su contenido. Solo se puede editar o solicitar revisión.");
    post.set_contenido(String::from("Esto es un texto que hemos escrito."));
    println!("Se ha editado el contenido del borrador. No se puede ver su contenido. Se puede seguir editando o se puede solicitar revisión.");

    let post = post.solicitar_revision();
    println!("Se ha solicitado revisión y el post está en estado `EnRevision`. No se puede ver ni editar su contenido. Solo se puede aprobar la revisión (o dejar el post para siempre `EnRevision`).");

    let post = post.aprobar_revision();
    println!(
        "Se ha aprobado el post y el post está en estado `Publicado`. No se puede modificar. Pero se puede ver su contenido, que es [{}]",
        post.get_contenido()
    );
}
