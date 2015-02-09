using System;
using System.Collections.Generic;
using System.Data.Entity;
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

        public async Task<User> Update(User user)
        {
            user.LastModified = DateTime.UtcNow;
            _context.Entry(user).State = EntityState.Modified; 
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<User> Insert(User user)
        {
            user.LastModified = DateTime.UtcNow;
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

        public  IEnumerable<User> Get()
        {
            return _context.Users.AsNoTracking();
        }

        public async Task<User> GetByKey(int id)
        {
            return await _context.Users.FindAsync(id);
        }
    }
}