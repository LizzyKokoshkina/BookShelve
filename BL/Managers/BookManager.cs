using BL.Interfaces;
using DB.Entities;
using DB.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace BL.Managers
{
    public class BookManager : IBookManager
    {
        private readonly IBookRepository bookRepository;
        public BookManager(IBookRepository bookRepository)
        {
            this.bookRepository = bookRepository;
        }

        public async Task<IEnumerable<Book>> GetBooksAsync(CancellationToken cancellationToken = default)
        {
            return await bookRepository.GetAsync(i => true, i => i, cancellationToken);
        }

        public async Task PostBookAsync(Book record, CancellationToken cancellationToken = default)
        {
            await bookRepository.InsertAsync(record, cancellationToken);
            await bookRepository.SaveAsync(cancellationToken);
        }

        public async Task DeleteBookAsync(int id, CancellationToken cancellationToken = default)
        {
            var book = (await bookRepository.GetAsync(i => i.Id == id, i => i, cancellationToken)).FirstOrDefault();
            if (book == null)
            {
                return;
            }
            bookRepository.Delete(book);
            await bookRepository.SaveAsync(cancellationToken);
        }
    }
}



