using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using BL.Interfaces;
using DB.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    [Route("[controller]"), AllowAnonymous]
    public class BookController : Controller
    {
        private readonly IBookManager bookManager;

        public BookController(IBookManager bookManager)
        {
            this.bookManager = bookManager;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync(CancellationToken cancellationToken = default)
        {
            return Ok(await bookManager.GetBooksAsync(cancellationToken));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Book book, CancellationToken cancellationToken = default)
        {
            await bookManager.PostBookAsync(book, cancellationToken);
            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteAsync([FromQuery] int id, CancellationToken cancellationToken = default)
        {
            await bookManager.DeleteBookAsync(id, cancellationToken);
            return Ok();
        }
    }
}
