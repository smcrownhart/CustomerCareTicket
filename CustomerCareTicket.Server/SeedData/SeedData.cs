using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using CustomerCareTicket.Server.Areas.Identity.Data;
using CustomerCareTicket.Server.Data;
using CustomerCareTicket.Server.Models;

namespace CustomerCareTicket.Server.SeedData
{
    public class SeedData
    {
        public static async Task EnsurePopulated(IServiceProvider services)
        {
            CustomerCareTicketServerContext context = services.GetService<CustomerCareTicketServerContext>();

            if (context == null)
            {
                throw new NullReferenceException("No Context available");
            }

            if(context.Tickets.Any())
            {
                return;
            }
            else
            {
                UserManager<CustomerCareTicketServerUser> userManager = services.GetService<UserManager<CustomerCareTicketServerUser>>();
                if (userManager == null)
                {
                    throw new NullReferenceException("No User Manager Available.");
                }

                CustomerCareTicketServerUser user = new CustomerCareTicketServerUser
                {
                    UserName = "Test",
                    Email = "test@test.com"
                };

                IdentityResult result = await userManager.CreateAsync(user, "Test123");
                if (result.Succeeded) 
                {
                    context.Tickets.Add(new Ticket
                    {

                        StoreNumber = "0000",
                        CustomerName = "NoName",
                        CustomerPhone = "4560",
                        Called = false,
                        Resolution = "none"
                    });
                    await context.SaveChangesAsync();
                }
                else
                {
                    throw new Exception("Failed to create user");
                }
            }
        }


    }
}
