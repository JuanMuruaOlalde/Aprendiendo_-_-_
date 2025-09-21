using System.Collections.Frozen;
using System.Collections.Generic;
using System.Text.Json;

using PruebasConsultarEstadisticas.Models;

namespace PruebasConsultarEstadisticas.Data
{
    public class TitanicRepository : ITitanicRepository
    {
        private readonly List<TitanicPassenger> datos;

        public TitanicRepository()
        {
            string pathArchivo = "data/titanic_passengers.json";
            // Thanks to https://www.tablab.app/json/sample
            try
            {
                string texto = File.ReadAllText(pathArchivo);
                List<TitanicPassenger>? datosLeidos = JsonSerializer.Deserialize<List<TitanicPassenger>>(texto);
                if (datosLeidos != null) {
                    datos = datosLeidos;
                }
                else
                {
                    System.Diagnostics.Debug.WriteLine($"El archivo {pathArchivo} no tiene datos.");
                    datos = new List<TitanicPassenger>();
                }
            } 
            catch(Exception ex) 
            {
                System.Diagnostics.Debug.WriteLine($"Problema al leer archivo {pathArchivo}\n{ex.Message}");
                datos = new List<TitanicPassenger>();
            }
        }

        public List<TitanicPassenger> getTodosLosPasajeros()
        {
            return datos;
        }

        public TitanicPassenger? getPasajero(string id)
        {
            return datos.Find(x => x.PassengerId == id);
        }

        public List<string> getClasesEnQueSePodiaViajar()
        {
            return datos.Select(x => x.Pclass).Distinct().ToList();
        }

    }
}
