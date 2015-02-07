using System.Web;
using System.Web.Http;
using MPhillipsConsultants.Demo.WebApi.App_Start;

namespace MPhillipsConsultants.Demo.WebApi
{
    public class WebApiApplication : HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
    }
}