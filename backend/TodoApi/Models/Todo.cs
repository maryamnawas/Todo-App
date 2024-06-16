namespace TodoApi.Models
{
    public class Todo
    {
        public int Id { get; set; }
        public string Text { get; set; } = string.Empty; // Provide a default value
        public bool Completed { get; set; }
    }
}
