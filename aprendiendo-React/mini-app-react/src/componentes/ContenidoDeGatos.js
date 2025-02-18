function ContenidoPrincipalDeGatos() {
    return (
        <div id="contenido_principal">
            <h2>El contenido de gatos</h2>
            <p>Un montón de texto sobre gatos.... asdkfasjf kas dfkjasd kaslkf aslk flaflaf laksj flkas</p>
            <a href="https://es.wikipedia.org/wiki/Felis_silvestris_catus" target="_blank">https://es.wikipedia.org/wiki/Felis_silvestris_catus</a>
        </div>
    )
}

function ContenidoSecundarioDeGatos() {
    return (
        <aside id="contenido_secundario">
            <p>
                <a href="https://commons.wikimedia.org/wiki/File:Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg#/media/File:Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1200px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg" alt="Orange tabby cat sitting on fallen leaves-Hisashi-01A.jpg"/>
                </a>
                <br/>
                <a href="https://creativecommons.org/licenses/by-sa/2.0" title="Creative Commons Attribution-Share Alike 2.0">
                    CC BY-SA 2.0
                </a>
                , 
                <a href="https://commons.wikimedia.org/w/index.php?curid=8313371">
                    Link
                </a>
            </p>
        </aside>
    )
}

export function ContenidoDeGatos() {
    return (
        <div id="contenido">
            <ContenidoPrincipalDeGatos/>
            <ContenidoSecundarioDeGatos/>
        </div>
    )
}