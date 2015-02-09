using System.Collections.Generic;
using System.Threading.Tasks;
using MPhillipsConsultants.Demo.Model;

namespace MPhillipsConsultants.Demo.Services
{
    public interface IUserService
    {
        Task<IEnumerable<User>> Get();
        IEnumerable<User> GetByKey(int id);
        Task<User> Insert(User user);
        Task<User> Delete(User user);
    }
}