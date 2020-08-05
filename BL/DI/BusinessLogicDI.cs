using BL.Interfaces;
using BL.Managers;
using Microsoft.Extensions.DependencyInjection;

namespace BL.DI
{
    public static class BusinessLogicDI
    {
        public static void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<IBookManager, BookManager>();
        }
    }
}
