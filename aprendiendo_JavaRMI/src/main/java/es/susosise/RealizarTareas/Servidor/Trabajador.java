package es.susosise.RealizarTareas.Servidor;

import java.rmi.Remote;
import java.rmi.RemoteException;

public interface Trabajador extends Remote {
    <T> T realizarTarea(TareaRemota<T> tarea) throws RemoteException;
}
