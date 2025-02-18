package es.susosise.PruebaSimple.Servidor;

import java.rmi.Remote;
import java.rmi.RemoteException;

public interface SaludosYAgradecimientos extends Remote {
    String getSaludo() throws RemoteException;
    String getAgradecimiento(String aQuienAgradecer) throws RemoteException;
}
