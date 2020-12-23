using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;
using System.Text.RegularExpressions;
using WebApi.ApiErrors;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    public class TechnologyController : ControllerBase
    {
        public TechnologyController(AppDb db)
        {
            Db = db;
        }

        // GET api/technology
        [HttpGet("{page_num}/{rec_per_page}")]
        public async Task<IActionResult> GetLatest(int page_num, int rec_per_page)
        {
            await Db.Connection.OpenAsync();
            var query = new TechnologyQuery(Db);
            try
            {
                var result = await query.GetTechnologiesAsync(page_num, rec_per_page);
                return new OkObjectResult(result);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // GET api/detail/5
        [HttpGet("detail/{id}")]
        public async Task<IActionResult> GetOne(int id)
        {
            await Db.Connection.OpenAsync();
            var query = new TechnologyQuery(Db);
            var result = await query.FindOneAsync(id);
            if (result is null)
            {
                return NotFound(new NotFoundError("The Technology was not found"));
            }
            return new OkObjectResult(result);
        }

        // POST api/technology
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Technology body)
        {
            await Db.Connection.OpenAsync();
            body.Db = Db;
            try
            {
                await body.InsertAsync();
                return new OkObjectResult(body);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // PUT api/technology/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Technology body)
        {
            await Db.Connection.OpenAsync();
            var query = new TechnologyQuery(Db);
            var result = await query.FindOneAsync(id);
            if (result is null)
                return NotFound(new NotFoundError("The Technology was not found"));
            result.Name = body.Name;
            result.Description = body.Description;
            await result.UpdateAsync();
            return new OkObjectResult(result);
        }

        // DELETE api/technology/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOne(int id)
        {
            await Db.Connection.OpenAsync();
            var query = new TechnologyQuery(Db);
            var result = await query.FindOneAsync(id);
            if (result is null)
                return new NotFoundResult();
            await result.DeleteAsync();
            return new OkResult();
        }


        [HttpGet("search/{text}")]
        public async Task<IActionResult> SearchResults(string text)
        {
            try
            {
                await Db.Connection.OpenAsync();
                var query = new TechnologyQuery(Db);
                text = Regex.Replace(text, @"[^0-9a-zA-Z]+", " ");
                var result = await query.getSearchResults(text + "*");
                return new OkObjectResult(result);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public AppDb Db { get; }
    }
}