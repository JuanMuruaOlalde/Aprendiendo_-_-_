using System.Collections.Frozen;
using System.Collections.Generic;
using System.Text.Json;

using PruebasConsultarEstadisticas.Models;

namespace PruebasConsultarEstadisticas.Data
{
    public class WeatherRepository
    {
        private readonly List<WeatherMeasurement> datos;

        public WeatherRepository()
        {
            string pathArchivo = "data/weather_temp_pruebas.json";
            // Thanks to https://www.tablab.app/json/sample
            try
            {
                string texto = File.ReadAllText(pathArchivo);
                var options = new JsonSerializerOptions
                {
                    Converters = { new DateOnlyConverter() }
                };
                List<WeatherMeasurement>? datosLeidos = JsonSerializer.Deserialize<List<WeatherMeasurement>>(texto, options);
                if (datosLeidos != null)
                {
                    datos = datosLeidos;
                }
                else
                {
                    System.Diagnostics.Debug.WriteLine($"El archivo {pathArchivo} no tiene datos.");
                    datos = new List<WeatherMeasurement>();
                }
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine($"Problema al leer archivo {pathArchivo}\n{ex.Message}");
                datos = new List<WeatherMeasurement>();
            }
        }

        public List<WeatherMeasurement> getTodosLosDatos()
        {
            return datos;
        }
    }
}
