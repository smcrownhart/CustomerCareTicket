import { Injectable } from '@angular/core';
import { CareTicket } from './care-ticket';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { TicketListComponent } from './ticket-list/ticket-list.component';
@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  ticket$: BehaviorSubject<CareTicket[]> = new BehaviorSubject<CareTicket[]>([]);
  singleticket$: BehaviorSubject<CareTicket | null> = new BehaviorSubject<CareTicket | null>(null);
  constructor(private http: HttpClient) { }

  getAllTickets(): Observable<CareTicket[]>{
    //this.http.get<CareTicket[]>("/api/Tickets").subscribe(data => {
    //  this.ticket$.next(data);
    return this.http.get<CareTicket[]>("api/Tickets");
    
  }

  getTicketById(id: number) {
    this.http.get<CareTicket>("/api/Tickets/" + id).subscribe(data => {
      this.singleticket$.next(data);
    });
  }

  createTicket(newTicket: CareTicket) {
    this.http.post<CareTicket>("/api/Tickets", newTicket).subscribe(data => {
      let list = this.ticket$.getValue();
      list.push(data);
      this.ticket$.next(list);
    });
  }

  updateTicket(id: number, newCustomer: CareTicket) {
    this.http.put<CareTicket>("", "");
  }

  deleteTicket(id: number) {
    this.http.delete("/api/Tickets/" + id).subscribe(data => {
      console.log("deleting:", id, data);
      this.getAllTickets();
    });
  }


}
