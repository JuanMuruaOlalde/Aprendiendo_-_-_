package es.susosise.PruebaSimple.Cliente;

import java.rmi.RemoteException;
import java.util.Scanner;

public class App 
{
    public static void main( String[] args )
    {
        Cliente cliente = new Cliente();

        try {
            cliente.saludar();
        } catch (RemoteException e) {
            System.err.println("Fallo al intentar saludar: " + e.toString());
            e.printStackTrace();
        }

        Scanner lectorDeTeclado = new Scanner(System.in);
        System.out.println();
        System.out.print("Teclea un numero: ");
        Double unNumero = lectorDeTeclado.nextDouble();
        lectorDeTeclado.nextLine();
        System.out.println();
        System.out.print("Teclea otro numero: ");
        Double otroNumero = lectorDeTeclado.nextDouble();
        lectorDeTeclado.nextLine();
        System.out.println();
        System.out.print("Tu nombre: ");
        String nombre = lectorDeTeclado.nextLine();
        System.out.println();
        lectorDeTeclado.close();
        try {
            cliente.calcularCon(unNumero, otroNumero);
            System.out.println();
            cliente.agradecerA(nombre);
            System.out.println();
        } catch (RemoteException e) {
            System.err.println("Fallo al intentar calcular y agradecer: " + e.toString());
            e.printStackTrace();
        }
    }
}
