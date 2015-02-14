using System;
using System.Data.Entity;
using System.IO;
using System.Linq;

namespace MPhillipsConsultants.Demo.EntityFramework
{
    public class DemoContextInitializer : DropCreateDatabaseIfModelChanges<DemoContext>
    {
        protected override void Seed(DemoContext context)
        {
            var baseDirectory = AppDomain.CurrentDomain.BaseDirectory;
            IOrderedEnumerable<string> sqlFiles =
                Directory.GetFiles(baseDirectory, "bin/Seed/*.sql").OrderBy(x => x);
            foreach (var file in sqlFiles)
            {
                var sqlStatement = File.ReadAllText(file);
                context.Database.ExecuteSqlCommand(sqlStatement);
            }
            base.Seed(context);
        }
    }
}