namespace WebApplication2.Controllers
{
    public class ProductDtos
    {
        public required string Title { get; set; }
        public required int Price { get; set; }
        public string? Description { get; set; }
        public required string Category { get; set; }
        public string? ImageUrl { get; set; }
    }
}
