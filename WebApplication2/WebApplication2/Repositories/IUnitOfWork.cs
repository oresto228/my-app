namespace WebApplication2
{
    public interface IUnitOfWork
    {
        Task<int> SaveChangesAsync();
    }
}
