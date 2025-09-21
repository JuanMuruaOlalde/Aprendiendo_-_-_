using Microsoft.AspNetCore.Mvc;
using PruebasConsultarEstadisticas.Data;
using System.Collections.Generic;

namespace PruebasConsultarEstadisticas.Controllers
{
    public class EstadisticasController : Controller
    {
        private IEstadisticasRepository repositorio;

        public EstadisticasController(IEstadisticasRepository repositorio)
        {
            this.repositorio = repositorio;
        }

        public async Task<IActionResult> Tabla()
        {
            Dictionary<String, Double> datos = await repositorio.getAllData();
            return View(datos);
        }

        public async Task<IActionResult> Grafico()
        {
            Dictionary<String, Double> datos = await repositorio.getAllData();
            return View(datos);
        }
    }
}
