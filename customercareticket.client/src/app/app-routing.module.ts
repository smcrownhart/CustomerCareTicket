import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketformComponent } from './ticketform/ticketform.component';
import { AppComponent } from './app.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { ViewticketsComponent } from './viewtickets/viewtickets.component';

const routes: Routes = [

  { path: 'ticket/add', component: TicketformComponent, pathMatch: 'full' },
  { path: 'ticket/list', component: ViewticketsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
