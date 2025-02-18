import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";
import App from "./App";

window.React = React;

const root = ReactDOM.createRoot(document.getElementById("contenedor-raiz"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
