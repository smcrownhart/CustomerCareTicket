import { Component, Input } from '@angular/core';
import { CareTicket } from '../care-ticket';
import { TicketsService } from '../tickets.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-viewtickets',
  templateUrl: './viewtickets.component.html',
  styleUrl: './viewtickets.component.css'
})
export class ViewticketsComponent {
  @Input() ticket: CareTicket = {
    TicketId: 0,
    StoreNumber: '',
    CustomerName: '',
    CustomerPhone: '',
    Called: false,
    Resolution: ''
  }

  constructor(private data: TicketsService) {
    
  }

  

  
}
