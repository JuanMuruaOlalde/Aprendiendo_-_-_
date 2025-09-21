using System.ComponentModel.DataAnnotations;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace PruebasConsultarEstadisticas.Models
{

    public class WeatherMeasurement
    {
        public string Station { get; set; }
        [DataType(DataType.Date)]
        public DateOnly Date { get; set; }
        public string[] Remarks { get; set; }
        public Measurements Measurements { get; set; }
    }

    public class Measurements
    {
        public float MinTemp { get; set; }
        public float MaxTemp { get; set; }
        public float Rainfall { get; set; }
        public float Evaporation { get; set; }
        public string Sunshine { get; set; }
        public string WindGustDir { get; set; }
        public string WindGustSpeed { get; set; }
        public string WindDir9am { get; set; }
        public string WindDir3pm { get; set; }
        public string WindSpeed9am { get; set; }
        public string WindSpeed3pm { get; set; }
        public string Humidity9am { get; set; }
        public string Humidity3pm { get; set; }
        public float Pressure9am { get; set; }
        public float Pressure3pm { get; set; }
        public string Cloud9am { get; set; }
        public string Cloud3pm { get; set; }
        public float Temp9am { get; set; }
        public float Temp3pm { get; set; }
        public string RainToday { get; set; }
        public float RISK_MM { get; set; }
        public string RainTomorrow { get; set; }
    }


    public class DateOnlyConverter : JsonConverter<DateOnly>
    {
        private const string DateFormat = "yyyy-MM-dd";

        public override DateOnly Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            return DateOnly.ParseExact(reader.GetString(), DateFormat);
        }

        public override void Write(Utf8JsonWriter writer, DateOnly value, JsonSerializerOptions options)
        {
            writer.WriteStringValue(value.ToString(DateFormat));
        }
    }
}
