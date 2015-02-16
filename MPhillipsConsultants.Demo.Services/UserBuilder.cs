using System;
using MPhillipsConsultants.Demo.Model;

namespace MPhillipsConsultants.Demo.Services
{
    public sealed class UserBuilder : IUserBuilder
    {
        public void Map(User user, User existing)
        {
            existing.LastModified = DateTime.UtcNow;
            existing.LastName = user.LastName;
            existing.FirstName = user.FirstName;
            existing.IpAddress = user.IpAddress;
            existing.Email = user.Email;
        }
    }
}
