using kim_shop_API.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace kim_shop_API.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<MenuItem> MenuItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<MenuItem>().HasData(new MenuItem

            {
                Id = 1,
                Name = "steak",
                Description = "good",
                Image = "https://kimimage.blob.core.windows.net/kimfood/anh-nguyen-kcA-c3f_3FE-unsplash.jpg",
                Price = 50.99,
                Category = "Main",
                SpecialTag = ""

            }, new MenuItem
            {
                Id = 2,
                Name = "roll",
                Description = "good11",
                Image = "https://kimimage.blob.core.windows.net/kimfood/anh-nguyen-kcA-c3f_3FE-unsplash.jpg",
                Price = 20.99,
                Category = "Main",
                SpecialTag = ""

            }
            );
        }
    }
}
