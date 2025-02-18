package es.susosise.RealizarTareas.Cliente;

import es.susosise.RealizarTareas.Servidor.TareaRemota;

public class ProcedimientoParaUnirTextos implements TareaRemota<String> , java.io.Serializable {
    private String texto01;
    private String texto02;
    private String texto03;

    public ProcedimientoParaUnirTextos(String unTexto, String otroTexto, String yOtroTextoMas) {
        this.texto01 = unTexto;
        this.texto02 = otroTexto;
        this.texto03 = yOtroTextoMas;
    }

    @Override
    public String ejecutar() {
        return "[" + texto03 + "] [" + texto02 + "] [" + texto01 + "]";
    }


}
