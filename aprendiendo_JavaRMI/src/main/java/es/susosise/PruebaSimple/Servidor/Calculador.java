package es.susosise.PruebaSimple.Servidor;

import java.rmi.Remote;
import java.rmi.RemoteException;

public interface Calculador extends Remote {
    public ResultadosDelCalculo calcular(Double a, Double b) throws RemoteException;
}
