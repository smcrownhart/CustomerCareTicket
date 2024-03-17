import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketsService } from '../tickets.service';
import { CareTicket } from '../care-ticket';

@Component({
  selector: 'app-ticketform',
  templateUrl: './ticketform.component.html',
  styleUrl: './ticketform.component.css'
})
export class TicketformComponent implements OnInit {

  ticketForm: FormGroup = this.fb.group({
    TicketId: [0],
    StoreNumber: [''],
    CustomerName: [''],
    CustomerPhone: [''],
    Called: [false],
    Resolution: [''],

  })

  constructor(private fb: FormBuilder, private data: TicketsService) { }
  ngOnInit(): void { }

  onSubmit() {
    console.log(this.ticketForm.value);

    let ticket: CareTicket = {
      TicketId: 0,
      StoreNumber: this.ticketForm.get('StoreNumber')?.value,
      CustomerName: this.ticketForm.get('CustomerName')?.value,
      CustomerPhone: this.ticketForm.get('CustomerPhone')?.value,
      Called: this.ticketForm.get('Called')?.value,
      Resolution: this.ticketForm.get('Resolution')?.value,

    }

    this.data.createTicket(ticket)
  }
}
