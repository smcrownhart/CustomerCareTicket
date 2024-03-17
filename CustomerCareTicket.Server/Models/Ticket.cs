using CustomerCareTicket.Server.Areas.Identity.Data;

namespace CustomerCareTicket.Server.Models
{
    public class Ticket
    {
        public int TicketId { get; set; }
        public string StoreNumber {  get; set; }
        public string CustomerName {  get; set; }
        public string CustomerPhone {  get; set; }
        public bool Called {  get; set; }
        public string Resolution {  get; set; }

        //public CustomerCareTicketServerUser User { get; set; }

    }
}
