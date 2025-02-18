package es.susosise.RealizarTareas.Servidor;

import java.rmi.RemoteException;

public class Trabajador_impl implements Trabajador {

    @Override
    public <T> T realizarTarea(TareaRemota<T> tarea) throws RemoteException {
        return tarea.ejecutar();
    }
    
}
