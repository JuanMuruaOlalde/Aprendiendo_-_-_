#[derive(Debug, PartialEq, Clone)]
pub enum Estado {
    Borrador,
    EnRevision,
    Publicado,
}

pub struct Post {
    estado: Estado,
    contenido: String,
}

impl Post {
    pub fn new() -> Self {
        Self {
            estado: Estado::Borrador,
            contenido: String::from(""),
        }
    }
    pub fn get_estado(&self) -> Estado {
        self.estado.clone()
    }
    pub fn set_contenido(&mut self, contenido: String) {
        match self.estado {
            Estado::Borrador => self.contenido = contenido,
            _ => (),
        }
    }
    pub fn get_contenido(&self) -> String {
        match self.estado {
            Estado::Publicado => self.contenido.clone(),
            _ => String::from(""),
        }
    }
    pub fn solicitar_revision(&mut self) {
        match self.estado {
            Estado::Borrador => self.estado = Estado::EnRevision,
            _ => (),
        }
    }
    pub fn aprobar_revision(&mut self) {
        match self.estado {
            Estado::EnRevision => self.estado = Estado::Publicado,
            _ => (),
        }
    }
}

#[cfg(test)]
#[test]
fn en_estado_borrador_se_puede_modificar_el_contenido_del_post() {
    let mut post = Post::new();
    assert_eq!(post.get_estado(), Estado::Borrador);
    post.set_contenido(String::from("Esto es un texto que acabo de escribir."));
    assert_eq!(
        post.contenido,
        String::from("Esto es un texto que acabo de escribir.")
    );
}

#[test]
fn en_otro_estado_diferente_de_borrador_no_se_puede_modificar_el_contenido_del_post() {
    let mut post = Post::new();
    post.set_contenido(String::from("Esto es un texto que acabo de escribir."));
    post.solicitar_revision();
    assert_ne!(post.get_estado(), Estado::Borrador);
    post.set_contenido(String::from(
        "Esto es un texto cambiado después de solicitar revisión.",
    ));
    assert_eq!(
        post.contenido,
        String::from("Esto es un texto que acabo de escribir.")
    );
    post.aprobar_revision();
    assert_ne!(post.get_estado(), Estado::Borrador);
    post.set_contenido(String::from(
        "Esto es un texto cambiado después de aprobar revisión.",
    ));
    assert_eq!(
        post.contenido,
        String::from("Esto es un texto que acabo de escribir.")
    );
}

#[test]
fn en_otro_estado_diferente_de_borrador_no_se_puede_cambiar_estado_a_enrevision() {
    let mut post = Post::new();
    post.solicitar_revision();
    post.aprobar_revision();
    assert_ne!(post.get_estado(), Estado::Borrador);
    post.solicitar_revision();
    assert_ne!(post.get_estado(), Estado::EnRevision);
}

#[test]
fn en_otro_estado_diferente_de_enrevision_no_se_puede_cambiar_estado_a_publicado() {
    let mut post = Post::new();
    assert_ne!(post.get_estado(), Estado::EnRevision);
    post.aprobar_revision();
    assert_ne!(post.get_estado(), Estado::Publicado);
}

#[test]
fn en_estado_publicado_se_puede_ver_el_contenido_del_post() {
    let mut post = Post::new();
    post.set_contenido(String::from("Esto es un texto que acabo de escribir."));
    post.solicitar_revision();
    post.aprobar_revision();
    assert_eq!(post.get_estado(), Estado::Publicado);
    assert_eq!(
        post.get_contenido(),
        String::from("Esto es un texto que acabo de escribir.")
    );
}
#[test]
fn en_otro_estado_diferente_de_publicado_no_se_puede_ver_el_contenido_del_post() {
    let mut post = Post::new();
    post.set_contenido(String::from("Esto es un texto que acabo de escribir."));
    assert_ne!(post.get_estado(), Estado::Publicado);
    assert_eq!(post.get_contenido(), String::from(""));
    post.solicitar_revision();
    assert_ne!(post.get_estado(), Estado::Publicado);
    assert_eq!(post.get_contenido(), String::from(""));
}
