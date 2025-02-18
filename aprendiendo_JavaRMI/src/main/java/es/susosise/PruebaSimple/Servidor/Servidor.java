package es.susosise.PruebaSimple.Servidor;

import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.rmi.server.UnicastRemoteObject;

public class Servidor {
    private static int  PUERTODEESCUCHA_PARA_SALUDADOR = 8881;
    private static int  PUERTODEESCUCHA_PARA_CALCULADOR = 8882;

    public static void main( String[] args )
    {
        try {
            ////Si este servidor va a utilizar un registro de servicios que ya este activo en nuestro sistema, usar LocateRegistry.getRegistry
            Registry registroDeServicios = LocateRegistry.getRegistry();
            ////Si este servidor va a crear su propio registro de servicios, usar LocateRegistry.createRegistry
            //Registry registroDeServicios = LocateRegistry.createRegistry(1099);

            SaludosYAgradecimientos_impl saludador = new SaludosYAgradecimientos_impl();
            SaludosYAgradecimientos stubSaludador = (SaludosYAgradecimientos) UnicastRemoteObject.exportObject(saludador, PUERTODEESCUCHA_PARA_SALUDADOR);
            registroDeServicios.bind("SaludosYAgradecimientosVarios", stubSaludador);

            Calculador_impl calculador = new Calculador_impl();
            Calculador stubCalculador = (Calculador) UnicastRemoteObject.exportObject(calculador, PUERTODEESCUCHA_PARA_CALCULADOR);
            registroDeServicios.bind("CalculadorMatematico", stubCalculador);

        } catch (Exception e) {
            System.err.println("Fallo al iniciar el SERVIDOR de saludos y calculos: " + e.toString());
            e.printStackTrace();
        }
    }
    
}
