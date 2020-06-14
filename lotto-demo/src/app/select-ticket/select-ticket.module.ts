import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectTicketPageRoutingModule } from './select-ticket-routing.module';

import { SelectTicketPage } from './select-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectTicketPageRoutingModule
  ],
  declarations: [SelectTicketPage]
})
export class SelectTicketPageModule {}
