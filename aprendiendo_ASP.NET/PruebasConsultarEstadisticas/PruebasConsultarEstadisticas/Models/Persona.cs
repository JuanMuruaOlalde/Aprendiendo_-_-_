using System.ComponentModel.DataAnnotations;

namespace PruebasConsultarEstadisticas.Models
{
    public class Persona
    {
        public int Id { get; set; }
        public String nombre { get; set; }
        public String apellidos { get; set; }
        [DataType(DataType.Date)]
        public DateOnly fechaDeNacimiento { get; set; }

    }
}
