using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using MPhillipsConsultants.Demo.EntityFramework;
using MPhillipsConsultants.Demo.Model;

namespace MPhillipsConsultants.Demo.Services
{
    public class UserService : IUserService
    {
        private readonly DemoContext _context;

        public UserService(DemoContext context)
        {
            _context = context;
            _context.Configuration.LazyLoadingEnabled = false;
        }

        public async Task<User> Insert(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<User> Delete(User user)
        {
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<IEnumerable<User>> Get()
        {
            return await _context.Users
                .AsNoTracking().ToListAsync();
        }

        public async Task<User> GetByKey(int id)
        {
            return await _context.Users.FindAsync(id);
        }
    }
}