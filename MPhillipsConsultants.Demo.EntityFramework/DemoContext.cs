using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using MPhillipsConsultants.Demo.EntityFramework.Configurations;
using MPhillipsConsultants.Demo.Model;

namespace MPhillipsConsultants.Demo.EntityFramework
{
    public class DemoContext : DbContext
    {
        public DemoContext() : base("name=DemoContext")
        {
            Database.SetInitializer(new DemoContextInitializer());
        }

        public IDbSet<User> Users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new UserConfiguration());
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}