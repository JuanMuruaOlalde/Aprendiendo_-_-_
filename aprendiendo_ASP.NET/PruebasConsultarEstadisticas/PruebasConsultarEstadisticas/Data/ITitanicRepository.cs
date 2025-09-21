using PruebasConsultarEstadisticas.Models;

namespace PruebasConsultarEstadisticas.Data
{
    public interface ITitanicRepository
    {
        public List<TitanicPassenger> getTodosLosPasajeros();
        public TitanicPassenger? getPasajero(string id);
        List<string> getClasesEnQueSePodiaViajar();
    }
}
