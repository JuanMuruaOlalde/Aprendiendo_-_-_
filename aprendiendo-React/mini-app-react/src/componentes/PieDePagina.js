function EnlaceDeUtilidad({url, descripcion}) {
    return (
        <p><a href={url} target="_blank"> {descripcion} </a></p>
    )
}

export function PieDePaginaConEnlacesDeUtilidad() {
    return(
        <footer>
            <hr />
            <p>Aquí va el contenido que ha de ir al pie de página. Por ejemplo, esta colección de enlaces de utilidad:</p>
            <EnlaceDeUtilidad 
                url="https://react.dev/"  
                descripcion="React Main Page" 
            /> 
            <EnlaceDeUtilidad 
                url="https://react.dev/learn"  
                descripcion="Quick Start - React" 
            /> 
            <EnlaceDeUtilidad 
                url="https://react.dev/learn/passing-props-to-a-component"  
                descripcion="Passing Props to a Component - React" 
            /> 
            <EnlaceDeUtilidad 
                url="https://reactjsexample.com/hello-react-create-a-minimalist-react-app/"  
                descripcion="Hello React - Create a minimalist react app" 
            /> 
            <EnlaceDeUtilidad 
                url="https://create-react-app.dev/docs/getting-started/"  
                descripcion="Getting Started - Create React App" 
            /> 
            <EnlaceDeUtilidad 
                url="https://create-react-app.dev/docs/proxying-api-requests-in-development/"  
                descripcion="Back-End Integration - Proxying API Requests in Development - Create React App" 
            /> 
            <EnlaceDeUtilidad 
                url="https://create-react-app.dev/docs/deployment/"  
                descripcion="Deployment - Create React App" 
            /> 
            <EnlaceDeUtilidad 
                url="https://react.dev/reference/react"  
                descripcion="API reference - React" 
            /> 
            <EnlaceDeUtilidad 
                url="https://react.dev/reference/react/Component"  
                descripcion="Components - Class Component - React" 
            /> 
            <EnlaceDeUtilidad 
                url="https://react.dev/learn/your-first-component#defining-a-component"  
                descripcion="Components - Functional Component - React" 
            /> 
        </footer>
    )
}

