using Microsoft.EntityFrameworkCore;
using WebApplication2.Repositories;

namespace WebApplication2
{
    public class ProductRepository : RepositoryBase<Product>, IProductRepository
    {

        public ProductRepository(AppDbContext appDbContext) : base(appDbContext) { }


        public void DeleteProduct(Product product)
        {
            Delete(product);
        }

        public async Task<IReadOnlyCollection<Product>> GetAllProductsAsync()
        {
            return await FindAll()
                .ToListAsync();
        }

        public async Task<Product?> GetProductByIdAsync(Guid productId)
        {
            return await FindByCondition(x => x.Id == productId)
                .FirstOrDefaultAsync();
        }

        public void PostProduct(Product product)
        {
            Create(product);
        }

        public void UpdateProduct(Product product)
        {
            Update(product);
        }
    }
}
