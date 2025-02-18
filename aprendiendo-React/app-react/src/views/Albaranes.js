import { CabeceraDeAlbaran } from '../components/CabeceraDeAlbaran';

export function Albaranes(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>numero de albarán</th>
                    <th>cliente</th>
                    <th>entregar en</th>
                </tr>
            </thead>
            <tbody>
                {props.albaranes.map( (albaran) => (
                    <CabeceraDeAlbaran key={albaran.numeroDeAlbaran} datos={albaran}/>
                    )
                )}
            </tbody>
        </table>
    )


}