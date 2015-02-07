using MPhillipsConsultants.Demo.EntityFramework;
using Ninject.Modules;

namespace MPhillipsConsultants.Demo.Services.Dependency
{
    public class ServiceModule : NinjectModule
    {
        public override void Load()
        {
            Bind<IUserService>().To<UserService>();
        }
    }
}