package es.susosise.RealizarTareas.Cliente;

public class DoblePrimo implements java.io.Serializable {
    private Integer unPrimo;
    private Integer otroPrimo;
    private Integer producto;

    public DoblePrimo(Integer unPrimo, Integer otroPrimo) {
        this.unPrimo = unPrimo;
        this.otroPrimo = otroPrimo;
        producto = unPrimo * otroPrimo;
    }

    public Integer getPrimo1() {
        return unPrimo;
    }

    public Integer getPrimo2() {
        return otroPrimo;
    }

    public Integer getProductoDeLosDosPrimos() {
        return producto;
    }
}
