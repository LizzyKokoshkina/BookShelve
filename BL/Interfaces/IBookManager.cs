using DB.Entities;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace BL.Interfaces
{
    public interface IBookManager
    {
        Task<IEnumerable<Book>> GetBooksAsync(CancellationToken cancellationToken = default);

        Task PostBookAsync(Book record, CancellationToken cancellationToken = default);

        Task DeleteBookAsync(int id, CancellationToken cancellationToken = default);
    }
}



