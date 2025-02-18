export function LineaDeAlbaran(props) {
    const linea = props.datos;
    return (
        <tr>
            <td>{linea.cantidad}</td>
            <td>{linea.articulo.codigoDeArticulo}</td>
            <td>{linea.articulo.nombreCorto}</td>
        </tr>

    )
}