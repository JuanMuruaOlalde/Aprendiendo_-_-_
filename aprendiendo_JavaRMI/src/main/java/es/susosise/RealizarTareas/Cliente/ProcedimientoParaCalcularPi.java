package es.susosise.RealizarTareas.Cliente;

import java.math.BigDecimal;

import es.susosise.RealizarTareas.Servidor.TareaRemota;

public class ProcedimientoParaCalcularPi implements TareaRemota<BigDecimal> , java.io.Serializable {
    private int cuantosDecimales;

    public ProcedimientoParaCalcularPi(int cuantosDecimales) {
        this.cuantosDecimales = cuantosDecimales;
    }

    @Override
    public BigDecimal ejecutar() {
        BigDecimal resultado;
        //TODO _pendiente_ de obtener resultado con los decimales requeridos
        //por ahora soltamos algo...
        resultado = new BigDecimal(3.14);
        return resultado;
    }
    
}
