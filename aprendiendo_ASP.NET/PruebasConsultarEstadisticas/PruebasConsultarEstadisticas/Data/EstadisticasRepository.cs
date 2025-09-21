namespace PruebasConsultarEstadisticas.Data
{
    public class EstadisticasRepository : IEstadisticasRepository
    {
        private Dictionary<String, Double> datos;

        public EstadisticasRepository()
        {
            //TODO pendiente cambiarlo una fuente de datos realmente asíncrona.
            // Esto es solamente algo provisional, para las primeras pruebas.
            datos = new Dictionary<String, Double>() {
                {"Marzo", 35.2},
                {"Abril", 19.2},
                {"Mayo", 28.5}
            };
        }

        public async Task<Dictionary<String, Double>> getAllData()
        {
            return datos;
        }

    }
}
