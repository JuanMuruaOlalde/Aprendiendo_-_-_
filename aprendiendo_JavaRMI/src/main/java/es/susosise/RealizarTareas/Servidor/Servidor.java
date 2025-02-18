package es.susosise.RealizarTareas.Servidor;

import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.rmi.server.UnicastRemoteObject;

public class Servidor {
    private static String NOMBRE_DEL_SERVICIO = "EjecutadorDeTareas";
    private static int  PUERTO_DE_ESCUCHA = 8881;

    public static void main( String[] args )
    {
        // dar permiso a todo es siempre mala idea (aunque para pruebas es más cómodo), 
        // hay que procurar asignar siempre permisos específicos (los mínimos posible)
        System.setProperty("java.security.policy", "permisoGeneralParaTodo.policy");
        //System.setProperty("java.security.policy", "permisosEspecificos.policy");
        if (System.getSecurityManager() == null) {
            System.setSecurityManager(new SecurityManager());
        }

        // la carga dinamica de clases derivadas de las interfaces puede ser muy práctica en algunas ocasiones
        // pero es un agujero de seguridad por donde se puede inyectar código malicioso
        System.setProperty("java.rmi.server.codebase", "http://localhost:8080/");
        // tambien es una mala idea desde el punto de vista de la seguridad poner useCodebaseOnly=False
        // pero para pruebas es más cómodo
        System.setProperty("java.rmi.server.useCodebaseOnly", "False");

        try {
            //// Si este servidor va a utilizar un registro de servicios que ya este activo en nuestro sistema, usar LocateRegistry.getRegistry
            Registry registroDeServicios = LocateRegistry.getRegistry();
            //// (es más seguro si indicamos expresamente cual es el registro a utilizar)
            //Registry registroDeServicios = LocateRegistry.getRegistry("192.168.251.36", "1099");
            //// Si no hay un registro activo, este mismo servidor puede crear su propio registro de servicios,
            //// usando LocateRegistry.createRegistry   (es más cómodo para pruebas)
            //Registry registroDeServicios = LocateRegistry.createRegistry(1099);

            Trabajador_impl trabajador = new Trabajador_impl();
            Trabajador stubTrabajador = (Trabajador) UnicastRemoteObject.exportObject(trabajador, PUERTO_DE_ESCUCHA);
            registroDeServicios.rebind(NOMBRE_DEL_SERVICIO, stubTrabajador);
            System.out.println("El servidor para ejecutar tareas está activo.");
        } catch (Exception e) {
            System.err.println("Fallo al iniciar un SERVIDOR para ejecutar tareas: " + e.toString());
            e.printStackTrace();
        }
    }
    
}
