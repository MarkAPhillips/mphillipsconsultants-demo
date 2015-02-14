using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MPhillipsConsultants.Demo.EntityFramework;
using MPhillipsConsultants.Demo.Model;

namespace MPhillipsConsultants.Demo.Services
{
    public class UserService : IUserService
    {
        private readonly DemoContext _context;
        private readonly IUserBuilder _userBuilder;

        public UserService(DemoContext context, IUserBuilder userBuilder)
        {
            _context = context;
            _userBuilder = userBuilder;
            _context.Configuration.LazyLoadingEnabled = false;
        }

        public async Task<User> UpdateAsync(User user)
        {
            User existing = await _context.Users.FindAsync(user.Id);
            _userBuilder.Map(user, existing);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<User> InsertAsync(User user)
        {
            user.LastModified = DateTime.UtcNow;
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<User> DeleteAsync(User user)
        {
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public IEnumerable<User> GetAsync()
        {
            return _context.Users.AsNoTracking();
        }

        public async Task<User> GetByKeyAsync(int id)
        {
            return await _context.Users.FindAsync(id);
        }
    }
}