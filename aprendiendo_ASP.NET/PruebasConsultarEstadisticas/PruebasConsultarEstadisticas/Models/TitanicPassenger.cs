namespace PruebasConsultarEstadisticas.Models
{
    public class TitanicPassenger
    {
        public string PassengerId { get; set; } = string.Empty;
        public string Survived { get; set; } = string.Empty;
        public string Pclass { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Sex { get; set; } = string.Empty;
        public int? Age { get; set; }
        public string SibSp { get; set; } = string.Empty;
        public string Parch { get; set; } = string.Empty;
        public string Ticket { get; set; } = string.Empty;
        public float Fare { get; set; }
        public string? Cabin { get; set; }
        public string Embarked { get; set; } = string.Empty;
    }
}
