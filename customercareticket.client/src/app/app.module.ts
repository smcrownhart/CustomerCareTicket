import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketsService } from './tickets.service';
import { TicketformComponent } from './ticketform/ticketform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewticketsComponent } from './viewtickets/viewtickets.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketformComponent,
    ViewticketsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [TicketsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
