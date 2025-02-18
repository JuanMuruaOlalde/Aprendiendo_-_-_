package es.susosise.RealizarTareas.Cliente;

import es.susosise.RealizarTareas.Servidor.TareaRemota;

public class ProcedimientoParaObtenerPrimos implements TareaRemota<DoblePrimo> , java.io.Serializable {

    @Override
    public DoblePrimo ejecutar() {
        Integer unPrimo = buscarUnPrimoMuyGrande("A");
        Integer otroPrimo = buscarUnPrimoMuyGrande("Z");
        return new DoblePrimo(unPrimo, otroPrimo);
    }

    private Integer buscarUnPrimoMuyGrande(String indicacion) {
        // Hay pocos algoritmos efectivos para buscar primos muy grandes.
        // Y casi todos requieren mucho esfuerzo de programacion.

        // Como esto es una prueba de RMI y su objeto no es el tema de los primos,
        // vamos a hacer algo trivialmente simple:
        if(indicacion == "A") {
            return 3;
        } else {
            return 7;
        }
    }

    
}
