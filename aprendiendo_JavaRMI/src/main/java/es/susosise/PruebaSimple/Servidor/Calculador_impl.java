package es.susosise.PruebaSimple.Servidor;

import java.rmi.RemoteException;

public class Calculador_impl implements Calculador {

    @Override
    public ResultadosDelCalculo calcular(Double a, Double b) throws RemoteException {
        ResultadosDelCalculo resultados = new ResultadosDelCalculo();
        resultados.suma = a + b;
        resultados.resta = a - b;
        resultados.multiplicacion = a * b;
        if (b == 0) {
            resultados.divisonAB = Double.NaN;
        } else {
        resultados.divisonAB = a / b;
        }
        if (a == 0) {
            resultados.divisonBA = Double.NaN;
        } else {
            resultados.divisonBA = b /a;
        }
        return resultados;
    }
    
}
