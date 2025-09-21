using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

using PruebasConsultarEstadisticas.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<PruebasConsultarEstadisticasContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("PruebasConsultarEstadisticasContext") ?? throw new InvalidOperationException("Connection string 'PruebasConsultarEstadisticasContext' not found.")));

builder.Services.AddScoped<ITitanicRepository, TitanicRepository>();
builder.Services.AddScoped<IEstadisticasRepository, EstadisticasRepository>();

builder.Services.AddControllersWithViews();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
