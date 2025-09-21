using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PruebasConsultarEstadisticas.Models;

namespace PruebasConsultarEstadisticas.Data
{
    public class PruebasConsultarEstadisticasContext : DbContext
    {
        public PruebasConsultarEstadisticasContext (DbContextOptions<PruebasConsultarEstadisticasContext> options)
            : base(options)
        {
        }

        public DbSet<PruebasConsultarEstadisticas.Models.Persona> Persona { get; set; } = default!;
    }
}
