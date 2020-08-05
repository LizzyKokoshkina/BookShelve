using DB.Entities;
using Microsoft.EntityFrameworkCore;

namespace DB.Context
{
    public class BookContext:DbContext
    {
        public BookContext(DbContextOptions<BookContext> options) : base(options)
        {
        }
        public DbSet<Book> Books { get; set; }
    }
}
