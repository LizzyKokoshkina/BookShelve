using DB.Context;
using DB.Entities;
using DB.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;

namespace DB.Repositoties
{
    public class BookRepository : IBookRepository
    {
        protected readonly BookContext context;

        protected readonly DbSet<Book> dbSet;

        public BookRepository(BookContext context)
        {
            this.context = context;
            dbSet = context.Set<Book>();
        }

        public Task<IEnumerable<TResult>> GetAsync<TResult>(Expression<Func<Book, bool>> condition,
            Expression<Func<Book, TResult>> selector, CancellationToken cancellationToken = default)
        {
            return Task.FromResult(dbSet.Where(condition).Select(selector).AsEnumerable());
        }

        public async Task InsertAsync(Book entity, CancellationToken cancellationToken = default)
        {
           await dbSet.AddAsync(entity, cancellationToken);
        }

        public void Delete(Book entity)
        {
             dbSet.Remove(entity);
        }

        public async Task SaveAsync(CancellationToken cancellationToken = default)
        {
            try
            {
                await context.SaveChangesAsync(cancellationToken);
            }
            catch (Exception ex)
            {

            }
        }

    }
}





