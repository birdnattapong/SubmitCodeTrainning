import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectTicketPage } from './select-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: SelectTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectTicketPageRoutingModule {}
