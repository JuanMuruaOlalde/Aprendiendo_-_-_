function Saludo({ nombre, destino }) {
    return <p>Hola, {nombre}. Está usted en {destino}</p>;
}

function BloqueDeSaludos() {
    return (
        <div>
            <Saludo nombre="Alice" destino="MuyLejos"/>
            <Saludo nombre="Bob" destino="MasLejos"/>
            <Saludo nombre="Eve" destino="EntreUnLejosYOtro"/>
        </div>
    );
}

export default function App() {
    return <BloqueDeSaludos />;
}
