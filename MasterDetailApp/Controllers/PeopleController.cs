using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web.Http;

namespace MasterDetailApp.Controllers
{
    [RoutePrefix("api/People")]
    public class PeopleController : ApiController
    {
        private static List<Person> Store { get; } = Enumerable.Range(1, 10000)
            .Select(x => new Person
            {
                Id = x,
                Name = $"okazuki{x}",
                Age = 30 + x % 30,
            })
            .ToList();

        public IHttpActionResult Get()
        {
            return Ok(Store);
        }

        public IHttpActionResult Get(int pageSize, int skip)
        {
            return Ok(Store.Skip(skip).Take(pageSize));
        }

        public IHttpActionResult Get(int id)
        {
            return Ok(Store.Single(x => x.Id == id));
        }

        [Route("Count")]
        public IHttpActionResult GetCount()
        {
            return Ok(Store.Count);
        }

        public IHttpActionResult Post([FromBody]Person p)
        {
            if (!this.ModelState.IsValid)
            {
                return BadRequest();
            }

            p.Id = Store.Max(x => x.Id) + 1;
            Store.Add(p);
            return Ok(p);
        }

        public IHttpActionResult Put(int id, [FromBody]Person p)
        {
            if (!this.ModelState.IsValid)
            {
                return BadRequest();
            }

            var target = Store.Single(x => x.Id == id);
            target.Name = p.Name;
            target.Age = p.Age;

            return Ok();
        }

        public IHttpActionResult Delete(int id)
        {
            var target = Store.SingleOrDefault(x => x.Id == id);
            if (target == null)
            {
                return NotFound();
            }
            Store.Remove(target);
            return Ok();
        }
    }

    public class Person
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int Age { get; set; }
    }
}
