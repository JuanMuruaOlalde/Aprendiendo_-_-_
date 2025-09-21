namespace PruebasConsultarEstadisticas.Data
{
    public interface IEstadisticasRepository
    {
        public Task<Dictionary<String, Double>> getAllData();
    }
}
