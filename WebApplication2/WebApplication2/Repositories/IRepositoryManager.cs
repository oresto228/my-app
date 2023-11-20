using WebApplication2.Repositories;

namespace WebApplication2
{
    public interface IRepositoryManager
    {
        IProductRepository ProductRepository { get; }
        IUnitOfWork UnitOfWork { get; }
    }
}
