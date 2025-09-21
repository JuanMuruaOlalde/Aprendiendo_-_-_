using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using PruebasConsultarEstadisticas.Data;
using PruebasConsultarEstadisticas.Models;

namespace PruebasConsultarEstadisticas.Controllers
{
    public class TitanicController : Controller
    {
        private readonly ITitanicRepository fuenteDeDatos;

        //TODO Cada vez que se navega, se crea un nuevo controller
        //     ¿Cómo evitar que se esté recuperando la lista cada vez?
        public TitanicController(ITitanicRepository fuenteDeDatos)
        {
            this.fuenteDeDatos = fuenteDeDatos;
        }



        public IActionResult Index(string? filtroDeClase, int cantidadEnCadaPagina, int paginaAMostrar)
        {
            const string  VALOR_QUE_INDICA_TODAS = "0";
            List<SelectListItem> opcionesParaFiltrarPorClase = new List<SelectListItem>();
            opcionesParaFiltrarPorClase.Add(new SelectListItem { Text = "TODAS", Value = VALOR_QUE_INDICA_TODAS });
            foreach (string clase in fuenteDeDatos.getClasesEnQueSePodiaViajar())
            {
                opcionesParaFiltrarPorClase.Add(new SelectListItem { Text = clase, Value = clase });
            }

            if (string.IsNullOrEmpty(filtroDeClase))
            {
                filtroDeClase = VALOR_QUE_INDICA_TODAS;
            }

            List<TitanicPassenger> pasajeros = fuenteDeDatos.getTodosLosPasajeros();

            if(!filtroDeClase.Equals(VALOR_QUE_INDICA_TODAS))
            {
                pasajeros = pasajeros.Where(x => x.Pclass == filtroDeClase).ToList();
            }

            return View(new ListaPaginada<TitanicPassenger>(pasajeros, opcionesParaFiltrarPorClase, filtroDeClase, cantidadEnCadaPagina, paginaAMostrar));
        }

        public IActionResult Details(string? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pasajero = fuenteDeDatos.getPasajero(id);
            if (pasajero == null)
            {
                return NotFound();
            }

            return View(pasajero);
        }

    }
}
