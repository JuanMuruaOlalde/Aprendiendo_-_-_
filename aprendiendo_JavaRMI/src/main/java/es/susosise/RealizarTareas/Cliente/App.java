package es.susosise.RealizarTareas.Cliente;

import java.rmi.RemoteException;
import java.util.Scanner;

public class App 
{
    public static void main( String[] args )
    {
        // dar permiso a todo es siempre mala idea (aunque para pruebas es más cómodo), 
        // hay que procurar asignar siempre permisos específicos (los mínimos posible)
        System.setProperty("java.security.policy", "permisoGeneralParaTodo.policy");
        //System.setProperty("java.security.policy", "permisosEspecificos.policy");
        if (System.getSecurityManager() == null) {
            System.setSecurityManager(new SecurityManager());
        }

        Cliente cliente = new Cliente();

        try {
            DoblePrimo primos = cliente.getDosPrimos();
            System.out.println("Los dos primos de hoy son: " + primos.getPrimo1() + " y " + primos.getPrimo2());
        } catch (RemoteException e) {
            System.err.println("Fallo al intentar lo de los primos: " + e.toString());
            e.printStackTrace();
        }

        Scanner lectorDeTeclado = new Scanner(System.in);

        try {
            System.out.println();
            System.out.print("Pasando a otra cosa, con cuantos decimales deseas ver PI ?: ");
            int cuantosDecimales = lectorDeTeclado.nextInt();
            lectorDeTeclado.nextLine();
            System.out.println("Aquí lo tienes: " + cliente.getPi(cuantosDecimales));
        } catch (RemoteException e) {
            System.err.println("Fallo al intentar lo de Pi: " + e.toString());
            e.printStackTrace();
        }

        try {
            System.out.println();
            System.out.print("Teclea un texto: ");
            String texto1 = lectorDeTeclado.nextLine();
            System.out.print("Otro texto: ");
            String texto2 = lectorDeTeclado.nextLine();
            System.out.print("Y otro mas: ");
            String texto3 = lectorDeTeclado.nextLine();
            System.out.println("Al unirlos todos resulta: " + cliente.concatenar(texto1, texto2, texto3));
        } catch (RemoteException e) {
            System.err.println("Fallo al intentar lo de los textos: " + e.toString());
            e.printStackTrace();
        }

        lectorDeTeclado.close();
    }
}
