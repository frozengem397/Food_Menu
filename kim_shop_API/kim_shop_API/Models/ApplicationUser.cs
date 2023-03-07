using Microsoft.AspNetCore.Identity;

namespace kim_shop_API.Models
{
    public class ApplicationUser :IdentityUser
    {
        public string Name { get; set; }
    }
}
