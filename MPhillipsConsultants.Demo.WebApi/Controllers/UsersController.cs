using System.Linq;
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

        [EnableQuery(PageSize = 15, AllowedQueryOptions= AllowedQueryOptions.All)]
        public IQueryable<User> Get()
        {
            return  _userService.GetAsync().AsQueryable();
        }

        [EnableQuery]
        public async Task<User> Get([FromODataUri] int key)
        {
            return await _userService.GetByKeyAsync(key);
        }

        public async Task<IHttpActionResult> Put(User user, [FromODataUri] int key)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            user.Id = key;
            await _userService.UpdateAsync(user);
            return Ok(user);
        }

        public async Task<IHttpActionResult> Post(User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await _userService.InsertAsync(user);
            return Created(user);
        }

        public async Task<IHttpActionResult> Delete([FromODataUri] int key)
        {
            var user = await _userService.GetByKeyAsync(key);
            if (user == null)
            {
                return NotFound();
            }
            await _userService.DeleteAsync(user);
            return Ok(user);
        }
    }
}