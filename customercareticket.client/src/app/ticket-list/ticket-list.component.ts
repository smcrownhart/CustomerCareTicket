import { Component, Input } from '@angular/core';
import { CareTicket } from '../care-ticket';
import { TicketsService } from '../tickets.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent {
  @Input() ticket: CareTicket = {
    TicketId: 0,
    StoreNumber: '',
    CustomerName: '',
    CustomerPhone: '',
    Called: false,
    Resolution: ''
  }
  constructor(private data: TicketsService) { }
   
  getTicketById() {
    this.data.getTicketById(this.ticket.TicketId)
  }

  updateTicket() {
    this.data.updateTicket(this.ticket.TicketId, this.ticket)
  }

  onDelete() {
    this.data.deleteTicket(this.ticket.TicketId)
  }
}

  

