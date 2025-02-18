package es.susosise.PruebaSimple.Cliente;

import es.susosise.PruebaSimple.Servidor.Calculador;
import es.susosise.PruebaSimple.Servidor.ResultadosDelCalculo;
import es.susosise.PruebaSimple.Servidor.SaludosYAgradecimientos;

import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

public class Cliente {
    private SaludosYAgradecimientos stubSaludador;
    private Calculador stubCalculador;

    public Cliente() {
        try {
            Registry registroDeServicios = LocateRegistry.getRegistry();
            stubSaludador = (SaludosYAgradecimientos) registroDeServicios.lookup("SaludosYAgradecimientosVarios");
            stubCalculador = (Calculador) registroDeServicios.lookup("CalculadorMatematico");
        } catch (Exception e) {
            System.err.println("Fallo al iniciar el CLIENTE: " + e.toString());
            e.printStackTrace();
        }
    }

    public void saludar() throws RemoteException {
        System.out.println(stubSaludador.getSaludo());
    }

    public void agradecerA(String aQuien) throws RemoteException {
        System.out.println(stubSaludador.getAgradecimiento(aQuien));
    }

    public void calcularCon(Double a, Double b) throws RemoteException {
        ResultadosDelCalculo resultados = stubCalculador.calcular(a, b);
        System.out.println("Resultados de calcular con los numeros " + a + " y " + b );
        System.out.println("  La suma es " + resultados.suma);
        System.out.println("  La resta es " + resultados.resta);
        System.out.println("  La multiplicacion es " + resultados.multiplicacion);
        System.out.println("  La division del primero entre el segundo es " + resultados.divisonAB);
        System.out.println("  La division del segundo entre el primero es " + resultados.divisonBA);
        System.out.println("Y eso es todo.");
    }
}
