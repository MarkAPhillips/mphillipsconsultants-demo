using Ninject.Extensions.Conventions;
using Ninject.Modules;

namespace MPhillipsConsultants.Demo.Services.Dependency
{
    public class ServiceModule : NinjectModule
    {
        public override void Load()
        {
            Kernel.Bind(x => x.FromThisAssembly()
                    .SelectAllClasses()
                    .BindDefaultInterface());
        }
    }
}