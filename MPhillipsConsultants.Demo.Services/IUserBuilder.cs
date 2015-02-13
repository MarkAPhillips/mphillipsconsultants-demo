using MPhillipsConsultants.Demo.Model;

namespace MPhillipsConsultants.Demo.Services
{
    public interface IUserBuilder
    {
        void Map(User user, User existing);
    }
}