package es.susosise.PruebaSimple.Registrador;

import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

public class RegistroDeServicios {
    private static int PUERTO_DE_ESCUCHA = 1099;
    
    public static void main( String[] args )
    {
        try {
            Registry registroDeServicios = LocateRegistry.createRegistry(PUERTO_DE_ESCUCHA);
            while(true){} // El registro ha de quedar activo
        } catch (RemoteException e) {
            System.err.println("Fallo al iniciar el REGISTRO DE SERVICIOS: " + e.toString());
            e.printStackTrace();
        }
    }
}
