namespace WebApplication2
{
    public interface IProductRepository : IRepositoryBase<Product>
    {
        Task<Product?> GetProductByIdAsync(Guid productId);
        Task<IReadOnlyCollection<Product>> GetAllProductsAsync();
        void PostProduct(Product product);
        void UpdateProduct(Product product);
        void DeleteProduct(Product product);
    }
}
