
function ContenidoPrincipalDeJirafas() {
    return (
        <div id="contenido_principal">
            <h2>El contenido de jirafas</h2>
            <p>Un montón de texto sobre jirafas....,zmxnc,nzcn cbxmvzb ,mn zmvb mzxcbm,zxbc m mcznbv mnjzbxcjvhbjzhxbc vjhzjhxcvb </p>
            <a href="https://es.wikipedia.org/wiki/Giraffa_camelopardalis" target="_blank">https://es.wikipedia.org/wiki/Giraffa_camelopardalis</a>
        </div>
    )
}

function ContenidoSecundarioDeJirafas() {
    return (
        <aside id="contenido_secundario">
            <p>
                <a href="https://commons.wikimedia.org/wiki/File:Giraffa_camelopardalis_angolensis.jpg#/media/Archivo:Giraffa_camelopardalis_angolensis.jpg">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Giraffa_camelopardalis_angolensis.jpg/1200px-Giraffa_camelopardalis_angolensis.jpg" alt="Giraffa camelopardalis angolensis.jpg"/>
                </a>
                <br/>
                De © Hans Hillewaert, 
                <a href="https://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>
                , 
                <a href="https://commons.wikimedia.org/w/index.php?curid=2429667">Enlace</a>
            </p>';
        </aside>
    )
}

export function ContenidoDeJirafas() {
    return (
        <div id="contenido">
            <ContenidoPrincipalDeJirafas/>
            <ContenidoSecundarioDeJirafas/>
        </div>
    )
}