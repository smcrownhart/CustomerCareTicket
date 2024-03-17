using CustomerCareTicket.Server.Areas.Identity.Data;
using CustomerCareTicket.Server.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CustomerCareTicket.Server.Data;

public class CustomerCareTicketServerContext : IdentityDbContext<CustomerCareTicketServerUser>
{
    public DbSet<Ticket> Tickets { get; set; }
    public CustomerCareTicketServerContext(DbContextOptions<CustomerCareTicketServerContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        // Customize the ASP.NET Identity model and override the defaults if needed.
        // For example, you can rename the ASP.NET Identity table names and more.
        // Add your customizations after calling base.OnModelCreating(builder);
    }

    
}
