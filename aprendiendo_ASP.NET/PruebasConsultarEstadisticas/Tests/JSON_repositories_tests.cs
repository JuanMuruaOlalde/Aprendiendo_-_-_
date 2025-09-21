using PruebasConsultarEstadisticas.Data;
using PruebasConsultarEstadisticas.Models;

namespace Tests
{
    public class JSON_repositories_tests
    {

        [Fact]
        public void losPasajerosDelTitanicSeLeenDesdeSuArchivo()
        {
            TitanicRepository repositorio = new TitanicRepository();
            List<TitanicPassenger> pasajeros = repositorio.getTodosLosPasajeros();
            Assert.True(pasajeros.Count > 0);
        }

        [Fact]
        public void lasMedidasMetereologicasSeLeenDesdeSuArchivo()
        {
            WeatherRepository repositorio = new WeatherRepository();
            List<WeatherMeasurement> medidas = repositorio.getTodosLosDatos();
            Assert.True(medidas.Count > 0);
        }

    }
}