using DB.Enums;
using System;

namespace DB.Entities
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public BookType Type { get; set; }
        public DateTime? Year { get; set; }
        public int? PagesAmount { get; set; }

    }
}
