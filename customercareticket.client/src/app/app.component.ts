import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CareTicket } from './care-ticket';
import { TicketsService } from './tickets.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
  

  ticketList: CareTicket[] = [];

  tickets: Subject<CareTicket[]> = this.ticket.ticket$

  constructor(private http: HttpClient, private ticket: TicketsService,
    private router: Router) { }

  ngOnInit() {
    this.ticket.getAllTickets();
      //.subscribe((data: CareTicket[]) => {
      //  console.log(data);
      //  this.ticketList = data;
      //})
      }
  title = 'customercareticket.client';
}
