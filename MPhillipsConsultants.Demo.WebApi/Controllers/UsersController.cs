using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.OData;
using System.Web.OData.Query;
using MPhillipsConsultants.Demo.Model;
using MPhillipsConsultants.Demo.Services;

namespace MPhillipsConsultants.Demo.WebApi.Controllers
{
    public class UsersController : ODataController
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [EnableQuery(PageSize = 15, AllowedQueryOptions= AllowedQueryOptions.Count)]
        public  async Task<IEnumerable<User>> Get()
        {
            return  await _userService.Get();
        }

        [EnableQuery]
        public SingleResult<User> Get([FromODataUri] int key)
        {
            IQueryable<User> result = _userService.GetByKey(key).AsQueryable();
            return SingleResult.Create(result);
        }

        public async Task<IHttpActionResult> Post(User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await _userService.Insert(user);
            return Created(user);
        }

        public async Task<IHttpActionResult> Delete([FromODataUri] int key)
        {
            var user = _userService.GetByKey(key).FirstOrDefault();

            if (user == null)
            {
                return NotFound();
            }
            await _userService.Delete(user);
            return Ok(user);
        }
    }
}