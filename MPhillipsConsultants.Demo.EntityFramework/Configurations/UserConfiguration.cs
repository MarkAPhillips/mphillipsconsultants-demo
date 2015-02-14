using System.Data.Entity.ModelConfiguration;
using MPhillipsConsultants.Demo.Model;

namespace MPhillipsConsultants.Demo.EntityFramework.Configurations
{
    public class UserConfiguration : EntityTypeConfiguration<User>
    {
        public UserConfiguration()
        {
            HasKey(p => p.Id);
            Property(p => p.FirstName)
                .HasMaxLength(50)
                .IsOptional();

            Property(p => p.LastName)
                .HasMaxLength(50)
                .IsOptional();

            Property(p => p.Email)
                .HasMaxLength(50)
                .IsOptional();

            Property(p => p.Country)
                .HasMaxLength(50)
                .IsOptional();

            Property(p => p.IpAddress)
                .HasMaxLength(50)
                .IsOptional();

            Property(p => p.RowVersion)
                .IsRowVersion();

            Property(p => p.LastModified)
                .IsRequired();
        }
    }
}