using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.OData.Builder;
using System.Web.OData.Extensions;
using MPhillipsConsultants.Demo.Model;

namespace MPhillipsConsultants.Demo.WebApi.App_Start
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //Todo: Move to configuration setting for different environments
            var cors = new EnableCorsAttribute("http://localhost:70", "*", "*");
            config.EnableCors(cors); ;

            ODataModelBuilder builder = new ODataConventionModelBuilder();
            builder.EntitySet<User>("users");
            config.MapODataServiceRoute("ODataRoute", null, builder.GetEdmModel());
        }
    }
}