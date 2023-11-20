using WebApplication2.Repositories;

namespace WebApplication2
{
    internal class UnitOfWork : IUnitOfWork
    {
        private readonly AppDbContext _ctx;

        public UnitOfWork(AppDbContext ctx)
        {
            _ctx = ctx;
        }
        public async Task<int> SaveChangesAsync()
        {
            return await _ctx.SaveChangesAsync();
        }
    }
}
