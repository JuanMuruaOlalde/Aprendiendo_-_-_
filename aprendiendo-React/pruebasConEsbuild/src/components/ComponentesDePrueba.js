//Los componentes React no son más que funciones que devuelven JSX

export function Saludo({ nombre, apellido }) {
    // Los dos parámetros recibidos es lo que se denominan "propiedades" ("props")
    return (
        <>
            <p>Buenos dias, {nombre}.</p>
            <p> Nos alegramos de que se apellide {apellido}.</p>
        </>
    );
}
