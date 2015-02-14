using System.Collections.Generic;
using System.Threading.Tasks;
using MPhillipsConsultants.Demo.Model;

namespace MPhillipsConsultants.Demo.Services
{
    public interface IUserService
    {
        IEnumerable<User> GetAsync();
        Task<User> GetByKeyAsync(int id);
        Task<User> InsertAsync(User user);
        Task<User> DeleteAsync(User user);
        Task<User> UpdateAsync(User user);
    }
}