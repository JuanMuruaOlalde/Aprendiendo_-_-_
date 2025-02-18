function ContenidoPrincipalPorDefecto() {
    return (
        <div id="contenido_principal">
            <p>Aquí va el contenido principal.</p>
            <p>
                Ese contenido puede ser <strong>contenido estático</strong>,
                escrito tal cual, como el escrito justo a continuación...
            </p>
            <p>
                O puede ser <strong>contenido dinámico</strong>, como el que
                aparece si se clican los botones sobre gatos, jirafas,... en la
                barra de navegación
            </p>

            <section>
                <h2>Título de la sección</h2>
                <p>Una sección alberga contenido de una misma temática.</p>
                <p>
                    Este contenido puede estructurarse a su vez en artículos...
                </p>

                <article>
                    <h3>Título del artículo</h3>
                    <p>
                        Un artículo alberga un bloque de contenido que es
                        "autosuficiente"; un bloque que podria llevarse "tal
                        cual" a otra parte; un bloque que "tiene sentido en sí
                        mismo".
                    </p>
                    <p>Aquí iria el contenido de este artículo...</p>
                </article>
            </section>
        </div>
    );
}

function ContenidoSecundarioPorDefecto() {
    return (
        <aside id="contenido_secundario">
            <p>
                Aquí va contenido secundario o contenido explicativo del
                contenido principal
            </p>
        </aside>
    );
}

export function ContenidoPorDefecto() {
    return (
        <div id="contenido">
            <ContenidoPrincipalPorDefecto />
            <ContenidoSecundarioPorDefecto />
        </div>
    );
}
