pub struct PostBorrador {
    contenido: String,
}
pub struct PostEnRevision {
    contenido: String,
}
pub struct PostPublicado {
    contenido: String,
}

impl PostBorrador {
    pub fn new() -> Self {
        Self {
            contenido: String::from(""),
        }
    }

    pub fn set_contenido(&mut self, contenido: String) {
        self.contenido = contenido;
    }

    pub fn solicitar_revision(&self) -> PostEnRevision {
        PostEnRevision {
            contenido: self.contenido.clone(),
        }
    }
}

impl PostEnRevision {
    pub fn aprobar_revision(&self) -> PostPublicado {
        PostPublicado {
            contenido: self.contenido.clone(),
        }
    }
}

impl PostPublicado {
    pub fn get_contenido(&self) -> String {
        self.contenido.clone()
    }
}

#[cfg(test)]
#[test]
fn en_estado_borrador_se_puede_modificar_el_contenido_del_post() {
    let mut post = PostBorrador::new();
    post.set_contenido(String::from("Esto es un texto que acabo de escribir."));
    assert_eq!(
        post.contenido,
        String::from("Esto es un texto que acabo de escribir.")
    );
}

#[test]
fn en_otro_estado_diferente_de_borrador_no_se_puede_modificar_el_contenido_del_post() {
    // Este test no es necesario porque ningún otro estado que no sea PostBorrador tiene función set_contenido()
    // y, por tanto, solo un PostBorrador puede modificar su contenido.
}

#[test]
fn en_otro_estado_diferente_de_borrador_no_se_puede_cambiar_estado_a_enrevision() {
    // Este test no es necesario porque ningún otro estado que no sea PostBorrador tiene función solicitar_revision()
    // y, por tanto, solo un PostBorrador puede transicionar a un PostEnRevision.
}

#[test]
fn en_otro_estado_diferente_de_enrevision_no_se_puede_cambiar_estado_a_publicado() {
    // Este test no es necesario porque ningún otro estado que no sea PostEnRevision tiene función aprobar_revision()
    // y, por tanto, solo un PostEnRevision puede transicionar a un PostPublicado.
}

#[test]
fn en_estado_publicado_se_puede_ver_el_contenido_del_post() {
    let mut post = PostBorrador::new();
    post.set_contenido(String::from("Esto es un texto que acabo de escribir."));
    let post = post.solicitar_revision();
    let post = post.aprobar_revision();
    assert_eq!(
        post.get_contenido(),
        String::from("Esto es un texto que acabo de escribir.")
    );
}
#[test]
fn en_otro_estado_diferente_de_publicado_no_se_puede_ver_el_contenido_del_post() {
    // Este test no es necesario porque ningún otro estado que no sea PostPublicado tiene función get_contenido()
    // y, por tanto, solo un PostPublicado puede mostrar su contenido.
}
