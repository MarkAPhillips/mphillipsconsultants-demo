using System.Collections.Generic;
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
        }

        public async Task<User> Insert(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task Delete(User user)
        {
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
        }

        public IEnumerable<User> Get()
        {
            return _context.Users;
        }

        public IEnumerable<User> GetByKey(int id)
        {
            return _context.Users.Where(x => x.Id == id);
        }
    }
}