using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustomerCareTicket.Server.Models;
using Microsoft.AspNetCore.Identity;

namespace CustomerCareTicket.Server.Areas.Identity.Data;

// Add profile data for application users by adding properties to the CustomerCareTicketServerUser class
public class CustomerCareTicketServerUser : IdentityUser
{
    public virtual ICollection<Ticket> Tickets { get; set; }
}

