using System.ComponentModel.DataAnnotations;

namespace TodoApi.Models
{
    public class Todo
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 1, ErrorMessage = "Text length must be between 1 and 100 characters.")]
        public string Text { get; set; } = string.Empty;

        public bool Completed { get; set; }
    }
}
