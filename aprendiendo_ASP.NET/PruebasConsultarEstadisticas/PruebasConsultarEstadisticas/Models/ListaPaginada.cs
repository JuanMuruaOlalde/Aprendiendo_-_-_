using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace PruebasConsultarEstadisticas.Models
{
    public class ListaPaginada<T>
    {
        //Thanks to Sahanna and her's 'Just Pick and Learn' Youtube channel
        //https://www.youtube.com/watch?v=L9VtwtoLvy8&list=PLdHN14J7CHtZD-jyGq9Y97yC0Fvhzampy&index=19


        private readonly List<T> elementos;

        public List<Microsoft.AspNetCore.Mvc.Rendering.SelectListItem> opcionesDeFiltro { get; }
        public string opcionSeleccionada { get; }

        public int cantidadEnCadaPagina { get; }
        public int cantidadDePaginas { get; }
        public int paginaActual { get; }

        public ListaPaginada(List<T> elementos, 
                             List<Microsoft.AspNetCore.Mvc.Rendering.SelectListItem> opcionesDeFiltro, 
                             string opcionSeleccionada, 
                             int cantidadEnCadaPagina, 
                             int paginaAMostrar)
        {
            this.elementos = elementos;

            this.opcionesDeFiltro = opcionesDeFiltro;
            this.opcionSeleccionada = opcionSeleccionada;

            if (cantidadEnCadaPagina > 0)
            {
                this.cantidadEnCadaPagina = cantidadEnCadaPagina;
            }
            else
            {
                this.cantidadEnCadaPagina = 10;
            }

            this.cantidadDePaginas = (int)Math.Ceiling(elementos.Count / (double)this.cantidadEnCadaPagina);

            if (paginaAMostrar > 0)
            {
                this.paginaActual = paginaAMostrar;
            }
            else
            {
                this.paginaActual = 1;
            }
        }

        public List<T> getElementosDeLaPaginaActual()
        {
            return elementos.Skip((paginaActual - 1) * cantidadEnCadaPagina).Take(cantidadEnCadaPagina).ToList();
        }

    }
}
