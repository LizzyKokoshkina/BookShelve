using DB.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;

namespace DB.Interfaces
{
        public interface IBookRepository
        {
        Task<IEnumerable<TResult>> GetAsync<TResult>(Expression<Func<Book, bool>> condition,
            Expression<Func<Book, TResult>> selector, CancellationToken cancellationToken = default);

        Task InsertAsync(Book entity, CancellationToken cancellationToken = default);

        void Delete(Book entity);

        Task SaveAsync(CancellationToken cancellationToken = default);

        }
    }
